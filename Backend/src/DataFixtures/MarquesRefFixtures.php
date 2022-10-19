<?php

namespace App\DataFixtures;

use App\Entity\MarqueRef;



use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class MarquesRefFixtures extends Fixture
{
	public function load(ObjectManager $manager): void
	{


		$marques =["2saints", "07A", "08 Sircus", "11 by Boris Bidjan Saberi", "32 Paradis Sprung Frères", "1017 ALYX 9SM", "69 by Isaac Sellam", "A New Cross", "A Dose of Something Good", "A Tentative Atelier", "A-COLD-WALL*", "Aalto", "Afroditi Hera", "Aganovich", "AïZEA", "AJMONE", "Alanui", "Alex Perry", "Alex Mullins", "Alexander McQueen", "Alexis", "Alison Berger Glassworks", "Ambientec", "AMBUSH®", "American Studio Craft", "Andrea Crews", "Andy Wolf", "Ann Demeulemeester x Serax", "Ann Demeulemeester", "Anna Torfs", "Archives", "Archivio J.M. Ribot", "Aristide Najean", "Artselab", "Atelier Buffile", "Atelier Von Pelt", "Atelier Serpi", "Attachment", "Avant Toi", "Awake", "Balenciaga", "Bally", "Bally x Swizz Beatz", "Balmain", "Bénédicte Vallet", "Be Positive", "Ben Storms", "Besfxxk", "Bitossi Ceramiche", "Blackyoto", "Blancha", "Blindness", "Bmuet(te)", "Boboutic", "Bokja", "Borek Sipek", "Boris Bidjan Saberi x Salomon", "Boris Bidjan Saberi", "Both", "By Walid", "CA4LA", "Canada Goose", "Canada Goose x Y/Project", "Canada Goose x Juun.J", "Carlo Moretti", "Carol Christian Poell", "Carven", "Cedric Jacquemyn", "Chadwick", "Chenpeng", "Cherevichkiotvichki", "Chloé", "Christopher Nemeth", "Cledran", "Comme Des Garçons", "Comme Des Garçons Homme Plus", "Comme Des Garçons Play", "Comme Des Garçons Shirt", "Comme Des Garçons Shirt x Asics", "Cornelian Taurus", "Cottweiler", "Craig Green", "Curtis Jeré", "Dalo", "Deepti", "Del Carlo", "Delada", "Di Liborio", "Diamondogs", "Diesel Red Tag", "Dita", "Dom Rebel", "Donald Drumm", "Dovetusai", "Dr. Martens x Undercover", "Dries Van Noten", "DRKSHDW", "Drome", "Edhen", "Editamateria", "Edward Crutchley", "Eligo", "Elina Linardaki", "Ellery", "En Shalla", "Englander & Bonta", "Erdem", "ESDE", "Facetasm", "Factory900", "Faith Connexion", "Faliero Sarti", "Fanga", "FDMTL", "Federico Curradi", "Fendi", "Fob Paris", "Forcerepublik", "Fornasetti", "Fornasetti Vintage", "François Thevenin", "Frei Mut", "Frenckenberger", "Fumito Ganryu", "Gabriele Pasini", "Ganryu x Salomon", "Gatti", "Geoffrey B. Small", "Geoffrey Parker", "Ghidini 1961", "Gilles Caffier", "Giorgio Brato", "Glas Italia", "Goti di Goti", "Greedilous", "Greg Lauren", "Griffe Montenapoleone by Vetrerie di Empoli", "Gucci", "Guidi", "Haider Ackermann", "Hed Mayner", "Herno", "Horisaki", "Hugh Findletar", "Hyein Seo", "IH NOM UH NIT", "Iiuvo", "Ilaria Nistri", "Individual Sentiments", "Isaac Sellam", "Issey Miyake Eyewear", "Issey Miyake", "J.W Anderson", "Jacques Marie Mage", "Jil Sander", "John", "John Burdick", "John Alexander Skelton", "John-Paul Philippe", "Jordanluca", "Julius", "Junya Watanabe", "Juun.J", "Kame Man Nen", "Kanghyuk", "Kanghyuk x Reebok", "Knit Brary", "Koché", "Ksubi ", "Ksubi x Hidji World", "Kuboraum", "Kuro", "Label Under Construction", "Lamberto Losani", "Lanvin", "Laura B", "Layer-0", "Le Kasha", "Leclaireur", "Leon Emanuel Blanck", "Litkovskaya", "Loha Vete", "Loverboy", "M.A+", "Mad et Len", "Made on Grand", "Madoda Fani", "Maison Margiela x Reebok", "Maison Rabih Kayrouz", "Maison Ullens", "Maison Margiela", "Maison Mihara Yasuhiro", "Maison Ravn", "Marc Le Bihan", "Marc Jacques Burton", "Marchand Drapier", "Marine Serre", "Mario Bellini", "Marsèll", "Masnada", "Master & Dynamic", "Mastercraft Union", "Mathieu Miljavac", "Matias Denim", "Matsuda", "Mattew Miller", "Matthew Miller", "Melitta Baumeister", "Miaoran", "Miharayasuhiro", "Moncler", "Moncler Genius Craig Green", "Moncler Genius", "Moncler x Rick Owens", "Monse", "Moohong", "Mr&Mrs", "Mr&Mrs Italy", "Muñoz Vrandecic", "Myar", "Mylinh Nguyen", "Myths", "Nanushka", "Natasha Zinko", "Neil Barrett", "Nigel Cabourn", "Nike x Comme Des Garçons", "Noir Kei Ninomiya", "Numero 10", "Nymphenburg", "Off-White", "Officine Creative", "Olympia Le Tan", "Orolog", "Orylag", "Oscar de la Renta", "Osvaldo Borsani", "Paul Harnden", "Paul Evans", "Per Götesson", "Péro", "Peter Do", "Peter Pilotto", "Peter Non", "Petrosolaum", "Phaedo", "Philip & Kevin Laverne", "Philippe Hiquily", "Pierre Bonnefille", "Pierre-Louis Mascia", "Piet Hein Eek", "PLAY Comme des Garçons", "Poiret", "Ports 1961", "Preciously", "Preen by Thornton Bregazzi", "Premiata", "Printed Artworks", "Private 02 04", "Projekt Produkt", "Quetsche", "R13", "Raparo", "Reilly Fakenews", "Renli su", "Richard Quinn", "Rick Owens", "Rigards", "Roberto Collina", "Rocking H", "Rokh", "Rosa Maria", "Rosantica", "Sacai", "Sagittaire A", "Saint Laurent", "San Lorenzo", "Sara Lanzi", "Sawaya & Moroni", "Scunzani Ivo", "Sener Besim", "Shiro Sakai", "Side Slope", "Sies Marjan", "Silvano Sassetti", "Simeon Farrar", "Simone Rocha", "Sofie d'Hoore", "Song for the Mute", "Sprookjes", "Stella McCartney", "Stuart Weitzman", "Suzusan", "Tacet", "Taichimurakami", "Takahiromiyashit Thesoloist.", "Texas Robot", "The Elder Statesman", "The Row", "The Last Conspiracy", "Therabody", "Thierry Colson", "Thom Browne", "Thomas Eyck", "Tibaeg", "Timothy Richards", "Tobias Wistisen", "Tokujin Yoshioka", "Toogood", "True Tribe", "U-Boat", "Ugo Cacciatori", "Uma Wang", "Un Solo Mundo", "Undercover", "Unknown", "Utzon", "Valentino", "Vava Eyewear", "VBH", "Vera Wang", "Vincenzo De Cotiis", "Wales Bonner", "Warm Me", "Warren Platner", "Werkstatt:München", "White", "Wnderkammer", "Wons Mous", "Xiao Li", "Y/Project", "Y/Project x Canada Goose", "Yang Li", "Yatay", "Yeezy", "Yesey", "Yohji Yamamoto x Vessel", "Yohji Yamamoto", "Youser", "Youth of Paris", "Ziggy Chen", "Zimmermann", "Zoobeetle x JDL", "Pia Manu", "Pierre Giraudon", "Pierre Louis Mascia", "Pushbutton", "Rajesh Pratap Singh", "Ray Howlett", "René Buthaud", "Rochas", "Rocio", "Roggykei", "Rombaut", "Rossi et Arcandi", "Rubber Soul", "Segno Italiano", "Serge Thoraval", "Shiro Sakai x Leclaireur", "Song for the Mute x Leclaireur", "Sophie Dries", "Stouls", "Studio Tangent", "Studio Wieki Somers For Thomas Eyck", "Suketdhir", "Suprema", "Sylvia Toledano", "TAKAHIROMIYASHITATheSoloist.", "Teatum Jones", "Tecknomonster", "The Shepherd UNDERCOVER", "The Viridi-Anne", "Thierry Lemaire", "Tichelaar", "Timothy Richard", "Tomoyuki Iwanami", "Tuinch", "Tumi", "Vans x FDMTL", "Vicenzo de Cotiis", "Vintage", "Vittorio Introini", "Voodoo", "Werkstatt:Munchen", "Wild and Woolly", "Yataï", "Yates", "Zaha Hadid", "Zanieri", "Zuhair Murad", "Dr. Martens x Rick Owens", "Hakusan", "Agnona", "DRKSHDW x CONVERSE", "Ann Demeulemeester-Serax" ];



		sort($marques);

		foreach ($marques as $key => $value) {
			// code...
			$value = trim($value);
						
			$marque = new MarqueRef($value);
			$marque_find = $manager->getRepository(MarqueRef::class)->findOneBy([
				"marque" => $marque->getMarque(),
			]);


            if(!$marque_find){
                $manager->persist($marque);
                $manager->flush();                
            }
		}
	}
}




