<?php

namespace App\Entity;

use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use App\Repository\FiltreRefRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    operations: [
        new Get(controller: 'App\\Entity\\NotFoundAction', output: false), 
        new GetCollection(normalizationContext: ['groups' => 'filtre:list']), 
        new GetCollection()
    ], 
    paginationEnabled: false)
    ]
#[ORM\Entity(repositoryClass: FiltreRefRepository::class)]
#[ApiFilter(SearchFilter::class, properties: ['filtre' => 'word_start'])]

class FiltreRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[Groups('produit')]
    #[ORM\Column(type: 'string', length: 255)]
    private $filtre;

    #[Groups('produit')]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $filtre_ref_en;

    #[ORM\ManyToOne(targetEntity: SousCategorieRef::class, cascade: ['persist'])]
    #[Groups(['produit'])]
    private $sousCategorieRef;

    #[ORM\OneToMany(mappedBy: 'filtre', targetEntity: Produits::class)]
    private Collection $produits;

    public function __construct($tab = [])
    {
        if ($tab) {
            if ($tab["filtre"]) {
                $this->setFiltre($tab["filtre"]);
            }
            if ($tab["filtre_ref_en"]) {
                $this->setFiltreRefEn($tab["filtre_ref_en"]);
            }
        }
        $this->produits = new ArrayCollection();
    }

    public function getId() : ?int
    {
        return $this->id;
    }
    
    public function getFiltre() : ?string
    {
        return $this->filtre;
    }

    public function setFiltre(string $filtre) : self
    {
        $this->filtre = $filtre;
        return $this;
    }

    public function getFiltreRefEn() : ?string
    {
        return $this->filtre_ref_en;
    }

    public function setFiltreRefEn(?string $filtre_ref_en) : self
    {
        $this->filtre_ref_en = $filtre_ref_en;
        return $this;
    }

    public function getSousCategorieRef() : ?SousCategorieRef
    {
        return $this->sousCategorieRef;
    }
    
    public function setSousCategorieRef(?SousCategorieRef $sousCategorieRef) : self
    {
        $this->sousCategorieRef = $sousCategorieRef;
        return $this;
    }
    /**
     * @return Collection<int, Produits>
     */
    public function getProduits() : Collection
    {
        return $this->produits;
    }
    public function addProduit(Produits $produit) : self
    {
        if (!$this->produits->contains($produit)) {
            $this->produits->add($produit);
            $produit->setFiltre($this);
        }
        return $this;
    }
    public function removeProduit(Produits $produit) : self
    {
        if ($this->produits->removeElement($produit)) {
            // set the owning side to null (unless already changed)
            if ($produit->getFiltre() === $this) {
                $produit->setFiltre(null);
            }
        }
        return $this;
    }
}
