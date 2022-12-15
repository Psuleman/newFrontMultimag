<?php

namespace App\Controller;

use App\Repository\ProduitsRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RemoveController extends AbstractController
{
    #[Route('/remove', name: 'app_remove')]
    public function index(ProduitsRepository $produitsRepository, EntityManagerInterface $em ): Response
    {
        $findproduits = $produitsRepository->findAll();
        $date = new DateTime('2022-09-01');

        foreach ($findproduits as $key => $value) {
            # code...
            if($value->getDateArrivee() < $date){
                $em->remove($value);
                $em->flush();
            }
        }
        
        return $this->render('remove/index.html.twig', [
            'controller_name' => 'RemoveController',
        ]);
    }
}
