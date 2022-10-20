const Tag = () => {
    return (
    <div className="form-group">
        <label className="mb-1">Tag</label>
        <select class="form-select" aria-label="Default select example">
            <option selected>Choisissez</option>
            <option value="femme">Internet</option>
            <option value="homme">Detague</option>
            <option value="maison">Leclaireur</option>
            <option value="maison">Non tagué</option>
        </select>
    </div>
        
    )
}

export default Tag;