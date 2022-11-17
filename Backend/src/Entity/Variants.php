<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\VariantsRepository;
use ApiPlatform\Metadata\GetCollection;
use App\Entity\Variants as EntityVariants;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    normalizationContext: ['groups'=>["produit", "variants"]],
    operations: [
        new Get(),
        new GetCollection()
    ]
)]
// #[ApiResource(
//     operations: [
//         new Get(
//             normalizationContext: ['groups' => ['produit', 'variants']]
//         ),
//         new GetCollection(
//             normalizationContext: ['groups' => ['produit', 'variants']]
//         )    
//     ]

// )]
// #[ApiResource(
//     uriTemplate: "/variants/{id}/taille_refs/{idTailleRef}",
//     uriVariables: [
//         "id"=> new Link(fromClass: Variants::class),
//         "idTailleRef" => new Link(fromClass: TailleRef::class, toProperty: "taille_ref")
//     ],
//     operations: [
//         new GetCollection()
//     ]
// )]
#[Post(
    denormalizationContext: ['groups'=> ['variants']]
)]
#[ORM\Entity(repositoryClass: VariantsRepository::class)]
class Variants
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('produit')]
    private ?int $id = null;

    #[ORM\ManyToOne()]
    private ?Produits $sku = null;

    #[Groups(['produit', 'variants'])]
    #[ORM\Column(length: 255)]
    private ?string $taille_fnr = null;

    #[Groups(['produit', 'variants'])]
    #[ORM\ManyToOne(cascade: ['persist'])]
    private ?TailleRef $taille_ref = null;

    #[Groups(['produit', 'variants'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $variant_sku = null;

    #[Groups('produit')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_0 = null;

    #[Groups('produit')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_3 = null;

    #[Groups('produit')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_7 = null;

    #[Groups('produit')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_9 = null;

    #[ORM\Column(nullable: true)]
    private ?int $stock_11 = null;

    #[ORM\Column(nullable: true)]
    private ?int $stock_12 = null;

    #[Groups('produit')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_14 = null;

    #[Groups('produit')]
    #[ORM\Column(nullable: true)]
    private ?int $stock_18 = null;

    #[ORM\Column(nullable: true)]
    private ?int $stock_20 = null;

    #[ORM\Column(nullable: true)]
    private ?int $stock_60 = null;
    
    public function __construct()
    {
        $this->stockages = new ArrayCollection();
    }
    public function getId() : ?int
    {
        return $this->id;
    }
    public function getSku() : ?Produits
    {
        return $this->sku;
    }
    public function setSku(?Produits $sku) : self
    {
        $this->sku = $sku;
        return $this;
    }
    public function getTailleFnr() : ?string
    {
        return $this->taille_fnr;
    }
    public function setTailleFnr(string $taille_fnr) : self
    {
        $this->taille_fnr = $taille_fnr;
        return $this;
    }
    public function getTailleRef() : ?TailleRef
    {
        return $this->taille_ref;
    }
    public function setTailleRef(?TailleRef $taille_ref) : self
    {
        $this->taille_ref = $taille_ref;
        return $this;
    }
    public function getVariantSku() : ?string
    {
        return $this->variant_sku;
    }
    public function setVariantSku(?string $variant_sku) : self
    {
        $this->variant_sku = $variant_sku;
        return $this;
    }
    public function getStock0() : ?int
    {
        return $this->stock_0;
    }
    public function setStock0(int $stock_0) : self
    {
        $this->stock_0 = $stock_0;
        return $this;
    }
    public function getStock3() : ?int
    {
        return $this->stock_3;
    }
    public function setStock3(int $stock_3) : self
    {
        $this->stock_3 = $stock_3;
        return $this;
    }
    public function getStock7() : ?int
    {
        return $this->stock_7;
    }
    public function setStock7(int $stock_7) : self
    {
        $this->stock_7 = $stock_7;
        return $this;
    }
    public function getStock9() : ?int
    {
        return $this->stock_9;
    }
    public function setStock9(int $stock_9) : self
    {
        $this->stock_9 = $stock_9;
        return $this;
    }
    public function getStock11() : ?int
    {
        return $this->stock_11;
    }
    public function setStock11(int $stock_11) : self
    {
        $this->stock_11 = $stock_11;
        return $this;
    }
    public function getStock12() : ?int
    {
        return $this->stock_12;
    }
    public function setStock12(int $stock_12) : self
    {
        $this->stock_12 = $stock_12;
        return $this;
    }
    public function getStock14() : ?int
    {
        return $this->stock_14;
    }
    public function setStock14(int $stock_14) : self
    {
        $this->stock_14 = $stock_14;
        return $this;
    }
    public function getStock18() : ?int
    {
        return $this->stock_18;
    }
    public function setStock18(int $stock_18) : self
    {
        $this->stock_18 = $stock_18;
        return $this;
    }
    public function getStock20() : ?int
    {
        return $this->stock_20;
    }
    public function setStock20(int $stock_20) : self
    {
        $this->stock_20 = $stock_20;
        return $this;
    }
    public function getStock60() : ?int
    {
        return $this->stock_60;
    }
    public function setStock60(int $stock_60) : self
    {
        $this->stock_60 = $stock_60;
        return $this;
    }
}
