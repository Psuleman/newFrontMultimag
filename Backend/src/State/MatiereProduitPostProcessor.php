<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Matiere;
use App\Entity\Produits;
use App\Entity\TestMatiereProduit;
use Doctrine\ORM\EntityManagerInterface;

class MatiereProduitPostProcessor implements ProcessorInterface
{
    private $_entityManager;
    
    public function __construct(EntityManagerInterface $entityManager) 
    {
        $this->_entityManager = $entityManager;
    }  

    public function process($data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        // Handle the state
        // $produit = $this->_entityManager->getRepository(Produits::class)->findOneBy(["sku" => $data->getProduit()->getSku()]);
        // $matiere = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere" => $data->getMatiere()->getMatiere()]);

        // if($produit)
        //     $data->setProduit($produit);

        // if($matiere)
        //     $data->setMatiere($matiere);
                
        return $data;
    }
}
