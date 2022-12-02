import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import Input from "../TemplateFormulaire/Input"
import Textarea from "../TemplateFormulaire/Textarea";

const Dimension = () => {
    //variable
    const {largeurUpdate, setLargeurUpdate, longueurUpdate, setLongueurUpdate, hauteurUpdate, setHauteurUpdate, dimensionFrUpdate, setDimensionFrUpdate} = useContext(FormulaireContext)

    //render
    return (
    <section className="row g-3 mt-1">
        {/* <Input id="inputDimensionLongueur" type="number" label="Longueur" value={longueurUpdate} setValue={setLongueurUpdate} />
        <Input id="inputDimensionLargeur" type="number" label="Largeur" value={largeurUpdate} setValue={setLargeurUpdate} />
        <Input id="inputDimensionHauteur" type="number" label="Hauteur" value={hauteurUpdate} setValue={setHauteurUpdate} /> */}
        <Textarea id="inputDescriptionFr" label="Dimension" value={dimensionFrUpdate} setValue={setDimensionFrUpdate} />

    </section>
    )
}

export default Dimension;

