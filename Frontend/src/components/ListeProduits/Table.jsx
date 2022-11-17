import { useContext, useState, useEffect } from 'react'
import { ListeContext } from './Context/ListeContext'
import Header from './Header'
import ThListes from './Thead/ThListes'
import ThReferencement from './Thead/ThReferencement'
import ThModification from './Thead/ThModification'
import ThExport from './Thead/ThExport'
import ValueListe from './Value/ValueListe'
import ValueReferencement from './Value/ValueReferencement'
import ValueExport from './Value/ValueExport'

const Table = () => {
    const {skus, totalSkus, liste} = useContext(ListeContext)
    const [listesProduit, setListesProduit] = useState([])

    useEffect(()=>{
        if(liste=="export" && skus){
            let tab = []

            for(let index in skus){
                let element = skus[index]
                for(let item in element.variants){
                    let variantItem = element.variants[item]
                    let prixRemise = element.tarifs[0].prix_vente * (element.tarifs[0].remise / 100)
                    let imgAltText = element.marque.marque + " " + element.nom_produit_fr + " " + element.marque.marque
                    let itemtab = {
                        lien: element.lien,
                        sku : element.sku,
                        command : "MERGE",
                        title : item==0 ?  element.marque.marque + " " + element.nom_produit_fr : null,
                        descriptionFr : item==0 ?  element.description_fr : null,//Body html
                        marque : item==0 ?  element.marque.marque : null, //Vendor
                        categorie : item==0 ?  element.filtre.sousCategorieRef.categorieRef.categorieRef : null, //Type
                        tags : item==0 ?  element.tags_ref : null, // A revoir
                        tags_command : "REPLACE" ,
                        published : "FALSE" ,
                        published_scope : "web",
                        image_command : "REPLACE" ,
                        image_src : item==0 ?  element.pictures  : null,
                        img_alt_text : item==0 ?  imgAltText : null,
                        variant_command :"REPLACE",

                        taille : "Taille" ,
                        attribut : variantItem.taille_ref.taille_ref , // à revoir
                        option_2_name : null,
                        option_2_value : null,
                        option_3_name : null,
                        option_3_value : null,
                        variant_position : "variant position" ,// à revoir
                        variant_sku : variantItem.variant_sku , //A revoir
                        prixVente : element.tarifs[0].prix_vente ,
                        prixVenteRemise : element.tarifs[0].remise>0 ?  prixRemise : null,
                        shipping : "Variant Requires Shipping", // A revoir sinon TRUE
                        taxable : "Variant Taxable", // A revoir sinon TRUE
                        referenceFournisseur : item == 0 ? element.referenceFournisseur : null, //Variant barcode
                        inventory_tracker : "Shopify",
                        inventory_policy : "Variant Inventory Policy", // a revoir sinon deny
                        fulfillment_service : "Variant Fulfillment Service", // a revoir sinon manual
                        univers : item==0 ? element.univers : null, //gender
                        paysOrigine : item==0 ? element.pays_origine : null, //country
                        //une ligne manquent
                        custum_fields_sizing: null,//sizing
                        coupe : item==0 ? element.coupe : null, //cut
                        TaillePorteeMannequin : null ,
                        couleur : item==0 ?  element.couleur : null, //color
                        entretien : item==0 ? element.entretien : null,//maintenance
                        /**
                         * Matiere
                         */
                         matiere1:item == 0 &&  element.matiereProduits[0]? element.matiereProduits[0].matiere.matiere : null,
                         pourcentageMatiere1: item == 0 && element.matiereProduits[0]? (element.matiereProduits[0].pourcentageMatiere + "%") : null,                        
                         matiere2: item == 0 && element.matiereProduits[1]? element.matiereProduits[1].matiere.matiere : null,
                         pourcentageMatiere2: item == 0 && element.matiereProduits[1]? (element.matiereProduits[1].pourcentageMatiere + "%") : null,                        
                         matiere3: item == 0 && element.matiereProduits[2]? element.matiereProduits[2].matiere.matiere : null,
                         pourcentageMatiere3: item == 0 && element.matiereProduits[2]? (element.matiereProduits[2].pourcentageMatiere + "%") : null,                        
                         matiere4: item == 0 && element.matiereProduits[3]? element.matiereProduits[3].matiere.matiere : null,
                         pourcentageMatiere4: item == 0 && element.matiereProduits[3]? (element.matiereProduits[3].pourcentageMatiere + "%") : null,                        
                         matiere5: item == 0 && element.matiereProduits[4]? element.matiereProduits[4].matiere.matiere : null,
                         pourcentageMatiere5: item == 0 && element.matiereProduits[4]? (element.matiereProduits[4].pourcentageMatiere + "%") : null,                        
                         matiere6: item == 0 && element.matiereProduits[5]? element.matiereProduits[5].matiere.matiere : null,
                         pourcentageMatiere6: item == 0 && element.matiereProduits[5]? (element.matiereProduits[5].pourcentageMatiere + "%") : null,                        
                         matiere7: item == 0 && element.matiereProduits[6]? element.matiereProduits[6].matiere.matiere : null,
                         pourcentageMatiere7: item == 0 && element.matiereProduits[6]? (element.matiereProduits[6].pourcentageMatiere + "%") : null,                        
                         matiere8: item == 0 && element.matiereProduits[7]? element.matiereProduits[7].matiere.matiere : null,
                         pourcentageMatiere8: item == 0 && element.matiereProduits[7]? (element.matiereProduits[7].pourcentageMatiere + "%") : null,                        
                         matiere9: item == 0 && element.matiereProduits[8]? element.matiereProduits[8].matiere.matiere : null,
                         pourcentageMatiere9: item == 0 && element.matiereProduits[8]? (element.matiereProduits[8].pourcentageMatiere + "%") : null,                        
                         matiere10: item == 0 && element.matiereProduits[9]? element.matiereProduits[9].matiere.matiere : null,
                         pourcentageMatiere10: item == 0 && element.matiereProduits[9]? (element.matiereProduits[9].pourcentageMatiere + "%") : null,      
                        custom_product : "TRUE" ,
                    }

                    tab.push(itemtab)
                }
            }
            setListesProduit(tab)
        }
    }, [skus, liste])
    //render
    return (
        <section>
            <Header/>
            <div className="table">
                <table>
                    { liste == "listes" && <ThListes/>}
                    { liste == "referencement" && <ThReferencement/> }
                    { liste == "modification" && <ThModification/>}
                    { liste == "export" && <ThExport/>}
                    {
                        totalSkus==0 && 
                        <tbody>
                            <tr>AucunProduit</tr>
                        </tbody>
                    } 
                    {
                        totalSkus>0 && liste == "listes" && 
                        skus.map((item, index)=>( <ValueListe item={item} />))
                    }
                    {
                        totalSkus>0 && liste == "referencement" && 
                        skus.map((item, index)=>( <ValueReferencement item={item} />))
                    }
                    {
                        totalSkus>0 && liste == "modification" && 
                        skus.map((item, index)=>( <ValueReferencement item={item} />))
                    }    
                                        {
                        totalSkus>0 && liste == "export" && 
                        listesProduit.map((item, index)=>( <ValueExport item={item} />))
                    }   
                </table>
            </div>
        </section>
    )
}

export default Table