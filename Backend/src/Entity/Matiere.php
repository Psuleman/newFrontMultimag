<?php

namespace App\Entity;

use App\Repository\MatiereRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

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
#[ORM\Entity(repositoryClass: MatiereRepository::class)]
class Matiere
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $matiere;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_en;

    #[ORM\ManyToMany(targetEntity: Produits::class, mappedBy: 'matieres')]
    private Collection $produits;

    public function __construct($tab=[])
    {
        if($tab){
            if($tab["matiere"])
                $this->setMatiere($tab["matiere"]);
            
            if($tab["matiere_en"])
                $this->setMatiereEn($tab["matiere_en"]);
        }
        $this->produits = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, Produits>
     */
    public function getProduits(): Collection
    {
        return $this->produits;
    }

    public function addProduit(Produits $produit): self
    {
        if (!$this->produits->contains($produit)) {
            $this->produits->add($produit);
            $produit->addMatiere($this);
        }

        return $this;
    }

    public function removeProduit(Produits $produit): self
    {
        if ($this->produits->removeElement($produit)) {
            $produit->removeMatiere($this);
        }

        return $this;
    }
}
