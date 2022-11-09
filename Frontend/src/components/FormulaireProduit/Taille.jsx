import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import {GrilleTaille} from "../../data/GrilleTaille"
import FooterForm from "./TemplateFormulaire/FooterForm";
import Select from "./TemplateFormulaire/Select";
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import TailleVariant from "./Taille/TailleVariant";
import { TailleContext }  from "./Taille/Context/TailleContext"

const Taille = () => {
    //variable
    const [loading, setLoading] = useState(false)
    const {infoSku, grilleTailleUpdate, setGrilleTailleUpdate, attributUpdate, setAttributUpdate, sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)    
    const tab = [1,2,3]
    // const [tailles, setTailles] = useState([])
    //fonction
    useEffect(() => {
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                setAttributUpdate(infoSku.variants)

                // GrilleTaille.forEach(element => {
                //     if(element.grilleTaille == grilleTailleUpdate){
                //         setTailles(element.tailles)
                //     }
                // });
            }
        }
         

    }, [infoSku])
    //render
    return (
        <div className="card mb-3">
        <HeaderForm title="Taille" section="taille" />
        {
            infoSku && (sectionUpdate == "taille") &&
            <form onSubmit={(e)=>{handleClickSave(e, "tarifs")}}>        
            <div className="card-body">
                <section className="row g-3">
                    <Select id="selectTaille" label="Grille taille" value={grilleTailleUpdate} setValue={setGrilleTailleUpdate} list={GrilleTaille} itemValue="grilleTaille" />                   
                </section>
                <TailleContext.Provider value={{
                    loading:loading, setLoading: setLoading,
                }}>
                    <TailleVariant /> 
                </TailleContext.Provider>
            </div>

            <FooterForm />
            </form>
        }  
        </div>
    )
}

export default Taille;