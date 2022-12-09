<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CreationDataController extends AbstractController
{    
    public function getData()
    {
            $filename='fichier_csv/Grilles_de_taille.csv';
             $delimiter=',';
             echo $filename;
            if(file_exists($filename) || !is_readable($filename))
            {

                $header = NULL;
                $data = array();
                $marques = array();
                if (($handle = fopen($filename, 'r')) !== FALSE)
                {
                    while (($row = fgetcsv($handle, 1000, $delimiter)) !== FALSE)
                    {
                            $data[] = $row;

                        //

                    }
                    fclose($handle);
                }            
            }

            return $data;
    }  
    #[Route('/creation/data', name: 'app_creation_data')]
    public function index(): Response
    {
        $data = $this->getData();
        $dataclean = [];
        $grilleTaille = [];
        $item = 0;

        foreach ($data as $value) {
            # code...
            $grilleTaille[] = $value[0];
        }

        sort($grilleTaille);
        $grilleTaille = array_map('unserialize', array_unique(array_map('serialize', $grilleTaille)));
  
        $item = 0;
        foreach ($grilleTaille as $key => $value) {
            # code...
            $dataclean[$item]['grilleTaille'] = $value;
            $item++;
        }

        foreach ($data as $key => $value) {
            # code...
            for($j=0; $j<count($dataclean); $j++){
                if($value[0] == $dataclean[$j]['grilleTaille']){
                    $dataclean[$j]['taille'][] = [
                        'taille' => $value[1],
                        'stock_code' => $value[3]
                    ];
                }
            }
        }
        print_r($dataclean);
        // foreach ($data as $key => $value) {
        //     # code...
        //     for($j=0; $j<count($grilleTaille); $j++){
        //         if($value[0] == $grilleTaille[$j]){
        //             $dataclean[$j]["Taille"] = [
        //                 "taille"=> $value[1],
        //                 "stockCode" => $value[3]
        //             ];
        //         }
        //     }
        // }

        sort($dataclean);
        $dataclean = array_map('unserialize', array_unique(array_map('serialize', $dataclean)));


        //print_r($dataclean);

        // echo count($dataclean);

        file_put_contents('GrilleTaille.txt', 'export const GrilleTaille =[');
    
        //On récupère le contenu du fichier
        $texte = file_get_contents('GrilleTaille.txt');

        foreach ($dataclean as $value) {
            # code...
            if($value){
                $texte .= "
                {
                    grilleTaille: \"". $value['grilleTaille'] ."\",
                    tailles: [";

                foreach ($value["taille"] as $key => $valeur) {
                    # code...
                    $texte .="{ tailles : \"".$valeur['taille']."\", stock_code : \"".$valeur['stock_code']."\" },";
                }


                $texte .= "]
                },";
            }
        }

        // foreach ($dataclean as $key => $value) {
        //     # code...
        //     if($value){
        //         $texte .= "\n[\"categorie_ref\" => \"". $value["categorie_ref"]."\", \"categorie_ref_en\" => \"".$value["categorie_ref_en"]."\"],";
        //     }
        // }
        
        //On ajoute notre nouveau texte à l'ancien
        $texte .= "\n];"; 
        //On écrit tout le texte dans notre fichier
        file_put_contents('GrilleTaille.txt', $texte); 




















        return $this->render('createfile/index.html.twig', [
            'controller_name' => 'CreatefileController',
            'data' => $data

        ]);
    }
}
