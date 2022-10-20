import { useContext } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import Input from "../TemplateFormulaire/Input"

const CategorieEn = () => {
    //variable
    const {nomProduitFrUpdate, setNomProduitFrUpdate, categorieEnUpdate, setCategorieEnUpdate, sousCategorieEnUpdate, setSousCategorieEnUpdate, filtreEnUpdate, setFiltreEnUpdate} = useContext(FormulaireContext)
    //render
    return (
        <section className="row g-3 mt-1">
            <Input id="inputEnCategorie" label="Catégorie En" value={categorieEnUpdate} setValue={setCategorieEnUpdate} />
            <Input id="inputEnSousCategorie" label="Sous catégorie En" value={sousCategorieEnUpdate} setValue={setCategorieEnUpdate} />
            <Input id="inputEnFiltre" label="Filtre En" value={filtreEnUpdate} setValue={setFiltreEnUpdate} />
        </section>
    )
}

export default CategorieEn;