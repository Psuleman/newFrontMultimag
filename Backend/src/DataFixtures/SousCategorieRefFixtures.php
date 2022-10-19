<?php

namespace App\DataFixtures;

use App\Entity\SousCategorieRef;
use App\Entity\CategorieRef;


use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SousCategorieRefFixtures extends Fixture
{
	public function load(ObjectManager $manager): void
	{


		$sousCategorieRef = [
			["sous_categorie_ref"=>"Abat-jours", "sous_categorie_ref_en"=>"Lamp shades", "categorie_ref"=>"Luminaires"],
			["sous_categorie_ref"=>"Appareils de cuisine", "sous_categorie_ref_en"=>"Kitchen appliances", "categorie_ref"=>"Arts de la table"],
			["sous_categorie_ref"=>"Assiettes murales", "sous_categorie_ref_en"=>"Wall plates", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Assises", "sous_categorie_ref_en"=>"Seating", "categorie_ref"=>"Meubles"],
			["sous_categorie_ref"=>"Autres", "sous_categorie_ref_en"=>"Other", "categorie_ref"=>"Accessoires"],
			["sous_categorie_ref"=>"Autres accessoires", "sous_categorie_ref_en"=>"Other accessories", "categorie_ref"=>"Accessoires"],
			["sous_categorie_ref"=>"Bagues", "sous_categorie_ref_en"=>"Rings", "categorie_ref"=>"Bijoux & Montres"],
			["sous_categorie_ref"=>"Bagues", "sous_categorie_ref_en"=>"Rings ", "categorie_ref"=>"Bijoux & Montres"],
			["sous_categorie_ref"=>"Baskets", "sous_categorie_ref_en"=>"Sneakers", "categorie_ref"=>"Chaussures"],
			["sous_categorie_ref"=>"Bibliothèques", "sous_categorie_ref_en"=>"Bookcases", "categorie_ref"=>"Meubles"],
			["sous_categorie_ref"=>"Blousons", "sous_categorie_ref_en"=>"Jackets", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Bottes & Bottines", "sous_categorie_ref_en"=>"Boots & Ankle Boots", "categorie_ref"=>"Chaussures"],
			["sous_categorie_ref"=>"Boucles d'oreilles", "sous_categorie_ref_en"=>"Earrings", "categorie_ref"=>"Bijoux & Montres"],
			["sous_categorie_ref"=>"Boucles d'oreilles", "sous_categorie_ref_en"=>"Earrings ", "categorie_ref"=>"Bijoux & Montres"],
			["sous_categorie_ref"=>"Bougies parfumées", "sous_categorie_ref_en"=>"Scented candles", "categorie_ref"=>"Bougies & Diffuseurs"],
			["sous_categorie_ref"=>"Boutons de manchette ", "sous_categorie_ref_en"=>"Cufflinks", "categorie_ref"=>"Bijoux & Montres"],
			["sous_categorie_ref"=>"Boîtes", "sous_categorie_ref_en"=>"Boxes", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Bracelets", "sous_categorie_ref_en"=>"Bracelets", "categorie_ref"=>"Bijoux & Montres"],
			["sous_categorie_ref"=>"Cabas", "sous_categorie_ref_en"=>"Tote Bags", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Cabas", "sous_categorie_ref_en"=>"Tote bags ", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Cabinets & Commodes", "sous_categorie_ref_en"=>"Cabinets & Dressers", "categorie_ref"=>"Meubles"],
			["sous_categorie_ref"=>"Cadres", "sous_categorie_ref_en"=>"Frames", "categorie_ref"=>"Art"],
			["sous_categorie_ref"=>"Ceintures", "sous_categorie_ref_en"=>"Belts ", "categorie_ref"=>"Accessoires"],
			["sous_categorie_ref"=>"Cendriers", "sous_categorie_ref_en"=>"Ashtrays", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Chandeliers & Bougeoirs", "sous_categorie_ref_en"=>"Candlesticks & Candleholders", "categorie_ref"=>"Bougies & Diffuseurs"],
			["sous_categorie_ref"=>"Chapeaux & Bonnets", "sous_categorie_ref_en"=>"Hats & Beanies", "categorie_ref"=>"Accessoires"],
			["sous_categorie_ref"=>"Chaussettes", "sous_categorie_ref_en"=>"Socks", "categorie_ref"=>"Accessoires"],
			["sous_categorie_ref"=>"Chaussettes & Collants", "sous_categorie_ref_en"=>"Socks & Tights", "categorie_ref"=>"Accessoires"],
			["sous_categorie_ref"=>"Chaussures Plates", "sous_categorie_ref_en"=>"Flats", "categorie_ref"=>"Chaussures"],
			["sous_categorie_ref"=>"Chaussures plates", "sous_categorie_ref_en"=>"Flats", "categorie_ref"=>"Chaussures"],
			["sous_categorie_ref"=>"Chaussures à talons", "sous_categorie_ref_en"=>"High Heels", "categorie_ref"=>"Chaussures"],
			["sous_categorie_ref"=>"Chemises", "sous_categorie_ref_en"=>"Shirts", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Colliers", "sous_categorie_ref_en"=>"Necklaces", "categorie_ref"=>"Bijoux & Montres"],
			["sous_categorie_ref"=>"Colliers", "sous_categorie_ref_en"=>"Necklaces ", "categorie_ref"=>"Bijoux & Montres"],
			["sous_categorie_ref"=>"Combinaisons", "sous_categorie_ref_en"=>"Jumpsuits", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Corbeilles", "sous_categorie_ref_en"=>"Baskets & Bins", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Costumes & Smokings", "sous_categorie_ref_en"=>"Suits & Tuxedos", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Coussins", "sous_categorie_ref_en"=>"Pillows", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Couvertures & Plaids", "sous_categorie_ref_en"=>"Blankets & Throw", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Denim", "sous_categorie_ref_en"=>"Denim", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Diffuseurs", "sous_categorie_ref_en"=>"Diffusers", "categorie_ref"=>"Bougies & Diffuseurs"],
			["sous_categorie_ref"=>"Echarpes & Gants", "sous_categorie_ref_en"=>"Scarves & Gloves", "categorie_ref"=>"Accessoires"],
			["sous_categorie_ref"=>"Hauts", "sous_categorie_ref_en"=>"Tops", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Hauts & T-shirts", "sous_categorie_ref_en"=>"Tops & T-shirts", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Horloges", "sous_categorie_ref_en"=>"Clocks", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Jupes", "sous_categorie_ref_en"=>"Skirts", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Lampadaires", "sous_categorie_ref_en"=>"Floor lamps", "categorie_ref"=>"Luminaires"],
			["sous_categorie_ref"=>"Lampes de table", "sous_categorie_ref_en"=>"Table lamps", "categorie_ref"=>"Luminaires"],
			["sous_categorie_ref"=>"Luminaires muraux", "sous_categorie_ref_en"=>"Wall lights", "categorie_ref"=>"Luminaires"],
			["sous_categorie_ref"=>"Lunettes de Soleil", "sous_categorie_ref_en"=>"Sunglasses", "categorie_ref"=>"Accessoires"],
			["sous_categorie_ref"=>"Maillots de bain", "sous_categorie_ref_en"=>"Swimwear", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Maillots de bain", "sous_categorie_ref_en"=>"Swimwear ", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Manteaux & Vestes", "sous_categorie_ref_en"=>"Coats & Blazer", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Manteaux & Vestes", "sous_categorie_ref_en"=>"Coats & Blazers", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Miroirs", "sous_categorie_ref_en"=>"Mirrors", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Montres", "sous_categorie_ref_en"=>"Watches ", "categorie_ref"=>"Bijoux & Montres"],
			["sous_categorie_ref"=>"Orfèvrerie", "sous_categorie_ref_en"=>"Gold & Silverware", "categorie_ref"=>"Arts de la table"],
			["sous_categorie_ref"=>"Pantalons & Shorts", "sous_categorie_ref_en"=>"Trousers & Shorts", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Paravents", "sous_categorie_ref_en"=>"Screens", "categorie_ref"=>"Meubles"],
			["sous_categorie_ref"=>"Petite maroquinerie", "sous_categorie_ref_en"=>"Small leather goods", "categorie_ref"=>"Accessoires"],
			["sous_categorie_ref"=>"Pieds de lampe", "sous_categorie_ref_en"=>"Lamp bases", "categorie_ref"=>"Luminaires"],
			["sous_categorie_ref"=>"Plateaux & Tréteaux", "sous_categorie_ref_en"=>"Trays & Trestles", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Pochettes", "sous_categorie_ref_en"=>"Clutch Bags", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Pochettes", "sous_categorie_ref_en"=>"Clutch bags ", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Porte-parapluies", "sous_categorie_ref_en"=>"Umbrella stands", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Porte-revues & Serre-livres", "sous_categorie_ref_en"=>"Magazine racks & Bookends", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Pots-pourris Cristaux & Encens", "sous_categorie_ref_en"=>"Potpourris Crystals & Incense", "categorie_ref"=>"Bougies & Diffuseurs"],
			["sous_categorie_ref"=>"Pulls & Maille", "sous_categorie_ref_en"=>"Sweater & Knitwear ", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Robes", "sous_categorie_ref_en"=>"Dresses", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Sacs ceinture", "sous_categorie_ref_en"=>"Belt Bags", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Sacs ceinture", "sous_categorie_ref_en"=>"Belt bags", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Sacs à bandoulière", "sous_categorie_ref_en"=>"Shoulder Bags", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Sacs à bandoulière", "sous_categorie_ref_en"=>"Shoulder bags ", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Sacs à dos", "sous_categorie_ref_en"=>"Backpacks", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Sacs à dos", "sous_categorie_ref_en"=>"Backpacks ", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Sacs à main", "sous_categorie_ref_en"=>"Handbags", "categorie_ref"=>"Sacs"],
			["sous_categorie_ref"=>"Sandales", "sous_categorie_ref_en"=>"Sandals", "categorie_ref"=>"Chaussures"],
			["sous_categorie_ref"=>"Sandales", "sous_categorie_ref_en"=>"Sandals ", "categorie_ref"=>"Chaussures"],
			["sous_categorie_ref"=>"Sculptures", "sous_categorie_ref_en"=>"Sculptures", "categorie_ref"=>"Art"],
			["sous_categorie_ref"=>"Suspensions", "sous_categorie_ref_en"=>"Suspensions lamps", "categorie_ref"=>"Luminaires"],
			["sous_categorie_ref"=>"Tableaux", "sous_categorie_ref_en"=>"Paintings & Drawings", "categorie_ref"=>"Art"],
			["sous_categorie_ref"=>"Tables", "sous_categorie_ref_en"=>"Tables", "categorie_ref"=>"Meubles"],
			["sous_categorie_ref"=>"Tapis", "sous_categorie_ref_en"=>"Rugs", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Thé & Café", "sous_categorie_ref_en"=>"Tea & Coffee", "categorie_ref"=>"Arts de la table"],
			["sous_categorie_ref"=>"Vaisselle", "sous_categorie_ref_en"=>"Tableware", "categorie_ref"=>"Arts de la table"],
			["sous_categorie_ref"=>"Vases", "sous_categorie_ref_en"=>"Vases", "categorie_ref"=>"Décoration"],
			["sous_categorie_ref"=>"Verres", "sous_categorie_ref_en"=>"Drinking glasses", "categorie_ref"=>"Arts de la table"],
			["sous_categorie_ref"=>"Vêtements d'intérieur", "sous_categorie_ref_en"=>"Homewear", "categorie_ref"=>"Vêtements"],
			["sous_categorie_ref"=>"Écharpes & Gants", "sous_categorie_ref_en"=>"Scarves & Gloves", "categorie_ref"=>"Accessoires"],
			];
			
		sort($sousCategorieRef);

		foreach ($sousCategorieRef as $key => $value) { // a revoir
			// code...
			$value["sous_categorie_ref"] = trim($value["sous_categorie_ref"]);
			$value["sous_categorie_ref_en"] = trim($value["sous_categorie_ref_en"]);
	

			$find_category = $manager->getRepository(CategorieRef::class)->findOneBy([
				'categorie_ref' => $value["categorie_ref"]
			]);


			$sousCategorieRef = new SousCategorieRef($value);
			$sousCategorieRef->getCategorieRef($find_category);
			$find = $manager->getRepository(SousCategorieRef::class)->findOneBy([
				"sous_categorie_ref" => $sousCategorieRef->getSousCategorieRef(),
			]);


            if(!$find){
                $manager->persist($sousCategorieRef);
                $manager->flush();                
            }
		}
	}
}




