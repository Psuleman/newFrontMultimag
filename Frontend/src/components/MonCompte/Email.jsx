import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Email = () => {
    const {email, setEmail} = useContext(UserContext)
    //render
    return (
        <div class="mb-3 col-md-3">
            <label for="emailInput" class="form-label">Email</label>
            <input type="email" class="form-control" id="emailInput" placeholder="email" value={email} disabled/>
        </div>

    )
}
export default Email;