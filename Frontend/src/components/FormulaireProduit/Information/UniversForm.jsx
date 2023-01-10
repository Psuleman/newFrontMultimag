import { useEffect } from "react";
import InputDesabled from "../TemplateFormulaire/InputDesabled";
import Select from "../TemplateFormulaire/Select";
import { Univers } from "../../../data/Univers";
import { Gender } from "../../../data/Gender";
import Input from "../TemplateFormulaire/Input";
import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import { Age } from "../../../data/Age";
import { useState } from "react";

const UniversForm = () => {
    //variable
    const [tabAge, setTabAge] = useState([])
    const {infoSku, universEnUpdate, setUniversEnUpdate, universUpdate, setUniversUpdate, genderUpdate, setGenderUpdate, ageUpdate, setAgeUpdate} = useContext(FormulaireContext)
    //fonction
    useEffect(()=>{
        if(Age)
            setTabAge(Age)

        if(universUpdate){
            Univers.forEach(element=>{
                if(universUpdate == element.univers_ref)
                {
                    setUniversEnUpdate(element.univers_ref_en)

                    if(element.gender && typeof element.gender === 'string' ){
                        setGenderUpdate(element.gender)
                    }
                    else{
                        setGenderUpdate("")
                    }

                    if(element.age && typeof element.age === 'string'){
                        setAgeUpdate(element.age)
                    }
                    else if(element.age && Array.isArray(element.age)){
                        setAgeUpdate("")
                        setTabAge(element.age)
                    }
                    else{
                        setAgeUpdate("")
                    }
                    
                }
                    
                
            })
        }
    }, [infoSku, universUpdate])
    //variable
    //render
    return (
    <section className="row g-3 mt-1">
        <Select id="selectUnivers" label="* Univers" value={universUpdate} setValue={setUniversUpdate} list={Univers} itemValue="univers_ref" />

        <Input id="inputUniversEn" label="* Univers En" value={universEnUpdate} setValue={setUniversEnUpdate} />

        <Select id="selectGender" label="Gender" value={genderUpdate} setValue={setGenderUpdate} list={Gender} itemValue="" />

        <Select id="selectGender" label="Age" value={ageUpdate} setValue={setAgeUpdate} list={tabAge} itemValue="" />

        

    </section>
    )
}

export default UniversForm;

