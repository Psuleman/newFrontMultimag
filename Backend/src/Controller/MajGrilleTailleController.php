<?php

namespace App\Controller;

use App\Repository\ProduitsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MajGrilleTailleController extends AbstractController
{
    #[Route('/maj/grille/taille', name: 'app_maj_grille_taille')]
    public function index(ProduitsRepository $produitsRepository): Response
    {

        return $this->render('maj_grille_taille/index.html.twig', [
            'controller_name' => 'MajGrilleTailleController',
        ]);
    }
}
