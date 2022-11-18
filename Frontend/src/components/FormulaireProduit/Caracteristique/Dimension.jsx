import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import Input from "../TemplateFormulaire/Input"

const Dimension = () => {
    //variable
    const {largeurUpdate, setLargeurUpdate, longueurUpdate, setLongueurUpdate, hauteurUpdate, setHauteurUpdate, poidsUpdate, setPoidsUpdate, dimensionFrUpdate, setDimensionFrUpdate} = useContext(FormulaireContext)

    //render
    return (
    <section className="row g-3 mt-1">
        {/* <Input id="inputDimensionLongueur" type="number" label="Longueur" value={longueurUpdate} setValue={setLongueurUpdate} />
        <Input id="inputDimensionLargeur" type="number" label="Largeur" value={largeurUpdate} setValue={setLargeurUpdate} />
        <Input id="inputDimensionHauteur" type="number" label="Hauteur" value={hauteurUpdate} setValue={setHauteurUpdate} /> */}
        <Input id="inputDimensionFr" type="text" label="Dimension" value={dimensionFrUpdate} setValue={setDimensionFrUpdate} />
        <Input id="inputDimensionPoids" type="number" label="Poids" value={poidsUpdate} setValue={setPoidsUpdate} />
    </section>
    )
}

export default Dimension;

