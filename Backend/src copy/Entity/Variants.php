<?php

namespace App\Entity;

use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiFilter;
use App\Repository\VariantsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
#[ApiResource]
#[ORM\Entity(repositoryClass: VariantsRepository::class)]
class Variants
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('produit')]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'variants')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Produits $sku = null;

    #[Groups('produit:read')]
    #[ORM\Column(length: 255)]
    private ?string $taille_fnr = null;

    #[Groups('produit')]
    #[ORM\ManyToOne(inversedBy: 'variants')]
    private ?TailleRef $taille_ref = null;

    #[Groups('produit:read')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $variant_sku = null;

    #[Groups('produit:read')]
    #[ORM\OneToMany(mappedBy: 'variant_sku', targetEntity: Stockage::class, cascade: ['persist'])]
    private Collection $stockages;
    
    public function __construct()
    {
        $this->stockages = new ArrayCollection();
    }
    public function getId() : ?int
    {
        return $this->id;
    }
    public function getSku() : ?Produits
    {
        return $this->sku;
    }
    public function setSku(?Produits $sku) : self
    {
        $this->sku = $sku;
        return $this;
    }
    public function getTailleFnr() : ?string
    {
        return $this->taille_fnr;
    }
    public function setTailleFnr(string $taille_fnr) : self
    {
        $this->taille_fnr = $taille_fnr;
        return $this;
    }
    public function getTailleRef() : ?TailleRef
    {
        return $this->taille_ref;
    }
    public function setTailleRef(?TailleRef $taille_ref) : self
    {
        $this->taille_ref = $taille_ref;
        return $this;
    }
    public function getVariantSku() : ?string
    {
        return $this->variant_sku;
    }
    public function setVariantSku(?string $variant_sku) : self
    {
        $this->variant_sku = $variant_sku;
        return $this;
    }
    /**
     * @return Collection<int, Stockage>
     */
    public function getStockages() : Collection
    {
        return $this->stockages;
    }
    public function addStockage(Stockage $stockage) : self
    {
        if (!$this->stockages->contains($stockage)) {
            $this->stockages->add($stockage);
            $stockage->setVariantSku($this);
        }
        return $this;
    }
    public function removeStockage(Stockage $stockage) : self
    {
        if ($this->stockages->removeElement($stockage)) {
            // set the owning side to null (unless already changed)
            if ($stockage->getVariantSku() === $this) {
                $stockage->setVariantSku(null);
            }
        }
        return $this;
    }
}
