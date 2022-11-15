const Select = ({id, label, value, setValue, list }) => {
    //variable
    //Render
    return (
    <div className="form-group">
        <label htmlFor={id} className="form-label mb-1">{label}</label>
        <select className="form-select" aria-label="Default select example" id={id} value={value} 
        onChange={(e)=>{
            setValue(e.target.value)
        }} >
            <option value="">Choisissez</option>
            {
                list && label!="Tag" &&
                label.length > 0 && list.map((item, index)=>(
                    <option key={label+"_"+index} value={item}>{item}</option>
                ))
            }
            {
                list && label=="Tag" &&
                label.length > 0 && list.map((item, index)=>(
                    <option key={label+"_"+index} value={item.code_tag}>{item.tag}</option>
                ))
            }
        </select>
    </div>
    )
}

export default Select;
