<?php

namespace App\Entity;

use App\Repository\PaysRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
#[ORM\Entity(repositoryClass: PaysRepository::class)]
class Pays
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[Groups('produit:read')]
    #[ORM\Column(type: 'string', length: 255)]
    private $pays;

    #[ORM\ManyToOne(targetEntity: Continents::class)]
    private $continent;

    #[ORM\ManyToMany(targetEntity: Tarifs::class, mappedBy: 'pays')]
    private Collection $tarifs;

    public function __construct(array $tab=[])
    {
        if($tab){
            if($tab["pays"])
                $this->setPays($tab["pays"]);
        }
        $this->tarifs = new ArrayCollection();
    }    


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(string $pays): self
    {
        $this->pays = $pays;

        return $this;
    }

    public function getContinent(): ?Continents
    {
        return $this->continent;
    }

    public function setContinent(?Continents $continent): self
    {
        $this->continent = $continent;

        return $this;
    }

    /**
     * @return Collection<int, Tarifs>
     */
    public function getTarifs(): Collection
    {
        return $this->tarifs;
    }

    public function addTarif(Tarifs $tarif): self
    {
        if (!$this->tarifs->contains($tarif)) {
            $this->tarifs->add($tarif);
            $tarif->addPay($this);
        }

        return $this;
    }

    public function removeTarif(Tarifs $tarif): self
    {
        if ($this->tarifs->removeElement($tarif)) {
            $tarif->removePay($this);
        }

        return $this;
    }
}
