<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ClassificationGoogleController extends AbstractController
{
    public function getData()
    {
            $filename='fichier_csv/google.txt';
             $delimiter='-';
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


    #[Route('/classification/google', name: 'app_classification_google')]
    public function index(): Response
    {
        $data = $this->getData();
        $dataclean = [];

        foreach ($data as $key => $value) {
            # code...

        }

        print_r($data);

        file_put_contents('ClassificationGoogle.txt', 'export const GoogleCode =[');

        //On récupère le contenu du fichier
        $texte = file_get_contents('ClassificationGoogle.txt');


        foreach ($data as $key => $value) {
            # code...
            $texte .= "
            {
                code : ".trim($value[0]).",
                categorie : \"".trim($value[1])."\"
            },
            ";
            
        }

        //On ajoute notre nouveau texte à l'ancien
        $texte .= "\n];"; 
        //On écrit tout le texte dans notre fichier
        file_put_contents('ClassificationGoogle.txt', $texte); 



        return $this->render('classification_google/index.html.twig', [
            'controller_name' => 'CreatefileController',
        ]);

        // return $this->render('createfile/index.html.twig', [
        //     'controller_name' => 'CreatefileController',
        //     //'data' => $data

        // ]);
    }
}
