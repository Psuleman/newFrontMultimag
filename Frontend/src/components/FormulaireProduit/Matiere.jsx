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
    const [matiereDefault, setMatiereDefault] = useState([])
    const [nbMatiere, setNbMatiere] = useState()
    const {infoSku,
        matiere1Update, setMatiere1Update, pourcentMatiere1Update, setPourcentMatiere1Update, 
        matiere2Update, setMatiere2Update, pourcentMatiere2Update, setPourcentMatiere2Update, 
        matiere3Update, setMatiere3Update, pourcentMatiere3Update, setPourcentMatiere3Update, 
        matiere4Update, setMatiere4Update, pourcentMatiere4Update, setPourcentMatiere4Update, 
        matiere5Update, setMatiere5Update, pourcentMatiere5Update, setPourcentMatiere5Update, 
        matiere6Update, setMatiere6Update, pourcentMatiere6Update, setPourcentMatiere6Update, 
        matiere7Update, setMatiere7Update, pourcentMatiere7Update, setPourcentMatiere7Update, 
        matiere8Update, setMatiere8Update, pourcentMatiere8Update, setPourcentMatiere8Update, 
        matiere9Update, setMatiere9Update, pourcentMatiere9Update, setPourcentMatiere9Update, 
        matiere10Update, setMatiere10Update, pourcentMatiere10Update, setPourcentMatiere10Update,  
        sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)
    //fonction
    useEffect(()=>{
        let tab = [1,2]
        setMatiereDefault(tab)
    }, [])
    const handleClickAddMatiere = () => {
        let total = matiereDefault.length;
        if(total <=10){
            let tab = [...matiereDefault]
            let nbMatiereRestant = 10 - total
            for(let i=0; i<nbMatiereRestant; i++){
                tab.push(parseInt(total) + 1 + i)
            }
            setMatiereDefault(tab)
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
                    matiereDefault &&
                    matiereDefault.map((i, index)=>(
                        <section className="row g-3 mt-1">
                            <Select id={"selectMatiere" + i} label={"Matière " + i} value={eval('matiere' + i + 'Update')} setValue={eval('setMatiere' + i + 'Update')} list={Matieres}/>
                            <Input type="number" id={"inputPourcentMatiere" + i} label={"Pourcentage matière " + i} value={eval('pourcentMatiere' + i + 'Update')}
                            setValue={eval('setPourcentMatiere' + i + 'Update')} min="0" max="100"  />               
                        </section>
                    ))
                }
                {
                    matiereDefault.length <10 &&
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