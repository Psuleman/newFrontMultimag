import { useEffect } from "react"
import { useContext } from "react"
import { FormulaireContext } from "./Context/FormulaireContext"

const Recapitulatif = () => {
    //variable
    const {infoSku, marqueUpdate, paysOrigineUpdate, universUpdate, universEnUpdate, categorieUpdate, filtreUpdate, couleurUpdate, couleurEnUpdate, dimensionFrUpdate, matiereUpdate, tarifUpdate, attributUpdate } = useContext(FormulaireContext)
    
    // let image = ""
    // let images = infoSku.pictures
    // images = images.split(";")

    // image = images[0];

    // useEffect(()=>{
    //     // fetch(item.pictures)
    //     fetch(image)
    //     .then(function(response) {
    //         if(response.status == 404){
    //             image="https://fakeimg.pl/300/"
    //         }       
    //     })
    //     .then(function(myBlob) {
    //     }).catch((err)=>{});
        
    // })
    

    // console.log("infoSku", infoSku)
    //render
    return (
        <aside className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-0 pe-0">
            <div className="">
            <div className="card h-100">
                <img src="https://fakeimg.pl/300/" className="card-img-center" alt="..." />
                <div className="card-body"> 
                    <h5 className="card-title">SKU : {infoSku.sku}</h5>                           
                    <p className="card-text"><em>Saison : </em>{infoSku.saison}</p>

                    {
                        marqueUpdate &&
                        <p className="card-text"><em>Marque : </em>{marqueUpdate}</p>
                    }

                    { 
                        paysOrigineUpdate && 
                        <p className="card-text"><em>Pays origine : </em>{paysOrigineUpdate}</p> }

                    {
                        universUpdate && 
                        <p className="card-text"><em>Univers : </em>{universUpdate + " ( " + universEnUpdate + " )" }</p>}

                    {
                        filtreUpdate && 
                        <p className="card-text"><em>Catégorie : </em>{categorieUpdate + " > " + filtreUpdate}</p> }

                    { 
                        couleurUpdate && 
                        <p className="card-text"><em>Couleur : </em>{ couleurUpdate + " ( " + couleurEnUpdate + " )" }</p> 
                        }

                    {
                        matiereUpdate &&
                        matiereUpdate[0] &&
                        matiereUpdate[0].pourcentageMatiere>0 &&
                        <p className="card-text"><em>Matière : </em>
                            {
                                matiereUpdate.map((item, index)=>(
                                <span key={"matiere_recap_" + {index}}>
                                    {
                                        item.pourcentageMatiere>0 &&
                                        <span>
                                            {
                                                index>0 ?
                                                <span> , {item.pourcentageMatiere + "% " + item.matiere.matiere }</span>
                                                :
                                                <span>{item.pourcentageMatiere + "% " + item.matiere.matiere}</span>
                                            }
                                        </span>
                                        
                                    }
                                </span>))  
                            }
                        </p>
                    }

                    { 
                        tarifUpdate &&
                        tarifUpdate[0] &&  
                        tarifUpdate[0].prix_vente && 
                        <p className="card-text"><em>Tarifs : </em>{tarifUpdate[0].prix_vente + "€"}{tarifUpdate[0].remise>0 && <span className="text-white bg-danger p-1 ms-1" > - {tarifUpdate[0].remise} % </span>}</p>
                    }

                    {
                        attributUpdate &&
                        attributUpdate[0] &&
                        attributUpdate[0].taille_ref && 
                        <p className="card-text"><em>Tailles : </em>
                        {attributUpdate.map((item, index)=>( <span key={"attribut_recap_" + index}>{index>0 && ", "} {item.taille_ref.taille_ref}</span> ))}
                        </p>
                    }

                    
                </div>

                </div>
            </div>

        </aside>
    )
}
export default Recapitulatif