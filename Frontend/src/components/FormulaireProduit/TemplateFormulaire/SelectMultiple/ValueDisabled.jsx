const ValueDisabled = ({item}) => {
    //variable

    //fonction

    //render
    return (
        <div className="p-1 dropdown-item">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked disabled />
            <label className="form-check-label" for="flexCheckDefault">{item}</label>
        </div>            
        </div>

    )
}
export default ValueDisabled