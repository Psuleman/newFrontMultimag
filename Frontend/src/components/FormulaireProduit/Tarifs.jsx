import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import FooterForm from "./TemplateFormulaire/FooterForm";
import HeaderForm from "./TemplateFormulaire/HeaderForm";

const Tarifs = () => {
    //variable
    const [nbTarif, setNbTarif] = useState()
    const [tarifDefault, setTarifDefault] = useState([])
    const {infoSku,
    sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)

    //Fonction
    useEffect(()=>{
        console.log(infoSku)
    }, [infoSku])

    const handleClickAddTarifs = () => {
        let total = tarifDefault.length;
        let tab = [...tarifDefault]
        for(let i=0; i<nbTarif; i++){
            tab.push(parseInt(total) + 1 + i)
        }
        setTarifDefault(tab)
        setNbTarif(0)
    }
    //render
    return (
        <div className="card mb-3">
        <HeaderForm title="Tarifs" section="tarifs" />
        {
            infoSku && (sectionUpdate == "tarifs") &&
            <form onSubmit={(e)=>{handleClickSave(e, "matière")}}>        
            <div className="card-body">
            <section className="row g-3">
                    <div className="col-md-3">
                        <label htmlFor="inputPaystarifsFrance" className="form-label">Pays</label>
                        <input type="text" className="form-control" id="inputPaystarifsFrance" value={infoSku.tarifs[0].pays[0].pays} disabled />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputPrixFrance" className="form-label">Prix initial ( € )</label>
                        <input type="number" className="form-control" id="inputPrixFrance" value={infoSku.tarifs[0].prix_vente} disabled />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputRemiseTarifsFrance" className="form-label">Remise en Pourcentage (%)</label>
                        <input type="number" min="0" className="form-control" id="inputRemiseTarifsFrance" />
                    </div>
                </section>
                {
                    tarifDefault &&
                    tarifDefault.map((i, index)=>(
                        <section className="row g-3 mt-1">
                            <div className="col-md-3">
                                <label htmlFor="selectSousCategorie" className="form-label">Pays</label>
                                <select className="form-select" aria-label="Default select example" id="selectSousCategorie" >
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="inputCouleurFnr" className="form-label">Prix</label>
                                <input type="number" className="form-control" id="inputCouleurFnr" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="inputCouleurFnr" className="form-label">Remise en Pourcentage</label>
                                <input type="number" className="form-control" id="inputCouleurFnr" />
                            </div>
                        </section>                    
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