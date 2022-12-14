const Textarea = ({id, label, value, setValue}) => {
    return (
    <div className="col-md-6">
        <label htmlFor={id} className="form-label">{label}</label>
        <textarea className="form-control" id={id} rows="3" value={value} onChange={(e)=>{setValue(e.target.value)}} />
    </div>
    )
}
export default Textarea;