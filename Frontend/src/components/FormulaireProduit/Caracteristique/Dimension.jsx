import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import Input from "../TemplateFormulaire/Input"

const Dimension = () => {
    //variable
    const {dimensionFrUpdate, setDimensionFrUpdate, dimensionEnUpdate, setDimensionEnUpdate} = useContext(FormulaireContext)
    //render
    return (
    <section className="row g-3 mt-1">
        <Input id="inputDimensionFr" label="Dimension Fr" value={dimensionFrUpdate} setvalue={setDimensionFrUpdate} />
        <Input id="inputDimensionEn" label="Dimension En" value={dimensionEnUpdate} setvalue={setDimensionEnUpdate} />
    </section>
    )
}

export default Dimension;

