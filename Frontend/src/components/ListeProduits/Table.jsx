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
import { ListeExportContext } from './Context/ListeExportContext'
import Pagination from './Pagination'

const Table = () => {
    const {skus, totalSkus, liste} = useContext(ListeContext)
    const [listesProduit, setListesProduit] = useState([])
    const [listesProduitExport , setListesProduitExport] = useState([])
    useEffect(()=>{
        if(liste=="export" && skus && totalSkus>0){
            let tab = []

            for(let index in skus){
                let element = skus[index]
                if(element.variants.length>0){
                    for(let item in element.variants){
                        let variantItem = element.variants[item]
                        let prixRemise = element.tarifs[0].prix_vente * (element.tarifs[0].remise / 100)
                        let marque = element.marque ? element.marque.marque : element.nom_produit_fr
                        let imgAltText = (marque + " " + element.nom_produit_fr + " " + marque)
                        let nom_produit_fr = element.nom_produit_fr.replace(" ", "_")
                        let itemtab = {
                            lien: element.lien,
                            sku : marque + "_" + nom_produit_fr + "_" + element.sku,
                            command : "MERGE",
                            title : item==0 ?  marque + " " + element.nom_produit_fr : null,
                            descriptionFr : item==0 ?  element.description_fr : null,//Body html
                            marque : item==0 ?  marque : null, //Vendor
                            categorie : item==0 ?  element.categorie : null, //Type
                            tags : item==0 ?  element.tags_ref : null, // A revoir
                            tags_command : "REPLACE",
                            published : "FALSE",
                            published_scope : "web",
                            image_command : "REPLACE",
                            image_src : item==0 ?  element.pictures  : null,
                            img_alt_text : item==0 ?  imgAltText : null,
                            variant_command :"REPLACE",

                            taille : "Taille" ,
                            attribut : variantItem.taille_ref ? variantItem.taille_ref.taille_ref : null, // à revoir
                            option_2_name : null,
                            option_2_value : null,
                            option_3_name : null,
                            option_3_value : null,
                            variant_position : 1 ,// à revoir?????????
                            variant_sku : variantItem.variant_sku , //A revoir
                            prixVente : parseFloat(element.tarifs[0].prix_vente) ,
                            prixVenteRemise : element.tarifs[0].remise>0 ?  parseFloat(prixRemise) : null,
                            shipping : "TRUE", // A revoir sinon TRUE
                            taxable : "TRUE", // A revoir sinon TRUE
                            reference_fournisseur : item == 0 ? element.reference_fournisseur : null, //Variant barcode
                            inventory_tracker : "Shopify",
                            inventory_policy : "deny", // a revoir sinon deny
                            fulfillment_service : "manual", // a revoir sinon manual
                            univers : item==0 ? element.univers : null, //gender
                            paysOrigine : item==0 ? element.pays_origine : null, //country
                            //une ligne manquent
                            custum_fields_sizing: element.dimension_fr ? element.dimension_fr : null,//sizing
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

            }

            setListesProduit(tab)

            /**
             * liste à exporter
             */
            let tabExport = []
            // tab.forEach(element => {
            //     let item = element
            //     let titleExport = element.title ? element.title.replace(`"`, `""`) : null
            //     item.title = element.title ? `${titleExport}`: null
            //     let description = element.descriptionFr ? element.descriptionFr.replace(`"`, `""`) : null
            //     item.descriptionFr = element.descriptionFr ? `${description}` : null
            //     let img_alt_text_export = element.img_alt_text ? element.img_alt_text.replace(`"`, `""`) : null 
            //     item.img_alt_text = element.img_alt_text ? `${img_alt_text_export}` : null
            //     tabExport.push(item)
            // });
            for(let item in tab){
                // let title = tab[item].title ? tab[item].title.replace(`"`, `"`) : null
                let title = tab[item].title ? splitText(tab[item].title): null

                // let descriptionFr = tab[item].descriptionFr ? tab[item].descriptionFr.replace(`"`, `"`) : null
                let descriptionFr = tab[item].descriptionFr ? splitText(tab[item].descriptionFr) : null

                // let img_alt_text = tab[item].img_alt_text ? tab[item].img_alt_text.replace(`"`, `"`) : null  
                let img_alt_text = tab[item].img_alt_text ? splitText(tab[item].img_alt_text) : null

                tabExport[item] = tab[item]

                tabExport[item].title = tabExport[item].title ? `"${title}"`: null,
                tabExport[item].descriptionFr = tabExport[item].descriptionFr ? `"${descriptionFr}"`: null,//body html
                tabExport[item].tags =tabExport[item].tags ? `"${tabExport[item].tags}"`: null,
                tabExport[item].img_alt_text = tabExport[item].img_alt_text ? `"${img_alt_text}"`: null

            }
            setListesProduitExport(tabExport)
            // console.log("tabExport", tabExport)
        }
    }, [skus])


    const splitText = (texte) => {

        let result = ""
        for (let item in texte) {
            if(texte[item]==`\"`){
                result += `\"\"`
            }
            else{
                result += texte[item]
            }
        }

        return result

    }

	
    // console.log("tab table", listesProduit)
    //render
    return (
        <section>
            <ListeExportContext.Provider value={{
                listesProduit: listesProduit,
                listesProduitExport: listesProduitExport
            }}>
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
                        skus.map((item, index)=>( <ValueListe item={item} key={"sku_"+ index} />))
                    }
                    {
                        totalSkus>0 && liste == "referencement" && 
                        skus.map((item, index)=>( <ValueReferencement item={item} key={"sku_"+ index} />))
                    }
                    {
                        totalSkus>0 && liste == "modification" && 
                        skus.map((item, index)=>( <ValueReferencement item={item} key={"sku_"+ index} />))
                    }    
                                        {
                        totalSkus>0 && liste == "export" && 
                        listesProduit.map((item, index)=>( <ValueExport item={item} key={"sku_"+ index} />))
                    }   
                </table>
            </div>
            <footer className='footerTable'>
                <Pagination />
            </footer>
            </ListeExportContext.Provider>

        </section>
    )
}

export default Table