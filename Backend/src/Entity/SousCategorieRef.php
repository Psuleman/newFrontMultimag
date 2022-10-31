<?php

namespace App\Entity;

use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\SousCategorieRefRepository;
use Symfony\Component\Serializer\Annotation\Groups;
#[ApiResource(operations: [new Get(controller: 'App\\Entity\\NotFoundAction', output: false), new GetCollection()], paginationEnabled: false)]
#[ORM\Entity(repositoryClass: SousCategorieRefRepository::class)]
#[ApiFilter(filterClass: SearchFilter::class, properties: ['categorie_ref' => 'exact', 'sous_categorie_ref' => 'word_start'])]
class SousCategorieRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[Groups('produit')]
    #[ORM\Column(type: 'string', length: 255)]
    private $sous_categorie_ref;

    #[Groups('produit')]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $sous_categorie_ref_en;

    #[Groups('produit')]
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
