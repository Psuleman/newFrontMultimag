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
                <label class="form-check-label" for={"formSkus_"+index}>Sku</label>
                <input className="form-control" type="number" id={"formSkus_"+index}  required />
            </div>  
            <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <label class="form-check-label" for={"formTailleSkus_"+index}>Taille</label>
                <input className="form-control" type="text" id={"formTailleSkus_"+index}  required />
            </div>
            
            { tabEtatProduit && <Select id={"formEtatSkus_"+index} label={"Etat du produit"} value={listSkus[index].etat} setValue={setTabEtatProduit} list={tabEtatProduit} itemValue={""} index={index} />}
        </section>            

    )
}

export default SkuItem