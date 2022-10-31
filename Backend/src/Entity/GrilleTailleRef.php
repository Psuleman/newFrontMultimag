<?php

namespace App\Entity;

use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiFilter;
use App\Repository\GrilleTailleRefRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
#[ApiResource(operations: [new Get(controller: 'App\\Entity\\NotFoundAction', output: false), new GetCollection()], paginationEnabled: false)]
#[ORM\Entity(repositoryClass: GrilleTailleRefRepository::class)]
class GrilleTailleRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;
    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['tailleRef:list'])]
    private $grilleTailleRef;
    public function __construct(array $tab = [])
    {
        if ($tab) {
            if ($tab["grilleTailleRef"]) {
                $this->setGrilleTailleRef($tab["grilleTailleRef"]);
            }
        }
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
}
