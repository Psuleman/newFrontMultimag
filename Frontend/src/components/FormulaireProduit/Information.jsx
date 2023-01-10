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
import Input from "./TemplateFormulaire/Input";
const Information = () => {
    /**
     * sku, marque, univers, univers en, Reference fournisseur, Pays Origine
     */
    //variable
    const {infoSku, referenceFournisseurUpdate, setReferenceFournisseurUpdate, marqueUpdate, setMarqueUpdate, universUpdate, setUniversUpdate, universEnUpdate, setUniversEnUpdate, paysOrigineUpdate, setPaysOrigineUpdate,sectionUpdate,
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
                <section className="row g-3 mb-3"><small>Champs sont obligatoire *</small></section>
                <section className="row g-3">
                    <InputDesabled idInput="inputSku" labelInput="SKU" valeur={infoSku.sku} typeInput="text" />
                    <InputDesabled idInput="inputCatUnivers" typeInput="text" labelInput="Catégorie dans le fichier multimag" valeur={infoSku.categorie_univers} />
                </section>
                <section className="row g-3  mt-1">
                    {/* <InputDesabled idInput="inputRefFournisseur" labelInput="Référence Fournisseur" valeur={infoSku.reference_fournisseur} typeInput="text" /> */}
                    <Input label={"* Référence Fournisseur"} id="inputRefFournisseur" value={referenceFournisseurUpdate} setValue={setReferenceFournisseurUpdate} />
                    <Marque />
                    <Select id="selectPaysOrigine" label="* Pays origine" value={paysOrigineUpdate} setValue={setPaysOrigineUpdate} list={Pays} itemValue="pays" />

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