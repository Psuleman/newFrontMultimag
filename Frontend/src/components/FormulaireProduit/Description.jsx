import { useContext } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import NomProduit from "./Description/NomProduit";
import FooterForm from "./TemplateFormulaire/FooterForm";
import HeaderForm from "./TemplateFormulaire/HeaderForm";

const Description = () => {
    //variable
    const {infoSku, descriptionFrUpdate, descriptionEnUpdate, setDescriptionEnUpdate, nomProduitFrUpdate, setNomProduitFrUpdate, nomProduitEnUpdate, setNomProduitEnUpdate, 
    sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)

    //fonction 

    //return
    return (
        <div className="card mb-3">
        <HeaderForm title="Description" section="description" />
        {
            infoSku && (sectionUpdate == "description") &&
            <form onSubmit={(e)=>{handleClickSave(e, "taille")}}>        
            <div className="card-body">
                <NomProduit />
                <section className="row g-3 mt-1">
                    <div className="col-md-3">
                        <label htmlFor="inputDescriptionFr" className="form-label">Description du produit</label>
                        <textarea className="form-control" id="inputDescriptionFr" rows="3" value={descriptionFrUpdate} onChange={()=>{setDescriptionEnUpdate(e.target.value)}} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputDescriptionEn" className="form-label">Description du produit EN</label>
                        <textarea className="form-control" id="inputDescriptionEn" rows="3" value={descriptionEnUpdate} onChange={()=>{setDescriptionEnUpdate(e.target.value)}} />
                    </div>
                </section>
            </div>

            <FooterForm />
            </form>
        }
        </div>
    )
}

export default Description;