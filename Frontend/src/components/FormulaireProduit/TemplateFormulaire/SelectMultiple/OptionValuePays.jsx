import { useContext, useEffect } from "react"
import { useState } from "react"
import { Pays } from "../../../../data/Pays"
import { FormulaireContext } from "../../Context/FormulaireContext"
import { SelectContext } from "../Context/SelectContext"
import ValueChecked from "./ValueChecked"
import ValueDisabled from "./ValueDisabled"
import ValueNonChecked from "./ValueNonChecked"

const OptionValuePays = ({indexTarif}) => {
    //variable
    const [listDisabled, setListDisabled] = useState([])
    const [listChecked, setListChecked] = useState([])
    const [listNonChecked, setListNonChecked] = useState([])
    const {tarifUpdate, setTarifUpdate} = useContext(FormulaireContext)
    const {arrayList} = useContext(SelectContext)
    //fonction
    useEffect(()=>{
        let tabDisabled = []
        let tabChecked = []
        let tabNonChecked = []

        console.log(indexTarif, "depuis option")

        if(tarifUpdate){
            console.log("arrive ici")
            tarifUpdate[indexTarif].pays.forEach(element => {
                if(element.pays == "France" && indexTarif==0){
                    tabDisabled=["France"]
                }
                else{
                    tabChecked.push(element.pays)
                }
            }); 

            if(arrayList.length>0){
                arrayList.forEach(element => {
                    if(!(element.pays == "France" && indexTarif==0)){
                        let isChecked = false
                        tarifUpdate[indexTarif].pays.forEach(elementTarif => {
                            if(element.pays == elementTarif.pays){
                                isChecked = true
                            }
                        });
                        if(!isChecked){
                            tabNonChecked.push(element.pays)
                        }
                    }
                });
            }            
            
        }


        setListDisabled(tabDisabled)
        setListChecked(tabChecked)
        setListNonChecked(tabNonChecked)

    }, [tarifUpdate, arrayList, indexTarif])


    console.log("disabled : " , listDisabled)
    console.log("checked : " , listChecked)
    console.log("non checked : " , listNonChecked)
    console.log("tarif update", tarifUpdate)
    //render
    return (
        <div className="height-select border border-1">            
        {
            listDisabled && listDisabled.length>0 &&
            listDisabled.map((item, index) => ( <ValueDisabled key={item + "_desabled_" + index} indexTarif={indexTarif} item={item} /> ))
        } 
        {
            listChecked && listChecked.length>0 &&
            listChecked.map((item, index) => ( <ValueChecked key={item + "_checked_" + index} indexTarif={indexTarif} item={item} /> ))
        }
        {
            listNonChecked && listNonChecked.length>0 &&
            listNonChecked.map((item, index) => ( <ValueNonChecked key={item + "_" + index} indexTarif={indexTarif} item={item} /> ))
        }                             


        {
            !Pays &&
            <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>                    
        }
        </div>
    )
}

export default OptionValuePays