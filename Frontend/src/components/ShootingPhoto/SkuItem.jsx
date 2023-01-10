import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import Select from "./Select"
import { ShootingContext } from "./Context/ShootingContext"

const SkuItem = ({index}) => {
    const [tabEtatProduit, setTabEtatProduit] = useState([])
    const {listSkus, setListSkus} = useContext(ShootingContext)

    useEffect(()=>{
        let tab = ["Parfaite état", "Tache", "Déchirer"]
        setTabEtatProduit(tab)
    }, [])

    //render
    return (
        <section className="row g-3 mt-1">
            <header>Produit n° {index+1}</header>

            <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <label class="form-label" for={"formSkus_"+index}>Sku</label>
                <section className="list-group dropdown">
                    <input className="form-control" type="number" id={"formSkus_"+index} min="1" value={listSkus[index].sku} onChange={(e)=>{
                        setListSkus(oldState => {
                            let newState = [...oldState]
                            newState[index].sku = e.target.value

                            return newState
                        })
                    }}  required />
                </section>
            </div>  
            <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <label class="form-label" for={"formTailleSkus_"+index}>Taille</label>
                <section className="list-group dropdown"><input className="form-control" type="text" id={"formTailleSkus_"+index}  value={listSkus[index].taille}  onChange={(e)=>{
                        setListSkus(oldState => {
                            let newState = [...oldState]
                            newState[index].taille = e.target.value

                            return newState
                        })
                    }}  required /></section>
            </div>
            
            { tabEtatProduit && <Select id={"formEtatSkus_"+index} label={"Etat du produit"} value={listSkus[index].etat} setValue={setListSkus} list={tabEtatProduit} index={index} />}
        </section>            

    )
}

export default SkuItem