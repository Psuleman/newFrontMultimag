<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MarqueFileController extends AbstractController
{
    #[Route('/marque/file', name: 'app_marque_file')]
    public function index(): Response
    {
        $dataclean = [];

        /*
         * Sous categorie et Filtre
        */

        return $this->render('marque_file/index.html.twig', [
            'data' => $dataclean,
        ]);
    }
}
