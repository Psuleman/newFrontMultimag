<?php

namespace App\Controller;

use App\Repository\FiltreRefRepository;
use App\Repository\GrilleTailleRefRepository;
use App\Repository\SousCategorieRefRepository;
use App\Repository\TailleRefRepository;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Date;

class MajController extends AbstractController
{
    public function getData()
    {
            $filename='fichier_csv/export_complet_part_1.csv';
             $delimiter=';';
             echo $filename;
            if(file_exists($filename) || !is_readable($filename))
            {

                $header = NULL;
                $data = array();
                $marques = array();
                if (($handle = fopen($filename, 'r')) !== FALSE)
                {
                    while (($row = fgetcsv($handle, 1000000, $delimiter)) !== FALSE)
                    {
                            $data[] = $row;
                        //
                    }
                    fclose($handle);
                }            
            }

            return $data;
    }  

    #[Route('/maj', name: 'app_maj')]
    public function index(GrilleTailleRefRepository $grilleTailleRefRepository, TailleRefRepository $tailleRefRepository, FiltreRefRepository $filtreRefRepository, SousCategorieRefRepository $sousCategorieRefRepository): Response
    {
        $data = $this->getData();
        $dataclean = [];

        foreach ($data as $key => $value) {
            # code...
            if(intval($value[0])){
                $tableauFiltre = [];

                $sku = explode("_", $value[35]);
                $nom_produit = explode($value[5].' ', $value[3]);
                $poids = floatval($value[38])>0 ? floatval($value[38]) : intval(0);
                $pays_origine = $value[52]; // 100
                $coupe = $value[70];
                $entretien = $value[72];
                                    /**
                     * Tags, Categorie, sous catégorie, filtre, couleur, univers
                     */
                    $tags = $value[7];
                    $tagTab = explode(",", $value[7]);
                    $couleur = "";
                    $color = "";
                    $categorie = $value[6];
                    $category = "";
                    $souscategorie = "";
                    $souscategory = "";
                    $univers = $value[69];
                    $universEn ="";
                    $filtre = "";
                    $filtre_en = "";


                    foreach ($tagTab as $keyTag => $valeurTag) {
                        
                        $valeurTag = trim($valeurTag);
                        $tab = explode("_", $valeurTag);

                        if($tab[0]=="Couleur"){$couleur=$tab[1];}
                        else if($tab[0]=="Color"){$color=$tab[1];}
                        else if($tab[0]=="Catégorie"){
                            $souscategorie=$tab[1];

                            $findSousCategorie = $sousCategorieRefRepository->findOneBy(["sous_categorie_ref" => $tab[1]]);

                            if($findSousCategorie){
                                $findFiltre = $filtreRefRepository->findBy([
                                    "sous_categorie_ref" => $findSousCategorie
                                ]);

                                if($findFiltre){
                                    //print_r($findFiltre);
                                    $tableauFiltre[] = $findFiltre;
                                    //echo "\n";
    
                                    foreach ($findFiltre as $valeurFiltre) {
                                        # code...
                                        foreach ($tagTab as $valueTagRef) {
                                            # code...
                                            if($valeurFiltre->getFiltre() == $valueTagRef){
                                                $filtre = $valeurFiltre->getFiltre();
                                                $filtre_en = $valeurFiltre->getFiltreRefEn();
                                            }
                                        }
                                    }
                                }
                            }
                            


                        } //sous catégorie
                        else if($tab[0]=="Category"){$souscategory=$tab[1];} //sous catégory


                        //Univers
                        else if($valeurTag == "Homme" || $valeurTag=="Femme" || $valeurTag=="Maison" || $valeurTag=="Enfant"){
                            $univers = $valeurTag;
                        }
                        elseif($valeurTag == "Homme" || $valeurTag=="Femme" || $valeurTag=="Maison" || $valeurTag=="Enfant"){
                            $univers = $valeurTag;
                        }
         
                        
                    };


                    /**
                     * Tarifs
                     */
                    $tarifs = [];
                    $prix = floatval($value[40]);
                    $prix_reduit = floatval($value[41]);

                    $tarifs = [];
                    $tarifs[0] = [
                        "pays" => "France",
                        "prix_vente" => $prix,
                        "remise" => $prix_reduit ? (($prix_reduit * 100)/$prix) : null
                    ];
                    /**
                     * Matières
                     */

                     $matiere1 = $value[73];
                     $pourcentage1 = floatval($value[74]); // % à enlever
                     $matiere2 = $value[75];
                     $pourcentage2 = floatval($value[76]); // % à enlever
 
                     $matiere3 = $value[87];
                     $pourcentage3 = floatval($value[88]); // % à enlever
                     $matiere4 = $value[89];
                     $pourcentage4 = floatval($value[90]);
                     $matiere5 = $value[91];
                     $pourcentage5 = floatval($value[92]); // % à enlever
 
                     $matiere6 = $value[94];
                     $pourcentage6 = floatval($value[95]); // % à enlever
                     $matiere7 = $value[96];
                     $pourcentage7 = floatval($value[97]);
 
                     $matiere8 = $value[104];
                     $pourcentage8 = floatval($value[105]); // % à enlever
                     $matiere9 = $value[106];
                     $pourcentage9 = floatval($value[107]); // % à enlever
                     $matiere10 = $value[113];
                     $pourcentage10 = floatval($value[114]);
 
                     $matiereUpdate = [];
                     $matiereUpdate[] =  [ "matiere" => $matiere1, "pourcentageMatiere" => $pourcentage1 ];
                     $matiereUpdate[] =  [ "matiere" => $matiere2, "pourcentageMatiere" => $pourcentage2 ];
                     $matiereUpdate[] =  [ "matiere" => $matiere3, "pourcentageMatiere" => $pourcentage3 ];
                     $matiereUpdate[] =  [ "matiere" => $matiere4, "pourcentageMatiere" => $pourcentage4 ];
                     $matiereUpdate[] =  [ "matiere" => $matiere5, "pourcentageMatiere" => $pourcentage5 ];
                     $matiereUpdate[] =  [ "matiere" => $matiere6, "pourcentageMatiere" => $pourcentage6 ];
                     $matiereUpdate[] =  [ "matiere" => $matiere7, "pourcentageMatiere" => $pourcentage7 ];
                     $matiereUpdate[] =  [ "matiere" => $matiere8, "pourcentageMatiere" => $pourcentage8 ];
                     $matiereUpdate[] =  [ "matiere" => $matiere9, "pourcentageMatiere" => $pourcentage9 ];
                     $matiereUpdate[] =  [ "matiere" => $matiere10, "pourcentageMatiere" => $pourcentage10 ];
 
                     $matieres = [];
                     if($matiereUpdate[0]["pourcentageMatiere"]!=0){
                        foreach ($matiereUpdate as $keyMatiere => $valeurMatiere) {
                            # code...
                             if($valeurMatiere["pourcentageMatiere"]>0 && $valeurMatiere["matiere"] && $valeurMatiere["matiere"]!=""){
                                 $matieres[] = [
                                     "matieres" =>  $valeurMatiere["matiere"],
                                     "pourcentageMatiere" => floatval($valeurMatiere["pourcentageMatiere"]),
                                 ];
                             };
                     }
                    }

                    /**
                     * Variant
                     */
                    $taille = $value[29];
                    $variant_sku = $value[35];
                    $variant = [];
                    $grilleTaille = "";

                    $tailleFind = $tailleRefRepository->findOneBy([
                        "taille_ref" => $taille
                    ]);
                    if($tailleFind){
                        $grilleTaille = $tailleFind->getGrilleTailleRef()->getGrilleTailleRef();                        
                    }
                    $variant[$variant_sku] = [
                        "variant_sku" => $variant_sku,
                        "taille_ref" => $taille
                    ] ;


                // print_r($nom_produit);
                if($value[4]){
                    $dataclean[$value[0]] = [
                        "sku" => intval($sku[0]),
                        "marque" => $value[5],
                        "pays_origine" => $value[52] ? $value[52] : $value[101],
                        "nom_produit_fr" => count($nom_produit)==2 ? $nom_produit[1] : $value[3],
                        "poids" => $poids,
                        "pays_origine" => $pays_origine,
                        "coupe" => $coupe,
                        "entretien" => $entretien,
                        "couleur" => $couleur,
                        "color" => $color,
                        "categorie" => $categorie,
                        "category" => $category,
                        "sousCategorie" => $souscategorie,
                        "sousCategory" => $souscategory,
                        "filtre" => $filtre,
                        "filtre_en" => $filtre_en,
                        "univers" => $univers,
                        "univer_en" => $universEn,
                        "dimension_fr" => $value[102],
                        "description_fr"=> $value[4],
                        "matiere" => $matieres,
                        "grilleTaille" => $grilleTaille,
                        "variantProduits" => $variant,
                        "tarifs" => $tarifs,
                        "tagsRef" => $tags,
                        "date_ref" => new \DateTime("now"),
                        "referencer" => true,
                        "export" => false


                    ];  
                }

                else{

                    if($dataclean && isset($dataclean[$value[0]])){
                        if($dataclean[$value[0]]["variantProduits"]){
                            $listeVariant = $dataclean[$value[0]]["variantProduits"];
                            
                            $listeVariant[$variant_sku] = $variant[$variant_sku];

                            $dataclean[$value[0]]["variantProduits"] = $listeVariant;
                        }
                    }
                  
                }

               
            }
        }


        /**
         * modification
         */

        echo "compteur : " . count($dataclean);
        //print_r($tableauFiltre);
        print_r($dataclean);

        return $this->render('createfile/index.html.twig', [
            'controller_name' => 'CreatefileController',
            'data' => $data      
        ]);
    }
}
