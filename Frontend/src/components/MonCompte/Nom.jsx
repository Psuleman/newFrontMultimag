import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Nom = () => {
    const {nom, setNom} = useContext(UserContext)
    //render
    return (
        <div class="mb-3 col-md-3">
            <label for="nomInput" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nomInput" placeholder="nom" value={nom} onChange={(e)=>{setNom(e.target.value)}} />
        </div>

    )
}
export default Nom;