<?php

namespace App\Controller;

use App\Entity\Produits;
use App\Entity\Taches;
use App\Entity\User;
use App\Repository\ProduitsRepository;
use App\Repository\TachesRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AddTachesController extends AbstractController
{
    #[Route('/add/taches', name: 'app_add_taches')]
    public function index(EntityManagerInterface $em, ProduitsRepository $produitsRepository): Response
    {
        // $findTache = $produitsRepository->addTaches();

        // print_r($findTache);

        $findList = $em->getRepository(Produits::class)->findBy([
            "referencer" => 1
        ]);

        $findUser = $em->getRepository(User::class)->findOneBy([
            "email" => "benedicte@leclaireur.com"
        ]);

        if($findList && $findUser){
            $i=0;
            foreach ($findList as $key => $value) {
                # code...
                $dateRef = $value->getDateRef();
                $dateFinAnnee = new DateTime("2022-12-31");

                if($dateRef > $dateFinAnnee){
                    $tache = (new Taches)
                    ->setProduit($value)
                    ->setUser($findUser)
                    ->setDateModif($value->getDateRef())
                    ->setMotif("référencement");

                    $findTaches = $em->getRepository(Taches::class)->findBy([
                        "date_modif" => $tache->getDateModif()
                    ]);
                    if(!$findTaches){
                        $em->persist($tache);
                        $em->flush();                        
                    }

                }
            }

            echo $i;
            
        }

        return $this->render('add_taches/index.html.twig', [
            'controller_name' => 'AddTachesController',
        ]);
    }
}
