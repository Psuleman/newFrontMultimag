import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Nom = () => {
    const {nom, setNom, erreurNom} = useContext(UserContext)
    //render
    return (
        <div className="mb-3 col-md-3">
            <label htmlFor="nomInput" className="form-label">Nom</label>
            <input type="text" className="form-control" id="nomInput" placeholder="nom" value={nom} onChange={(e)=>{setNom(e.target.value)}} required />
            {
                erreurNom && 
                <div className="valid-feedback">
                    Minimum 2 caractère
                </div>
            }

        </div>

    )
}
export default Nom;
