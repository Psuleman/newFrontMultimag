import { useEffect } from "react";
import { useState } from "react";
import { HistoriqueReferencementContext } from "../components/HistoriqueReferencement/Context/HistoriqueReferencementContext";
import Option from "../components/HistoriqueReferencement/Option";
import Template from "../components/Layout/Template"
import { getTacheJournalier } from "../services/taches.service";

import  Moment  from "moment";

const HistoriqueReferencement = () => {
    const [dateTache, setDateTache] = useState()
    const [listeTache, setListeTache] = useState()
    
    useEffect(()=>{
        let date = Moment().format("YYYY-MM-DD")
        let tab = []

        if(!dateTache || dateTache==""){
            setDateTache(Moment().format("YYYY-MM-DD"))
        }
        else{
            date = dateTache
        }
        let promise = Promise.resolve(getTacheJournalier(date))
        promise.then((value)=>{
            if(value){
                for(let item in value){
                    if(item == "hydra:member"){
                        value[item].forEach(element => {

                            let produits = {
                                sku : element.produit.sku,
                                date_modif : element.date_modif
                            }
                            let saison = element.produit.saison
                            let motif = element.motif
                            let nom = element.user.nom + " " + element.user.prenom
                            let email = element.user.email

                            let elementExist = false

                            /**
                             * Vérification email
                             */

                            if(tab.length>0){
                                for(let i in tab){
                                    if(tab[i].email){
                                        elementExist = true
                                        let motifExist = false

                                        for(let indexMotif in tab[i].taches){
                                            if(tab[i].taches[indexMotif].type == motif){
                                                motifExist = true

                                                /**
                                                 * Motif Exist
                                                 */
                                                let produitTab = tab[i].taches[indexMotif].produits
                                                let saisonExist = false

                                                for(let indexProduit in produitTab){
                                                    if(produitTab[indexProduit].saison == saison) {
                                                        saisonExist = true

                                                        tab[i].taches[indexMotif].produits[indexProduit].produits.push(produits)
                                                    }
                                                }

                                                if(!saisonExist){
                                                    tab[i].taches[indexMotif].produits.push({
                                                        saison: saison,
                                                        produits : [produits]
                                                    })
                                                }
                                                
                                                
                                            }
                                        }


                                        if(!motifExist){
                                            tab[i].taches.push({
                                                type : motif,
                                                produits : [
                                                    {
                                                        saison : saison,
                                                        produits : [produits]                                                        
                                                    }

                                                ]
                                            })
                                        }
                                    }
                                }
                            }

                            if(!tab || tab.length ==0 || elementExist==false){
                                tab.push({
                                    email : email,
                                    nom : nom,
                                    taches : [
                                        {
                                            type : motif,
                                            produits :  [
                                                {
                                                    saison : saison,
                                                    produits : [
                                                        produits
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                })                                
                            }
                 
                            


                        
                        });                    
                    }
                }
            
                console.log(tab)
            }



            
        })



    }, [dateTache])
    //render
    return (
        <Template>
            <HistoriqueReferencementContext.Provider value={{
                dateTache: dateTache, setDateTache: setDateTache,
                listeTache: listeTache, setListeTache: setListeTache,
            }}>
            	<header className="d-flex justify-content-between mb-3">
					<div className="fs-3 fw-bolder">Historique des référencement</div>
				</header>     
                <Option />
                <div className="table">
                <table>

                </table>
                </div>         
            </HistoriqueReferencementContext.Provider>

        </Template>
    )
}

export default HistoriqueReferencement;