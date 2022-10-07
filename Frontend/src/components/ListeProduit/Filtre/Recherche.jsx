const Recherche = () => {
    return (
    <div className="form-group">
        <label className="mb-1">Recherche par SKU</label>
        <div className="input-group mb-3">
            <input type="search" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            <button type="button" class="input-group-text">
                <i class="fas fa-search"></i>
            </button>            
        </div>

    </div>

    )
}

export default Recherche;
