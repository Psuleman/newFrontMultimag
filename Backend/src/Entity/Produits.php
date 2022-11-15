<?php

namespace App\Entity;

use App\Entity\Tarifs;
use App\Entity\Variants;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Post;
use App\Entity\MatiereProduit;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiFilter;
use App\State\ProduitPostProcessor;
use App\State\ProduitPatchProcessor;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProduitsRepository;
use ApiPlatform\Metadata\GetCollection;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiSubresource;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    operations: [new GetCollection()]
)]
#[POST(
    processor: ProduitPostProcessor::class
)]
#[Get(
    normalizationContext: ['groups' => ['produit', 'produit:read']],
)]
#[Patch(
    denormalizationContext: ['groups' => ['produit']],
    processor: ProduitPatchProcessor::class,
    )]
#[ApiFilter(OrderFilter::class, properties: ['date_arrivee' => 'DESC', 'sku' => 'ASC'])]

#[ApiFilter(SearchFilter::class, properties: ['filtre.sous_categorie_ref.categorie_ref.categorie_ref' => 'exact', 'univers' => 'exact', 'sku' => 'exact', 'marque.marque' => 'exact', 'newProduit' => 'exact', 'referencer' => 'exact', 'newListAttente' => 'exact', 'code_tag' => 'exact'])]
#[ORM\Entity(repositoryClass: ProduitsRepository::class)]
class Produits
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['produit'])]
    private ?int $id = null;

    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: 'integer')]
    private ?string $sku = null;

    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $code_fournisseur;
    
    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $nom_fournisseur;

    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $reference_fournisseur;
    
    #[Groups(['produit:write'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $code_couleur;

    #[Groups('produit:read')]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $reference_couleur;

    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: 'integer')]
    private $code_saison;

    #[Groups('produit:read')]
    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $saison;

    #[Groups(['produit:write'])]
    #[ORM\Column(type: 'integer')]
    private $annee_sortie;

    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_categorie_univers;
    
    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $categorie_univers;

    #[Groups(['produit:write'])]
    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_mode_aquisition;

    #[Groups(['produit:write'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $mode_acquisition;

    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_tag;

    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $tag;

    #[Groups(['produit:write'])]
    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_famille_5;

    #[Groups(['produit:write'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $famille_5;

    #[Groups(['produit:write'])]
    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_famille_6;
    
    #[Groups(['produit:write'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $famille_6;

    #[Groups(['produit'])]
    #[ORM\Column(length: 100)]
    private ?string $grille_taille_fournisseur = null;

    #[Groups(['produit'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateRef = null;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $univers;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $univers_en;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $couleur;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $couleur_en;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $pays_origine;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $entretien;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $entretienEn;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $description_fr;

    #[Groups('produit:read')]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $description_en;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $nom_produit_fr;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $nom_produit_en;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $dimension_fr;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $dimension_en;
    
    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $coupe;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $coupeEn;

    #[Groups(['produit:read'])]
    #[ORM\Column(type: 'text', nullable: true)]
    private $pictures;

    #[Groups('produit:read')]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $lien;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'text', nullable: true)]
    private $tags_ref;

    #[Groups(['produit:write'])]
    #[ORM\Column(type: 'integer')]
    private $code_sous_categorie_fnr;

    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $sous_categorie_fnr;

    #[Groups(['produit'])]
    #[ORM\Column(nullable: true)]
    private ?float $longueur = null;

    #[Groups(['produit'])]
    #[ORM\Column(nullable: true)]
    private ?float $largeur = null;

    #[Groups(['produit'])]
    #[ORM\Column(nullable: true)]
    private ?float $hauteur = null;

    #[Groups(['produit'])]
    #[ORM\Column(nullable: true)]
    private ?float $poids = null;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'boolean')]
    private $newProduit;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'boolean')]
    private $referencer;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'boolean', nullable: true)]
    private $newListAttente;

    
    //variable sans ajouter dans la base de données
    #[Groups(['produit', 'produit:write'])]
    private ?string $taille;

    #[Groups(['produit', 'produit:write'])]
    private ?string $reference_couleur_1;

    #[Groups(['produit', 'produit:write'])]
    private ?string $reference_couleur_2;

    #[Groups(['produit'])]
    private ?float $prix_vente;

    //Stock
    #[Groups(['produit:write'])]
    private ?int $stock_mag_0;

    #[Groups(['produit:write'])]
    private ?int $stock_mag_3;

    #[Groups(['produit:write'])]
    private ?int $stock_mag_7;

    #[Groups(['produit:write'])]
    private ?int $stock_mag_9;

    #[Groups(['produit:write'])]
    private ?int $stock_mag_11;

    #[Groups(['produit:write'])]
    private ?int $stock_mag_12;

    #[Groups(['produit:write'])]
    private ?int $stock_mag_14;

    #[Groups(['produit:write'])]
    private ?int $stock_mag_18;

    #[Groups(['produit:write'])]
    private ?int $stock_mag_20;
    
    #[Groups(['produit:write'])]
    private ?int $stock_mag_60;

    #[Groups(['produit'])]
    private ?string $categorie = null;

    #[Groups(['produit'])]
    private ?string $sous_categorie = null;

    #[Groups(['produit'])]
    private ?string $filtre_produit = null;

    #[Groups(['produit'])]
    private ?string $categorie_en = null;

    #[Groups(['produit'])]
    private ?string $sous_categorie_en = null;

    #[Groups(['produit'])]
    private ?string $filtre_produit_en = null;
    /**
     * marque
     */  
    #[Groups(['produit'])]
    #[ORM\ManyToOne(inversedBy: 'produits', cascade: ['persist'])]
    private ?MarqueRef $marque = null;


    #[ApiSubresource()]
    #[Groups(['produit:read'])]
    #[ORM\OneToMany(mappedBy: 'produit', targetEntity: MatiereProduit::class, orphanRemoval: true, cascade: ['persist'])]
    private Collection $matiereProduits;

    #[Groups('produit:read')]
    #[ORM\OneToMany(mappedBy: 'sku', targetEntity: Variants::class, orphanRemoval: true,  cascade: ['persist'])]
    private Collection $variants;

    #[Groups(['produit'])]
    private array $matieres = [];

    #[Groups(['produit'])]
    private array $variantProduits = [];

    #[ApiSubresource()]
    #[Groups('produit:read')]
    #[ORM\OneToMany(mappedBy: 'produit', targetEntity: Tarifs::class, orphanRemoval: true,  cascade: ['persist'])]
    private Collection $tarifs;
    
    #[Groups(['produit'])]
    private array $tarifsProduits = [];

    #[Groups(['produit'])]
    #[ORM\ManyToOne(cascade: ['persist'])]
    private ?FiltreRef $filtre = null;

    #[Groups(['produit', 'produit:write'])]
    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date_arrivee = null;

    //end
    public function __construct()
    {
        $this->variants = new ArrayCollection();
        $this->tarifs = new ArrayCollection();
        $this->matiereProduits = new ArrayCollection();
    }
    public function getId() : ?int
    {
        return $this->id;
    }
    public function getSku() : ?int
    {
        return $this->sku;
    }
    public function setSku(int $sku) : self
    {
        $this->sku = $sku;
        return $this;
    }
    
    public function getMarque(): ?MarqueRef
    {
        return $this->marque;
    }

    public function setMarque(?MarqueRef $marque): self
    {
        $this->marque = $marque;

        return $this;
    }


    /**
     * @return Collection<int, MatiereProduit>
     */
    public function getMatiereProduits() : Collection
    {
        return $this->matiereProduits;
    }
    public function addMatiereProduit(MatiereProduit $matiereProduit) : self
    {
        if (!$this->matiereProduits->contains($matiereProduit)) {
            $this->matiereProduits->add($matiereProduit);
            $matiereProduit->setProduit($this);
        }
        return $this;
    }
    public function removeMatiereProduit(MatiereProduit $matiereProduit) : self
    {
        if ($this->matiereProduits->removeElement($matiereProduit)) {
            // set the owning side to null (unless already changed)
            if ($matiereProduit->getProduit() === $this) {
                $matiereProduit->setProduit(null);
            }
        }
        return $this;
    }

    public function getMatieres() : array
    {
        return $this->matieres;
    }
    public function setMatieres(?array $matieres) : self
    {
        $this->matieres = $matieres;
        return $this;
    }
    
    /**
     * @return Collection<int, Variants>
     */
    public function getVariants() : Collection
    {
        return $this->variants;
    }
    public function addVariant(Variants $variant) : self
    {
        if (!$this->variants->contains($variant)) {
            $this->variants->add($variant);
            $variant->setSku($this);
        }
        return $this;
    }
    public function removeVariant(Variants $variant) : self
    {
        if ($this->variants->removeElement($variant)) {
            // set the owning side to null (unless already changed)
            if ($variant->getSku() === $this) {
                $variant->setSku(null);
            }
        }
        return $this;
    }
    public function getVariantProduits() : array
    {
        return $this->variantProduits;
    }
    public function setVariantProduits(?array $variantProduits) : self
    {
        $this->variantProduits = $variantProduits;
        return $this;
    }
    
    /**
     * @return Collection<int, Tarifs>
     */
    public function getTarifs() : Collection
    {
        return $this->tarifs;
    }
    public function addTarif(Tarifs $tarif) : self
    {
        if (!$this->tarifs->contains($tarif)) {
            $this->tarifs->add($tarif);
            $tarif->setProduit($this);
        }
        return $this;
    }
    public function removeTarif(Tarifs $tarif) : self
    {
        if ($this->tarifs->removeElement($tarif)) {
            // set the owning side to null (unless already changed)
            if ($tarif->getProduit() === $this) {
                $tarif->setProduit(null);
            }
        }
        return $this;
    }
    public function getTarifsProduits() : array
    {
        return $this->tarifsProduits;
    }
    public function setTarifsProduits(?array $tarifsProduits) : self
    {
        $this->tarifsProduits = $tarifsProduits;
        return $this;
    }

    public function getFiltre(): ?FiltreRef
    {
        return $this->filtre;
    }

    public function setFiltre(?FiltreRef $filtre): self
    {
        $this->filtre = $filtre;

        return $this;
    }

    public function getCodeFournisseur() : ?string
    {
        return $this->code_fournisseur;
    }
    public function setCodeFournisseur(string $code_fournisseur) : self
    {
        $this->code_fournisseur = htmlspecialchars($code_fournisseur);
        return $this;
    }
    public function getNomFournisseur() : ?string
    {
        return $this->nom_fournisseur;
    }
    public function setNomFournisseur(string $nom_fournisseur) : self
    {
        $this->nom_fournisseur = htmlspecialchars($nom_fournisseur);
        return $this;
    }
    public function getReferenceFournisseur() : ?string
    {
        return $this->reference_fournisseur;
    }
    public function setReferenceFournisseur(string $reference_fournisseur) : self
    {
        $this->reference_fournisseur = $reference_fournisseur;
        return $this;
    }
    public function getCodeCouleur() : ?string
    {
        return $this->code_couleur;
    }
    public function setCodeCouleur(string $code_couleur) : self
    {
        $this->code_couleur = $code_couleur;
        return $this;
    }
    public function getReferenceCouleur() : ?string
    {
        return $this->reference_couleur;
    }
    public function setReferenceCouleur(?string $reference_couleur) : self
    {
        $this->reference_couleur = $reference_couleur;
        return $this;
    }
    public function getCodeSaison() : ?int
    {
        return $this->code_saison;
    }
    public function setCodeSaison(int $code_saison) : self
    {
        $this->code_saison = (int) $code_saison;
        return $this;
    }
    public function getSaison() : ?string
    {
        return $this->saison;
    }
    public function setSaison(string $saison) : self
    {
        $this->saison = htmlspecialchars($saison);
        return $this;
    }
    public function getAnneeSortie() : ?int
    {
        return $this->annee_sortie;
    }
    public function setAnneeSortie(int $annee_sortie) : self
    {
        $this->annee_sortie = $annee_sortie;
        return $this;
    }
    public function getCodeCategorieUnivers() : ?int
    {
        return $this->code_categorie_univers;
    }
    public function setCodeCategorieUnivers(int $code_categorie_univers) : self
    {
        $this->code_categorie_univers = $code_categorie_univers;
        return $this;
    }
    public function getCategorieUnivers() : ?string
    {
        return $this->categorie_univers;
    }
    public function setCategorieUnivers(string $categorie_univers) : self
    {
        $this->categorie_univers = $categorie_univers;
        return $this;
    }
    public function getCodeModeAquisition() : ?int
    {
        return $this->code_mode_aquisition;
    }
    public function setCodeModeAquisition(int $code_mode_aquisition) : self
    {
        $this->code_mode_aquisition = $code_mode_aquisition;
        return $this;
    }
    public function getModeAcquisition() : ?string
    {
        return $this->mode_acquisition;
    }
    public function setModeAcquisition(string $mode_acquisition) : self
    {
        $this->mode_acquisition = $mode_acquisition;
        return $this;
    }
    public function getCodeTag() : ?int
    {
        return $this->code_tag;
    }
    public function setCodeTag(int $code_tag) : self
    {
        $this->code_tag = $code_tag;
        return $this;
    }
    public function getTag() : ?string
    {
        return $this->tag;
    }
    public function setTag(string $tag) : self
    {
        $this->tag = $tag;
        return $this;
    }
    public function getCodeFamille5() : ?int
    {
        return $this->code_famille_5;
    }
    public function setCodeFamille5(int $code_famille_5) : self
    {
        $this->code_famille_5 = $code_famille_5;
        return $this;
    }
    public function getFamille5() : ?string
    {
        return $this->famille_5;
    }
    public function setFamille5(string $famille_5) : self
    {
        $this->famille_5 = $famille_5;
        return $this;
    }
    public function getCodeFamille6() : ?int
    {
        return $this->code_famille_6;
    }
    public function setCodeFamille6(int $code_famille_6) : self
    {
        $this->code_famille_6 = $code_famille_6;
        return $this;
    }
    public function getFamille6() : ?string
    {
        return $this->famille_6;
    }
    public function setFamille6(string $famille_6) : self
    {
        $this->famille_6 = $famille_6;
        return $this;
    }
    public function getGrilleTailleFournisseur() : ?string
    {
        return $this->grille_taille_fournisseur;
    }
    public function setGrilleTailleFournisseur(string $grille_taille_fournisseur) : self
    {
        $this->grille_taille_fournisseur = $grille_taille_fournisseur;
        return $this;
    }
    public function getDateRef() : ?\DateTimeInterface
    {
        return $this->dateRef;
    }
    public function setDateRef(?\DateTimeInterface $dateRef) : self
    {
        $this->dateRef = $dateRef;
        return $this;
    }
    public function getUnivers() : ?string
    {
        return $this->univers;
    }
    public function setUnivers(string $univers) : self
    {
        $this->univers = $univers;
        return $this;
    }
    public function getUniversEn() : ?string
    {
        return $this->univers_en;
    }
    public function setUniversEn(?string $univers_en) : self
    {
        $this->univers_en = $univers_en;
        return $this;
    }
    public function getCouleur() : ?string
    {
        return $this->couleur;
    }
    public function setCouleur(?string $couleur = "") : self
    {
        $this->couleur = $couleur;
        return $this;
    }
    public function getCouleurEn() : ?string
    {
        return $this->couleur_en;
    }
    public function setCouleurEn(?string $couleur_en) : self
    {
        $this->couleur_en = $couleur_en;
        return $this;
    }
    public function getPaysOrigine() : ?string
    {
        return $this->pays_origine;
    }
    public function setPaysOrigine(?string $pays_origine = "") : self
    {
        $this->pays_origine = $pays_origine;
        return $this;
    }
    public function getEntretien() : ?string
    {
        return $this->entretien;
    }
    public function setEntretien(?string $entretien = "") : self
    {
        $this->entretien = $entretien;
        return $this;
    }
    public function getEntretienEn() : ?string
    {
        return $this->entretienEn;
    }
    public function setEntretienEn(?string $entretienEn) : self
    {
        $this->entretienEn = $entretienEn;
        return $this;
    }
    public function getDescriptionFr() : ?string
    {
        return $this->description_fr;
    }
    public function setDescriptionFr(?string $description_fr = "") : self
    {
        $this->description_fr = $description_fr;
        return $this;
    }
    public function getDescriptioEn() : ?string
    {
        return $this->description_en;
    }
    public function setDescriptioEn(?string $description_en = "") : self
    {
        $this->description_en = $description_en;
        return $this;
    }
    public function getNomProduitFr() : ?string
    {
        return $this->nom_produit_fr;
    }
    public function setNomProduitFr(?string $nom_produit_fr = "") : self
    {
        $this->nom_produit_fr = $nom_produit_fr;
        return $this;
    }
    public function getNomProduitEn() : ?string
    {
        return $this->nom_produit_en;
    }
    public function setNomProduitEn(?string $nom_produit_en = "") : self
    {
        $this->nom_produit_en = $nom_produit_en;
        return $this;
    }
    public function getDimensionFr() : ?string
    {
        return $this->dimension_fr;
    }
    public function setDimensionFr(?string $dimension_fr) : self
    {
        $this->dimension_fr = $dimension_fr;
        return $this;
    }
    public function getDimensionEn() : ?string
    {
        return $this->dimension_en;
    }
    public function setDimensionEn(?string $dimension_en) : self
    {
        $this->dimension_en = $dimension_en;
        return $this;
    }
    public function getCoupe() : ?string
    {
        return $this->coupe;
    }
    public function setCoupe(?string $coupe = "") : self
    {
        $this->coupe = $coupe;
        return $this;
    }
    public function getCoupeEn() : ?string
    {
        return $this->coupeEn;
    }
    public function setCoupeEn(?string $coupeEn) : self
    {
        $this->coupeEn = $coupeEn;
        return $this;
    }
    public function getPictures() : ?string
    {
        return $this->pictures;
    }
    public function setPictures(?string $pictures) : self
    {
        $this->pictures = $pictures;
        return $this;
    }
    public function getLien() : ?string
    {
        return $this->lien;
    }
    public function setLien(?string $lien) : self
    {
        $this->lien = $lien;
        return $this;
    }
    public function getTagsRef() : ?string
    {
        return $this->tags_ref;
    }
    public function setTagsRef(?string $tags_ref) : self
    {
        $this->tags_ref = $tags_ref;
        return $this;
    }
    public function getCodeSousCategorieFnr() : ?int
    {
        return $this->code_sous_categorie_fnr;
    }
    public function setCodeSousCategorieFnr(int $code_sous_categorie_fnr) : self
    {
        $this->code_sous_categorie_fnr = $code_sous_categorie_fnr;
        return $this;
    }
    public function getSousCategorieFnr() : ?string
    {
        return $this->sous_categorie_fnr;
    }
    public function setSousCategorieFnr(string $sous_categorie_fnr) : self
    {
        $this->sous_categorie_fnr = $sous_categorie_fnr;
        return $this;
    }

    public function getReferenceCouleur1() : ?string
    {
        return $this->reference_couleur_1;
    }
    public function setReferenceCouleur1(?string $reference_couleur_1) : self
    {
        $this->reference_couleur_1 = $reference_couleur_1;
        return $this;
    }
    public function getReferenceCouleur2() : ?string
    {
        return $this->reference_couleur_2;
    }
    public function setReferenceCouleur2(?string $reference_couleur_2) : self
    {
        $this->reference_couleur_2 = $reference_couleur_2;
        return $this;
    }
    public function getTaille() : ?string
    {
        return $this->taille;
    }
    public function setTaille(string $taille) : self
    {
        $this->taille = $taille;
        return $this;
    }
    public function getPrixVente() : ?float
    {
        return $this->prix_vente;
    }
    public function setPrixVente(float $prix_vente) : self
    {
        $this->prix_vente = $prix_vente;
        return $this;
    }
    public function getStockMag0() : ?int
    {
        return $this->stock_mag_0;
    }
    public function setStockMag0(int $stock_mag_0) : self
    {
        $this->stock_mag_0 = $stock_mag_0;
        return $this;
    }
    public function getStockMag3() : ?int
    {
        return $this->stock_mag_3;
    }
    public function setStockMag3(?int $stock_mag_3) : self
    {
        $this->stock_mag_3 = $stock_mag_3;
        return $this;
    }
    public function getStockMag7() : ?int
    {
        return $this->stock_mag_7;
    }
    public function setStockMag7(?int $stock_mag_7) : self
    {
        $this->stock_mag_7 = $stock_mag_7;
        return $this;
    }
    public function getStockMag9() : ?int
    {
        return $this->stock_mag_9;
    }
    public function setStockMag9(?int $stock_mag_9) : self
    {
        $this->stock_mag_9 = $stock_mag_9;
        return $this;
    }
    public function getStockMag11() : ?int
    {
        return $this->stock_mag_11;
    }
    public function setStockMag11(int $stock_mag_11) : self
    {
        $this->stock_mag_11 = $stock_mag_11;
        return $this;
    }
    public function getStockMag12() : ?int
    {
        return $this->stock_mag_12;
    }
    public function setStockMag12(?int $stock_mag_12) : self
    {
        $this->stock_mag_12 = $stock_mag_12;
        return $this;
    }
    public function getStockMag14() : ?int
    {
        return $this->stock_mag_14;
    }
    public function setStockMag14(?int $stock_mag_14) : self
    {
        $this->stock_mag_14 = $stock_mag_14;
        return $this;
    }
    public function getStockMag18() : ?int
    {
        return $this->stock_mag_18;
    }
    public function setStockMag18(?int $stock_mag_18) : self
    {
        $this->stock_mag_18 = $stock_mag_18;
        return $this;
    }
    public function getStockMag20() : ?int
    {
        return $this->stock_mag_20;
    }
    public function setStockMag20(?int $stock_mag_20) : self
    {
        $this->stock_mag_20 = $stock_mag_20;
        return $this;
    }
    public function getStockMag60() : ?int
    {
        return $this->stock_mag_60;
    }
    public function setStockMag60(?int $stock_mag_60) : self
    {
        $this->stock_mag_60 = $stock_mag_60;
        return $this;
    }

    public function getNewProduit() : ?bool
    {
        return $this->newProduit;
    }
    public function setNewProduit(bool $newProduit) : self
    {
        $this->newProduit = $newProduit;
        return $this;
    }
    public function getReferencer() : ?bool
    {
        return $this->referencer;
    }
    public function setReferencer(bool $referencer) : self
    {
        $this->referencer = $referencer;
        return $this;
    }
    public function getNewListAttente() : ?bool
    {
        return $this->newListAttente;
    }
    public function setNewListAttente(?bool $newListAttente) : self
    {
        $this->newListAttente = $newListAttente;
        return $this;
    }

    public function getCategorie() : ?string
    {
        if ($this->filtre) {
            $this->categorie = $this->filtre->getSousCategorieRef()->getCategorieRef()->getCategorieRef();
        }
        return $this->categorie;
    }
    public function setCategorie(?string $categorie) : self
    {
        $this->categorie = $categorie;
        return $this;
    }
    public function getCategorieEn() : ?string
    {
        if ($this->filtre) {
            $this->categorie_en = $this->filtre->getSousCategorieRef()->getCategorieRef()->getCategorieRefEn();
        }
        return $this->categorie_en;
    }
    public function setCategorieEn(?string $categorie_en) : self
    {
        $this->categorie_en = $categorie_en;
        return $this;
    }
    public function getSousCategorie() : ?string
    {
        if ($this->filtre) {
            $this->sous_categorie = $this->filtre->getSousCategorieRef()->getSousCategorieRef();
        }
        return $this->sous_categorie;
    }
    public function setSousCategorie(?string $sous_categorie) : self
    {
        $this->sous_categorie = $sous_categorie;
        return $this;
    }
    public function getSousCategorieEn() : ?string
    {
        if ($this->filtre) {
            $this->sous_categorie_en = $this->filtre->getSousCategorieRef()->getSousCategorieRefEn();
        }
        return $this->sous_categorie_en;
    }
    public function setSousCategorieEn(?string $sous_categorie_en) : self
    {
        $this->sous_categorie_en = $sous_categorie_en;
        return $this;
    }
    public function getFiltreProduit() : ?string
    {
        if ($this->filtre) {
            $this->filtre_produit = $this->filtre->getFiltre();
        }
        return $this->filtre_produit;
    }
    public function setFiltreProduit(?string $filtre_produit) : self
    {
        $this->filtre_produit = $filtre_produit;
        return $this;
    }
    public function getFiltreProduitEn() : ?string
    {
        if ($this->filtre) {
            $this->filtre_produit_en = $this->filtre->getFiltreRefEn();
        }
        return $this->filtre_produit_en;
    }
    public function setFiltreProduitEn(?string $filtre_produit_en) : self
    {
        $this->filtre_produit_en = $filtre_produit_en;
        return $this;
    }


    public function getLongueur(): ?float
    {
        return $this->longueur;
    }

    public function setLongueur(?float $longueur): self
    {
        $this->longueur = $longueur;

        return $this;
    }

    public function getLargeur(): ?float
    {
        return $this->largeur;
    }

    public function setLargeur(?float $largeur): self
    {
        $this->largeur = $largeur;

        return $this;
    }

    public function getHauteur(): ?float
    {
        return $this->hauteur;
    }

    public function setHauteur(?float $hauteur): self
    {
        $this->hauteur = $hauteur;

        return $this;
    }

    public function getPoids(): ?float
    {
        return $this->poids;
    }

    public function setPoids(?float $poids): self
    {
        $this->poids = $poids;

        return $this;
    }

    public function getDateArrivee(): ?\DateTimeInterface
    {
        return $this->date_arrivee;
    }

    public function setDateArrivee(?\DateTimeInterface $date_arrivee): self
    {
        $this->date_arrivee = $date_arrivee;

        return $this;
    }
}
