<?php

namespace App\Entity;

use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use App\Repository\UserRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;
#[ApiResource(paginationEnabled: false, denormalizationContext: ['groups' => ['user', 'user:write']], normalizationContext: ['groups' => ['user', 'user:read']])]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiFilter(filterClass: SearchFilter::class, properties: ['email' => 'exact', 'tokenMail' => 'exact', 'tokenPassword' => 'exact'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[Groups(["user"])]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;
    #[Groups("user")]
    #[ORM\Column(type: 'string', length: 180, unique: true)]
    private $email;
    #[ORM\Column(type: 'json')]
    private $roles = [];
    #[ORM\Column(type: 'string')]
    private $password;
    #[Groups("user")]
    #[ORM\Column(type: 'string', length: 255)]
    private $nom;
    #[Groups("user")]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $prenom;
    #[Groups("user:write")]
    #[SerializedName("password")]
    private ?string $plainPassword = null;
    #[Groups("user:write")]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tokenMail = null;
    #[Groups("user:write")]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tokenPassword = null;
    #[Groups("user:read")]
    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateTokenMail = null;
    #[Groups("user:read")]
    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateTokenPassword = null;
    #[Groups("user:write")]
    private ?bool $activeMail = null;
    #[Groups("user:write")]
    private ?bool $activePassword = null;
    #[Groups("user:write")]
    private ?bool $newMailActiveCompte = null;
    #[Groups("user")]
    #[ORM\Column(length: 255)]
    private ?string $service = null;
    public function getId() : ?int
    {
        return $this->id;
    }
    public function getEmail() : ?string
    {
        return $this->email;
    }
    public function setEmail(string $email) : self
    {
        $this->email = $email;
        return $this;
    }
    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier() : string
    {
        return (string) $this->email;
    }
    /**
     * @see UserInterface
     */
    public function getRoles() : array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';
        return array_unique($roles);
    }
    public function setRoles(array $roles) : self
    {
        $this->roles = $roles;
        return $this;
    }
    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword() : string
    {
        return $this->password;
    }
    public function setPassword(string $password) : self
    {
        $this->password = $password;
        return $this;
    }
    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        $this->plainPassword = null;
    }
    public function getNom() : ?string
    {
        return $this->nom;
    }
    public function setNom(string $nom) : self
    {
        $this->nom = $nom;
        return $this;
    }
    public function getPrenom() : ?string
    {
        return $this->prenom;
    }
    public function setPrenom(?string $prenom) : self
    {
        $this->prenom = $prenom;
        return $this;
    }
    public function getPlainPassword() : ?string
    {
        return $this->plainPassword;
    }
    public function setPlainPassword(string $plainPassword) : self
    {
        $this->plainPassword = $plainPassword;
        return $this;
    }
    public function getTokenMail() : ?string
    {
        return $this->tokenMail;
    }
    public function setTokenMail(?string $tokenMail) : self
    {
        $this->tokenMail = $tokenMail;
        return $this;
    }
    public function getTokenPassword() : ?string
    {
        return $this->tokenPassword;
    }
    public function setTokenPassword(?string $tokenPassword) : self
    {
        $this->tokenPassword = $tokenPassword;
        return $this;
    }
    public function getDateTokenMail() : ?\DateTimeInterface
    {
        return $this->dateTokenMail;
    }
    public function setDateTokenMail(?\DateTimeInterface $dateTokenMail) : self
    {
        $this->dateTokenMail = $dateTokenMail;
        return $this;
    }
    public function getDateTokenPassword() : ?\DateTimeInterface
    {
        return $this->dateTokenPassword;
    }
    public function setDateTokenPassword(?\DateTimeInterface $dateTokenPassword) : self
    {
        $this->dateTokenPassword = $dateTokenPassword;
        return $this;
    }
    public function isActiveMail() : ?bool
    {
        return $this->activeMail;
    }
    public function setActiveMail(?bool $activeMail) : self
    {
        $this->activeMail = $activeMail;
        return $this;
    }
    public function isActivePassword() : ?bool
    {
        return $this->activePassword;
    }
    public function setActivePassword(?bool $activePassword) : self
    {
        $this->activePassword = $activePassword;
        return $this;
    }
    public function isNewMailActiveCompte() : ?bool
    {
        return $this->newMailActiveCompte;
    }
    public function setNewMailActiveCompte(?bool $newMailActiveCompte) : self
    {
        $this->newMailActiveCompte = $newMailActiveCompte;
        return $this;
    }
    public function getService() : ?string
    {
        return $this->service;
    }
    public function setService(string $service) : self
    {
        $this->service = $service;
        return $this;
    }
}
