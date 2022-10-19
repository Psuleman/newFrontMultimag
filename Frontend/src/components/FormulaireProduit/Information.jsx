import {FormulaireContext} from "./Context/FormulaireContext"
import { useContext, useEffect, useState } from "react";
import {Univers} from "../../data/Univers"
import {Marques} from "../../data/Marques"
import {Pays} from "../../data/Pays"
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import FooterForm from "./TemplateFormulaire/FooterForm"

const Information = () => {
    /**
     * sku, marque, univers, univers en, Reference fournisseur, Pays Origine
     */
    //variable
    const {infoSku, marqueUpdate, setMarqueUpdate, universUpdate, setUniversUpdate, universEnUpdate, setUniversEnUpdate, paysOrigineUpdate, setPaysOrigineUpdate,sectionUpdate,
        setSectionUpdate, handleClickSave} = useContext(FormulaireContext)
    const [marques, setMarques] = useState(Marques)

    //console.log(infoSku)
    //fonction
    useEffect(() => {
        //Marque 
        let marqueExist = false
        let tabMarque = Marques
        Marques.forEach(element => {
            if(element == marqueUpdate)
                marqueExist = true
        });
        if(!marqueExist){
            tabMarque.push(marqueUpdate);
            tabMarque.sort()
        }
        setMarques(tabMarque)
       
    }, [])

    //console.log(sectionUpdate)
    const handleChangeUnivers = (e) => {
        Univers.forEach(element => {
            if(element.univers_ref == e.target.value)
                setUniversEnUpdate(element.univers_ref_en)
        });
    }
    //render
    return (
        <div className="card mb-3">
            <HeaderForm title="Identification du produit" section="information" />

            {
            infoSku && (sectionUpdate == "information") &&
            <form onSubmit={(e)=>{handleClickSave(e, "caractéristique")}}>        
            

            <div className="card-body">
            <div className="row g-3">
                <div className="col-md-3">
                    <label htmlFor="inputSku" className="form-label">SKU</label>
                    <input type="text" className="form-control" id="inputSku" value={infoSku.sku} disabled />
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputRefFournisseur" className="form-label">Référence Fournisseur</label>
                    <input type="text" className="form-control" id="inputRefFournisseur" value={infoSku.reference_fournisseur} disabled />
                </div>
                <div className="col-md-3">
                    <label htmlFor="selectMarque" className="form-label">Marque</label>
                    <select className="form-select" aria-label="Default select example" id="selectMarque" value={marqueUpdate} onChange={(e)=>{setMarqueUpdate(e.target.value)}}>
                        {
                            marques.map((i, index)=>(
                                <option value={i}>{i}</option>
                            ))
                        }
                    </select>
    
                </div>
                <div className="col-md-3">
                    <label htmlFor="selectPaysOrigine" className="form-label">Pays origine</label>
                    <select className="form-select" aria-label="Default select example" id="selectPaysOrigine" value={paysOrigineUpdate} onChange={(e)=>{setPaysOrigineUpdate(e.target.value)}} >
                        {
                            !paysOrigineUpdate && <option selected>Choisissez</option>
                        }
                        {
                            Pays.map((i, index)=>(
                                <option value={i.pays}>{i.pays}</option> 
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputCatUnivers" className="form-label">Catégorie dans le fichier multimag</label>
                    <input type="text" className="form-control" id="inputCatUnivers" value={infoSku.categorie_univers} disabled />
                </div>
                <div className="col-md-3">
                    <label htmlFor="selectUnivers" className="form-label">Univers</label>
                    <select className="form-select" aria-label="Default select example" id="selectUnivers" value={universUpdate} onChange={(e)=>{
                        setUniversUpdate(e.target.value)
                        handleChangeUnivers(e)
                        }} >
                        {
                            Univers.map((i, index)=>(
                                <option value={i.univers_ref}>{i.univers_ref}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputUniversEn" className="form-label">Univers EN</label>
                    <input type="text" className="form-control" id="inputUniversEn" value={universEnUpdate} onChange={()=>{setUniversEnUpdate(e.target.value)}} />
                </div>


            </div>
            </div>

            <FooterForm />
            </form>
        }
        </div>
    )
}

export default Information;