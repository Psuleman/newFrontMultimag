import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import {GrilleTaille} from "../../data/GrilleTaille"
import FooterForm from "./TemplateFormulaire/FooterForm";
import Select from "./TemplateFormulaire/Select";
import InputDesabled from "./TemplateFormulaire/InputDesabled";
import HeaderForm from "./TemplateFormulaire/HeaderForm";

const Taille = () => {
    //variable
    const {infoSku, grilleTailleUpdate, setGrilleTailleUpdate, attributUpdate, setAttributUpdate, 
    sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)    
    const tab = [1,2,3]
    const [tailles, setTailles] = useState([])
    //fonction
    useEffect(() => {
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                setAttributUpdate(infoSku.variants)

                GrilleTaille.forEach(element => {
                    if(element.grilleTaille == grilleTailleUpdate){
                        setTailles(element.tailles)
                    }
                });
            }
        }
         

    }, [infoSku, grilleTailleUpdate])
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

                    {
                        attributUpdate &&
                        attributUpdate.map((i, index)=>(
                            <section  className="row g-3 mt-1">
                                <InputDesabled id={"inputVariant" + i.variant_sku} label="Taille fournisseur" value={i.taille_fnr} />

                            <div className="col-md-3">
                                <label  htmlFor="selectTaille" className="form-label">Taille</label>
                                {
                                    (grilleTailleUpdate || grilleTailleUpdate!="") ? 
                                    <select className="form-select" aria-label="Default select example" id="selectTaille" value={attributUpdate[index].taille_ref} onChange={(e)=>{
                                        setAttributUpdate((oldState)=>{
                                            let newState = [...oldState]
                                            newState[index].tailleRef = e.target.value
                                            return newState
                                        })
                                        console.log(attributUpdate)
                                    }}>
                                        <option selected>Choisissez</option>
                                        {
                                            tailles &&
                                            tailles.map((i)=>(
                                                <option key={i} value={i}>{i}</option>
                                            ))
                                        }
                                    </select>   
                                    :
                                    <select className="form-select" aria-label="Default select example" id="selectTaille" >
                                        <option selected>Choisissez</option>
                                    </select>                                                                      
                                }

                            </div>                            
                            </section>

                        ))
                    }

            </div>

            <FooterForm />
            </form>
        }  
        </div>
    )
}

export default Taille;