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
    const [listGrilleTaille, setListeGrilleTaille] = useState([])
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
                let categorie_univers =  infoSku.categorie_univers+""
                let categorieFnr = categorie_univers.split(/[. ]/i)

                let tab = []
                if(categorieFnr.length>1){
                    let regex = new RegExp(majuscule(categorieFnr[0]), "i")

                    GrilleTaille.forEach(element => {
                        if(majuscule(element.grilleTaille).match(regex))
                            tab.push(element)
                    });
                    setListeGrilleTaille(tab)                
                }
                else{
                    setListeGrilleTaille(GrilleTaille)
                }



                // console.log(categorieFnr[0])
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

    const majuscule = (text) => {
        if(text){        
            let result = text.replace(/[àâä]/i, 'a')
        result = result.replace(/[éèêë]/i, 'e')
        result = result.replace(/[öô]/i, 'o')
        result = result.replace(/[iìîï]/i, 'i')
        result = result.replace(/[ùü]/i, 'u')
        
        return result.toUpperCase()
        }
        else{
            return text
        }
    }
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
                <InputDesabled label="Grille Taille Fournisseur" value={infoSku.grille_taille_fournisseur} />
                </section>
                <section className="row g-3">
                    <Select id="selectTaille" label="Grille taille" value={grilleTailleUpdate} setValue={setGrilleTailleUpdate} list={listGrilleTaille} itemValue="grilleTaille" />                   
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