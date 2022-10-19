import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import Input from "../TemplateFormulaire/Input";

const NomProduit = () => {
    //variable
    const {nomProduitFrUpdate, setNomProduitFrUpdate, nomProduitEnUpdate, setNomProduitEnUpdate} = useContext(FormulaireContext)
    //render
    return (
        <section className="row g-3">
            <Input id="inputNomProduit" label="Nom du produit" value={nomProduitFrUpdate} setvalue={setNomProduitFrUpdate} />
            <Input id="inputNomProduitEn" label="Nom du produit En" value={nomProduitEnUpdate} setvalue={setNomProduitEnUpdate} />            
        </section>

    )
}
export default NomProduit;