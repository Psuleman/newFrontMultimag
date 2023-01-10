import { useEffect } from "react";
import { useContext, useState } from "react";
import { ShootingContext } from "./Context/ShootingContext";
import Livreur from "./Formulaire/Livreur";
import NombreProduit from "./Formulaire/NombreProduit";
import TypeLivraison from "./Formulaire/TypeLivraison";

const Formulaire = () => {
    const {nombreSkus, setNombreSkus, livreur, setLivreur, listSkus, setListSkus} = useContext(ShootingContext)


    const handleSubmit = (e) => {
        e.preventDefault();

        if(nombreSkus){
            let tab = new Array(nombreSkus)
            if(!listSkus){
                let nouveau = []
                for(let i=0; i<nombreSkus; i++){
                    nouveau.push({
                        sku: 0,
                        taille: "",
                        etat: "",
                        motif: ""
                    })
                }

                setListSkus(nouveau)
            }
            else{
                setListSkus((oldState)=>{
                    let newState = [...oldState]

                    let total = newState.length
                    let reste = nombreSkus - total

                    if(reste<0){
                        reste = reste * -1
                        for(let i=reste; i>0; i--){
                            newState.pop()
                        }                        
                    }
                    else{
                        //ajouter des nouveau
                        for(let i=0; i<reste; i++){
                            newState.push({
                                sku: 0,
                                etat: ""
                            })
                        }
                    }

                    return newState
                })
            }
        }

    }


    // render
    return (
        <div id="newProduit" className="pt-3 px-3 pb-4">
            <div>Produits livré pour shooting photo</div>
            <form className="mt-3"  onSubmit={handleSubmit}>
            <NombreProduit />
            <TypeLivraison />
            <Livreur />
            <div>
                <button className="btn btn-outline-dark">Valider</button>
            </div>
            </form>

        </div>
    )
}

export default Formulaire;