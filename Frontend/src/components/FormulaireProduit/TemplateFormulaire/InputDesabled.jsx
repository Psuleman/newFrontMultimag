const InputDesabled = ({id, type, value, label }) => {
    return (
    <div className="col-md-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <input type={type} className="form-control" id={id} value={value} disabled />
    </div>   
    )
}
export default InputDesabled;