<?php

namespace App\Entity;

use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiFilter;
use App\Repository\TailleRefRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;


#[ApiResource(operations: [
    new Get(controller: 'App\\Entity\\NotFoundAction', output: false), 
    new GetCollection(
        normalizationContext: ['groups' => ['tailleRef', 'grilletailleRef']])
    ], 
        paginationEnabled: false)
]

#[ORM\Entity(repositoryClass: TailleRefRepository::class)]
class TailleRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['tailleRef', 'grilletailleRef', 'variants'])]
    private $taille_ref;

    #[ORM\Column(type: 'string', length: 100)]
    #[Groups(['tailleRef', 'grilletailleRef'])]
    private $stock_id;

    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    #[Groups(['tailleRef', 'grilletailleRef'])]
    private $stock_code;

    #[ORM\ManyToOne(inversedBy: 'tailleRefs', cascade: ['persist'])]
    private ?GrilleTailleRef $grille_taille_ref = null;
    
    public function __construct($tab = [])
    {
        if ($tab) {
            if ($tab["taille_ref"]) {
                $this->setTailleRef($tab["taille_ref"]);
            }
            if ($tab["grille_taille_ref"]) {
                $this->setGrilleTailleRef($tab["grille_taille_ref"]);
            }
            if ($tab["stock_id"]) {
                $this->setStockId($tab["stock_id"]);
            }
            if ($tab["stock_code"]) {
                $this->setStockCode($tab["stock_code"]);
            }
        }
    }
    public function getId() : ?int
    {
        return $this->id;
    }
    public function getTailleRef() : ?string
    {
        return $this->taille_ref;
    }
    public function setTailleRef(string $taille_ref) : self
    {
        $this->taille_ref = $taille_ref;
        return $this;
    }
    public function getGrilleTailleRef() : ?GrilleTailleRef
    {
        return $this->grille_taille_ref;
    }
    public function setGrilleTailleRef(?GrilleTailleRef $grille_taille_ref) : self
    {
        $this->grille_taille_ref = $grille_taille_ref;
        return $this;
    }
    public function getStockId() : ?string
    {
        return $this->stock_id;
    }
    public function setStockId(string $stock_id) : self
    {
        $this->stock_id = $stock_id;
        return $this;
    }
    public function getStockCode() : ?string
    {
        return $this->stock_code;
    }
    public function setStockCode(?string $stock_code) : self
    {
        $this->stock_code = $stock_code;
        return $this;
    }

}
