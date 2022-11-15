<?php

namespace App\Entity;

use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\Link;
use App\Repository\MatiereProduitRepository;
use App\State\MatiereProduitPostProcessor;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource(
    operations: [ new Post() ]
)]#[ApiResource(
    uriTemplate: '/produit/{produitId}/matiere_produits/{id}',
    uriVariables: [
        'produitId' => new Link(fromClass: Produits::class, toProperty:'sku'),
        'id' => new Link(fromClass: MatiereProduit::class)
    ],
    operations: [new Get()]
)]
#[ApiResource(
    uriTemplate: '/produit/{produitId}/matiere_produits',
    uriVariables: [
        'produitId' => new Link(fromClass: Produits::class)
    ],
    operations: [new GetCollection()]
)]
#[ORM\Entity(repositoryClass: MatiereProduitRepository::class)]
class MatiereProduit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['produit', 'matiere'])]
    private ?int $id = null;

    #[Groups(['produit', 'matiere'])]
    #[ORM\ManyToOne()]
    private ?Produits $produit = null;

    #[Groups(['produit', 'matiere'])]
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
