import { useContext } from "react"
import { ShootingContext } from "../Context/ShootingContext"

const NombreProduit = () => {
    const {nombreSkus, setNombreSkus} = useContext(ShootingContext)
    //render
    return (
    <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <label htmlhtmlFor="formFile" className="form-label">Nombre de produit</label>
        <input className="form-control" type="number" id="formFile" min="0" value={nombreSkus} onChange={(e)=>{setNombreSkus(e.target.value)}} required />
    </div>
    )
}

export default NombreProduit