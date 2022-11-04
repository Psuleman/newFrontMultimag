<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use App\Repository\FiltreRefRepository;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\CategorieRef;
use App\Entity\FiltreRef;
use App\Entity\SousCategorieRef;

class ProduitPatchProcesseur implements ProcessorInterface
{
    private $_filtreRepository;
    private $_sousCategorieRepository;
    private $_categorieRepository;

    
    public function __construct(EntityManagerInterface $entityManager) 
    {
        $this->_entityManager = $entityManager;
        $this->_filtreRepository = $this->_entityManager->getRepository(FiltreRef::class);
        $this->_sousCategorieRepository = $this->_entityManager->getRepository(SousCategorieRef::class);
        $this->_categorieRepository = $this->_entityManager->getRepository(CategorieRef::class);
    }	

    public function process($data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        // Handle the state
        /**
         * Taille / variants
         * Tarif
         * matiere
         * tags_ref
         */
        $findFiltre = $this->_filtreRepository->find($data->getFiltre());
        if($findFiltre){
            $data->setFiltre($findFiltre);
        }
        else{
            $findSousCategorie = $this->_sousCategorieRepository->find($data->getFiltre()->getSousCategorieRef());
            if($findSousCategorie){
                $data->getFiltre()->setSousCategorieRef($findSousCategorie);
            }
            else{
                $findCategorie = $this->_categorieRepository->find($data->getFiltre()->getSousCategorieRef());
                if($findCategorie){
                    $data->getFiltre()->getSousCategorieRef()->setCategorieRef($findCategorie);
                }
            }
        }
        return $findFiltre->getSousCategorieRef();
    }
}