import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import SelectMatiere from "./Matiere/SelectMatiere";
import FooterForm from "./TemplateFormulaire/FooterForm";
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import InputDesabled from "./TemplateFormulaire/InputDesabled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Input from "./TemplateFormulaire/Input";
import Select from "./TemplateFormulaire/Select";

const Matiere = () => {
    //variable
    const [nbMatiere, setNbMatiere] = useState()
    const [totalMatiere, setTotalMatiere] = useState()

    const [tabMatiere, setTabMatiere] = useState([])

    const {infoSku, matiereDone, setMatiereDone, matiereUpdate, setMatiereUpdate, referenceCouleurUpdate, setReferenceCouleurUpdate, 
        sectionUpdate, setSectionUpdate, handleClickSave, cliquable, setCliquable, matiereGoogleUpdate, setMatiereGoogleUpdate} = useContext(FormulaireContext)
    //fonction
    useEffect(()=>{
        // console.log("matiereUpdate", matiereUpdate)
        if(matiereUpdate.length>0 && matiereUpdate[0].pourcentageMatiere){
            setMatiereDone(true)
            let totalPourcentage = 0
            let tabPourcentage = []
            for(let item in matiereUpdate){
                let element = matiereUpdate[item]
                totalPourcentage += parseFloat(element.pourcentageMatiere)

            }


            setTotalMatiere(totalPourcentage)
            
        }
        else{
            setMatiereDone(false)
            let tab = [1,2]
           
            let arrayMatiere = []
            for(let i=0; i<tab.length; i++){
                arrayMatiere[i]={
                    matiere: {matiere : ""},
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
                    matiere: {matiere : ""},
                    pourcentageMatiere:0
                })
            }
            setMatiereUpdate(tab)
            setNbMatiere(0)            
        }

    }

    const handleChange = (e, index) => {
        let tab = [...matiereUpdate]
        let reste = 0
        let total = 0
        let pourcentage = 0
        for(let item in matiereUpdate){
            /**
             * V??rifier le reste total autoriser
             */
            if(item == index){
                total+= parseFloat(e.target.value)
                pourcentage = parseFloat(e.target.value)
            }
            else{
                total += parseFloat(matiereUpdate[item].pourcentageMatiere)
            }

            reste = 100 - total
            setTotalMatiere(total)
        }
        if(total>100 && reste<0){
            /**
             * SI total est sup??rieur ?? 100%
             * reste devient n??gatif
             * pourcentage autoriser = (e.target.value + reste)
             */
            pourcentage = parseFloat(e.target.value) + parseFloat(reste)
            pourcentage = pourcentage < 0 ? 0 : pourcentage
            console.log("ok ", pourcentage)
        }
        
        setMatiereUpdate(oldState=>{
            let newState = [...oldState]

            newState[index].pourcentageMatiere = parseFloat(pourcentage)
            return newState
            })

        total = 0
        for(let item in matiereUpdate){
            total += matiereUpdate[item].pourcentageMatiere
        }
        setTotalMatiere(total)

        if(total > 100){
            setCliquable(false)
        }
        // let total = 0
        // for(let item in matiereUpdate){
        //     let element = matiereUpdate[item]
        //     total += item==index ? parseFloat(e.target.value) : parseFloat(element.pourcentageMatiere)
        // }

        // setTotalMatiere(total)
        // let save = total>100 ? false : true
        // setCliquable(save)
        // console.log("total: ", total)
    }


    //render
    return (
        <div className="card mb-3">
        <HeaderForm title="Mati??re" section="mati??re" isDone={matiereDone} />

        {
            infoSku && (sectionUpdate == "mati??re") &&
            <form onSubmit={(e)=>{handleClickSave(e, "tarifs")}}>        
            <div className="card-body">
            <section className="row g-3 mb-3"><small>* Champs obligatoire</small></section>                
            <section className="row g-3 mb-3">          
                {/* {
                    totalMatiere <= 100 &&
                    <div class="alert alert-primary" role="alert">
                      <FontAwesomeIcon icon={faCircleInfo} /> Le total des pourcentage des mati??res doivent ??tre au maximum 100%
                    </div>
                }
                {
                    totalMatiere > 100 &&
                    <div class="alert alert-danger" role="alert">
                     <FontAwesomeIcon icon={faTriangleExclamation} /> Le total des pourcentage des mati??res doivent ??tre au maximum 100%
                    </div>
                }
                 */}
            </section>                
                <section className="row g-3 mb-3">
                    {/* <InputDesabled labelInput="R??f??rence dans multimag" valeur={infoSku.reference_couleur} /> */}
                    <Input label={"Reference dans multimag"} id={"inputCouleurFnr"} value={referenceCouleurUpdate} setValue={setReferenceCouleurUpdate} />

                </section>
                {
                    matiereUpdate &&
                    matiereUpdate.map((i, index)=>(
                        <section className="row g-3 mt-1" key={"matiere_" + i + "_" + index}>
                            {
                                parseInt(index) == 0 ?
                                <SelectMatiere label={"* Mati??re " + (index + 1)} value={matiereUpdate[index].matiere.matiere} id={"selectMatiere" + (index + 1)} indexMatiere={index} />
                                :
                                <SelectMatiere label={"Mati??re " + (index + 1)} value={matiereUpdate[index].matiere.matiere} id={"selectMatiere" + (index + 1)} indexMatiere={index} />

                            }

                            {/* <div className="col-md-3">
                                <label htmlFor={"selectMatiere" + (index+1)} className="form-label">{"Mati??re " + (index + 1)}</label>
                                <select className="form-select" aria-label="Default select example" id={"selectMatiere" + (index + 1)} value={matiereUpdate[index].matiere} onChange={(e)=>{ setMatiereUpdate(oldState=>{
                                    let newState = [...oldState]
                                    newState[index].matiere = e.target.value
                                    return newState
                                })}} >
                                    <option>Choisissez</option>
                                {
                                    Matieres && Matieres.map((item, index)=>(
                                        <option key={index} value={item.matiere}>{item.matiere}</option>
                                    ))
                                }
                                </select>                                
                            </div> */}


                            <div className="col-md-3">
                                {
                                    parseInt(index) == 0 ?
                                    <label htmlFor={"inputPourcentMatiere" + (index + 1)} className="form-label">{"* Pourcentage mati??re " + (index + 1)}</label>
                                    :
                                    <label htmlFor={"inputPourcentMatiere" + (index + 1)} className="form-label">{"Pourcentage mati??re " + (index + 1)}</label>

                                }
                                <input type="number" className="form-control" id={"inputPourcentMatiere" + (index + 1)} value={matiereUpdate[index].pourcentageMatiere} onChange={(e)=>{
                                    // handleChange(e, index)
                                    { setMatiereUpdate(oldState=>{
                                        let newState = [...oldState]
                                        newState[index].pourcentageMatiere = parseInt(e.target.value)
                                        return newState
                                    })}
                            }} min="0" max="100" />
                            </div>           
                        </section>
                    ))
                }
                {
                    /**
                     * Mat??riel google 
                     */
                }
                <section className="row g-3 mt-1">
                    <Select id={"classification_google_matiere"} label={"* Mati??re Google"} value={matiereGoogleUpdate} setValue={setMatiereGoogleUpdate} list={tabMatiere} itemValue="" />
                </section>
                {
                    // matiereUpdate.length <10 && totalMatiere<100 &&
                    matiereUpdate.length <10 &&
                    <section className="row g-3 mt-1">
                    <div className="col-md-3">
                        <label htmlFor="inputAddMatiere" className="form-label">Nombre de mati??re supplementaire</label>
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