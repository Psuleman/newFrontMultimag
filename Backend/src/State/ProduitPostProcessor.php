<?php

namespace App\State;

use App\Entity\Pays;
use App\Entity\Tarifs;
use App\Entity\Produits;
use App\Entity\Variants;
use App\Entity\FiltreRef;
use App\Entity\MarqueRef;
use App\Entity\CategorieRef;
use App\Entity\SousCategorieRef;
use ApiPlatform\Metadata\Operation;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\State\ProcessorInterface;

class ProduitPostProcessor implements ProcessorInterface
{
    private $_entityManager;
    private $_grilleTailleFnr;

    public function majuscule($mot)
    {
            $mot = str_replace(["à", "â"], "a", $mot);
            $mot = str_replace(["è", "é", "ê"], "e", $mot);
            $mot = str_replace(["ï", "î", "ì"], "i", $mot);
            $mot = str_replace(["ù", "û"], "i", $mot);
            $mot = str_replace(["ô"], "o", $mot);        

            return strtoupper($mot);
    }
    public function minuscule($mot)
    {
        if(strlen($mot)>0){
            $mot = strtolower($mot);
            $mot[0] = strtoupper($mot[0]);            
        }


        return trim($mot);	
    }
    public function extraireString($mot, $debut, $nombredeCaractère){
        $result = "";

        for($i=$debut; $i<$nombredeCaractère; $i++){
            $result .= $mot[$i];
        }
        return $result;
        
    }

