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
use App\Repository\MatiereProduitRepository;
use Doctrine\ORM\Mapping as ORM;
#[ApiResource]
#[ORM\Entity(repositoryClass: MatiereProduitRepository::class)]
class MatiereProduit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    #[ORM\ManyToOne(inversedBy: 'matiereProduits')]
    private ?Produits $produit = null;
    #[ORM\ManyToOne(inversedBy: 'matiereProduits')]
    private ?Matiere $matiere = null;
    #[ORM\Column(nullable: true)]
    private ?float $pourcentageMatiere = null;
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
    public function getMatiere() : ?Matiere
    {
        return $this->matiere;
    }
    public function setMatiere(?Matiere $matiere) : self
    {
        $this->matiere = $matiere;
        return $this;
    }
    public function getPourcentageMatiere() : ?float
    {
        return $this->pourcentageMatiere;
    }
    public function setPourcentageMatiere(?float $pourcentageMatiere) : self
    {
        $this->pourcentageMatiere = $pourcentageMatiere;
        return $this;
    }
}
