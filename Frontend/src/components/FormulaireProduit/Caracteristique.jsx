import { useContext, useEffect, useState } from "react";
import { FormulaireContext } from "./Context/FormulaireContext";
import HeaderForm from "./TemplateFormulaire/HeaderForm";
import {Coupe} from "../../data/Coupe"
import {Entretien} from "../../data/Entretien"
import FooterForm from "./TemplateFormulaire/FooterForm";
import Categorie from "./Caracteristique/Categorie"
import Couleur from "./Caracteristique/Couleur"
import CategorieContextProvider from "./Caracteristique/Context/CategorieContext";
import SousCategorie from "./Caracteristique/SousCategorie";
import Filtre from "./Caracteristique/Filtre";
import InputDesabled from "./TemplateFormulaire/InputDesabled";
import Select from "./TemplateFormulaire/Select";
import Dimension from "./Caracteristique/Dimension";
import CategorieEn from "./Caracteristique/CategorieEn";
const Caracteristique = () => {
    /**
     * Couleur, Categorie, dimension, tarifs, coupe, entretien
     */
    //variable


    const {infoSku,coupeUpdate, setCoupeUpdate, entretienUpdate, setEntretienUpdate,
    sectionUpdate, setSectionUpdate, handleClickSave} = useContext(FormulaireContext)
    //fonction

    //render
    return (
        <div className="card mb-3">
            <HeaderForm title="Caractéristique" section="caractéristique" />
            
        {
            infoSku && (sectionUpdate == "caractéristique") &&
            <form onSubmit={(e)=>{handleClickSave(e, "description")}}>        
            <div className="card-body">
                    <section className="row g-3">
                        <InputDesabled id="inputCatUnivers2" type="text" value={infoSku.categorie_univers} label="Catégorie dans le fichier multimag" />
                        <InputDesabled id="inputSousCategorieFnr" type="text" value={infoSku.sous_categorie_fnr} label="Sous catégorie dans le fichier multimag" />
                    </section>

                    <CategorieContextProvider>
                        <Categorie />
                        <SousCategorie />
                        <Filtre />
                    </CategorieContextProvider>

                    <CategorieEn />

                    <Couleur />
                                                    
                    <section className="row g-3 mt-1">
                        <Select id="selectEntretien" label="Entretien" value={entretienUpdate} setValue={setEntretienUpdate} list={Entretien} />
                        <Select id="selectCoupe" label="Coupe" value={coupeUpdate} setValue={setCoupeUpdate} list={Coupe} />
                    </section>

                    <Dimension />

                
            </div>

            <FooterForm />
            </form>
        }
        </div>
    )
}

export default Caracteristique;