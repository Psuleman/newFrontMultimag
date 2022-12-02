import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Password = () => {
    const {password, setPassword, erreurPassword} = useContext(UserContext)
    //render
    return (
        <div className="form-outline form-blue mb-4 col-md-3">
            <label htmlFor="passwordInput" className="form-label" >Password</label>
            <input type="password" className="form-control form-control-lg" id="passwordInput" required placeholder="password" value={password} onChange={((e)=>{setPassword(e.target.value)})} />
            {
                erreurPassword && 
                <div className="valid-feedback">
                    Minimum 8 caractères
              </div>
          
            }
        </div>

    )
}
export default Password;
