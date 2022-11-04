import { useContext } from "react"
import { useState } from "react"
import { FormulaireContext } from "../../Context/FormulaireContext"

const ValueNonChecked = ({item, indexTarif}) => {
    //variable
    const [checkbox, setCheckbox] = useState()
    const {tarifUpdate, setTarifUpdate} = useContext(FormulaireContext)
    //fonction

    //render
    return (
        <div className="p-1 dropdown-item">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>{
            setTarifUpdate(oldState=>{
                let newState = [...oldState]
                newState[indexTarif].pays.push({pays: item})
                return newState
            })                
            }}/>
            <label className="form-check-label" for="flexCheckDefault">{item}</label>
        </div>            
        </div>

    )
}
export default ValueNonChecked