<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\GetCollection;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource(
    operations: [ new Post() ]
)]
#[ApiResource(
    uriTemplate: '/companies/{companyId}/employees/{id}',
    uriVariables: [
        'companyId' => new Link(fromClass: Company::class, toProperty: 'company'),
        'id' => new Link(fromClass: Employe::class),
    ],
    operations: [ new Get() ]
)]
#[ApiResource(
    uriTemplate: '/companies/{companyId}/employees',
    uriVariables: [
        'companyId' => new Link(fromClass: Company::class, toProperty: 'company'),
    ],
    operations: [ new GetCollection() ]
)]
#[ORM\Entity(repositoryClass: EmployeRepository::class)]
class Employe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $employe = null;

    #[ORM\ManyToOne(cascade: ['persist'])]
    private ?Company $company = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmploye(): ?string
    {
        return $this->employe;
    }

    public function setEmploye(string $employe): self
    {
        $this->employe = $employe;

        return $this;
    }

    public function getCompany(): ?Company
    {
        return $this->company;
    }

    public function setCompany(?Company $company): self
    {
        $this->company = $company;

        return $this;
    }
}
