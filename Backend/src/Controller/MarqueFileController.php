<?php

namespace App\Controller;


use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MarqueFileController extends AbstractController
{
    #[Route('/marque/file', name: 'app_marque_file')]
    public function index(): Response
    {
        // $dataclean = ["ok"];


        echo "bonjour";

        /*
         * Sous categorie et Filtre
        */

        return $this->render('reference/index.html.twig', [
            'controller_name' => 'ReferenceController',
        ]);    
    }
}
