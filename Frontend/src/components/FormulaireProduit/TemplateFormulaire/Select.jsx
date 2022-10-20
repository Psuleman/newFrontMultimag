const Select = ({id, label, value, setValue, list }) => {
    //variable
    //Render
    return (
    <div className="col-md-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <select className="form-select" aria-label="Default select example" id={id} value={value} 
        onChange={(e)=>{
            setValue(e.target.value)
        }} >
            {
                !value && <option selected>Choisissez</option>
            }
            {
                list && label=="Couleur" && list.map((item, index)=>(
                    <option key={"couleur"+index} value={item.couleur_ref}>{item.couleur_ref}</option>
                ))
            }
            {
                list && label=="Entretien" && list.map((item, index)=>(
                    <option key={"entretien"+index} value={item.entretien}>{item.entretien}</option>
                ))
            }
            {
                list && label=="Coupe" && list.map((item, index)=>(
                    <option key={"coupe"+index} value={item.coupe_ref}>{item.coupe_ref}</option>
                ))
            }
            {
                list && label=="Grille taille" && list.map((item, index)=>(
                    <option key={"grilleTaille"+index} value={item.grilleTaille}>{item.grilleTaille}</option>
                ))
            }
            {
                list && label=="Univers" && list.map((item, index)=>(
                    <option key={"univers"+index} value={item.univers_ref}>{item.univers_ref}</option>
                ))
            }
            {
                list && label=="Marque" && list.map((item, index)=>(
                    <option key={"marque"+index} value={item}>{item}</option>
                ))
            }
            {
                list && label=="Pays origine" && list.map((item, index)=>(
                    <option key={"pays_origine"+index} value={item.pays}>{item.pays}</option>
                ))
            }
            {
                list && label=="Filtre" && list.map((item, index)=>(
                    <option key={"filtre"+index} value={item.filtre}>{item.filtre}</option>
                ))
            }
        </select>
    </div>
    )
}

export default Select;