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
use App\Repository\TarifsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
#[ApiResource]
#[ORM\Entity(repositoryClass: TarifsRepository::class)]
class Tarifs
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('produit')]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tarifs')]
    private ?Produits $produit = null;

    #[Groups('produit:read')]
    #[ORM\Column]
    private ?float $prix_vente = null;

    #[Groups('produit:read')]
    #[ORM\Column(nullable: true)]
    private ?float $remise = null;

    #[Groups('produit:read')]
    #[ORM\ManyToMany(targetEntity: Pays::class, inversedBy: 'tarifs')]
    private Collection $pays;
    
    public function __construct()
    {
        $this->pays = new ArrayCollection();
    }
    public function getId() : ?int
    {
        return $this->id;
    }
    public function getProduit() : ?Produits
    {
        return $this->produit;
    }
    public function setProduit(?Produits $produit) : self
    {
        $this->produit = $produit;
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
    public function getRemise() : ?float
    {
        return $this->remise;
    }
    public function setRemise(?float $remise) : self
    {
        $this->remise = $remise;
        return $this;
    }
    /**
     * @return Collection<int, Pays>
     */
    public function getPays() : Collection
    {
        return $this->pays;
    }
    public function addPay(Pays $pay) : self
    {
        if (!$this->pays->contains($pay)) {
            $this->pays->add($pay);
        }
        return $this;
    }
    public function removePay(Pays $pay) : self
    {
        $this->pays->removeElement($pay);
        return $this;
    }
}
