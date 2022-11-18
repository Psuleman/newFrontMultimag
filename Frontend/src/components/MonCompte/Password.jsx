import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Password = () => {
    const {password, setPassword} = useContext(UserContext)
    //render
    return (
        <div class="mb-3 col-md-3">
            <label for="passwordInput" class="form-label">Password</label>
            <input type="password" class="form-control" id="passwordInput" placeholder="password" value={password} onChange={((e)=>{setPassword(e.target.value)})} />
        </div>

    )
}
export default Password;