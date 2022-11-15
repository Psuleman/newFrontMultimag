import { useContext } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import Select from "./TemplateFormulaire/Select";
import {Coupe} from "../../data/Coupe"
import {Entretien} from "../../data/Entretien"
import FooterForm from "./TemplateFormulaire/FooterForm";
import { useEffect } from "react";

const EntretienCoupe = () => {
    const {infoSku, entretienCoupeDone, setEntretienCoupeDone, coupeUpdate, setCoupeUpdate, entretienUpdate, setEntretienUpdate, sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)

    //fonction
    useEffect(()=>{
        if((entretienUpdate && entretienUpdate.length>0) && (coupeUpdate && coupeUpdate.length>0))
            setEntretienCoupeDone(true)
        else if(entretienUpdate && entretienUpdate.length>0 && (!coupeUpdate ||coupeUpdate.length==0 || coupeUpdate==null)) 
            setEntretienCoupeDone(null)
        else
            setEntretienCoupeDone(false)
    }, [])
    //render
    return (
        <div className="card mb-3">
        <HeaderForm title="Entretien & coupe" section="entretienCoupe" isDone={entretienCoupeDone} />
        {
            infoSku && (sectionUpdate == "entretienCoupe") &&
            <form onSubmit={(e)=>{handleClickSave(e, "dimensions")}}>        
            <div className="card-body">
                <section className="row g-3 mb-3"><small>* Champs obligatoire</small></section>
                <section className="row g-3 mb-3">
                    <Select id="selectEntretien" label="* Entretien" value={entretienUpdate} setValue={setEntretienUpdate} list={Entretien} itemValue="entretien" />
                    <Select id="selectCoupe" label="Coupe" value={coupeUpdate} setValue={setCoupeUpdate} list={Coupe} itemValue="coupe_ref" />
                </section>
            </div>
            <FooterForm />
            </form>        
        }
        </div>

    )
}

export default EntretienCoupe;