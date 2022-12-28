import { useContext } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import FooterForm from "./TemplateFormulaire/FooterForm";
import Dimension from "./Caracteristique/Dimension";
import InputDesabled from "./TemplateFormulaire/InputDesabled";
import { useEffect } from "react";
import Input from "./TemplateFormulaire/Input";

const Dimensions = () => {
    //variable
    const {infoSku, referenceCouleurUpdate, setReferenceCouleurUpdate, dimensionDone, longueurUpdate, largeurUpdate, poidsUpdate, setPoidsUpdate, hauteurUpdate, setDimensionDone, sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)
    //fonction
    useEffect(()=>{
        if(longueurUpdate!=null && largeurUpdate!=null && poidsUpdate!=null && hauteurUpdate!=null){
            setDimensionDone(true)
        }
        else{
            setDimensionDone(null)
        }
    },[])

    //return
    // console.log(infoSku)
    return (
    <div className="card mb-3">
        <HeaderForm title="Dimension" section="dimensions" isDone={dimensionDone} />
        {
        infoSku && (sectionUpdate == "dimensions") &&
        <form onSubmit={(e)=>{handleClickSave(e, "dimensions")}}>        
        <div className="card-body">
            <section className="row g-3">
                {/* <InputDesabled labelInput="Référence dans multimag" valeur={infoSku.reference_couleur} /> */}
                <Input label={"Reference dans multimag"} id={"inputCouleurFnr"} value={referenceCouleurUpdate} setValue={setReferenceCouleurUpdate} />

            </section>
            <section className="row g-3 mt-3">
                <Input id="inputDimensionPoids" type="number" label="Poids (en gramme)" stepValue="0.01" value={poidsUpdate} setValue={setPoidsUpdate} />

            </section>

            <Dimension />
        </div>

        <FooterForm />
        </form>
        }
    </div>
    )
}

export default Dimensions;