<?php

namespace App\DataFixtures;

use App\Entity\CategorieRef;



use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategorieRefFixtures extends Fixture
{
	public function load(ObjectManager $manager): void
	{



		$categorieRef = [
			["categorie_ref"=>"Vêtements", "categorie_ref_en"=>"Clothing "],
			["categorie_ref"=>"Chaussures", "categorie_ref_en"=>"Shoes "],
			["categorie_ref"=>"Sacs", "categorie_ref_en"=>"Bags "],
			["categorie_ref"=>"Accessoires", "categorie_ref_en"=>"Accessories "],
			["categorie_ref"=>"Bijoux & Montres", "categorie_ref_en"=>"Jewelry & Watches "],
			["categorie_ref"=>"Art", "categorie_ref_en"=>"Art "],
			["categorie_ref"=>"Arts de la table", "categorie_ref_en"=>"Dining "],
			["categorie_ref"=>"Bougies & Diffuseurs", "categorie_ref_en"=>"Candles & Diffusers "],
			["categorie_ref"=>"Décoration", "categorie_ref_en"=>"Decoration "],
			["categorie_ref"=>"Luminaires", "categorie_ref_en"=>"Lighting "],
			["categorie_ref"=>"Meubles", "categorie_ref_en"=>"Furnitures "],
			["categorie_ref"=>"Lifestyle", "categorie_ref_en"=>"Lifestyle "],
			];

		sort($categorieRef);

		foreach ($categorieRef as $key => $value) {
			// code...
			$value["categorie_ref"] = trim($value["categorie_ref"]);
			$value["categorie_ref_en"] = trim($value["categorie_ref_en"]);
			
			$categorieRef = new CategorieRef($value);
			$find = $manager->getRepository(CategorieRef::class)->findOneBy([
				"categorie_ref" => $categorieRef->getCategorieRef(),
			]);


            if(!$find){
                $manager->persist($categorieRef);
                $manager->flush();                
            }
		}
	}
}




