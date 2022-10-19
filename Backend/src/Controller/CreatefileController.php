<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CreatefileController extends AbstractController
{
    #[Route('/createfile', name: 'app_createfile')]
    public function index(): Response
    {
        $data=[];
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

        foreach ($sousCategorieRef as $key => $value1) {
            foreach($categorieRef as $cle => $valeur){
                if($valeur["categorie_ref"] == $value1["categorie_ref"] ){
                    $data[]=[
                        "sous_categorie_ref"=>$value1["sous_categorie_ref"], 
                        "sous_categorie_ref_en"=>$value1["sous_categorie_ref_en"], 
                        "categorie_ref"=>$value1["categorie_ref"],
                        "categorie_ref_en"=>$valeur["categorie_ref_en"]
                    ];
                }
            }
        }

        $filtresRef = [
			["filtre"=>"Abat-jours", "filtre_ref_en"=>"Lamp shades", "sousCategorieRef"=>"Abat-jours"],
			["filtre"=>"Appareils de cuisine", "filtre_ref_en"=>"Kitchen appliances", "sousCategorieRef"=>"Appareils de cuisine"],
			["filtre"=>"Assiettes", "filtre_ref_en"=>"Plates", "sousCategorieRef"=>"Vaisselle"],
			["filtre"=>"Assiettes murales", "filtre_ref_en"=>"Wall plates", "sousCategorieRef"=>"Assiettes murales"],
			["filtre"=>"Autres accessoires", "filtre_ref_en"=>"Other accessories", "sousCategorieRef"=>"Autres accessoires"],
			["filtre"=>"Bagues", "filtre_ref_en"=>"Rings", "sousCategorieRef"=>"Bagues"],
			["filtre"=>"Bagues", "filtre_ref_en"=>"Rings ", "sousCategorieRef"=>"Bagues"],
			["filtre"=>"Ballerines", "filtre_ref_en"=>"Ballerina shoes", "sousCategorieRef"=>"Chaussures plates"],
			["filtre"=>"Bancs", "filtre_ref_en"=>"Benches", "sousCategorieRef"=>"Assises"],
			["filtre"=>"Baskets", "filtre_ref_en"=>"Sneakers", "sousCategorieRef"=>"Baskets"],
			["filtre"=>"Baskets basses", "filtre_ref_en"=>"Low top sneakers", "sousCategorieRef"=>"Baskets"],
			["filtre"=>"Baskets hautes", "filtre_ref_en"=>"High top sneakers", "sousCategorieRef"=>"Baskets"],
			["filtre"=>"Bibliothèques", "filtre_ref_en"=>"Bookcases", "sousCategorieRef"=>"Bibliothèques"],
			["filtre"=>"Blazers", "filtre_ref_en"=>"Blazers", "sousCategorieRef"=>"Manteaux & Vestes"],
			["filtre"=>"Blousons", "filtre_ref_en"=>"Jackets", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Blousons & Bombers", "filtre_ref_en"=>"Jackets & Bombers", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Body", "filtre_ref_en"=>"Body", "sousCategorieRef"=>"Hauts"],
			["filtre"=>"Bols", "filtre_ref_en"=>"Bowls", "sousCategorieRef"=>"Vaisselle"],
			["filtre"=>"Bonnets", "filtre_ref_en"=>"Beannies", "sousCategorieRef"=>"Chapeaux & Bonnets"],
			["filtre"=>"Bottes & Bottines", "filtre_ref_en"=>"Boots & Ankle Boots", "sousCategorieRef"=>"Bottes & Bottines"],
			["filtre"=>"Bottes plates", "filtre_ref_en"=>"Flat boots", "sousCategorieRef"=>"Bottes & Bottines"],
			["filtre"=>"Bottes à talons", "filtre_ref_en"=>"Heeled boots", "sousCategorieRef"=>"Bottes & Bottines"],
			["filtre"=>"Bottines plates", "filtre_ref_en"=>"Flat ankle boots", "sousCategorieRef"=>"Bottes & Bottines"],
			["filtre"=>"Bottines à talons", "filtre_ref_en"=>"Heeled ankle boots", "sousCategorieRef"=>"Bottes & Bottines"],
			["filtre"=>"Boucles d'oreilles", "filtre_ref_en"=>"Earrings", "sousCategorieRef"=>"Boucles d'oreilles"],
			["filtre"=>"Boucles d'oreilles", "filtre_ref_en"=>"Earrings ", "sousCategorieRef"=>"Boucles d'oreilles"],
			["filtre"=>"Bougies parfumées", "filtre_ref_en"=>"Scented candles", "sousCategorieRef"=>"Bougies parfumées"],
			["filtre"=>"Boutons de manchette ", "filtre_ref_en"=>"Cufflinks", "sousCategorieRef"=>"Boutons de manchette "],
			["filtre"=>"Boîtes", "filtre_ref_en"=>"Boxes", "sousCategorieRef"=>"Boîtes"],
			["filtre"=>"Bracelets", "filtre_ref_en"=>"Bracelets", "sousCategorieRef"=>"Bracelets"],
			["filtre"=>"Buffets", "filtre_ref_en"=>"Sideboards", "sousCategorieRef"=>"Cabinets & Commodes"],
			["filtre"=>"Cabas", "filtre_ref_en"=>"Tote Bags", "sousCategorieRef"=>"Cabas"],
			["filtre"=>"Cabas", "filtre_ref_en"=>"Tote bags", "sousCategorieRef"=>"Cabas"],
			["filtre"=>"Cabas", "filtre_ref_en"=>"Tote bags ", "sousCategorieRef"=>"Cabas"],
			["filtre"=>"Cabinets", "filtre_ref_en"=>"Cabinets", "sousCategorieRef"=>"Cabinets & Commodes"],
			["filtre"=>"Cadres", "filtre_ref_en"=>"Frames", "sousCategorieRef"=>"Cadres"],
			["filtre"=>"Canapés & Poufs", "filtre_ref_en"=>"Sofas & Poufs", "sousCategorieRef"=>"Assises"],
			["filtre"=>"Capes", "filtre_ref_en"=>"Capes", "sousCategorieRef"=>"Manteaux & Vestes"],
			["filtre"=>"Carafes", "filtre_ref_en"=>"Carafes", "sousCategorieRef"=>"Vaisselle"],
			["filtre"=>"Cardigans", "filtre_ref_en"=>"Cardigans", "sousCategorieRef"=>"Pulls & Maille"],
			["filtre"=>"Ceintures", "filtre_ref_en"=>"Belts", "sousCategorieRef"=>"Ceintures"],
			["filtre"=>"Ceintures", "filtre_ref_en"=>"Belts ", "sousCategorieRef"=>"Ceintures"],
			["filtre"=>"Cendriers", "filtre_ref_en"=>"Ashtrays", "sousCategorieRef"=>"Cendriers"],
			["filtre"=>"Chaises & Fauteuils", "filtre_ref_en"=>"Chairs & Armchairs", "sousCategorieRef"=>"Assises"],
			["filtre"=>"Chandeliers & Bougeoirs", "filtre_ref_en"=>"Candlesticks & Candleholders", "sousCategorieRef"=>"Chandeliers & Bougeoirs"],
			["filtre"=>"Chapeaux", "filtre_ref_en"=>"Hats", "sousCategorieRef"=>"Chapeaux & Bonnets"],
			["filtre"=>"Chapeaux & Bonnets", "filtre_ref_en"=>"Hats & Beanies", "sousCategorieRef"=>"Chapeaux & Bonnets"],
			["filtre"=>"Chaussettes", "filtre_ref_en"=>"Socks", "sousCategorieRef"=>"Chaussettes"],
			["filtre"=>"Chaussettes & Collants", "filtre_ref_en"=>"Socks & Tights", "sousCategorieRef"=>"Chaussettes & Collants"],
			["filtre"=>"Chaussures plates", "filtre_ref_en"=>"Flats", "sousCategorieRef"=>"Chaussures plates"],
			["filtre"=>"Chaussures à talons", "filtre_ref_en"=>"High Heels", "sousCategorieRef"=>"Chaussures à talons"],
			["filtre"=>"Chemises & Blouses", "filtre_ref_en"=>"Blouses & Shirts", "sousCategorieRef"=>"Hauts"],
			["filtre"=>"Chemises manches courtes", "filtre_ref_en"=>"Short sleeve shirts", "sousCategorieRef"=>"Chemises"],
			["filtre"=>"Chemises manches longues", "filtre_ref_en"=>"Long sleeve shirts", "sousCategorieRef"=>"Chemises"],
			["filtre"=>"Colliers", "filtre_ref_en"=>"Necklaces", "sousCategorieRef"=>"Colliers"],
			["filtre"=>"Colliers", "filtre_ref_en"=>"Necklaces ", "sousCategorieRef"=>"Colliers"],
			["filtre"=>"Combinaisons", "filtre_ref_en"=>"Jumpsuits", "sousCategorieRef"=>"Combinaisons"],
			["filtre"=>"Combinaisons & Salopettes", "filtre_ref_en"=>"Jumpsuits & Overalls", "sousCategorieRef"=>"Combinaisons"],
			["filtre"=>"Commodes", "filtre_ref_en"=>"Dressers", "sousCategorieRef"=>"Cabinets & Commodes"],
			["filtre"=>"Corbeilles", "filtre_ref_en"=>"Baskets & Bins", "sousCategorieRef"=>"Corbeilles"],
			["filtre"=>"Costumes & Smokings", "filtre_ref_en"=>"Costumes & Tuxedos", "sousCategorieRef"=>"Costumes & Smokings"],
			["filtre"=>"Coussins", "filtre_ref_en"=>"Pillows", "sousCategorieRef"=>"Coussins"],
			["filtre"=>"Couverts", "filtre_ref_en"=>"Cutlery", "sousCategorieRef"=>"Vaisselle"],
			["filtre"=>"Couvertures & Plaids", "filtre_ref_en"=>"Blankets & Throw", "sousCategorieRef"=>"Couvertures & Plaids"],
			["filtre"=>"Cristaux", "filtre_ref_en"=>"Crystals", "sousCategorieRef"=>"Pots-pourris Cristaux & Encens"],
			["filtre"=>"Cuirs & Fourrures", "filtre_ref_en"=>"Leather & Fur", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Cuissardes", "filtre_ref_en"=>"Over the knee boots", "sousCategorieRef"=>"Bottes & Bottines"],
			["filtre"=>"Denim", "filtre_ref_en"=>"Denim", "sousCategorieRef"=>"Denim"],
			["filtre"=>"Derbies & Richelieu", "filtre_ref_en"=>"Derbies & Oxfords shoes", "sousCategorieRef"=>"Chaussures plates"],
			["filtre"=>"Derbies & Richelieu", "filtre_ref_en"=>"Flats", "sousCategorieRef"=>"Chaussures Plates"],
			["filtre"=>"Dessous de verre", "filtre_ref_en"=>"Coasters", "sousCategorieRef"=>"Vaisselle"],
			["filtre"=>"Diffuseurs", "filtre_ref_en"=>"Diffusers", "sousCategorieRef"=>"Diffuseurs"],
			["filtre"=>"Doudounes", "filtre_ref_en"=>"Down jacket", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Débardeurs", "filtre_ref_en"=>"Tank tops", "sousCategorieRef"=>"Hauts & T-shirts"],
			["filtre"=>"Echarpes & Gants", "filtre_ref_en"=>"Scarves & Gloves", "sousCategorieRef"=>"Echarpes & Gants"],
			["filtre"=>"Encens", "filtre_ref_en"=>"Incense", "sousCategorieRef"=>"Pots-pourris Cristaux & Encens"],
			["filtre"=>"Escarpins", "filtre_ref_en"=>"Pumps", "sousCategorieRef"=>"Chaussures à talons"],
			["filtre"=>"Espadrilles", "filtre_ref_en"=>"Espadrilles", "sousCategorieRef"=>"Chaussures plates"],
			["filtre"=>"Espadrilles", "filtre_ref_en"=>"Flats", "sousCategorieRef"=>"Chaussures Plates"],
			["filtre"=>"Faux cuirs & Fausses fourrures", "filtre_ref_en"=>"Faux Leather & Faux fur", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Faux cuirs & Fausses fourrures", "filtre_ref_en"=>"Faux leather & Faux fur", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Faux cuirs & Fausses fourrures", "filtre_ref_en"=>"Faux leather & Faux fur", "sousCategorieRef"=>"Manteaux & Vestes"],
			["filtre"=>"Gants", "filtre_ref_en"=>"Gloves", "sousCategorieRef"=>"Echarpes & Gants"],
			["filtre"=>"Gants", "filtre_ref_en"=>"Gloves", "sousCategorieRef"=>"Écharpes & Gants"],
			["filtre"=>"Gilets", "filtre_ref_en"=>"Vests", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Hauts", "filtre_ref_en"=>"Tops", "sousCategorieRef"=>"Hauts"],
			["filtre"=>"Horloges", "filtre_ref_en"=>"Clocks", "sousCategorieRef"=>"Horloges"],
			["filtre"=>"Jeans droits", "filtre_ref_en"=>"Straight jeans", "sousCategorieRef"=>"Denim"],
			["filtre"=>"Jeans larges", "filtre_ref_en"=>"Wide & flared jeans", "sousCategorieRef"=>"Denim"],
			["filtre"=>"Jeans slim", "filtre_ref_en"=>"Slim jeans", "sousCategorieRef"=>"Denim"],
			["filtre"=>"Jupes", "filtre_ref_en"=>"Skirts", "sousCategorieRef"=>"Jupes"],
			["filtre"=>"Jupes longues", "filtre_ref_en"=>"Long skirts", "sousCategorieRef"=>"Jupes"],
			["filtre"=>"Jupes midi", "filtre_ref_en"=>"Mid-Length skirts", "sousCategorieRef"=>"Jupes"],
			["filtre"=>"Lampadaires", "filtre_ref_en"=>"Floor lamps", "sousCategorieRef"=>"Lampadaires"],
			["filtre"=>"Lampes de table", "filtre_ref_en"=>"Table lamps", "sousCategorieRef"=>"Lampes de table"],
			["filtre"=>"Luminaires muraux", "filtre_ref_en"=>"Wall lights", "sousCategorieRef"=>"Luminaires muraux"],
			["filtre"=>"Lunettes", "filtre_ref_en"=>"Glasses", "sousCategorieRef"=>"Lunettes de Soleil"],
			["filtre"=>"Lunettes de Soleil", "filtre_ref_en"=>"Sunglasses", "sousCategorieRef"=>"Lunettes de Soleil"],
			["filtre"=>"Maillots de bain", "filtre_ref_en"=>"Swimwear", "sousCategorieRef"=>"Maillots de bain"],
			["filtre"=>"Maillots de bain", "filtre_ref_en"=>"Swimwear ", "sousCategorieRef"=>"Maillots de bain"],
			["filtre"=>"Manteaux & Vestes", "filtre_ref_en"=>"Coats & Blazer", "sousCategorieRef"=>"Manteaux & Vestes"],
			["filtre"=>"Manteaux courts", "filtre_ref_en"=>"Short coats", "sousCategorieRef"=>"Manteaux & Vestes"],
			["filtre"=>"Manteaux longs", "filtre_ref_en"=>"Long coats", "sousCategorieRef"=>"Manteaux & Vestes"],
			["filtre"=>"Manteaux oversize", "filtre_ref_en"=>"Oversized coats", "sousCategorieRef"=>"Manteaux & Vestes"],
			["filtre"=>"Masques", "filtre_ref_en"=>"Face masks", "sousCategorieRef"=>"Autres"],
			["filtre"=>"Masques", "filtre_ref_en"=>"Face masks", "sousCategorieRef"=>"Autres accessoires"],
			["filtre"=>"Mini-jupes", "filtre_ref_en"=>"Mini skirts", "sousCategorieRef"=>"Jupes"],
			["filtre"=>"Miroirs", "filtre_ref_en"=>"Mirrors", "sousCategorieRef"=>"Miroirs"],
			["filtre"=>"Mocassins", "filtre_ref_en"=>"Flats", "sousCategorieRef"=>"Chaussures Plates"],
			["filtre"=>"Mocassins", "filtre_ref_en"=>"Loafers", "sousCategorieRef"=>"Chaussures plates"],
			["filtre"=>"Montres", "filtre_ref_en"=>"Watches", "sousCategorieRef"=>"Montres"],
			["filtre"=>"Montres", "filtre_ref_en"=>"Watches ", "sousCategorieRef"=>"Montres"],
			["filtre"=>"Mules", "filtre_ref_en"=>"Mules", "sousCategorieRef"=>"Chaussures plates"],
			["filtre"=>"Orfèvrerie", "filtre_ref_en"=>"Gold & Silverware", "sousCategorieRef"=>"Orfèvrerie"],
			["filtre"=>"Pantalons & Shorts", "filtre_ref_en"=>"Trousers & Shorts", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Pantalons cargo", "filtre_ref_en"=>"Cargo pants", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Pantalons de jogging", "filtre_ref_en"=>"Track pants", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Pantalons de jogging & Leggings", "filtre_ref_en"=>"Track pants & Leggings", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Pantalons droits", "filtre_ref_en"=>"Straight pants", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Pantalons en cuir", "filtre_ref_en"=>"Leather pants", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Pantalons en faux cuir", "filtre_ref_en"=>"Faux leather pants", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Pantalons habillés", "filtre_ref_en"=>"Dress pants", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Pantalons larges", "filtre_ref_en"=>"Wide & flared pants", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Pantalons slim", "filtre_ref_en"=>"Slim pants", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Pantalons écourtés", "filtre_ref_en"=>"Cropped pants", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Paravents", "filtre_ref_en"=>"Screens", "sousCategorieRef"=>"Paravents"],
			["filtre"=>"Parkas", "filtre_ref_en"=>"Parkas", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Pateaux ronds", "filtre_ref_en"=>"Round trays", "sousCategorieRef"=>"Plateaux & Tréteaux"],
			["filtre"=>"Petite maroquinerie", "filtre_ref_en"=>"Small leather goods", "sousCategorieRef"=>"Petite maroquinerie"],
			["filtre"=>"Pieds de lampe", "filtre_ref_en"=>"Lamp bases", "sousCategorieRef"=>"Pieds de lampe"],
			["filtre"=>"Plateaux rectangulaires", "filtre_ref_en"=>"Rectangular trays", "sousCategorieRef"=>"Plateaux & Tréteaux"],
			["filtre"=>"Pochettes", "filtre_ref_en"=>"Clutch Bags", "sousCategorieRef"=>"Pochettes"],
			["filtre"=>"Pochettes", "filtre_ref_en"=>"Clutch bags", "sousCategorieRef"=>"Pochettes"],
			["filtre"=>"Pochettes", "filtre_ref_en"=>"Clutch bags ", "sousCategorieRef"=>"Pochettes"],
			["filtre"=>"Polos", "filtre_ref_en"=>"Polos", "sousCategorieRef"=>"Hauts & T-shirts"],
			["filtre"=>"Ponchos", "filtre_ref_en"=>"Ponchos", "sousCategorieRef"=>"Pulls & Maille"],
			["filtre"=>"Porte-cartes", "filtre_ref_en"=>"Card holders", "sousCategorieRef"=>"Petite maroquinerie"],
			["filtre"=>"Porte-clés", "filtre_ref_en"=>"Keychains", "sousCategorieRef"=>"Autres"],
			["filtre"=>"Porte-clés", "filtre_ref_en"=>"Keychains", "sousCategorieRef"=>"Autres accessoires"],
			["filtre"=>"Porte-parapluies", "filtre_ref_en"=>"Umbrella stands", "sousCategorieRef"=>"Porte-parapluies"],
			["filtre"=>"Porte-revues & Serre-livres", "filtre_ref_en"=>"Magazine racks & Bookends", "sousCategorieRef"=>"Porte-revues & Serre-livres"],
			["filtre"=>"Portefeuilles & Porte-monnaies", "filtre_ref_en"=>"Purses & Wallets", "sousCategorieRef"=>"Petite maroquinerie"],
			["filtre"=>"Pots-pourris", "filtre_ref_en"=>"Potpourris", "sousCategorieRef"=>"Pots-pourris Cristaux & Encens"],
			["filtre"=>"Pulls", "filtre_ref_en"=>"Knitwear", "sousCategorieRef"=>"Pulls & Maille"],
			["filtre"=>"Pulls & Maille", "filtre_ref_en"=>"Sweater & Knitwear ", "sousCategorieRef"=>"Pulls & Maille"],
			["filtre"=>"Robes", "filtre_ref_en"=>"Dresses", "sousCategorieRef"=>"Robes"],
			["filtre"=>"Robes courtes", "filtre_ref_en"=>"Short dresses", "sousCategorieRef"=>"Robes"],
			["filtre"=>"Robes longues", "filtre_ref_en"=>"Long dresses", "sousCategorieRef"=>"Robes"],
			["filtre"=>"Robes mi-longues", "filtre_ref_en"=>"Mid-Length dresses", "sousCategorieRef"=>"Robes"],
			["filtre"=>"Sacs ceinture", "filtre_ref_en"=>"Belt Bags", "sousCategorieRef"=>"Sacs ceinture"],
			["filtre"=>"Sacs ceinture", "filtre_ref_en"=>"Belt bags", "sousCategorieRef"=>"Sacs ceinture"],
			["filtre"=>"Sacs à bandoulière", "filtre_ref_en"=>"Shoulder Bags", "sousCategorieRef"=>"Sacs à bandoulière"],
			["filtre"=>"Sacs à bandoulière", "filtre_ref_en"=>"Shoulder bags", "sousCategorieRef"=>"Sacs à bandoulière"],
			["filtre"=>"Sacs à dos", "filtre_ref_en"=>"Backpacks", "sousCategorieRef"=>"Sacs à dos"],
			["filtre"=>"Sacs à dos", "filtre_ref_en"=>"Backpacks ", "sousCategorieRef"=>"Sacs à dos"],
			["filtre"=>"Sacs à main", "filtre_ref_en"=>"Handbags", "sousCategorieRef"=>"Sacs à main"],
			["filtre"=>"Sandales", "filtre_ref_en"=>"Sandals", "sousCategorieRef"=>"Sandales"],
			["filtre"=>"Sandales", "filtre_ref_en"=>"Sandals ", "sousCategorieRef"=>"Sandales"],
			["filtre"=>"Sandales plates", "filtre_ref_en"=>"Flat sandals", "sousCategorieRef"=>"Sandales"],
			["filtre"=>"Sandales à talons", "filtre_ref_en"=>"Heeled sandals", "sousCategorieRef"=>"Chaussures à talons"],
			["filtre"=>"Sculptures", "filtre_ref_en"=>"Sculptures", "sousCategorieRef"=>"Sculptures"],
			["filtre"=>"Secrétaires & Trumeaux", "filtre_ref_en"=>"Secretaries", "sousCategorieRef"=>"Cabinets & Commodes"],
			["filtre"=>"Shorts", "filtre_ref_en"=>"Shorts", "sousCategorieRef"=>"Pantalons & Shorts"],
			["filtre"=>"Suspensions", "filtre_ref_en"=>"Suspensions lamps", "sousCategorieRef"=>"Suspensions"],
			["filtre"=>"Sweatshirts & Hoodies", "filtre_ref_en"=>"Sweatshirts & Hoodies", "sousCategorieRef"=>"Pulls & Maille"],
			["filtre"=>"T-shirts & Débardeurs", "filtre_ref_en"=>"T-shirts & Tank tops", "sousCategorieRef"=>"Hauts"],
			["filtre"=>"T-shirts manches courtes", "filtre_ref_en"=>"Short sleeve T-shirts", "sousCategorieRef"=>"Hauts & T-shirts"],
			["filtre"=>"T-shirts manches longues", "filtre_ref_en"=>"Long sleeve T-shirts", "sousCategorieRef"=>"Hauts & T-shirts"],
			["filtre"=>"Tableaux", "filtre_ref_en"=>"Paintings & Drawings", "sousCategorieRef"=>"Tableaux"],
			["filtre"=>"Tables", "filtre_ref_en"=>"Tables", "sousCategorieRef"=>"Tables"],
			["filtre"=>"Tabourets", "filtre_ref_en"=>"Stools", "sousCategorieRef"=>"Assises"],
			["filtre"=>"Tapis", "filtre_ref_en"=>"Rugs", "sousCategorieRef"=>"Tapis"],
			["filtre"=>"Thé & Café", "filtre_ref_en"=>"Tea & Coffee", "sousCategorieRef"=>"Thé & Café"],
			["filtre"=>"Tops", "filtre_ref_en"=>"Tops", "sousCategorieRef"=>"Hauts"],
			["filtre"=>"Tour de cou", "filtre_ref_en"=>"Neck strap", "sousCategorieRef"=>"Echarpes & Gants"],
			["filtre"=>"Tour de cou", "filtre_ref_en"=>"Neck strap", "sousCategorieRef"=>"Écharpes & Gants"],
			["filtre"=>"Trenchs", "filtre_ref_en"=>"Trenches", "sousCategorieRef"=>"Manteaux & Vestes"],
			["filtre"=>"Tréteaux", "filtre_ref_en"=>"Trestles", "sousCategorieRef"=>"Plateaux & Tréteaux"],
			["filtre"=>"Vases", "filtre_ref_en"=>"Vases", "sousCategorieRef"=>"Vases"],
			["filtre"=>"Verres", "filtre_ref_en"=>"Drinking glasses", "sousCategorieRef"=>"Verres"],
			["filtre"=>"Vestes casual", "filtre_ref_en"=>"Casual jackets", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Vestes casuals", "filtre_ref_en"=>"Casual jackets", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Vestes structurées", "filtre_ref_en"=>"Structured jackets", "sousCategorieRef"=>"Blousons"],
			["filtre"=>"Vêtements d'intérieur", "filtre_ref_en"=>"Homewear", "sousCategorieRef"=>"Vêtements d'intérieur"],
			["filtre"=>"Écharpes", "filtre_ref_en"=>"Scarves", "sousCategorieRef"=>"Echarpes & Gants"],
			["filtre"=>"Écharpes", "filtre_ref_en"=>"Scarves", "sousCategorieRef"=>"Écharpes & Gants"],
			];
		sort($filtresRef);
        $dataClean = [];
        foreach ($filtresRef as $key => $value) {
            # code...
            foreach($data as $cle => $valeur){
                if($value["sousCategorieRef"] == $valeur["sous_categorie_ref"]){
                    $dataClean[]=[
                        "filtre"=>$value["filtre"], 
                        "filtre_ref_en"=>$value["filtre_ref_en"], 
                        "sous_categorie_ref"=>$valeur["sous_categorie_ref"], 
                        "sous_categorie_ref_en"=>$valeur["sous_categorie_ref_en"], 
                        "categorie_ref"=>$valeur["categorie_ref"],
                        "categorie_ref_en"=>$valeur["categorie_ref_en"]
                    ];
                }
            }
        }

        $data = [];
        foreach ($dataClean as $key => $value) {
            # code...
            $data[$value["categorie_ref"]]["categorie_ref_en"] = $value["categorie_ref_en"];
            $data[$value["categorie_ref"]]["sous_categorie"][$value["sous_categorie_ref"]]["sous_categorie_ref_en"] = $value["sous_categorie_ref_en"];
            $data[$value["categorie_ref"]]["sous_categorie"][$value["sous_categorie_ref"]]["filtre"][$value["filtre"]]["filtre_ref_en"] = $value["filtre_ref_en"];
        }
        //Création du fichier
        //Ecriture dans un fichier
        file_put_contents('Categories.jsx', 'export const Categories = [');

        //On récupère le contenu du fichier
        $texte = file_get_contents('Categories.jsx');
    
        foreach ($data as $key => $value) {                
            # code...
            $categorieEn = $value["categorie_ref_en"];
            $sousCategories = $value["sous_categorie"];
            $texte .= "\n{\n";
                $texte .= "\tcategorie: \"$key\",\n\tcategorie_en: \"$categorieEn\",\n\tsous_categorie:[";
                foreach ($sousCategories as $key2 => $value2) {
                    $sousCategorieEn = $value2["sous_categorie_ref_en"];
                    $filtres = $value2["filtre"];
                    # code...
                    $texte .= "\n\t{\n\t\t";
                    $texte .="sous_categorie: \"$key2\",\n\t\tsous_categorie_en: \"$sousCategorieEn\", \n\t\tfiltres : [";
                        foreach ($filtres as $key3 => $value3) {
                            $filtreEn = $value3["filtre_ref_en"];
                            # code...
                            $texte .= "\n\t\t{\n\t\t\t";
                            $texte .= "filtre : \"$key3\", \n\t\t\tfiltre_en: \"$filtreEn\"\n\t\t},";
        
                        }
                        $texte .= "\n\t\t]\n\t},";
                }
                $texte .= "\n],"; //sousCategorie
        
            $texte .= "\n},";
        }
        //On ajoute notre nouveau texte à l'ancien
        $texte .= "\n];";   

        //On écrit tout le texte dans notre fichier
        file_put_contents('Categories.jsx', $texte);
            var_dump($data);
        
        return $this->render('createfile/index.html.twig', [
            'controller_name' => 'CreatefileController',
        ]);
    }
}
