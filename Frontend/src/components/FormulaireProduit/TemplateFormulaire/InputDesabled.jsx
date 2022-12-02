const InputDesabled = ({idInput, typeInput, valeur, labelInput }) => {
    return (
    <div className="col-md-3">
        <label htmlFor={idInput} className="form-label">{labelInput}</label>
        <input type={typeInput} className="form-control" id={idInput} value={valeur} disabled />
    </div>   
    )
}
export default InputDesabled;