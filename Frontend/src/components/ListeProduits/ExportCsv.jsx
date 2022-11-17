import {CSVLink } from "react-csv"
import Moment from 'moment'


const header = [
	{"label" : "Handle", "key" : "sku"},
	{"label" : "Command", "key" : "command"},
	{"label" : "Title", "key" : "title"},
	{"label" : "Body HTML", "key" : "descriptionFr"},
	{"label" : "Vendor", "key" : "marque"},
	{"label" : "Type", "key" : "categorie"},
	{"label" : "Tags", "key" : "tags"},
	{"label" : "Tags Command", "key" : "tags_command"},
	{"label" : "Published", "key" : "published"},
	{"label" : "Published scope", "key" : "published_scope"},
	{"label" : "Image command", "key" : "image_command"},
	{"label" : "Image Src", "key" : "image_src"},
	{"label" : "Image Alt Text", "key" : "img_alt_text"},
	{"label" : "Variant Command", "key" : "variant_command"},
	{"label" : "Option1 Name", "key" : "taille"},
	{"label" : "Option1 Value", "key" : "attribut"},
	{"label" : "Option2 Name", "key" : "option_2_name"},
	{"label" : "Option2 Value", "key" : "option_2_value"},
	{"label" : "Option3 Name", "key" : "option_3_name"},
	{"label" : "Option3 Value", "key" : "option_3_value"},
	{"label" : "Variant Position", "key" : "variant_position"},
	{"label" : "Variant SKU", "key" : "variant_sku"},
	{"label" : "Variant Price", "key" : "prixVente"},
	{"label" : "Variant Compare At Price", "key" : "prixVenteRemise"},
	{"label" : "Variant Requires Shipping", "key" : "shipping"},
	{"label" : "Variant Taxable", "key" : "taxable"},
	{"label" : "Variant Barcode", "key" : "referenceFournisseur"},
	{"label" : "Variant Inventory Tracker", "key" : "inventory_tracker"},
	{"label" : "Variant Inventory Policy", "key" : "inventory_policy"},
	{"label" : "Variant Fulfillment Service", "key" : "fulfillment_service"},
	{"label" : "Metafield: custom_fields.gender [string]", "key" : "univers"},
	{"label" : "Metafield: custom_fields.country [string]", "key" : "paysOrigine"},
	{"label" : "Metafield: custom_fields.sizing [string]", "key" : "descriptionFr"},
	{"label" : "Metafield: custom_fields.cut [string]", "key" : "coupe"},
	{"label" : "Metafield: custom_fields.worn_size [string]", "key" : "TaillePorteeMannequin"},
	{"label" : "Metafield: custom_fields.main_color [string]", "key" : "couleur"},
	{"label" : "Metafield: custom_fields.maintenance [string]", "key" : "entretien"},
	{"label" : "Metafield: custom_fields.material1 [string]", "key" : "matiere1"},
	{"label" : "TitMetafield: custom_fields.material1_value [string]le", "key" : "pourcentMatiere1"},
	{"label" : "Metafield: custom_fields.material2 [string]", "key" : "matiere2"},
	{"label" : "Metafield: custom_fields.material2_value [string]", "key" : "pourcentMatiere2"},
	{"label" : "Metafield: custom_fields.material3 [string]", "key" : "matiere3"},
	{"label" : "Metafield: custom_fields.material3_value [string]", "key" : "pourcentMatiere3"},
	{"label" : "Metafield: custom_fields.material4 [string]", "key" : "matiere4"},
	{"label" : "Metafield: custom_fields.material4_value [string]", "key" : "pourcentMatiere4"},
	{"label" : "Metafield: custom_fields.material5 [string]", "key" : "matiere5"},
	{"label" : "Metafield: custom_fields.material5_value [string]", "key" : "pourcentMatiere5"},
	{"label" : "Metafield: custom_fields.material6 [string]", "key" : "matiere6"},
	{"label" : "Metafield: custom_fields.material6_value [string]", "key" : "pourcentMatiere6"},
	{"label" : "Metafield: custom_fields.material7 [string]", "key" : "matiere7"},
	{"label" : "Metafield: custom_fields.material7_value [string]", "key" : "pourcentMatiere7"},
	{"label" : "Metafield: custom_fields.material8 [string]", "key" : "matiere8"},
	{"label" : "Metafield: custom_fields.material8_value [string]", "key" : "pourcentMatiere8"},
	{"label" : "Metafield: custom_fields.material9 [string]", "key" : "matiere9"},
	{"label" : "Metafield: custom_fields.material9_value [string]", "key" : "pourcentMatiere9"},
	{"label" : "Metafield: custom_fields.material10 [string]", "key" : "matiere10"},
	{"label" : "Metafield: custom_fields.material10_value [string]", "key" : "pourcentMatiere10"},
	{"label" : "Metafield: mm-google-shopping.custom_product [string]", "key" : "custom_product"}
	]
	
