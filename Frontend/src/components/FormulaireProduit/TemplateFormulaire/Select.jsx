const Select = ({id, label, value, setValue, list }) => {
    //variable
    //Render
    return (
    <div className="col-md-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <select className="form-select" aria-label="Default select example" id={id} value={value} onChange={(e)=>{ setValue(e.target.value)}} >
            {
                !value && <option selected>Choisissez</option>
            }
            {
                list && label=="Couleur" && list.map((item, index)=>(
                    <option value={item.couleur_ref}>{item.couleur_ref}</option>
                ))
            }
            {
                list && label=="Entretien" && list.map((item, index)=>(
                    <option value={item.entretien}>{item.entretien}</option>
                ))
            }
            {
                list && label=="Coupe" && list.map((item, index)=>(
                    <option value={item.coupe_ref}>{item.coupe_ref}</option>
                ))
            }
            {
                list && label=="Grille taille" && list.map((item, index)=>(
                    <option key={index} value={item.grilleTaille}>{item.grilleTaille}</option>
                ))
            }
            {
                list && label.substr(0, 7)=="Matière" && list.map((item, index)=>(
                    <option key={index} value={item.matiere}>{item.matiere}</option>
                ))
            }
        </select>
    </div>
    )
}

export default Select;