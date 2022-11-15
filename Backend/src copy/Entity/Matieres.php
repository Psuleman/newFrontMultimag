<?php

namespace App\Entity;

use ApiPlatform\Metadata\Link;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\MatieresRepository;

#[ORM\Entity(repositoryClass: MatieresRepository::class)]
class Matieres
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Link(toProperty: 'matiere')]
    #[ORM\Column(length: 255)]
    private ?string $matiere = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $matiere_en = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMatiere(): ?string
    {
        return $this->matiere;
    }

    public function setMatiere(string $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    public function getMatiereEn(): ?string
    {
        return $this->matiere_en;
    }

    public function setMatiereEn(?string $matiere_en): self
    {
        $this->matiere_en = $matiere_en;

        return $this;
    }
}
