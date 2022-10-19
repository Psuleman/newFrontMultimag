import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import Input from "../TemplateFormulaire/Input";

const NomProduit = () => {
    //variable
    const {nomProduitFrUpdate, setNomProduitFrUpdate, nomProduitEnUpdate, setNomProduitEnUpdate} = useContext(FormulaireContext)
    //render
    return (
        <section className="row g-3">
            <Input type="text" id="inputNomProduit" label="Nom du produit" value={nomProduitFrUpdate} setValue={setNomProduitFrUpdate} />
            <Input type="text" id="inputNomProduitEn" label="Nom du produit" value={nomProduitEnUpdate} setValue={setNomProduitEnUpdate} />            
        </section>

    )
}
export default NomProduit;