import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const ConfPassword = () => {
    const {confPassword, setConfPassword, erreurConfPassword} = useContext(UserContext)
    //render
    return (
        <div className="form-outline form-blue mb-4 col-md-3">
            <label htmlFor="confpasswordInput" className="form-label">Confirmation Password</label>
            <input type="password" className="form-control form-control-lg" id="passwordInput" required placeholder="Confirmer votre mot de passe" value={confPassword} onChange={((e)=>{setConfPassword(e.target.value)})} />
            {
                erreurConfPassword && 
                <div className="valid-feedback">
                    Mot de passe incorrect
              </div>
          
            }
        </div>

    )
}
export default ConfPassword;