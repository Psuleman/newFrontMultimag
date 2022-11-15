<?php

namespace App\Entity;

use App\Entity\Company;
use App\Entity\Employe;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Post;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\TestRepository;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TestRepository::class)]
#[ApiResource(
    operations: [ new Post() ]
)]
#[ApiResource(
    uriTemplate: 'matieres/{matiereId}/tests/{id}',
    uriVariables: [
        'matiereId' => new Link(fromClass: Matieres::class, toProperty: 'matiere'),
        'id' => new Link(fromClass: Test::class),
    ],
    operations: [ new Get() ]
)]
#[ApiResource(
    uriTemplate: '/matieres/{matiereId}/tests',
    uriVariables: [
        'matiereId' => new Link(fromClass: Matieres::class, toProperty: 'matiere'),
    ],
    operations: [ new GetCollection() ]
)]
class Test
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['product'])]
    #[ORM\ManyToOne(cascade: ['persist'])]
    private ?Matieres $matiere = null;
    
    #[Groups(['product'])]
    #[ORM\Column]
    private ?float $pourcentageMatiere = null;

    #[ORM\ManyToOne()]
    private ?Product $product = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPourcentageMatiere(): ?float
    {
        return $this->pourcentageMatiere;
    }

    public function setPourcentageMatiere(float $pourcentageMatiere): self
    {
        $this->pourcentageMatiere = $pourcentageMatiere;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }

}