    public function __construct(EntityManagerInterface $entityManager) 
    {
        $this->_entityManager = $entityManager;
        $this->newProduct = true;
        /**
         * Grille taille fnr
         */
        $this->_grilleTailleFnr = [
            [
                "grilleTaille" => "A",
                "tailles" => ["34", "36", "38", "40", "42", "44", "46", "48"]
            ],
            [
                "grilleTaille" => "a",
                "tailles" => ["50", "51", "52", "53", "54", "55", "56", "57"]
            ],
            [
                "grilleTaille" => "B",
                "tailles" => ["XS", "S", "M", "L", "XL", "XX", "XXS", "XXX"]
            ],
            [
                "grilleTaille" => "b",
                "tailles" => ["58"]
            ],
            [
                "grilleTaille" => "C",
                "tailles" => ["45", "5", "55", "6", "65", "7", "75", "8"]
            ],
            [
                "grilleTaille" => "c",
                "tailles" => ["4", "5", "6", "7", "8", "9", "10", "11"]
            ],
            [
                "grilleTaille" => "a",
                "tailles" => ["34", "36", "38", "40", "42", "44", "46", "48"]
            ],
            [
                "grilleTaille" => "d",
                "tailles" => []
            ],
            [
                "grilleTaille" => "D",
                "tailles" => ["7", "75", "8", "85", "9", "95", "10", "105"]
            ],
            [
                "grilleTaille" => "e",
                "tailles" => ["85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"]
            ],
            [
                "grilleTaille" => "E",
                "tailles" => ["70", "75", "80", "85", "90", "95", "00", "05"]
            ],
            [
                "grilleTaille" => "f",
                "tailles" => ["95A", "95B", "95C"]
            ],
            [
                "grilleTaille" => "F",
                "tailles" => ["40", "42", "44", "46", "48", "50", "52", "54"]
            ],
            [
                "grilleTaille" => "g",
                "tailles" => []
            ],
            [
                "grilleTaille" => "G",
                "tailles" => ["TU", "0"]
            ],
            [
                "grilleTaille" => "h",
                "tailles" => ["0", "1", "2", "3", "4", "5", "6", "7"]
            ],
            [
                "grilleTaille" => "H",
                "tailles" => ["1", "2", "3", "4", "5", "6", "35", "355"]
            ],
            [
                "grilleTaille" => "i",
                "tailles" => ["00", "0", "1", "2", "3", "4", "5", "6"]
            ],
            [
                "grilleTaille" => "I",
                "tailles" => ["6", "7", "8", "9", "10", "11", "12"]
            ],
            [
                "grilleTaille" => "j",
                "tailles" => ["225", "23", "235", "24", "245", "25", "255", "26"]
            ],
            [
                "grilleTaille" => "J",
                "tailles" => ["56", "58", "15", "155", "16", "165", "17", "175"]
            ],
            [
                "grilleTaille" => "k",
                "tailles" => ["265", "27", "275", "28", "285", "29", "295", "30"]
            ],
            [
                "grilleTaille" => "K",
                "tailles" => ["37", "38", "39", "40", "41", "42", "43", "44"]
            ],
            [
                "grilleTaille" => "l",
                "tailles" => ["44", "445", "45", "455", "46", "465", "47", "475"]
            ],
            [
                "grilleTaille" => "L",
                "tailles" => ["39", "40", "41", "42", "43", "44", "45", "46"]
            ],
            [
                "grilleTaille" => "m",
                "tailles" => ["38", "385", "39", "395", "40", "405", "41", "415"]
            ],
            [
                "grilleTaille" => "M",
                "tailles" => ["40", "405", "41", "415", "42", "425", "43", "435"]
            ],
            [
                "grilleTaille" => "n",
                "tailles" => ["3M", "6M", "9M", "12M", "18M", "2A", "3A", "4A"]
            ],
            [
                "grilleTaille" => "N",
                "tailles" => ["2", "4", "6", "8", "10", "12", "14", "16"]
            ],
            [
                "grilleTaille" => "o",
                "tailles" => ["2A", "4A", "6A", "8A", "10A", "12A"]
            ],
            [
                "grilleTaille" => "O",
                "tailles" => ["2", "25", "3", "35", "4", "45", "5", "55"]
            ],
            [
                "grilleTaille" => "p",
                "tailles" => ["40", "41", "42", "43", "44", "45", "46", "47"]
            ],
            [
                "grilleTaille" => "P",
                "tailles" => ["24", "25", "26", "27", "28", "29", "30", "31"]
            ],    
            [
                "grilleTaille" => "q",
                "tailles" => ["48", "49", "50", "51", "52", "53", "54", "55"]
            ],
            [
                "grilleTaille" => "Q",
                "tailles" => ["32", "33", "34", "35", "36", "37", "38", "39"]
            ],
            [
                "grilleTaille" => "r",
                "tailles" => ["56", "57", "58", "59", "60", "61", "62", "63"]
            ],
            [
                "grilleTaille" => "R",
                "tailles" => ["44", "445", "45", "455", "46", "465"]
            ],
            [
                "grilleTaille" => "s",
                "tailles" => ["64", "65", "66", "67", "68", "69", "70", "71"]
            ],
            [
                "grilleTaille" => "S",
                "tailles" => ["16", "17", "18", "19", "20", "21", "22", "23"]
            ],
            [
                "grilleTaille" => "t",
                "tailles" => []
            ],
            [
                "grilleTaille" => "T",
                "tailles" => ["49", "52", "55", "57", "59", "61", "63", "65"]
            ],
            [
                "grilleTaille" => "u",
                "tailles" => ["34", "345", "35", "355", "36", "365", "37", "375"]
            ],
            [
                "grilleTaille" => "U",
                "tailles" => ["36", "365", "37", "375", "38", "385", "39", "395"]
            ],
            [
                "grilleTaille" => "v",
                "tailles" => ["11", "115", "12", "125", "13", "135", "14", "145"]
            ],
            [
                "grilleTaille" => "V",
                "tailles" => ["11", "115", "12", "125"]
            ],
            [
                "grilleTaille" => "w",
                "tailles" => ["58", "60", "62", "64", "66", "68", "70", "72"]
            ],
            [
                "grilleTaille" => "W",
                "tailles" => ["42", "44", "46", "48", "50", "52", "54", "56"]
            ],
            [
                "grilleTaille" => "x",
                "tailles" => []
            ],
            [
                "grilleTaille" => "X",
                "tailles" => ["9", "10", "11", "12", "13", "14", "15", "16"]
            ],
            [
                "grilleTaille" => "y",
                "tailles" => []
            ],
            [
                "grilleTaille" => "Y",
                "tailles" => ["55", "56", "57", "58", "59", "60", "61", "62"]
            ],
            [
                "grilleTaille" => "z",
                "tailles" => []
            ],
            [
                "grilleTaille" => "Z",
                "tailles" => ["55", "60", "65", "70", "75", "30", "32", "34"]
            ],
        ] ;
        
        
    }	
    
