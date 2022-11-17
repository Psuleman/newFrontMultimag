import {FormulaireContext} from "./Context/FormulaireContext"
import { useContext, useEffect, useState } from "react";
import {Univers} from "../../data/Univers"
import {Marques} from "../../data/Marques"
import {Pays} from "../../data/Pays"
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import FooterForm from "./TemplateFormulaire/FooterForm"
import UniversForm from "./Information/UniversForm";
import InputDesabled from "./TemplateFormulaire/InputDesabled";
import Select from "./TemplateFormulaire/Select";
import Marque from "./Information/Marque"
const Information = () => {
    /**
     * sku, marque, univers, univers en, Reference fournisseur, Pays Origine
     */
    //variable
    const {infoSku, marqueUpdate, setMarqueUpdate, universUpdate, setUniversUpdate, universEnUpdate, setUniversEnUpdate, paysOrigineUpdate, setPaysOrigineUpdate,sectionUpdate,
        setSectionUpdate, handleClickSave, indicationDone, setIndicationDone} = useContext(FormulaireContext)
    const [marques, setMarques] = useState(Marques)
    //fonction
    useEffect(()=>{
        if(marqueUpdate && marqueUpdate.marque && marqueUpdate.marque.length>0 && paysOrigineUpdate.length>0 && universUpdate!= "" && universEnUpdate.length>0)
            setIndicationDone(true)
        else 
            setIndicationDone(false)
    }, [])
    // console.log("reference couleur", infoSku.reference_fournisseur)
    //render
    return (
        <div className="card mb-3">
            <HeaderForm title="Identification du produit" section="information" isDone={indicationDone} />
            {
            infoSku && (sectionUpdate == "information") &&
            <form onSubmit={(e)=>{handleClickSave(e, "caractéristique")}}>        
                <div className="card-body">
                <section className="row g-3 mb-3"><small>Tous les champs sont obligatoire</small></section>
                <section className="row g-3">
                    <InputDesabled id="inputSku" label="SKU" value={infoSku.sku} type="text" />
                    <InputDesabled id="inputRefFournisseur" label="Référence Fournisseur" value={infoSku.reference_fournisseur} type="text" />
                
                    <Marque />
                    <Select id="selectPaysOrigine" label="Pays origine" value={paysOrigineUpdate} setValue={setPaysOrigineUpdate} list={Pays} itemValue="pays" />

                </section>
                <UniversForm />
                </div>

                <FooterForm />
            </form>
        }
        </div>
    )
}

export default Information;