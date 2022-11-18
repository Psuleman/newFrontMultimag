import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Role = () => {
    const {role, setRole} = useContext(UserContext)
    //render
    return (
        <div class="mb-3 col-md-3">
            <label for="roleInput" className="form-label">Service</label>
            <input type="role" className="form-control" id="roleInput" placeholder="role" value={role} disabled/>
        </div>

    )
}
export default Role;