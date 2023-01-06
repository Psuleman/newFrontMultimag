import { useContext } from "react";
import { ShootingContext } from "./Context/ShootingContext";

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
                        etat: ""
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
            <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <label htmlFor="formFile" className="form-label">Nombre de produit</label>
                <input className="form-control" type="number" id="formFile" min="0" value={nombreSkus} onChange={(e)=>{setNombreSkus(e.target.value)}} required />
            </div>
            <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <label class="form-check-label" for="flexCheckChecked">
                    Type de livraison
                </label>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value={livreur} onChange={(e)=>{setLivreur(e.target.value)}} id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Livré par
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Récupérer en magasin
                    </label>
                </div>
                </div>
            <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <label htmlFor="formFile" className="form-label">Livré ou récupérer par</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Choisissez</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div>
                <button className="btn btn-outline-dark">Valider</button>
            </div>
            </form>

        </div>
    )
}

export default Formulaire;