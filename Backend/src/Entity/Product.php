<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiSubresource;
use App\Entity\Test;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Patch;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProductRepository;
use ApiPlatform\Metadata\GetCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

// #[ApiResource(
//     uriTemplate: '/products/{id}/tests.{_format}',
//     uriVariables: [
//         'id' => new Link(fromClass: Product::class, fromProperty: 'test')
//     ], 
//     operations: [new GetCollection()]
// )]
// #[ApiResource(
//     operations: [
//         new GetCollection(),
//         new Post(
//             denormalizationContext: ['groups' => ['product']],
//         ),
//         new Patch(
//             denormalizationContext: ['groups' => ['product']],
//         )
//     ]
// )]
#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('product')]
    private ?int $id = null;

    #[ORM\Column]
    #[Groups('product')]
    private ?int $sku = null;

    #[Groups('product')]
    #[ApiSubresource()]
    #[ORM\OneToMany(mappedBy: 'product', targetEntity: Test::class, orphanRemoval: true, cascade: ['persist'])]
    private Collection $test;

    public function __construct()
    {
        $this->test = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSku(): ?int
    {
        return $this->sku;
    }

    public function setSku(int $sku): self
    {
        $this->sku = $sku;

        return $this;
    }

    /**
     * @return Collection<int, Test>
     */
    public function getTest(): Collection
    {
        return $this->test;
    }

    public function addTest(Test $test): self
    {
        if (!$this->test->contains($test)) {
            $this->test->add($test);
            $test->setProduct($this);
        }

        return $this;
    }

    public function removeTest(Test $test): self
    {
        if ($this->test->removeElement($test)) {
            // set the owning side to null (unless already changed)
            if ($test->getProduct() === $this) {
                $test->setProduct(null);
            }
        }

        return $this;
    }
}
