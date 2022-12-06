import InputDesabled from "../TemplateFormulaire/InputDesabled";
import Select from "../TemplateFormulaire/Select";
import { Univers } from "../../../data/Univers";
import Input from "../TemplateFormulaire/Input";
import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import { useEffect } from "react";

const UniversForm = () => {
    //variable
    const {infoSku, universEnUpdate, setUniversEnUpdate, universUpdate, setUniversUpdate} = useContext(FormulaireContext)
    //fonction
    useEffect(()=>{
        if(universUpdate){
            Univers.forEach(element=>{
                if(universUpdate == element.univers_ref)
                    setUniversEnUpdate(element.univers_ref_en)
            })
        }
    }, [infoSku, universUpdate])
    //variable
    //render
    return (
    <section className="row g-3 mt-1">
        <InputDesabled idInput="inputCatUnivers" typeInput="text" labelInput="Catégorie dans le fichier multimag" valeur={infoSku.categorie_univers} />

        <Select id="selectUnivers" label="Univers" value={universUpdate} setValue={setUniversUpdate} list={Univers} itemValue="univers_ref" />

        <Input id="inputUniversEn" label="Univers En" value={universEnUpdate} setValue={setUniversEnUpdate} />
    </section>
    )
}

export default UniversForm;

