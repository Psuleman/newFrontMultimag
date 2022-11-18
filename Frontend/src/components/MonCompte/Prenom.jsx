import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Prenom = () => {
    const {prenom, setPrenom} = useContext(UserContext)
    //render
    return (
        <div class="mb-3 col-md-3">
            <label for="prenomInput" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="prenomInput" placeholder="prenom" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}} />
        </div>

    )
}
export default Prenom;