const ExportCsv = ({list}) => {
    let tab = []
    let i = 0
    list.forEach(element => {
        for(let item in element.variants){
            let variant = element.variants[item]
            tab[i] = {
                sku: element.sku,
                command : "MERGE",
                title: item==0 ? element.marque.marque+ " " + element.nom_produit_fr : null,
                descriptionFr: item==0 ? element.description_fr: null,
                marque: item==0 ? element.marque.marque:"",
                categorie: item==0 ? element.filtre.sousCategorieRef.categorieRef.categorieRef:"",
                tags: item==0 ? element.tagsRef : null,
                tags_command : "REPLACE" ,
                published : "FALSE" ,
                published_scope : "web",
                image_command : "REPLACE" ,
                image_src: item==0? element.pictures : null,
                img_alt_text: element.marque.marque + " " + element.nom_produit_fr + " " + element.marque.marque,
                variant_command :"REPLACE",
                taille : "Taille" ,
                attribut: variant.taille_ref.taille_ref, //Taille ref
                option_2_name : null ,
                option_2_value : null ,
                option_3_name : null ,
                option_3_value : null,
                variant_position : 1 ,
                variant_sku: variant.variant_sku,
                prixVente : element.tarifs[0].prix_vente ,
                prixVenteRemise : element.tarifs[0].remise ? (parseFloat(element.tarifs[0].prix_vente) * parseFloat(element.tarifs[0].remise / 100)):null,
                shipping : TRUE ,
                taxable : TRUE ,
                referenceFournisseur: item==0 ? element.reference_fournisseur : null,
                inventory_tracker : "Shopify" ,
                inventory_policy : "deny" ,
                fulfillment_service : "manual" ,
                univers : item==0 ? element.univers : null ,
                paysOrigine : item==0 ? element.paysOrigine : null ,
                coupe : element.coupe ,
                TaillePorteeMannequin : null ,
                couleur : element.couleur ,
                entretien : element.entretien ,
            }
            element.matiereProduits.forEach(element => {
                
            });

        }
    });

    var data = []
    for(let item in list){
        data[item] = {
            sku : list[item].sku,
            command : "MERGE",
            title : list[item].marque.marque + " " + list[item].nom_produit_fr,
            descriptionFr : list[item].description_fr,
            marque : list[item].marque.marque,
            categorie : list[item].filtre.sousCategorieRef.categorieRef.categorieRef,
            tags : list[item].tags_ref,
            tags_command : "REPLACE" ,
            published : "FALSE" ,
            published_scope : "web",
            image_command : "REPLACE" ,
            image_src : list[item].pictures ,
            img_alt_text : list[item].marque.marque + " " + list[item].nom_produit_fr + " " + list[item].marque.marque,
            variant_command :"REPLACE",
            taille : "Taille" ,
            attribut : list[item].attribut , //à revoir
            option_2_name : "" ,
            option_2_value : "" ,
            option_3_name : "" ,
            option_3_value : "",
            variant_position : "variant position" ,
            variant_sku : list[item].sku + "_"+  list[item].attribut , //A revoir
            prixVente : list[item].tarifs[0].prix_vente ,
            prixVenteRemise : list[item].tarifs[0].remise == 0 ? null : (parseFloat(list[item].tarifs[0].prix_vente) * (parseFloat(remise) / 100)),
            shipping : "Variant Requires Shipping" ,
            taxable : "Variant Taxable" ,
            referenceFournisseur : list[item].reference_fournisseur ,
            inventory_tracker : "Shopify" ,
            inventory_policy : "Variant Inventory Policy" ,
            fulfillment_service : "Variant Fulfillment Service" ,
            univers : list[item].univers ,
            paysOrigine : list[item].pays_origine ,
            coupe : list[item].coupe ,
            TaillePorteeMannequin : null ,
            couleur : list[item].couleur ,
            entretien : list[item].entretien ,
            matiere1 : list[item].matiere1 ,
            pourcentMatiere1 : list[item].pourcentMatiere1+"%",
            matiere2 : list[item].matiere2 , 
            pourcentMatiere2 : list[item].pourcentMatiere2+"%", 
            matiere3 : list[item].matiere3 ,
            pourcentMatiere3 : list[item].pourcentMatiere3+"%",
            matiere4 : list[item].matiere4 ,
            pourcentMatiere4 : list[item].pourcentMatiere4+"%",
            matiere5 : list[item].matiere5 ,
            pourcentMatiere5 : list[item].pourcentMatiere5+"%",
            matiere6 : list[item].matiere6 ,
            pourcentMatiere6 : list[item].pourcentMatiere6+"%",
            matiere7 : list[item].matiere7 ,
            pourcentMatiere7 : list[item].pourcentMatiere7+"%",
            matiere8 : list[item].matiere8 ,
            pourcentMatiere8 : list[item].pourcentMatiere8+"%",
            matiere9 : list[item].matiere9 ,
            pourcentMatiere9 : list[item].pourcentMatiere9+"%",
            matiere10 : list[item].matiere10 ,
            pourcentMatiere10 : list[item].pourcentMatiere10+"%",
            custom_product : "TRUE" ,
        }

        matieres.forEach(element => {
            
        });
    }
    
	const csvReport = ({
		data: data,
		headers: header,
		filename: 'Export.csv'
	})

    return (
        <div>
            {
                list && <CSVLink {...csvReport}>Exporter en csv</CSVLink>
            }
        </div>

    )
}

export default ExportCsv;