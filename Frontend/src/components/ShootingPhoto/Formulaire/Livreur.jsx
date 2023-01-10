const Livreur = () => {
    //render
    return (
    <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <label htmlhtmlFor="formFile" className="form-label">Livré ou récupérer par</label>
        <select className="form-select" aria-label="Default select example">
            <option selected>Choisissez</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
    )
}

export default Livreur