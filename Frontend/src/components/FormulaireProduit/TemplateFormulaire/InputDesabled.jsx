const InputDesabled = ({id, type, value, label }) => {
    let valeur = value
    let typeInput = type
    let idInput = id
    return (
    <div className="col-md-3">
        <label htmlFor={idInput} className="form-label">{label}</label>
        <input type={typeInput} className="form-control" id={idInput} value={valeur} disabled />
    </div>   
    )
}
export default InputDesabled;