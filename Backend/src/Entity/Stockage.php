<?php

namespace App\Entity;

use App\Repository\StockageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource()]
#[ORM\Entity(repositoryClass: StockageRepository::class)]
class Stockage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups('produit:read')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_0 = null;

    #[Groups('produit:read')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_3 = null;

    #[Groups('produit:read')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_7 = null;

    #[Groups('produit:read')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_9 = null;

    #[ORM\Column(nullable: true)]
    private ?int $stock_11 = null;

    #[ORM\Column(nullable: true)]
    private ?int $stock_12 = null;

    #[Groups('produit:read')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_14 = null;

    #[Groups('produit:read')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_18 = null;

    #[ORM\Column(nullable: true)]
    private ?int $stock_20 = null;

    #[ORM\Column(nullable: true)]
    private ?int $stock_60 = null;

    #[ORM\ManyToOne(inversedBy: 'stockages')]
    private ?Variants $variant_sku = null;




    public function __construct()
    {
        $this->variants = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStock0(): ?int
    {
        return $this->stock_0;
    }

    public function setStock0(int $stock_0): self
    {
        $this->stock_0 = $stock_0;

        return $this;
    }

    public function getStock3(): ?int
    {
        return $this->stock_3;
    }

    public function setStock3(int $stock_3): self
    {
        $this->stock_3 = $stock_3;

        return $this;
    }

    public function getStock7(): ?int
    {
        return $this->stock_7;
    }

    public function setStock7(int $stock_7): self
    {
        $this->stock_7 = $stock_7;

        return $this;
    }

    public function getStock9(): ?int
    {
        return $this->stock_9;
    }

    public function setStock9(int $stock_9): self
    {
        $this->stock_9 = $stock_9;

        return $this;
    }

    public function getStock11(): ?int
    {
        return $this->stock_11;
    }

    public function setStock11(int $stock_11): self
    {
        $this->stock_11 = $stock_11;

        return $this;
    }

    public function getStock12(): ?int
    {
        return $this->stock_12;
    }

    public function setStock12(int $stock_12): self
    {
        $this->stock_12 = $stock_12;

        return $this;
    }

    public function getStock14(): ?int
    {
        return $this->stock_14;
    }

    public function setStock14(int $stock_14): self
    {
        $this->stock_14 = $stock_14;

        return $this;
    }

    public function getStock18(): ?int
    {
        return $this->stock_18;
    }

    public function setStock18(int $stock_18): self
    {
        $this->stock_18 = $stock_18;

        return $this;
    }

    public function getStock20(): ?int
    {
        return $this->stock_20;
    }

    public function setStock20(int $stock_20): self
    {
        $this->stock_20 = $stock_20;

        return $this;
    }

    public function getStock60(): ?int
    {
        return $this->stock_60;
    }

    public function setStock60(int $stock_60): self
    {
        $this->stock_60 = $stock_60;

        return $this;
    }

    public function getVariantSku(): ?Variants
    {
        return $this->variant_sku;
    }

    public function setVariantSku(?Variants $variant_sku): self
    {
        $this->variant_sku = $variant_sku;

        return $this;
    }


}
