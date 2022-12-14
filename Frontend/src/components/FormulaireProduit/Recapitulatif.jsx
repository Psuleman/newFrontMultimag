import { useEffect, useState } from "react"
import { useContext } from "react"
import { FormulaireContext } from "./Context/FormulaireContext"
import Ceintre from "../../assets/image/cintre-de-vetements.png"

const Recapitulatif = () => {
    //variable
    const {infoSku, marqueUpdate, paysOrigineUpdate, universUpdate, universEnUpdate, categorieUpdate, filtreUpdate, couleurUpdate, couleurEnUpdate, dimensionFrUpdate, matiereUpdate, tarifUpdate, attributUpdate } = useContext(FormulaireContext)
    const [image, setImage] = useState()



    useEffect(()=>{
        if(infoSku && infoSku.pictures){
            let imgTab = infoSku.pictures.split(";");
            let img = imgTab[0]

            fetch(img)
            .then(function(response) {
                if(response.ok == false){
                    setImage(Ceintre)
                }
                else {
                    setImage(img)
                }
            })
            .then(function(myBlob) {})
            
        }
        else{
            setImage(Ceintre)
        }
        
    }, [infoSku])
    

    //render
    return (
        <aside className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-0 pe-0">
            <div className="">
            <div className="card h-100">
                <img src={image} className="card-img-center m-auto mt-3 mb-3" alt="..." style={{
                    width: "90%",
                    heigth: "auto"
                }} />

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
                        <p className="card-text"><em>Cat??gorie : </em>{categorieUpdate + " > " + filtreUpdate}</p> }

                    { 
                        couleurUpdate && 
                        <p className="card-text"><em>Couleur : </em>{ couleurUpdate + " ( " + couleurEnUpdate + " )" }</p> 
                        }

                    {
                        matiereUpdate &&
                        matiereUpdate[0] &&
                        matiereUpdate[0].pourcentageMatiere>0 &&
                        <p className="card-text"><em>Mati??re : </em>
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
                        <p className="card-text"><em>Tarifs : </em>{tarifUpdate[0].prix_vente + "???"}{tarifUpdate[0].remise>0 && <span className="text-white bg-danger p-1 ms-1" > - {tarifUpdate[0].remise} % </span>}</p>
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