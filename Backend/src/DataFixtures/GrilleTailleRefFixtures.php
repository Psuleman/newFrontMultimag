<?php

namespace App\DataFixtures;

use App\Entity\GrilleTailleRef;



use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class GrilleTailleRefFixtures extends Fixture
{
	public function load(ObjectManager $manager): void
	{

		$grilleTailleRefTab =[
			["grilleTailleRef" => "Bagues FRANCE"],
			["grilleTailleRef" => "Bagues ITALIE"],
			["grilleTailleRef" => "Bagues ROYAUME-UNI"],
			["grilleTailleRef" => "Bagues STANDARD"],
			["grilleTailleRef" => "Bagues ÉTATS-UNIS"],
			["grilleTailleRef" => "Bracelets NUMERIQUE"],
			["grilleTailleRef" => "Bracelets STANDARD"],
			["grilleTailleRef" => "Ceintures CM"],
			["grilleTailleRef" => "Ceintures POUCES"],
			["grilleTailleRef" => "Ceintures STANDARD"],
			["grilleTailleRef" => "Chapeaux EUROPE"],
			["grilleTailleRef" => "Chapeaux ROYAUME-UNI"],
			["grilleTailleRef" => "Chapeaux STANDARD"],
			["grilleTailleRef" => "Chapeaux STANDARD Numérique"],
			["grilleTailleRef" => "Chapeaux ÉTATS-UNIS"],
			["grilleTailleRef" => "Chaussettes STANDARD Numerique"],
			["grilleTailleRef" => "Chaussures BRÉSIL"],
			["grilleTailleRef" => "Chaussures CHINE"],
			["grilleTailleRef" => "Chaussures EUROPE"],
			["grilleTailleRef" => "Chaussures FRANCE"],
			["grilleTailleRef" => "Chaussures ITALIE"],
			["grilleTailleRef" => "Chaussures JAPON"],
			["grilleTailleRef" => "Chaussures ROYAUME-UNI"],
			["grilleTailleRef" => "Chaussures ÉTATS-UNIS"],
			["grilleTailleRef" => "Chemises COL"],
			["grilleTailleRef" => "Chemises COL US"],
			["grilleTailleRef" => "Enfant"],
			["grilleTailleRef" => "Gants POUCES"],
			["grilleTailleRef" => "Gants STANDARD"],
			["grilleTailleRef" => "Jeans"],
			["grilleTailleRef" => "Lunettes MM"],
			["grilleTailleRef" => "Lunettes STANDARD"],
			["grilleTailleRef" => "Pantalons FRANCE"],
			["grilleTailleRef" => "Pantalons ITALIE"],
			["grilleTailleRef" => "Soutiens-gorge"],
			["grilleTailleRef" => "Taille Unique"],
			["grilleTailleRef" => "Vêtements AUSTRALIE"],
			["grilleTailleRef" => "Vêtements BRÉSIL"],
			["grilleTailleRef" => "Vêtements CHINE"],
			["grilleTailleRef" => "Vêtements DANEMARK"],
			["grilleTailleRef" => "Vêtements FRANCE Femme"],
			["grilleTailleRef" => "Vêtements FRANCE/ITALIE Homme"],
			["grilleTailleRef" => "Vêtements ITALIE Femme"],
			["grilleTailleRef" => "Vêtements JAPON"],
			["grilleTailleRef" => "Vêtements ROYAUME-UNI"],
			["grilleTailleRef" => "Vêtements RUSSIE"],
			["grilleTailleRef" => "Vêtements STANDARD"],
			["grilleTailleRef" => "Vêtements STANDARD Numerique"],
			["grilleTailleRef" => "Vêtements ÉTATS-UNIS"]
			];
			
		sort($grilleTailleRefTab);

		foreach ($grilleTailleRefTab as $key => $value) {
			// code...
			$value["grilleTailleRef"] = trim($value["grilleTailleRef"]);

			$grilleTailleRef = new GrilleTailleRef($value);
			$find = $manager->getRepository(GrilleTailleRef::class)->findOneBy([
				"grilleTailleRef" => $grilleTailleRef->getGrilleTailleRef(),
			]);


            //if(!$find){
                $manager->persist($grilleTailleRef);
                $manager->flush();                
            //}
		}
	}
}




