<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Link;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\MarqueRefRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

#[ApiResource(
    operations: [
        new Get(controller: 'App\\Entity\\NotFoundAction', output: false), 
        new GetCollection(),
        new Post(),
        new Patch()
    ],
     paginationEnabled: false,
     )]
#[ApiFilter(SearchFilter::class, properties: ['marque' => 'partial'])]
#[ORM\Entity(repositoryClass: MarqueRefRepository::class)]
class MarqueRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['produit'])]
    private $marque;

    #[ORM\OneToMany(mappedBy: 'marque', targetEntity: Produits::class)]
    private Collection $produits;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $editorial = null;
      
    public function __construct($marqueString="")
    {
        if ($marqueString) {
            $this->setMarque($marqueString);
        }
        $this->produits = new ArrayCollection();
    }
    public function getId() : ?int
    {
        return $this->id;
    }
    public function getMarque() : ?string
    {
        return $this->marque;
    }
    public function setMarque(string $marque) : self
    {
        $this->marque = $marque;
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
            $produit->setMarque($this);
        }

        return $this;
    }

    public function removeProduit(Produits $produit): self
    {
        if ($this->produits->removeElement($produit)) {
            //set the owning side to null (unless already changed)
            if ($produit->getMarque() === $this) {
                $produit->setMarque(null);
            }
        }

        return $this;
    }

    public function getEditorial(): ?string
    {
        return $this->editorial;
    }

    public function setEditorial(?string $editorial): self
    {
        $this->editorial = $editorial;

        return $this;
    }

}
