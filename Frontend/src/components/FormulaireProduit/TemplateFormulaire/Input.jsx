import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";

const Input = ({ id, label, value, setValue, type="text", stepValue="any" }) => {
    return (
    <div className="col-md-3">
        <label htmlFor={id} className="form-label">{label}</label>
        {
            type ? 
            <input type={type} className="form-control" step="0.001" min={0} id={id} value={value} onChange={(e)=>{ setValue(e.target.value) }} />
            :
            <input type="text" className="form-control" id={id} value={value} onChange={(e)=>{ setValue(e.target.value) }} />
        }
        

    </div>
    )
}
export default Input;