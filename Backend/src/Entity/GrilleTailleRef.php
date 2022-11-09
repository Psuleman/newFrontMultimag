<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiFilter;
use App\Repository\GrilleTailleRefRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    operations: [
        new Get(
            normalizationContext: ['groups' => ['grilletailleRef']]
        ), 
        new GetCollection(
            normalizationContext: ['groups' => ['grilletailleRef']]
            )
        ], 
        paginationEnabled: false
        )
]
#[ApiFilter(SearchFilter::class, properties: ['grilleTailleRef' => 'exact'])]
#[ORM\Entity(repositoryClass: GrilleTailleRefRepository::class)]
class GrilleTailleRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['grilletailleRef'])]
    private $grilleTailleRef;

    #[Groups(['grilletailleRef'])]
    #[ORM\OneToMany(mappedBy: 'grille_taille_ref', targetEntity: TailleRef::class)]
    private Collection $tailleRefs;
    
    public function __construct(array $tab = [])
    {
        if ($tab) {
            if ($tab["grilleTailleRef"]) {
                $this->setGrilleTailleRef($tab["grilleTailleRef"]);
            }
        }
        $this->tailleRefs = new ArrayCollection();
    }
    public function getId() : ?int
    {
        return $this->id;
    }
    public function getGrilleTailleRef() : ?string
    {
        return $this->grilleTailleRef;
    }
    public function setGrilleTailleRef(string $grilleTailleRef) : self
    {
        $this->grilleTailleRef = $grilleTailleRef;
        return $this;
    }

    /**
     * @return Collection<int, TailleRef>
     */
    public function getTailleRefs(): Collection
    {
        return $this->tailleRefs;
    }

    public function addTailleRef(TailleRef $tailleRef): self
    {
        if (!$this->tailleRefs->contains($tailleRef)) {
            $this->tailleRefs->add($tailleRef);
            $tailleRef->setGrilleTailleRef($this);
        }

        return $this;
    }

    public function removeTailleRef(TailleRef $tailleRef): self
    {
        if ($this->tailleRefs->removeElement($tailleRef)) {
            // set the owning side to null (unless already changed)
            if ($tailleRef->getGrilleTailleRef() === $this) {
                $tailleRef->setGrilleTailleRef(null);
            }
        }

        return $this;
    }
}
