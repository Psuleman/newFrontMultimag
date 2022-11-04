import { useContext, useState, useEffect } from "react"
import { FormulaireContext } from "../../Context/FormulaireContext"

const ValueChecked = ({item, indexTarif}) => {
    //variable
    const {tarifUpdate, setTarifUpdate} = useContext(FormulaireContext)
    //fonction
  
    //render    
    return (
        <div className="p-1 dropdown-item">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>{
                setTarifUpdate(oldState=>{
                    let newState = []
                    let newTabPays = []
                    tarifUpdate[indexTarif].pays.forEach(element => {
                        if(element.pays != item){ newTabPays.push(element) }
                    });
                    newState[indexTarif].pays = newTabPays
                    return newState
                })
            }} checked />
            <label className="form-check-label" for="flexCheckDefault">{item}</label>
        </div>            
        </div>

    )
}
export default ValueChecked