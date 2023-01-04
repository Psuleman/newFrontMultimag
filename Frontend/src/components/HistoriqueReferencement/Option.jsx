import { useEffect } from "react";
import { useContext } from "react";
import { HistoriqueReferencementContext } from "./Context/HistoriqueReferencementContext";
import Moment from "moment"
import { getTacheJournalier } from "../../services/taches.service";

const Option = () => {
    const {dateTache, setDateTache, listTache, setListeTache} = useContext(HistoriqueReferencementContext)

    useEffect(()=>{
        if(!dateTache || dateTache!=""){
            setDateTache(Moment().format("YYYY-MM-DD"))
        }

        const promise = Promise.resolve(getTacheJournalier(dateTache))

        promise.then((value) => {
            if(value){
                console.log(value)
                let tab = []
                for(let item in value){
                    if(item == "hydra:member"){
                        let valeur = value[item]
                        let elementExist = 0

                        if(tab.length>0){
                            for(let i in tab){
                                if(tab[i].email = valeur.user.email) {
                                    /**
                                     * Element exist
                                     */
                                    elementExist = 1

                                    let produit = tab[i].produit

                                    let motifExist = false

                                    produit.forEach(element => {
                                        if(element.motif == valeur.motif){
                                            motifExist = true
                                            tab[i].produit.skus.push(valeur.produit.sku)
                                        }
                                    });

                                    if(!motifExist){
                                        let tabProduit
                                        tabProduit.push({
                                            motif : valeur.motif,
                                            skus: [valeur.produit.sku],
                                            total : skus.length
                                        })
                                        tab[i].produit = tabProduit
                                    }
                                }
                            }

                            if(elementExist){

                            }
                            else{

                            }

                        }
                        else if(tab.length==0 || elementExist==0){
                            let tabProduit = []
                            tabProduit.push({
                                motif : valeur.motif,
                                skus: valeur.produit && [valeur.produit.sku],
                            })
                            
                            tab.push({
                                email: valeur.user && valeur.user.email,
                                nom: valeur.user && valeur.user.nom + " " + valeur.user.prenom,
                                date_modif: valeur.date_modif,
                                produit : tabProduit,
                                totalProduit : valeur.length,
                            })
                        }
                             


                        setListeTache(tab)
                        console.log(tab)
                    }
                }
            }
        })
    }, [dateTache, listTache])

console.log("taches : ", listTache)
    //render
    return (
    <header>
        <div className="d-flex align-items-center p-3 action">
            <div className="form-check me-3">
                <label className="form-label">Séléctionner une date</label>
                <input type="date" max={Moment().format("YYYY-MM-DD")} className="form-control" value={dateTache} onChange={(e)=>{setDateTache(e.target.value)}} />
            </div>
        </div> 
    </header> 
    )
}

export default Option;