import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Email = () => {
    const {email, setEmail} = useContext(UserContext)
    //render
    return (
        <div className="mb-3 col-md-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input type="email" className="form-control" id="emailInput" placeholder="email" value={email} disabled/>
        </div>

    )
}
export default Email;