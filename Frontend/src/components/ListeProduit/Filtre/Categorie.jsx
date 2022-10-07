const Categorie = () => {
    return (
    <div className="form-group">
        <label className="mb-1">Catégorie</label>
        <select class="form-select" aria-label="Default select example">
            <option selected>Choisissez</option>
            <option value="femme">Femme</option>
            <option value="homme">Homme</option>
            <option value="maison">Maison</option>
        </select>
    </div>

    )
}

export default Categorie;