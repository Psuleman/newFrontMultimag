import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import Textarea from "../TemplateFormulaire/Textarea";

const DescriptionProduit = () => {
    //variable
    const {descriptionFrUpdate, setDescriptionFrUpdate, descriptionEnUpdate, setDescriptionEnUpdate, infoSku} = useContext(FormulaireContext)

    //render
    return (
        <section className="row g-3 mt-1">
            <Textarea id="inputDescriptionFr" label="Description du produit" value={descriptionFrUpdate} setValue={setDescriptionFrUpdate} />
            {/* <Textarea id="inputDescriptionEn" label="Description du produit EN" value={descriptionEnUpdate} setValue={setDescriptionEnUpdate} /> */}
        </section>
    )
}

export default DescriptionProduit;
