import {CSVLink } from 'react-csv'
import Moment from 'moment'
import { useContext } from 'react'
import { ListeExportContext } from './Context/ListeExportContext'
import moment from 'moment'




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
	{"label" : "Variant Barcode", "key" : "reference_fournisseur"},
	{"label" : "Variant Inventory Tracker", "key" : "inventory_tracker"},
	{"label" : "Variant Inventory Policy", "key" : "inventory_policy"},
	{"label" : "Variant Fulfillment Service", "key" : "fulfillment_service"},
	{"label" : "Metafield: custom_fields.gender [single_line_text_field]", "key" : "univers"},
	{"label" : "Metafield: custom_fields.country [single_line_text_field]", "key" : "paysOrigine"},
	{"label" : "Metafield: custom_fields.sizing [single_line_text_field]", "key" : "custum_fields_sizing"},
	{"label" : "Metafield: custom_fields.cut [single_line_text_field]", "key" : "coupe"},
	{"label" : "Metafield: custom_fields.worn_size [single_line_text_field]", "key" : "TaillePorteeMannequin"},
	{"label" : "Metafield: custom_fields.main_color [single_line_text_field]", "key" : "couleur"},
	{"label" : "Metafield: custom_fields.maintenance [single_line_text_field]", "key" : "entretien"},
	{"label" : "Metafield: custom_fields.material1 [single_line_text_field]", "key" : "matiere1"},
	{"label" : "Metafield: custom_fields.material1_value [single_line_text_field]", "key" : "pourcentMatiere1"},
	{"label" : "Metafield: custom_fields.material2 [single_line_text_field]", "key" : "matiere2"},
	{"label" : "Metafield: custom_fields.material2_value [single_line_text_field]", "key" : "pourcentMatiere2"},
	{"label" : "Metafield: custom_fields.material3 [single_line_text_field]", "key" : "matiere3"},
	{"label" : "Metafield: custom_fields.material3_value [single_line_text_field]", "key" : "pourcentMatiere3"},
	{"label" : "Metafield: custom_fields.material4 [single_line_text_field]", "key" : "matiere4"},
	{"label" : "Metafield: custom_fields.material4_value [single_line_text_field]", "key" : "pourcentMatiere4"},
	{"label" : "Metafield: custom_fields.material5 [single_line_text_field]", "key" : "matiere5"},
	{"label" : "Metafield: custom_fields.material5_value [single_line_text_field]", "key" : "pourcentMatiere5"},
	{"label" : "Metafield: custom_fields.material6 [single_line_text_field]", "key" : "matiere6"},
	{"label" : "Metafield: custom_fields.material6_value [single_line_text_field]", "key" : "pourcentMatiere6"},
	{"label" : "Metafield: custom_fields.material7 [single_line_text_field]", "key" : "matiere7"},
	{"label" : "Metafield: custom_fields.material7_value [single_line_text_field]", "key" : "pourcentMatiere7"},
	{"label" : "Metafield: custom_fields.material8 [single_line_text_field]", "key" : "matiere8"},
	{"label" : "Metafield: custom_fields.material8_value [single_line_text_field]", "key" : "pourcentMatiere8"},
	{"label" : "Metafield: custom_fields.material9 [single_line_text_field]", "key" : "matiere9"},
	{"label" : "Metafield: custom_fields.material9_value [single_line_text_field]", "key" : "pourcentMatiere9"},
	{"label" : "Metafield: custom_fields.material10 [single_line_text_field]", "key" : "matiere10"},
	{"label" : "Metafield: custom_fields.material10_value [single_line_text_field]", "key" : "pourcentMatiere10"},
	{"label" : "Metafield: mm-google-shopping.custom_product [single_line_text_field]", "key" : "custom_product"}
	]
	

	
const ExportCsv = () => {
    const {listesProduitExport} = useContext(ListeExportContext)

    var data = listesProduitExport

    const csvReport = ({
        data: data,
        headers: header,
        filename: `Export_${moment().format('YYYY-MM-DD_HHmmss')}`

    })    

    return (
        <div className='ms-auto p-2'>
            {csvReport && <CSVLink {...csvReport} enclosingCharacter={``} separator={","}><button className='btn btn-dark mx-2'>Exporter en csv</button></CSVLink>}
        </div>

    )
}

export default ExportCsv;