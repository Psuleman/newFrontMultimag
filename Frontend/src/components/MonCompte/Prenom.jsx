import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Prenom = () => {
    const {prenom, setPrenom, erreurPrenom} = useContext(UserContext)
    //render
    return (
        <div className="mb-3 col-md-3">
            <label htmlFor="prenomInput" className="form-label">Prénom</label>
            <input type="text" className="form-control" id="prenomInput" placeholder="prenom" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}} required />
            {
                erreurPrenom && 
                <div className="valid-feedback">
                    Minimum 2 caractère
                </div>
            }
        </div>

    )
}
export default Prenom;