const Select = ({id, label, value, setValue, list }) => {
    //variable
    //Render
    console.log("liste ", list)
    return (
    <div className="form-group">
        <label htmlFor={id} className="form-label mb-1">{label}</label>
        <select className="form-select" aria-label="Default select example" id={id} value={value} 
        onChange={(e)=>{
            setValue(e.target.value)
        }} >
            {
                !value && <option selected>Choisissez</option>
            }
            {
                list && 
                label.length > 0 && list.map((item, index)=>(
                    <option key={label+"_"+index} value={item}>{item}</option>
                ))
            }

        </select>
    </div>
    )
}

export default Select;
