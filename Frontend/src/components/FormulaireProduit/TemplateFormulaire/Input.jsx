const Input = ({id, label, value, setvalue, type, min, max }) => {
    return (
    <div className="col-md-3">
        <label htmlFor={id} className="form-label">{label}</label>
        {
            type="number" ? 
            <input type="number" className="form-control" id={id} value={value} onChange={(e)=>{setvalue(e.target.value)}} min={min} max={max} />
            :
            <input type="text" className="form-control" id={id} value={value} onChange={(e)=>{setvalue(e.target.value)}} />

        }
    </div>
    )
}
export default Input;