import { useContext, useEffect, useState } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import FooterForm from "./TemplateFormulaire/FooterForm";
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import InputDesabled from "./TemplateFormulaire/InputDesabled";
import Select from "./TemplateFormulaire/Select";
import SelectMultiplePays from "./TemplateFormulaire/SelectMultiplePays";

const Tarifs = () => {
    //variable
    const [nbTarif, setNbTarif] = useState()
    const {infoSku, tarifUpdate, setTarifUpdate, 
    sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)

    //Fonction
    useEffect(()=>{
        setTarifUpdate(infoSku.tarifs)
        console.log(tarifUpdate)
    }, [infoSku])

    const handleClickAddTarifs = () => {
        let total = tarifUpdate.length;
        let tab = [...tarifUpdate]
        for(let i=0; i<nbTarif; i++){
            tab.push({
                prix_vente: 0,
                pays: [],
                remise: 0
            })
        }
        setTarifUpdate(tab)
        setNbTarif(0)
        console.log("tarifUpdate", tarifUpdate)
    }

    //render
    return (
        <div className="card mb-3">
        <HeaderForm title="Tarifs" section="tarifs" />
        {
            tarifUpdate && (sectionUpdate == "tarifs") &&
            <form onSubmit={(e)=>{handleClickSave(e, "taille")}}>        
            <div className="card-body">
            {
                tarifUpdate.length>0 && 
                tarifUpdate.map((item, index)=>(
                <section className="row g-3 mb-3">
                    <div className="col-md-3">
                        <label htmlFor="PaysTarif" className="form-label">Pays</label>
                        <input type="text" value="France" id="PaysTarif" className="form-control" disabled />
                    </div>
                    
                    {/* <SelectMultiplePays indexTarif={index} id={"selectPaysOrigine" + index} /> */}

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
                        <label htmlFor="inputRemiseTarifsFrance" className="form-label">Remise en Pourcentage (%)</label>
                        <input type="number" min="0" className="form-control" id="inputRemiseTarifsFrance" value={tarifUpdate[index].remise} 
                        onChange={(e)=>{setTarifUpdate(oldState=>{
                            let newState = [...oldState]
                            newState[index].remise = e.target.value
                            return newState
                        })}} />
                    </div>
                </section>                    
                ))

            }
            {/* <section className="row g-3 mt-1">
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
            </section> */}
            </div>

            <FooterForm />
            </form>
        }
        </div>
    )
}

export default Tarifs;