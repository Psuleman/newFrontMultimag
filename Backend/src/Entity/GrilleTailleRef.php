<?php

namespace App\Entity;

use App\Repository\GrilleTailleRefRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    collectionOperations: [
        'get' => ['method' => 'get'],
    ],
    itemOperations: [
        'get'=>[
        "controller"=> NotFoundAction::class,
        "output" => false
        ],
    ],
    attributes: ["pagination_enabled" => false],
)]
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
        if($tab){
            if($tab["grilleTailleRef"])
                $this->setGrilleTailleRef($tab["grilleTailleRef"]);
        }
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGrilleTailleRef(): ?string
    {
        return $this->grilleTailleRef;
    }

    public function setGrilleTailleRef(string $grilleTailleRef): self
    {
        $this->grilleTailleRef = $grilleTailleRef;

        return $this;
    }
}
