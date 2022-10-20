import { useContext } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import DescriptionProduit from "./Description/DescriptionProduit";
import NomProduit from "./Description/NomProduit";
import FooterForm from "./TemplateFormulaire/FooterForm";
import HeaderForm from "./TemplateFormulaire/HeaderForm";

const Description = () => {
    //variable
    const {infoSku, universEnUpdate, setUniversEnUpdate , descriptionFrUpdate, setDescriptionFrUpdate, descriptionEnUpdate, setDescriptionEnUpdate, nomProduitFrUpdate, setNomProduitFrUpdate, nomProduitEnUpdate, setNomProduitEnUpdate, 
    sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)

    //fonction 
    //return
    return (
        <div className="card mb-3">
        <HeaderForm title="Description" section="description" />
        {
            infoSku && (sectionUpdate == "description") &&
            <form onSubmit={(e)=>{handleClickSave(e, "taille")}}>        
            <div className="card-body">
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