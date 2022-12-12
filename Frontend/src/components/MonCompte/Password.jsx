import { useContext, useState, useEffect } from "react"
import { UserContext } from "./Context/UserContext"

const Password = () => {
    const {password, setPassword, erreurPassword} = useContext(UserContext)
    const [classname, setClassname] = useState("")

    useEffect(()=>{
        if(erreurPassword){
            setClassname(" is-invalid")
        }
        else{
            setClassname("")
        }
    }, [erreurPassword])
    //render
    return (
        <div className="mb-3 col-md-3">
            <label htmlFor="passwordInput" className="form-label" >Password</label>
            <input type="password" className={"form-control" + classname} id="passwordInput" required placeholder="password" value={password} onChange={((e)=>{setPassword(e.target.value)})} />
            {
                erreurPassword && 
                <div className="invalid-feedback">
                    Minimum 8 caractères
              </div>
          
            }
        </div>

    )
}
export default Password;

