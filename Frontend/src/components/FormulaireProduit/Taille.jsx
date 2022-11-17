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
import InputDesabled from "./TemplateFormulaire/InputDesabled";

const Taille = () => {
    //variable
    const [loading, setLoading] = useState(false)
    const {infoSku, tailleDone, setTailleDone, grilleTailleUpdate, setGrilleTailleUpdate, attributUpdate, setAttributUpdate, sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)    
    // console.log('grilleTailleUpdate', grilleTailleUpdate)
    // const [tailles, setTailles] = useState([])
    //fonction
    useEffect(() => {
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                //setAttributUpdate(infoSku.variants)
                // console.log("attributUpdate", attributUpdate)
                // // console.log("grilleTaille", grilleTailleUpdate)

                // if(infoSku.variants){
                // let variantDone = 0
                // infoSku.variants.forEach(element => {
                //     if(element.taille_ref && element.taille_ref.length>0){
                //         variantDone++
                //     }
                // });
                // if((grilleTailleUpdate && grilleTailleUpdate.length>0) && (variantDone == infoSku.variants.length)){
                //     setTailleDone(true)
                // } 
                // else{
                //     setTailleDone(false)
                // }
                    
                //
            }
        }
         

    }, [infoSku])
    //render
    return (
        <div className="card mb-3">
        <HeaderForm title="Taille" section="taille" isDone={tailleDone} />
        {
            infoSku && (sectionUpdate == "taille") &&
            <form onSubmit={(e)=>{handleClickSave(e, "description")}}>        
            <div className="card-body">
                <section className="row g-3 mb-3"><small>Tous les champs sont obligatoire</small></section>
                <section className="row g-3 mb-3">
                    <InputDesabled label="Catégorie dans le fichier multimag" value={infoSku.categorie_univers} />
                </section>
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