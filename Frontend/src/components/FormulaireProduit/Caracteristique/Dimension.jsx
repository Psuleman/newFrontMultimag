import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import Input from "../TemplateFormulaire/Input"

const Dimension = () => {
    //variable
    const {dimensionFrUpdate, setDimensionFrUpdate, dimensionEnUpdate, setDimensionEnUpdate} = useContext(FormulaireContext)
    //render
    return (
    <section className="row g-3 mt-1">
        <Input id="inputDimensionFr" label="Dimension EN" value={dimensionFrUpdate} setValue={setDimensionFrUpdate} />
        <Input id="inputDimensionEn" label="Dimension EN" value={dimensionEnUpdate} setValue={setDimensionEnUpdate} />
    </section>
    )
}

export default Dimension;