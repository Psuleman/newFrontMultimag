import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {Matieres} from "../../data/Matieres"
import { FormulaireContext } from "./Context/FormulaireContext";
import FooterForm from "./TemplateFormulaire/FooterForm";
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import Input from "./TemplateFormulaire/Input";
import Select from "./TemplateFormulaire/Select";

const Matiere = () => {
    //variable
    const [nbMatiere, setNbMatiere] = useState()
    const {infoSku, matiereUpdate, setMatiereUpdate, 
        sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)
    //fonction
    useEffect(()=>{
        if(matiereUpdate.length>0){

        }
        else{
            let tab = [1,2]
           
            let arrayMatiere = []
            for(let i=0; i<tab.length; i++){
                arrayMatiere[i]={
                    matiere: "",
                    pourcentageMatiere: 0
                }
            }

            setMatiereUpdate(arrayMatiere)
            
        }
    }, [])
    const handleClickAddMatiere = () => {
        let total = matiereUpdate.length;
        if(total <=10){
            let tab = [...matiereUpdate]
            let nbMatiereRestant = 10 - total
            for(let i=0; i<nbMatiere && i<10; i++){
                tab.push({
                    matiere: "",
                    pourcentageMatiere:0
                })
            }
            setMatiereUpdate(tab)
            setNbMatiere(0)            
        }
    }

    //render
    return (
        <div className="card mb-3">
        <HeaderForm title="Matière" section="matière" />

        {
            infoSku && (sectionUpdate == "matière") &&
            <form onSubmit={(e)=>{handleClickSave(e, "matière")}}>        
            <div className="card-body">
                {
                    matiereUpdate &&
                    matiereUpdate.map((i, index)=>(
                        <section className="row g-3 mt-1">
                            <div className="col-md-3">
                                <label htmlFor={"selectMatiere" + (index+1)} className="form-label">{"Matière " + (index + 1)}</label>
                                <select className="form-select" aria-label="Default select example" id={"selectMatiere" + (index + 1)} value={matiereUpdate[index].matiere} onChange={(e)=>{ setMatiereUpdate(oldState=>{
                                    let newState = [...oldState]
                                    newState[index].matiere = e.target.value
                                    return newState
                                })}} >
                                {
                                    Matieres && Matieres.map((item, index)=>(
                                        <option key={index} value={item.matiere}>{item.matiere}</option>
                                    ))
                                }
                                </select>                                
                            </div>


                            <div className="col-md-3">
                                <label htmlFor={"inputPourcentMatiere" + (index + 1)} className="form-label">{"Pourcentage matière " + (index + 1)}</label>
                                <input type="number" className="form-control" id={"inputPourcentMatiere" + (index + 1)} value={matiereUpdate[index].pourcentageMatiere} onChange={(e)=>{ setMatiereUpdate(oldState=>{
                                let newState = [...oldState]
                                newState[index].pourcentageMatiere = e.target.value
                                return newState
                            })}} min="0" max="100" />
                            </div>           
                        </section>
                    ))
                }
                {
                    matiereUpdate.length <10 &&
                    <section className="row g-3 mt-1">
                    <div className="col-md-3">
                        <label htmlFor="inputAddMatiere" className="form-label">Nombre de matière supplementaire</label>
                        <input type="number" value={nbMatiere} min="0" className="form-control" id="inputAddMatiere" onChange={(e)=>{
                            if(parseInt(e.target.value) > 0){ setNbMatiere(parseInt(e.target.value))}
                        }} />
                    </div> 
                    <div className="col-md-3">
                        <label htmlFor="btnAddMatiere" className="form-label text-white">Bouton</label>
                        <input type="button" className="form-control" id="btnAddMatiere" value="ajouter" onClick={handleClickAddMatiere} />
                    </div> 
                    </section>                    
                }

            </div>

            <FooterForm />    
            </form>
        }

        </div>
    )
}

export default Matiere;