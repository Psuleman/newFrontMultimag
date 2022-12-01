<?php

namespace App\Entity;

use App\Entity\CategorieRef;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Post;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\SousCategorieRefRepository;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;

// #[ApiResource(
//     operations: [
//         new Get(), 
//         new GetCollection()], 
//         paginationEnabled: false)]
// #[ApiFilter(filterClass: SearchFilter::class, properties: ['categorie_ref' => 'exact', 'sous_categorie_ref' => 'word_start'])]

// #[ApiResource(
//     uriTemplate: '/categories/{categorieId}/sous_categories/{id}',
//     uriVariables: [
//         'categorieId' => new Link(fromClass: CategorieRef::class, toProperty: 'categorie_ref'),
//         'id' => new Link(fromClass: SousCategorieRef::class),
//     ],
//     operations: [ new Get() ]
// )]
// #[ApiResource(
//     uriTemplate: '/categories/{categorieId}/sous_categories',
//     uriVariables: [
//         'sousCategorieId' => new Link(fromClass: CategorieRef::class, toProperty: 'categorie_ref'),
//     ],
//     operations: [ new GetCollection() ]
// )]
// #[ApiResource(
//     normalizationContext:
// )]
#[Get(
    normalizationContext: ['groups' => ['produit']],
)]
#[GetCollection(
    normalizationContext: ['groups' => ['produit']],
)]
#[ORM\Entity(repositoryClass: SousCategorieRefRepository::class)]
class SousCategorieRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['produit'])]
    private $id;

    #[Link(toProperty: 'sous_categorie_ref')]
    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $sous_categorie_ref;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $sous_categorie_ref_en;

    #[Groups(['produit'])]
    #[ORM\ManyToOne(targetEntity: CategorieRef::class, cascade: ['persist'])]
    private $categorie_ref;

    public function __construct($tab = [])
    {
        if ($tab) {
            if ($tab["sous_categorie_ref"]) {
                $this->setSousCategorieRef($tab["sous_categorie_ref"]);
            }
            if ($tab["sous_categorie_ref_en"]) {
                $this->setSousCategorieRefEn($tab["sous_categorie_ref_en"]);
            }
        }
    }
    public function getId() : ?int
    {
        return $this->id;
    }
    public function getSousCategorieRef() : ?string
    {
        return $this->sous_categorie_ref;
    }
    public function setSousCategorieRef(string $sous_categorie_ref) : self
    {
        $this->sous_categorie_ref = $sous_categorie_ref;
        return $this;
    }
    public function getSousCategorieRefEn() : ?string
    {
        return $this->sous_categorie_ref_en;
    }
    public function setSousCategorieRefEn(?string $sous_categorie_ref_en) : self
    {
        $this->sous_categorie_ref_en = $sous_categorie_ref_en;
        return $this;
    }
    public function getCategorieRef() : ?CategorieRef
    {
        return $this->categorie_ref;
    }
    public function setCategorieRef(?CategorieRef $categorie_ref) : self
    {
        $this->categorie_ref = $categorie_ref;
        return $this;
    }
}
