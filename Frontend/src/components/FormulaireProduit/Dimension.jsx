import { useContext } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import FooterForm from "./TemplateFormulaire/FooterForm";
import Dimension from "./Caracteristique/Dimension";
import InputDesabled from "./TemplateFormulaire/InputDesabled";
import { useEffect } from "react";

const Dimensions = () => {
    //variable
    const {infoSku, dimensionDone, longueurUpdate, largeurUpdate, poidsUpdate, hauteurUpdate, setDimensionDone, sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)
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
                <InputDesabled label="Référence dans multimag" value={infoSku.reference_couleur} />
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