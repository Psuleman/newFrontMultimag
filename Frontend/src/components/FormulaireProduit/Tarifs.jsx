import { useContext, useEffect, useState } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import { Pays } from "../../data/Pays";
import FooterForm from "./TemplateFormulaire/FooterForm";
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import InputDesabled from "./TemplateFormulaire/InputDesabled";
import Select from "./TemplateFormulaire/Select";

const Tarifs = () => {
    //variable
    const [nbTarif, setNbTarif] = useState()
    const {infoSku, tarifUpdate, setTarifUpdate, 
    sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)

    //Fonction
    useEffect(()=>{
        setTarifUpdate(infoSku.tarifs)
        console.log(infoSku.tarifs)
    }, [infoSku])

    const handleClickAddTarifs = () => {
        let total = tarifUpdate.length;
        let tab = [...tarifUpdate]
        for(let i=0; i<nbTarif; i++){
            tab.push({
                pays: [],
                prix_vente: 0,
                remise: 0
            })
        }
        setTarifUpdate(tab)
        setNbTarif(0)
    }

    //render
    return (
        <div className="card mb-3">
        <HeaderForm title="Tarifs" section="tarifs" />
        {
            tarifUpdate && (sectionUpdate == "tarifs") &&
            <form onSubmit={(e)=>{handleClickSave(e, "matière")}}>        
            <div className="card-body">
            <section className="row g-3">
                <InputDesabled id="inputPaystarifsFrance" label="Pays" value={tarifUpdate[0].pays[0].pays} type="text" />                
                <InputDesabled id="inputPrixFrance" label="Prix initial ( € )" value={tarifUpdate[0].prix_vente} type="number" />                
                <div className="col-md-3">
                    <label htmlFor="inputRemiseTarifsFrance" className="form-label">Remise en Pourcentage (%)</label>
                    <input type="number" min="0" className="form-control" id="inputRemiseTarifsFrance" value={tarifUpdate[0].remise} 
                    onChange={(e)=>{setTarifUpdate(oldState=>{
                        let newState = [...oldState]
                        newState[0].remise = e.target.value
                        return newState
                    })}} />
                </div>
            </section>
                {
                    tarifUpdate.length>1 &&
                    tarifUpdate.map((i, index)=>(
                        <div>
                            {
                                index > 0 &&
                                <section className="row g-3 mt-1">
                                    <div className="col-md-3">
                                        <label htmlFor="selectSousCategorie" className="form-label">{"Pays " + index}</label>
                                        <select className="form-select" aria-label="Default select example" id="selectSousCategorie" value={tarifUpdate[index].pays[0]} onChange={(e)=>{
                                            setTarifUpdate(oldState=>{
                                                let newState = [...oldState]
                                                newState[index].pays[0] = {pays: e.target.value}
                                                return newState
                                            })
                                        }} >
                                            <option>Choisissez</option>
                                            {
                                                Pays && Pays.map((item, index)=>(
                                                    <option value={item.pays}>{item.pays}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputCouleurFnr" className="form-label">Prix</label>
                                        <input type="number" min="0" className="form-control" id="inputCouleurFnr" value={tarifUpdate[index].prix_vente} onChange={(e)=>{
                                            setTarifUpdate(oldState=>{
                                                let newState = [...oldState]
                                                newState[index].prix_vente = e.target.value
                                                return newState
                                            })
                                        }} />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputCouleurFnr" className="form-label">Remise en Pourcentage</label>
                                        <input type="number" min="0" max="100" className="form-control" id="inputRemiseTarifsFrance" value={tarifUpdate[index].remise} 
                                        onChange={(e)=>{setTarifUpdate(oldState=>{
                                            let newState = [...oldState]
                                            newState[index].remise = e.target.value
                                            return newState
                                        })}} />                                    
                                    </div>
                                </section>                                 
                            }
                        </div>
                        
                   
                    ))

                }

                <section className="row g-3 mt-1 mt-1">
                <div className="col-md-3">
                    <label htmlFor="inputAddTarif" className="form-label">Nombre de tarifs dans d'autre pays</label>
                    <input type="number" value={nbTarif} min="0" className="form-control" id="inputAddTarif" onChange={(e)=>{
                        if(parseInt(e.target.value) > 0){ setNbTarif(parseInt(e.target.value))}
                    }} />
                </div> 
                <div className="col-md-3">
                    <label htmlFor="btnAddTarif" className="form-label text-white">Bouton</label>
                    <input type="button" className="form-control" id="btnAddTarif" value="ajouter" onClick={handleClickAddTarifs} />
                </div> 
                </section>
            </div>

            <FooterForm />
            </form>
        }
        </div>
    )
}

export default Tarifs;