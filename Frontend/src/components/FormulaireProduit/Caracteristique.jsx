import { useContext, useEffect, useState } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import HeaderForm from "./TemplateFormulaire/HeaderForm";

import FooterForm from "./TemplateFormulaire/FooterForm";
import Categorie from "./Caracteristique/Categorie"
import Couleur from "./Caracteristique/Couleur"
import CategorieContextProvider from "./Caracteristique/Context/CategorieContext";
import SousCategorie from "./Caracteristique/SousCategorie";
import Filtre from "./Caracteristique/Filtre";
import InputDesabled from "./TemplateFormulaire/InputDesabled";
import CategorieEn from "./Caracteristique/CategorieEn";
import Tags from "./Caracteristique/Tags";


const Caracteristique = () => {
    /**
     * Couleur, Categorie, dimension, tarifs, coupe, entretien
     */
    //variable
    const {infoSku, caracteristiqueDone, setCaracteristiqueDone, categorieUpdate, categorieEnUpdate, sousCategorieUpdate, sousCategorieEnUpdate, filtreUpdate, filtreEnUpdate, couleurUpdate, couleurEnUpdate, sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)
    //fonction
    useEffect(()=>{
        
        if(categorieUpdate && categorieUpdate.length>0 && categorieEnUpdate && categorieEnUpdate.length>0 && sousCategorieUpdate && sousCategorieUpdate.length>0 && sousCategorieEnUpdate && sousCategorieEnUpdate.length>0 && filtreUpdate && filtreUpdate.length>0 && filtreEnUpdate && filtreEnUpdate.length>0 && couleurUpdate && couleurUpdate.length>0 && couleurEnUpdate && couleurEnUpdate.length>0)
            setCaracteristiqueDone(true)
        else
            setCaracteristiqueDone(true)
    }, [])
    //render
    return (
        <div className="card mb-3">
            <HeaderForm title="Caractéristique" section="caractéristique" isDone={caracteristiqueDone && caracteristiqueDone} />
            
            {
            infoSku && (sectionUpdate == "caractéristique") &&
            <form onSubmit={(e)=>{handleClickSave(e, "matière")}}>        
            <div className="card-body">
                <section className="row g-3 mb-3"><small>Tous les champs sont obligatoire</small></section>

                <section className="row g-3">
                    <InputDesabled idInput="inputCatUnivers2" typeInput="text" valeur={infoSku.categorie_univers} labelInput="Catégorie dans le fichier multimag" />
                    <InputDesabled idInput="inputSousCategorieFnr" typeInput="text" valeur={infoSku.sous_categorie_fnr} labelInput="Sous catégorie dans le fichier multimag" />
                </section>

                <CategorieContextProvider>
                    <Categorie />
                    <SousCategorie />
                    <Filtre />
                </CategorieContextProvider>

                <CategorieEn />

                <Couleur />
                <Tags />
            </div>

            <FooterForm />
            </form>
            }
        </div>
    )
}

export default Caracteristique;