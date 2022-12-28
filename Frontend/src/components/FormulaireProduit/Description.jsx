import { useEffect } from "react";
import { useContext } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import DescriptionProduit from "./Description/DescriptionProduit";
import NomProduit from "./Description/NomProduit";
import FooterForm from "./TemplateFormulaire/FooterForm";
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import Input from "./TemplateFormulaire/Input";
import InputDesabled from "./TemplateFormulaire/InputDesabled";

const Description = () => {
    //variable
    const {infoSku, referenceCouleurUpdate, setReferenceCouleurUpdate, descriptionDone, setDescriptionDone, universEnUpdate, setUniversEnUpdate , descriptionFrUpdate, setDescriptionFrUpdate, descriptionEnUpdate, setDescriptionEnUpdate, nomProduitFrUpdate, setNomProduitFrUpdate, nomProduitEnUpdate, setNomProduitEnUpdate, 
    sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)

    //fonction 
    useEffect(()=>{
        if(nomProduitFrUpdate && nomProduitFrUpdate.length>0 && nomProduitEnUpdate && nomProduitEnUpdate.length>0 && descriptionFrUpdate && descriptionFrUpdate.length>0 && descriptionEnUpdate && descriptionEnUpdate.length>0)
            setDescriptionDone(true)
        else
            setDescriptionDone(false)
    },[])
    //return
    return (
        <div className="card mb-3">
        <HeaderForm title="Description" section="description" isDone={descriptionDone} />
        {
            infoSku && (sectionUpdate == "description") &&
            <form onSubmit={(e)=>{handleClickSave(e, "entretienCoupe")}}>        
            <div className="card-body">
                <section className="row g-3 mb-3"><small>Tous les champs sont obligatoire</small></section>
                <section className="row g-3 mb-3">
                    {/* <InputDesabled labelInput="Référence dans multimag" valeur={infoSku.reference_couleur} /> */}
                    <Input label={"Reference dans multimag"} id={"inputCouleurFnr"} value={referenceCouleurUpdate} setValue={setReferenceCouleurUpdate} />

                </section>
                <NomProduit />
                <DescriptionProduit />
            </div>

            <FooterForm />
            </form>
        }
        </div>
    )
}

export default Description;