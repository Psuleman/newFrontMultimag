<?php

namespace App\Entity;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Post;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\FiltreRefRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Patch;

// #[ApiResource(
//     operations: [ new Post() ]
// )]
// #[ApiResource(
//     uriTemplate: '/sous_categories/{sousCategorieId}/filtre_refs/{id}',
//     uriVariables: [
//         'sousCategorieId' => new Link(fromClass: SousCategorieRef::class, toProperty: 'sous_categorie_ref'),
//         'id' => new Link(fromClass: FiltreRef::class),
//     ],
//     operations: [ new Get() ]
// )]
// #[ApiResource(
//     uriTemplate: '/sous_categories/{sousCategorieId}/filtre_refs',
//     uriVariables: [
//         'sousCategorieId' => new Link(fromClass: SousCategorieRef::class, toProperty: 'sous_categorie_ref'),
//     ],
//     operations: [ new GetCollection() ]
// )]
#[ORM\Entity(repositoryClass: FiltreRefRepository::class)]
class FiltreRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['produit'])]
    private $id;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $filtre;

    #[Groups(['produit'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $filtre_ref_en;

    #[Groups(['produit'])]
    #[ORM\ManyToOne( cascade: ['persist'])]
    private ?SousCategorieRef $sous_categorie_ref = null;

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

    public function getSousCategorieRef(): ?SousCategorieRef
    {
        return $this->sous_categorie_ref;
    }

    public function setSousCategorieRef(?SousCategorieRef $sous_categorie_ref): self
    {
        $this->sous_categorie_ref = $sous_categorie_ref;

        return $this;
    }

}
