<?php

namespace App\DataFixtures;

use App\Entity\GrilleTailleRef;



use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class GrilleTailleRefFixtures extends Fixture
{
	public function load(ObjectManager $manager): void
	{

		$grilleTailleRefTab = [
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
			["grilleTailleRef" => "MM-A"],
			["grilleTailleRef" => "MM-B"],
			["grilleTailleRef" => "MM-C"],
			["grilleTailleRef" => "MM-CD"],
			["grilleTailleRef" => "MM-CDI"],
			["grilleTailleRef" => "MM-CDV"],
			["grilleTailleRef" => "MM-CDX"],
			["grilleTailleRef" => "MM-CI"],
			["grilleTailleRef" => "MM-D"],
			["grilleTailleRef" => "MM-DI"],
			["grilleTailleRef" => "MM-DV"],
			["grilleTailleRef" => "MM-E"],
			["grilleTailleRef" => "MM-F"],
			["grilleTailleRef" => "MM-FJ"],
			["grilleTailleRef" => "MM-FY"],
			["grilleTailleRef" => "MM-G"],
			["grilleTailleRef" => "MM-GB"],
			["grilleTailleRef" => "MM-GH"],
			["grilleTailleRef" => "MM-GN"],
			["grilleTailleRef" => "MM-GV"],
			["grilleTailleRef" => "MM-H"],
			["grilleTailleRef" => "MM-HC"],
			["grilleTailleRef" => "MM-HG"],
			["grilleTailleRef" => "MM-HI"],
			["grilleTailleRef" => "MM-HU"],
			["grilleTailleRef" => "MM-HUM"],
			["grilleTailleRef" => "MM-I"],
			["grilleTailleRef" => "MM-IM"],
			["grilleTailleRef" => "MM-J"],
			["grilleTailleRef" => "MM-K"],
			["grilleTailleRef" => "MM-KL"],
			["grilleTailleRef" => "MM-Ka"],
			["grilleTailleRef" => "MM-L"],
			["grilleTailleRef" => "MM-LM"],
			["grilleTailleRef" => "MM-M"],
			["grilleTailleRef" => "MM-MK"],
			["grilleTailleRef" => "MM-ML"],
			["grilleTailleRef" => "MM-MR"],
			["grilleTailleRef" => "MM-MRl"],
			["grilleTailleRef" => "MM-Ml"],
			["grilleTailleRef" => "MM-N"],
			["grilleTailleRef" => "MM-O"],
			["grilleTailleRef" => "MM-OCDV"],
			["grilleTailleRef" => "MM-P"],
			["grilleTailleRef" => "MM-PQ"],
			["grilleTailleRef" => "MM-PQRS"],
			["grilleTailleRef" => "MM-PW"],
			["grilleTailleRef" => "MM-Q"],
			["grilleTailleRef" => "MM-QF"],
			["grilleTailleRef" => "MM-QK"],
			["grilleTailleRef" => "MM-QL"],
			["grilleTailleRef" => "MM-QM"],
			["grilleTailleRef" => "MM-QP"],
			["grilleTailleRef" => "MM-R"],
			["grilleTailleRef" => "MM-S"],
			["grilleTailleRef" => "MM-SP"],
			["grilleTailleRef" => "MM-Sj"],
			["grilleTailleRef" => "MM-T"],
			["grilleTailleRef" => "MM-TY"],
			["grilleTailleRef" => "MM-Tb"],
			["grilleTailleRef" => "MM-U"],
			["grilleTailleRef" => "MM-UE"],
			["grilleTailleRef" => "MM-UH"],
			["grilleTailleRef" => "MM-UL"],
			["grilleTailleRef" => "MM-UM"],
			["grilleTailleRef" => "MM-UMH"],
			["grilleTailleRef" => "MM-UML"],
			["grilleTailleRef" => "MM-UMR"],
			["grilleTailleRef" => "MM-UMl"],
			["grilleTailleRef" => "MM-V"],
			["grilleTailleRef" => "MM-W"],
			["grilleTailleRef" => "MM-WY"],
			["grilleTailleRef" => "MM-Wb"],
			["grilleTailleRef" => "MM-Ww"],
			["grilleTailleRef" => "MM-X"],
			["grilleTailleRef" => "MM-XS"],
			["grilleTailleRef" => "MM-Y"],
			["grilleTailleRef" => "MM-YT"],
			["grilleTailleRef" => "MM-Z"],
			["grilleTailleRef" => "MM-ZE"],
			["grilleTailleRef" => "MM-a"],
			["grilleTailleRef" => "MM-aT"],
			["grilleTailleRef" => "MM-ab"],
			["grilleTailleRef" => "MM-b"],
			["grilleTailleRef" => "MM-c"],
			["grilleTailleRef" => "MM-e"],
			["grilleTailleRef" => "MM-f"],
			["grilleTailleRef" => "MM-h"],
			["grilleTailleRef" => "MM-hI"],
			["grilleTailleRef" => "MM-i"],
			["grilleTailleRef" => "MM-j"],
			["grilleTailleRef" => "MM-jP"],
			["grilleTailleRef" => "MM-jk"],
			["grilleTailleRef" => "MM-k"],
			["grilleTailleRef" => "MM-l"],
			["grilleTailleRef" => "MM-n"],
			["grilleTailleRef" => "MM-o"],
			["grilleTailleRef" => "MM-p"],
			["grilleTailleRef" => "MM-pqr"],
			["grilleTailleRef" => "MM-pqrs"],
			["grilleTailleRef" => "MM-q"],
			["grilleTailleRef" => "MM-qrs"],
			["grilleTailleRef" => "MM-r"],
			["grilleTailleRef" => "MM-rs"],
			["grilleTailleRef" => "MM-s"],
			["grilleTailleRef" => "MM-w"],
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
			["grilleTailleRef" => "Vêtements ÉTATS-UNIS"],
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




