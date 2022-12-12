import { useContext, useState, useEffect } from "react"
import { UserContext } from "./Context/UserContext"

const ConfPassword = () => {
    const {confPassword, setConfPassword, erreurConfPassword} = useContext(UserContext)
    const [classname, setClassname] = useState("")

    useEffect(()=>{
        if(erreurConfPassword){
            setClassname(" is-invalid")
        }
        else{
            setClassname("")
        }
    }, [erreurConfPassword])
    //render
    return (
        <div className="mb-3 col-md-3">
            <label htmlFor="confpasswordInput" className="form-label">Confirmation Password</label>
            <input type="password" className={"form-control" + classname} id="passwordInput" required placeholder="Confirmer votre mot de passe" value={confPassword} onChange={((e)=>{setConfPassword(e.target.value)})} />
            {
                erreurConfPassword && 
                <div className="invalid-feedback">
                    Mot de passe incorrect
              </div>
          
            }
        </div>

    )
}
export default ConfPassword;