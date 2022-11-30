<?php

namespace App\State;

use App\Entity\User;
use ApiPlatform\Metadata\Operation;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\State\ProcessorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserStateProcessor implements ProcessorInterface
{
    private $_entityManager;
    private $_passwordEncoder;

    public function __construct(
        EntityManagerInterface $entityManager,
        UserPasswordHasherInterface $passwordEncoder,
    ) {
        $this->_entityManager = $entityManager;
        $this->_passwordEncoder = $passwordEncoder;
    }
    public function process($data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        // Handle the state
                /**
         * Enregistrer un utilisateur
         * modification mot de passe
         * modification nom et prénom
         */

        //recherche de l'utilisateur
        $find = $this->_entityManager->getRepository(User::class)->findOneBy([
            'email' => $data->getEmail()
        ]);

        if($find){
            //modification mot de passe
            if($data->getPlainPassword()){
                $find->setPassword(
                    $this->_passwordEncoder->hashPassword(
                        $data,
                        $data->getPlainPassword()
                    )
                );
                $data->eraseCredentials();       
            }
            //Utilisateur existe
            if($data->getNom() && $data->getPrenom()){
                //modification depuis la page mon compte
            }  
        }
        else{
            //nouveau utilisateur
            if ($data->getPlainPassword()) {
                $data->setPassword(
                    $this->_passwordEncoder->hashPassword(
                        $data,
                        $data->getPlainPassword()
                    )
                ); 
                $data->eraseCredentials();       
            }            
        }
        
    if($find)
        $data = $find;

    $this->_entityManager->persist($data);
    $this->_entityManager->flush();
    }
}
