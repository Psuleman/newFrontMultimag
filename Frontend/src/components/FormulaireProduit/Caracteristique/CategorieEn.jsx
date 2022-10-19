import { useContext } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import Input from "../TemplateFormulaire/Input"

const CategorieEn = () => {
    //variable
    const {nomProduitFrUpdate, setNomProduitFrUpdate, categorieEnUpdate, setCategorieEnUpdate, sousCategorieEnUpdate, setSousCategorieEnUpdate, filtreEnUpdate, setFiltreEnUpdate} = useContext(FormulaireContext)
    //render
    return (
        <section className="row g-3 mt-1">
            <Input id="inputEnCategorie" label="Catégorie En" value={categorieEnUpdate} setvalue={setCategorieEnUpdate} />
            <Input id="inputEnSousCategorie" label="Sous catégorie En" value={sousCategorieEnUpdate} setvalue={setCategorieEnUpdate} />
            <Input id="inputEnFiltre" label="Filtre En" value={filtreEnUpdate} setvalue={setFiltreEnUpdate} />
            <Input id="input" label="test" value={nomProduitFrUpdate} setvalue={setNomProduitFrUpdate} />
        </section>
    )
}

export default CategorieEn;