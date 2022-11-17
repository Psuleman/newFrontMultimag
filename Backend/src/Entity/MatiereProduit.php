<?php

namespace App\Entity;

use App\Entity\Matieres;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\State\MatiereProduitPostProcessor;
use App\Repository\MatiereProduitRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    operations: [
        new Get(
            normalizationContext: ['groups' => ['matiere_produit', 'matiere_produit:read']],
        ),
        new GetCollection(
            normalizationContext: ['groups' => ['matiere_produit']],
        ),    ]
)]
#[ApiResource(
    uriTemplate: 'matieres/{matiereId}/matiere_produits/{id}',
    uriVariables: [
        'matiereId' => new Link(fromClass: Matieres::class, toProperty: 'matiere'),
        'id' => new Link(fromClass: MatiereProduit::class),
    ],
    operations: [ new Get(
        normalizationContext: ['groups' => ['matiere_produit']],
    ) ]
)]
#[ApiResource(
    uriTemplate: '/matieres/{matiereId}/matiere_produits',
    uriVariables: [
        'matiereId' => new Link(fromClass: Matieres::class, toProperty: 'matiere'),
    ],
    operations: [ new GetCollection() ]
)]
#[ApiResource(
    operations: [ new Post(
        denormalizationContext: ['groups' => ['matiere_produit']],
    ) ]
)]
#[ORM\Entity(repositoryClass: MatiereProduitRepository::class)]
class MatiereProduit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['produit', 'matiere_produit'])]
    private ?int $id = null;

    #[Groups(['matiere_produit:read'])]
    #[ORM\ManyToOne()]
    private ?Produits $produit = null;

    #[Groups(['produit', 'matiere_produit'])]
    #[ORM\Column(nullable: true)]
    private ?float $pourcentageMatiere = null;


    #[Groups(['produit', 'matiere_produit'])]
    #[ORM\ManyToOne(cascade:['persist'])]
    private ?Matieres $matiere = null;

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

    public function getMatiere(): ?Matieres
    {
        return $this->matiere;
    }

    public function setMatiere(?Matieres $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }
    
    public function getMatiereValue(): ?string
    {
        return $this->matiere->getMatiere();
    }

    public function setMatiereValue(?string $matiere_value): self
    {
        $this->matiere_value = $matiere_value;

        return $this;
    }
}
