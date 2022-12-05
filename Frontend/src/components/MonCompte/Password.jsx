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
        <div className="form-outline form-blue mb-4 col-md-3">
            <label htmlFor="passwordInput" className="form-label" >Password</label>
            <input type="password" className={"form-control form-control-lg" + classname} id="passwordInput" required placeholder="password" value={password} onChange={((e)=>{setPassword(e.target.value)})} />
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
