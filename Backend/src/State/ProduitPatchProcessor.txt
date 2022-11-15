<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use App\Repository\FiltreRefRepository;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\CategorieRef;
use App\Entity\FiltreRef;
use App\Entity\MarqueRef;
use App\Entity\Matiere;
use App\Entity\MatiereProduit;
use App\Entity\SousCategorieRef;

class ProduitPatchProcessor implements ProcessorInterface
{
    private $_filtreRepository;
    private $_sousCategorieRepository;
    private $_categorieRepository;
    private $_marqueRepository;
    private $_matiereRepository;
    private $_matiereProduitRepository;
    private $_entityManager;

    
    public function __construct(EntityManagerInterface $entityManager) 
    {
        $this->_entityManager = $entityManager;
        $this->_filtreRepository = $this->_entityManager->getRepository(FiltreRef::class);
        $this->_sousCategorieRepository = $this->_entityManager->getRepository(SousCategorieRef::class);
        $this->_categorieRepository = $this->_entityManager->getRepository(CategorieRef::class);
        $this->_marqueRepository = $this->_entityManager->getRepository(MarqueRef::class);
        $this->_matiereRepository = $this->_entityManager->getRepository(Matiere::class);
        $this->_matiereProduitRepository = $this->_entityManager->getRepository(MatiereProduit::class);
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

        /**
         * marque
         */
        if($data->getMarque()){
            $findMarque = $this->_marqueRepository->findOneBy([
                "marque" => $data->getMarque()->getMarque()
            ]);

            // if(!$findMarque){
            //     $findMarque = $data->getMarque();
            //     $this->_entityManager->persist($findMarque);
            // }
            $data->setMarque($findMarque);            
        }


         /**
          * Catégorie, sous catégorie, filtre
          */
        if($data->getFiltre()){

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
        }

        /**
         * Matiere
         * Rechercher l'id de matiere
         */
        // if($data->getMatiereProduits()){
        //     $matiereProduit = $data->getMatiereProduits();
        //     $oldMatiere = $matiereProduit;
        //     if(count($matiereProduit)>0){
        //         $i=0;
        //         foreach ($matiereProduit as $key => $value) {
        //             if($value->getMatiere())
        //             {
        //                 /**
        //                  * Pour chaque collection de matière 
        //                  * vérifier si matière existe déja
        //                  */
        //                 # code...
        //                 $findMatiere = $this->_matiereRepository->findOneBy([
        //                     "matiere"=>$value->getMatiere()->getMatiere()
        //                 ]);
        //                 if($findMatiere){
        //                     $matiereProduit[$i]->setMatiere($findMatiere);
        //                 }                        
        //             }

        //             $i++;
        //         }

                /**
                 * supprimer les ancien matière
                 */
                //$data->setMatieres([]);
                // foreach ($oldMatiere as $key => $value) {
                //     $data->removeMatiereProduit($value);
                // }
                // /**
                //  * mettre à jours les matières
                //  */
                // foreach ($matiereProduit as $key => $value) {
                //     $data->addMatiereProduit($value);
        //         // }
        //     }   
        // }
        

         /**
          * Tarifs
          */

        /**
         * Matière
         */
        // $this->_entityManager->persist($data);
        // $this->_entityManager->flush();

            return $data->getMatieres();
    }
}