    public function process($data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        // Handle the state
        /**
         * saison, referenceCouleur, univers + Univers EN, picture, lien, pays
         * variants : sku, stock -> OK
         * stockage : taille_fnr -> OK
         * tarifs : pays par défaut France, prixVente -> OK
         * 
         */

        /**
         * Vérification si sku existe
        * si oui : enregistrer sa variants + stock
        * si non : enregistrer tout
        */
        $this->_entityManager->persist($data);
        $nom_fournisseur = trim($data->getNomFournisseur());
        $sku = intval($data->getSku());
        
        $findProduit = $this->_entityManager->getRepository(Produits::class)->findOneBy([
        "sku" => $sku,
        "date_arrivee" => $data->getDateArrivee(),
        "reference_fournisseur" => $data->getReferenceFournisseur(),
        "code_fournisseur" => $data->getCodeFournisseur(),
        "nom_fournisseur" => $nom_fournisseur,
        ]);

        if(!$findProduit){
            /**
             * Produits n'existe pas dans la base de données
             */
            //Nouveau produit
            // $data->setNewProduit(true); A REMETTRE
            $data->setNewProduit(false);
            $data->setReferencer(false);
            $data->setNewListAttente(false);

            //sous categorie
            $sous_categorie = $this->minuscule($data->getSousCategorieFnr());
            $data->setSousCategorieFnr($sous_categorie);
            //tag
            $data->setTag($this->minuscule($data->getTag()));

            //marque
            $marque = $this->minuscule($data->getNomFournisseur());
            $marque = strtolower($marque);  

            $tab = explode(" ", $marque);
            $marqueUpdate = "";
            foreach($tab as $valeur){
                $marqueUpdate .= ucfirst($valeur) . " ";
            }
            $marque = trim($marqueUpdate);
            $marque = str_replace("Homme", "", $marque);
            $marque = str_replace("Femme", "", $marque);
            $marque = str_replace("Maison", "", $marque);
            $marque = trim($marque);
            $data->setNomFournisseur(ucwords($marque));
            
            $marquefind = $this->_entityManager->getRepository(MarqueRef::class)->findOneBy(["marque" => $data->getMarque()]);

            if($marquefind)
                $data->setMarque($marquefind);
            else{
                $marqueRef = new MarqueRef($marque);
            }  

            //pays
            $pays = new Pays(["pays"=>"France", "continent"=>""]);
            $find = $this->_entityManager->getRepository(Pays::class)->findOneBy([
                "pays" => "France",
                ]);	    	
            if(!$find)
                $this->_entityManager->persist($pays);
            else{
                $pays = $find;    		
            }

            //saison
            if($data->getCodeSaison() == 1)
                $data->setSaison("SS" . $data->getAnneeSortie());
                
            else
                $data->setSaison("FW" . $data->getAnneeSortie());
            
            
            // //Couleurs
            $code_couleur = $data->getCodeCouleur();
            $reference_couleur_1 = $data->getReferenceCouleur1() ? $data->getReferenceCouleur1() : "";
            $reference_couleur_2 =$data->getReferenceCouleur2() ? $data->getReferenceCouleur2() : "" ;
            $result = preg_match("#[\#]{1,}#i", $reference_couleur_1, $delimiter);
            if($result){
                $donnees = explode($delimiter[0], $reference_couleur_1);

                if(count($donnees)>=2){
                    $code_couleur .= $donnees[0];
                    $reference_couleur_1 = $donnees[1];                        
                }
                if(count($donnees)>=3){
                    $reference_couleur_2 = $donnees[2] . "" . $reference_couleur_2;
                }
            }   
            $result = preg_match("#[\#]{1,}#i", $reference_couleur_2, $delimiter);
            if($result){
                $donnees = explode("#", $reference_couleur_2);
                //echo count($donnees);
                if(count($donnees)>=2){
                    $reference_couleur_1 .= $donnees[0];                    
                    $reference_couleur_2 = $donnees[1];                        
                }
                else{
                    $reference_couleur_2 = " " . $donnees[0];
                }

            }


            //$reference_couleur_2 = $data->getReferenceCouleur2();
            $reference_couleur_1 = str_replace("#", '', $reference_couleur_1);
            $reference_couleur_2 = str_replace("#", "", $reference_couleur_2);    
                
            $data->setReferenceCouleur($this->minuscule($reference_couleur_1 . " " . $reference_couleur_2));

            //Univers 
            /******* UNIVERS + CATEGORIE **************/
            $categorieMotCle = $data->getCategorieUnivers(); //ex : VET. Homme ou BIJOUTERIE
            $motCleCat = "#^";
            $univers_referencement = "Autres"; //Par défaut "Autres"
            $result = preg_match("#[. ]#i", $categorieMotCle, $delimiter); //Délimitateur
            if($result){
                /**
                 * On récupère catégorie
                 * On récupère univers
                 */
                $donnees = explode($delimiter[0], $categorieMotCle);
                $categorieMotCle = trim($this->majuscule($donnees[0]));
                $motCleCat .= $categorieMotCle;
                $univers_referencement = trim($this->majuscule($donnees[1]));
            }
            else{
                /**
                 * on extrait une partie de CatégorieRef
                 */
                $categorieMotCle = trim($this->majuscule($categorieMotCle));
                $motCleCat .= $categorieMotCle;
            } 
                    
            $universRefObjet = ["univers_ref"=>"Autres", "univers_ref_en"=>"Other", "univers_ref_abreviation"=>"A"];
            $universRefTab = [
                ["univers_ref"=>"Femme", "univers_ref_en"=>"Women", "univers_ref_abreviation"=>"F"], 
                ["univers_ref"=>"Homme", "univers_ref_en"=>"Men", "univers_ref_abreviation"=>"H"], 
                ["univers_ref"=>"Maison", "univers_ref_en"=>"Home", "univers_ref_abreviation"=>"M"], 
                ["univers_ref"=>"Autres", "univers_ref_en"=>"Other", "univers_ref_abreviation"=>"A"], 
            ];
                
            foreach ($universRefTab as $key => $value) {
                // code...
                $motCle = '#^'. $this->majuscule($value["univers_ref_abreviation"]) . "#i";

                $rechercheUniversRef = preg_match($motCle, $univers_referencement);
                    
                if($rechercheUniversRef){
                    $universRefObjet = $value;
                    break;
                }    
            }
            if($this->majuscule($data->getCategorieUnivers()) == "DESIGN"){
                // $universRefObjet = $this->_entityManager->getRepository(UniversRef::class)->findOneBy([
                //     "univers_ref" => "Maison"
                // ]);
                $universRefObjet = ["univers_ref"=>"Maison", "univers_ref_en"=>"Home", "univers_ref_abreviation"=>"M"];
            }

            $data->setUnivers($universRefObjet["univers_ref"]);
            $data->setUniversEn($universRefObjet["univers_ref_en"]);

            //picture
            $img = "";
            for($i=1; $i<10; $i++)
                $img .= "https://leclaireur-shopify.imgix.net/" . $data->getSku() . "/" . $data->getSku() . "-0".$i.".png.webp;";

            $img .= "https://leclaireur-shopify.imgix.net/" . $data->getSku() . "/" . $data->getSku() . "-360.mp4;";
            $data->setPictures($img);

            //lien
            $lien = "https://leclaireur.com/products/" . $data->getSku();
            $data->setLien($lien);

            //marque à revoir plus tard

            //Filtre //A revior plus tard
            $filtreMotCle = $this->minuscule($data->getSousCategorieFnr());
            $FiltreRefObjet = new FiltreRef(["filtre"=>$filtreMotCle, "filtre_ref_en" => ""]);
            $filtreRefTab = $this->_entityManager->getRepository(FiltreRef::class)->findAll();
            foreach ($filtreRefTab as $key => $value) {
                // code...
                $tabMotcle = explode("_", $FiltreRefObjet->getFiltre());
                foreach ($tabMotcle as $valuemotcle) {
                    # code...
                    if($valuemotcle != ""){
                        $motCle = '#^'. $valuemotcle . "#i";
                        $filtreOriginale = $this->majuscule($value->getFiltre());
                        $rechercheFiltreRef = preg_match($motCle, $filtreOriginale);
                        if($rechercheFiltreRef){
                            $FiltreRefObjet = $value; //objet filtre
                            $data->setFiltre($FiltreRefObjet);
                            break;
                        }    
                    }
                }


            }
            if(!$data->getFiltre()){
                //On instancie CategorieRef
				$categorieRef = new CategorieRef([
					"categorie_ref" => $this->minuscule($categorieMotCle),
					"categorie_ref_en" => ""
					]);	
				$motCleCat .= "#i";
                //liste CatégorieRef
				$categorieRefTab = $this->_entityManager->getRepository(CategorieRef::class)->findAll();
				//récupère la liste de CatégorieRef
				foreach($categorieRefTab as $value){
					$categorie = $this->majuscule($value->getCategorieRef());
					$rechercheCategorysRef = preg_match($motCleCat, $categorie); 

					if($rechercheCategorysRef){
						$categorieRef = $value;
						break;
					} 
				}
                if(!$categorieRef->getId()){
                    /**
                     * si Categorie n'existe pas
                     */
                    $categorieRef = $this->_entityManager->getRepository(CategorieRef::class)->findOneBy(["categorie_ref"=>"A définir", "categorie_ref_en"=>"To define"]);

                    if(!$categorieRef){
                        $categorieRef = new CategorieRef(["categorie_ref"=>"A définir", "categorie_ref_en"=>"To define"]);

                        $this->_entityManager->persist($categorieRef);
                    }
                }
                $sousCategorieRef = $this->_entityManager->getRepository(SousCategorieRef::class)->findOneBy(["sous_categorie_ref"=>$data->getSousCategorieFnr()]);
                if(!$sousCategorieRef){
                    $sousCategorieRef = (new SousCategorieRef(["sous_categorie_ref"=>$data->getSousCategorieFnr(), "sous_categorie_ref_en"=>""]))
                    ->setCategorieRef($categorieRef); 

                    $this->_entityManager->persist($sousCategorieRef);                 
                }

                $filtreRef = (new FiltreRef(["filtre"=>$filtreMotCle, "filtre_ref_en"=>""]))
                ->setSousCategorieRef($sousCategorieRef);

                $this->_entityManager->persist($filtreRef);                 
                $data->setFiltre($filtreRef);

            }
            //Tags Ref à revoir plus tard
            // if($filtreOriginale){

            //     $tags_ref = $universRefObjet["univers_ref"] . "," . $universRefObjet["univers_ref_en"] . ',';
            //     $tags_ref .= "Couleur_,Color_,";
            //     $tags_ref .= ",,";//Filtre à modifier dans ExportUpdateDataPersister
            //     $tags_ref .= $data->getFiltre()->getSousCategorieRef()->getSousCategorieRef() . "," . $data->getFiltre()->getSousCategorieRef()->getSousCategorieRefEn() . ',';
            //     $tags_ref .= "Catégorie_" . $data->getFiltre()->getSousCategorieRef()->getSousCategorieRef() . ",Category_" . $data->getFiltre()->getSousCategorieRef()->getSousCategorieRefEn() . ',';
            //     $tags_ref .= "Créateur_" . $data->getNomFournisseur() . ",Designer_" . $data->getNomFournisseur() . ',';
            //     $tags_ref .= $data->getReferenceFournisseur() . ',';
            //     if($data->getFiltre()->getSousCategorieRef())
            //         $tags_ref .= $data->getFiltre()->getSousCategorieRef()->getCategorieRef()->getCategorieRef() . "," . $data->getFiltre()->getSousCategorieRef()->getCategorieRef()->getCategorieRefEn() . ',';
            //     $tags_ref .= $data->getSaison() . "" . $data->getAnneeSortie();

            //     $data->setTagsRef($tags_ref);
            // }

            /**
             * TARIFS
             */
            $findTarifs = $this->_entityManager->getRepository(Tarifs::class)->findOneBy([
                "produit" => $data
            ]);

            if(!$findTarifs){
                $tarifs = (new Tarifs())
                ->setProduit($data)
                ->setPrixVente($data->getPrixVente())
                ->addPay($pays)
                ;

                $this->_entityManager->persist($tarifs);
            }



        }
        else{
            /**
             * Produit exist déjà dans la base de données
             */
            $data = $findProduit;
        }

        $variantProduit = $data->getVariantProduits();
        $variantAll = [];
        

        
        /**
         * debut modif
         */
        foreach ($this->_grilleTailleFnr as $key => $value) {
            # code...
            if($value["grilleTaille"] == $data->getGrilleTailleFournisseur() ){
                foreach ($value["tailles"] as $keyTaile => $valueTaille) {
                    # code...
                    $variant = (new Variants())
                    ->setSku($data)
                    ->setVariantSku($data->getSku() ."_" . $valueTaille)
                    ->setTailleFnr($valueTaille)
                    ;

                    $findVariants = $this->_entityManager->getRepository(Variants::class)->findOneBy([
                        "sku" => $variant->getSku(),
                        "taille_fnr" => $variant->getTailleFnr()
                    ]);
                    if(!$findVariants){
                        /**
                         * Stockage
                        */
                        $this->_entityManager->persist($variant); 
                        $data->addVariant($variant);         
                    }
                } //end foreach
                
            }
        }


         /**
          * Fin modif
          */

        if(count($variantProduit)>0){
            for($i=0; $i<count($variantProduit); $i++){
                $variants = (new Variants())
                ->setSku($data);

                foreach ($variantProduit[$i] as $key => $value) {
                    # code...
                    /**
                     * 0,3,7,9,11,12,14,18,20,60,
                     */
                    if($key == "taille"){
                        $variants
                        ->setTailleFnr($value)
                        ->setVariantSku($data->getSku() ."_" . $value);

                    }

                    if($key == "stockMag0")
                        $variants->setStock0($value ? $value : 0);

                    if($key == "stockMag3")
                        $variants->setStock3($value ? $value : 0);

                    if($key == "stockMag7")
                        $variants->setStock7($value ? $value : 0);

                    if($key == "stockMag9")
                        $variants->setStock9($value ? $value : 0);

                    if($key == "stockMag11")
                        $variants->setStock11($value ? $value : 0);

                    if($key == "stockMag12")
                        $variants->setStock12($value ? $value : 0);

                    if($key == "stockMag14")
                        $variants->setStock14($value ? $value : 0);

                    if($key == "stockMag18")
                        $variants->setStock18($value ? $value : 0);

                    if($key == "stockMag20")
                        $variants->setStock20($value ? $value : 0);

                    if($key == "stockMag60")
                        $variants->setStock60($value ? $value : 0);

                }

                $findVariants = $this->_entityManager->getRepository(Variants::class)->findOneBy([
                    "sku" => $variants->getSku(),
                    "taille_fnr" => $variants->getTailleFnr()
                ]);
                if(!$findVariants){
                    /**
                     * Stockage
                    */
                    //$this->_entityManager->persist($variants); 
                    $data->addVariant($variants);         
                }
                else{
                    $findVariants->setStock0($variants->getStock0());
                    $findVariants->setStock3($variants->getStock3());
                    $findVariants->setStock7($variants->getStock7());
                    $findVariants->setStock9($variants->getStock9());
                    $findVariants->setStock11($variants->getStock11());
                    $findVariants->setStock12($variants->getStock12());
                    $findVariants->setStock14($variants->getStock14());
                    $findVariants->setStock20($variants->getStock20());
                    $findVariants->setStock60($variants->getStock60());
                }
            }
        }


        $this->_entityManager->persist($data);  
        $this->_entityManager->flush();      
        return $data;
    }
}
