import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const ConfPassword = () => {
    const {confPassword, setConfPassword} = useContext(UserContext)
    //render
    return (
        <div class="mb-3">
            <label for="confpasswordInput" class="form-label">Password</label>
            <input type="password" class="form-control" id="confpasswordInput" placeholder="Confirmer votre mot de passe"  value={confPassword} onChange={((e)=>{setConfPassword(e.target.value)})}/>
        </div>

    )
}
export default ConfPassword;