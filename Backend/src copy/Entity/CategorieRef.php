<?php

namespace App\Entity;

use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiFilter;
use App\Repository\CategorieRefRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
#[ApiResource(operations: [new Get(controller: 'App\\Entity\\NotFoundAction', output: false), new GetCollection()], paginationEnabled: false)]
#[ORM\Entity(repositoryClass: CategorieRefRepository::class)]
class CategorieRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;
    
    #[Groups('produit')]
    #[ORM\Column(type: 'string', length: 255)]
    private $categorie_ref;
    
    #[Groups('produit')]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $categorie_ref_en;
    
    public function __construct($tab = [])
    {
        if ($tab) {
            if ($tab["categorie_ref"]) {
                $this->setCategorieRef($tab["categorie_ref"]);
            }
            if ($tab["categorie_ref_en"]) {
                $this->setCategorieRefEn($tab["categorie_ref_en"]);
            }
        }
    }
    public function getId() : ?int
    {
        return $this->id;
    }
    public function getCategorieRef() : ?string
    {
        return $this->categorie_ref;
    }
    public function setCategorieRef(string $categorie_ref) : self
    {
        $this->categorie_ref = $categorie_ref;
        return $this;
    }
    public function getCategorieRefEn() : ?string
    {
        return $this->categorie_ref_en;
    }
    public function setCategorieRefEn(?string $categorie_ref_en) : self
    {
        $this->categorie_ref_en = $categorie_ref_en;
        return $this;
    }
}
