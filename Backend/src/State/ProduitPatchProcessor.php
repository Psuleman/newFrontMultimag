<?php

namespace App\State;

use App\Entity\Pays;
use App\Entity\Tarifs;
use App\Entity\Matieres;
use App\Entity\Variants;
use App\Entity\TailleRef;
use App\Entity\MatiereProduit;
use App\Entity\GrilleTailleRef;
use ApiPlatform\Metadata\Operation;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\CategorieRef;
use App\Entity\FiltreRef;
use App\Entity\MarqueRef;
use App\Entity\SousCategorieRef;

class ProduitPatchProcessor implements ProcessorInterface
{
    private $_entityManager;
    private $_matieresRepository;
    private $_marqueRepository;
    private $_matiereProduitRepository;
    private $_variantRepository;
    private $_tailleRefRepository;
    private $_grilleTailleRefRepository;
    private $_tarifsRepository;
    private $_paysRepository;
    private $_filtreRepository;
    private $_sousCategorieRepository;
    private $_categorieRepository;
        
    public function __construct(EntityManagerInterface $entityManager) 
    {
        $this->_entityManager = $entityManager;
        $this->_variantRepository = $this->_entityManager->getRepository(Variants::class);
        $this->_tailleRefRepository = $this->_entityManager->getRepository(TailleRef::class);
        $this->_grilleTailleRefRepository = $this->_entityManager->getRepository(GrilleTailleRef::class);
        $this->_matieresRepository = $this->_entityManager->getRepository(Matieres::class);
        $this->_matiereProduitRepository = $this->_entityManager->getRepository(MatiereProduit::class);
        $this->_tarifsRepository = $this->_entityManager->getRepository(Tarifs::class);
        $this->_paysRepository = $this->_entityManager->getRepository(Pays::class);
        $this->_marqueRepository = $this->_entityManager->getRepository(MarqueRef::class);
        $this->_filtreRepository = $this->_entityManager->getRepository(FiltreRef::class);
        $this->_sousCategorieRepository = $this->_entityManager->getRepository(SousCategorieRef::class);
        $this->_categorieRepository = $this->_entityManager->getRepository(CategorieRef::class);

    }	

    public function process($data, Operation $operation, array $uriVariables = ["matiereProduits"], array $context = [])
    {
        /**
         * Date ref
         */
        $data->setDateRef(new \DateTime("now"));

        /**
         * marque
         */
        if($data->getMarqueUpdate()){
            $findMarque = $this->_marqueRepository->findOneBy([
                "marque" => $data->getMarqueUpdate()
            ]);

            if(!$findMarque){
                $findMarque = (new MarqueRef())->setMarque("test");
                $this->_entityManager->persist($findMarque);
            }
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
         * MatiereProduits
         */
        //oldProduit
        if($data->getMatieres()){
            foreach ($data->getMatiereProduits() as $key => $value) {
                # code...
                $data->removeMatiereProduit($value);
            }
            for($i=0; $i<count($data->getMatieres()); $i++)
            {
                $matiereProduit = (new MatiereProduit())->setProduit($data);
                foreach ($data->getMatieres()[$i] as $key => $value) {
                    # code...
                    if($key=="pourcentageMatiere"){
                        $matiereProduit->setPourcentageMatiere($value);
                    }
                    if($key == "matieres")
                    {
                        $matiere = (new Matieres())
                        ->setMatiere($value);
                        $matierefind = $this->_matieresRepository->findOneBy([
                            "matiere" => $matiere->getMatiere()
                        ]);
                        if($matierefind){
                            $matiere = $matierefind;
                        }
                        $matiereProduit->setMatiere($matiere);
                    }
                }
                $data->addMatiereProduit($matiereProduit);

            }            
        }


        /**
         * Variants
         */
        if($data->getVariantProduits()){
            $variants = $data->getVariants();
            foreach ($variants as $key => $value) {
                # code...
                foreach ($data->getVariantProduits() as $cleItemProduit => $variantItemProduit) {
                    # code...
                    $isVariant = false;
                    $tailleRefItem = "";
                    foreach ($variantItemProduit as $cle => $valeur) {
                        # code...
                        if($cle == "taille_fnr" && $valeur == $value->getTailleFnr()){
                            $isVariant = true;
                        }
                        if($isVariant && $cle == "taille_ref"){
                            foreach ($valeur as $cleTailleRef => $valeurTailleRef) {
                                # code...
                                if($cleTailleRef == "taille_ref"){
                                    $tailleRefItem = $valeurTailleRef;
                                }
                            }
                        }

                    }

                    if($isVariant){
                        $grilleTailleRef = new GrilleTailleRef(["grilleTailleRef" => $data->getGrilleTailleRef()]);
                        $findGrilleTailleRef = $this->_grilleTailleRefRepository->findOneBy(
                            ["grilleTailleRef" => $grilleTailleRef->getGrilleTailleRef()]
                        );

                        if($findGrilleTailleRef){
                            $grilleTailleRef = $findGrilleTailleRef;
                        }
                        $tailleRef = (new TailleRef())
                        ->setTailleRef($tailleRefItem)
                        ->setStockId($grilleTailleRef->getGrilleTailleRef().'_'.$tailleRefItem)
                        ->setStockCode($value->getTailleFnr())
                        ->setGrilleTailleRef($grilleTailleRef)
                        ;
                        $findTailleRef = $this->_tailleRefRepository->findOneBy(
                            ["taille_ref" => $tailleRef->getTailleRef()]
                        );
                        if($findTailleRef){
                            $tailleRef = $findTailleRef;
                        } 
                        $value->setTailleRef($tailleRef);

                        if($data->getReferencer() == true)
                            $value->setStock9(1);
                        else
                            $value->setStock9(0);

                        $this->_entityManager->persist($value);
                    }

                }

            }            
        }

        /**
         * Tarifs
         */
        if($data->getTarifsProduits()){
            $paysitem0 = new Pays(["pays"=>"France"]);
            $findPays = $this->_paysRepository->findOneBy(["pays"=>$paysitem0->getPays()]);
            if($findPays){
                $paysitem0 = $findPays;
            }
            $newTarifs = $data->getTarifsProduits()[0];
            $oldTarifs = (new Tarifs())
            ->setProduit($data)
            ->addPay($paysitem0)
            ;

            if($data->getTarifs() && $data->getTarifs()[0]){
                $oldTarifs = $data->getTarifs()[0];
            }
            $prix_vente = 0;
            $remise = 0;

            foreach ($newTarifs as $key => $value) {
                # code...
                if($key == "prix_vente"){
                    $prix_vente = $value;
                }
                if($key = "remise"){
                    $remise = $value;
                }
            }
            $oldTarifs->setPrixVente($prix_vente);
            $oldTarifs->setRemise($remise);
            
            $this->_entityManager->persist($oldTarifs);
        }




















        $this->_entityManager->persist($data);
        $this->_entityManager->flush();
        return $data;
    }
}
