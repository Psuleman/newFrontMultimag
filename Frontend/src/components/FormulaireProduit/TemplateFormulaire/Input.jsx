import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";

const Input = ({ id, label, value, setvalue }) => {
    return (
    <div className="col-md-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <input type="text" className="form-control" id={id} value={value} onChange={(e)=>{setvalue(e.target.value)}} />

    </div>
    )
}
export default Input;