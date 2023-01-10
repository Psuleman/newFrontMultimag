import { useContext, useEffect, useState } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import Select from "../TemplateFormulaire/Select"
import { CategorieContext } from "./Context/CategorieContext"

const Filtre = () => {
    //variables
    const {infoSku,filtreUpdate, setFiltreUpdate, filtreEnUpdate, setFiltreEnUpdate} = useContext(FormulaireContext)
    const {filtres, setFiltres} = useContext(CategorieContext)

    //fonction
    useEffect(()=>{
        if(filtreUpdate && filtres){
            //liste des sous catégorie
            filtres.forEach(element => {
                if(element.filtre == filtreUpdate)
                {
                    setFiltreEnUpdate(element.filtre_en)

                    /**
                     * Catégorie Google
                     */
                }
            });
        }
    }, [infoSku, filtreUpdate])

    //render
    return (
        <Select id="selectFiltre" label="Filtre" value={filtreUpdate} setValue={setFiltreUpdate} list={filtres} itemValue="filtre" />
    )
}
export default Filtre;