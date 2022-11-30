<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CreationDataController extends AbstractController
{    
    public function getData()
    {
            $filename='fichier_csv/HOMME.csv';
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
        foreach ($data as $key => $value) {
            // if($value[0] != "attribute_id")
            //     $dataclean[] =  $value[0];
          
            if(strlen($value[4])>0 && strlen($value[3])>0){
                $dataclean[] = ["categorie_ref"=>trim($value[2]), "categorie_ref_en"=>trim($value[3])];
            }
        }

        $dataclean =[
            ["categorie_ref" => "Accessoires", "categorie_ref_en" => "Accessories"],
            ["categorie_ref" => "Bijoux & Montres", "categorie_ref_en" => "Jewelry & Watches"],
            ["categorie_ref" => "Chaussures", "categorie_ref_en" => "Shoes"],
            ["categorie_ref" => "Sacs", "categorie_ref_en" => "Bags"],
            ["categorie_ref" => "Vêtements", "categorie_ref_en" => "Clothing"],
            ["categorie_ref" => "Accessoires", "categorie_ref_en" => "Accessories"],
            ["categorie_ref" => "Bijoux & Montres", "categorie_ref_en" => "Jewelry & Watches"],
            ["categorie_ref" => "Chaussures", "categorie_ref_en" => "Shoes"],
            ["categorie_ref" => "Sacs", "categorie_ref_en" => "Bags"],
            ["categorie_ref" => "Vêtements", "categorie_ref_en" => "Clothing"],
            ["categorie_ref" => "Art", "categorie_ref_en" => "Art"],
            ["categorie_ref" => "Arts de la table", "categorie_ref_en" => "Dining"],
            ["categorie_ref" => "Bougies & Diffuseurs", "categorie_ref_en" => "Candles & Diffusers"],
            ["categorie_ref" => "Décoration", "categorie_ref_en" => "Decoration"],
            ["categorie_ref" => "Luminaires", "categorie_ref_en" => "Lighting"],
            ["categorie_ref" => "Meubles", "categorie_ref_en" => "Furnitures"],
            ["categorie_ref" => "Accessoires", "categorie_ref_en" => "Accessories"],
            ["categorie_ref" => "Bijoux & Montres", "categorie_ref_en" => "Jewelry & Watches"],
            ["categorie_ref" => "Chaussures", "categorie_ref_en" => "Shoes"],
            ["categorie_ref" => "Sacs", "categorie_ref_en" => "Bags"],
            ["categorie_ref" => "Vêtements", "categorie_ref_en" => "Clothing"],
            ["categorie_ref" => "Accessoires", "categorie_ref_en" => "Accessories"],
            ["categorie_ref" => "Bijoux & Montres", "categorie_ref_en" => "Jewelry & Watches"],
            ["categorie_ref" => "Chaussures", "categorie_ref_en" => "Shoes"],
            ["categorie_ref" => "Sacs", "categorie_ref_en" => "Bags"],
            ["categorie_ref" => "Vêtements", "categorie_ref_en" => "Clothing"],
            ];


        sort($dataclean);
        $dataclean = array_map('unserialize', array_unique(array_map('serialize', $dataclean)));


        //print_r($dataclean);

        echo count($dataclean);

        file_put_contents('categorieRef.txt', '$categorieRef =[');
    
        //On récupère le contenu du fichier
        $texte = file_get_contents('categorieRef.txt');

        foreach ($dataclean as $key => $value) {
            # code...
            if($value){
                $texte .= "\n[\"categorie_ref\" => \"". $value["categorie_ref"]."\", \"categorie_ref_en\" => \"".$value["categorie_ref_en"]."\"],";
            }
        }
        
        //On ajoute notre nouveau texte à l'ancien
        $texte .= "\n];"; 
        //On écrit tout le texte dans notre fichier
        file_put_contents('categorieRef.txt', $texte); 




















        return $this->render('createfile/index.html.twig', [
            'controller_name' => 'CreatefileController',
            'data' => $dataclean

        ]);
    }
}
