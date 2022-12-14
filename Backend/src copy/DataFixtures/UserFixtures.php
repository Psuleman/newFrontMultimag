<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        $Users =[
            ["nom"=>"Blanchet", "prenom"=>"Nathalie", "email"=>"nathalie.blanchet@leclaireur.com", "password"=>"Ej0862E7FUBi", "service"=>"Logistique"],
            ["nom"=>"Boutique", "prenom"=>"Sevigne", "email"=>"sevigne@leclaireur.com", "password"=>"SgdcZYfBS3ex", "service"=>"Logistique"],
            ["nom"=>"Escuredo", "prenom"=>"Adrian", "email"=>"adrian@leclaireur.com", "password"=>"UYuvInyuxyHG", "service"=>"Logistique"],
            ["nom"=>"Gauthier", "prenom"=>"Manon", "email"=>"manon@leclaireur.com", "password"=>"MQEwTbkTjeCq", "service"=>"Logistique"],
            ["nom"=>"Germany", "prenom"=>"Victoire", "email"=>"victoire@leclaireur.com", "password"=>"GGh84KGDsyDl", "service"=>"Logistique"],
            ["nom"=>"Hadida", "prenom"=>"Charles", "email"=>"charles.hadida@leclaireur.com", "password"=>"wqV3iCcctbUA", "service"=>"Comptabilit√©"],
            ["nom"=>"Hadida", "prenom"=>"David", "email"=>"davidh@leclaireur.com", "password"=>"D8Inm6mChFEn", "service"=>"IT"],
            ["nom"=>"Leclaireur", "prenom"=>"Champs Elysee", "email"=>"champs@leclaireur.com", "password"=>"JFMaZ1gaKLvv", "service"=>"Logistique"],
            ["nom"=>"Leclaireur", "prenom"=>"Lydia", "email"=>"lydia@leclaireur.com", "password"=>"mkm3LA6Z55LQ", "service"=>"Comptabilit√©"],
            ["nom"=>"Leclaireur", "prenom"=>"Mael", "email"=>"mael@leclaireur.com", "password"=>"rdPhxFGTbmYl", "service"=>"e-shop"],
            ["nom"=>"Leclaireur", "prenom"=>"Patrice", "email"=>"patrice@leclaireur.com", "password"=>"uksTK5p7Y59m", "service"=>"Logistique"],
            ["nom"=>"Mallau", "prenom"=>"Thomas", "email"=>"thomas@leclaireur.com", "password"=>"ByDx8RB8TfhJ", "service"=>"Logistique"],
            ["nom"=>"Pereira", "prenom"=>"J√©r√©mie", "email"=>"jeremie@leclaireur.com", "password"=>"RBTvArmAnKgc", "service"=>"Logistique"],
            ["nom"=>"Poulsen", "prenom"=>"Victor", "email"=>"victor@leclaireur.com", "password"=>"xog64qeAmiDp", "service"=>"e-shop"],
            ["nom"=>"Suleman", "prenom"=>"Prisca", "email"=>"prisca@dalena.fr", "password"=>"Ime94Ms5v5OV", "service"=>"IT"],
            ["nom"=>"Yankioua", "prenom"=>"B√©n√©dicte", "email"=>"benedicte@leclaireur.com", "password"=>"cgb3SLKxJ2xx", "service"=>"e-shop"],
            ];

        foreach ($Users as $key => $value) {

            # code...
            $user = (new User)
            ->setNom($value["nom"])
            ->setPrenom($value["prenom"])
            ->setEmail($value["email"])
            ->setPassword($value["password"])
            ->setService($value["service"])
            ;

            $find = $manager->getRepository(User::class)->findOneBy([
                "email"=>$value["email"]
            ]);

            if(!$find){
                $manager->persist($user);
                $manager->flush();                
            }
        }

        $manager->flush();
    }
}
