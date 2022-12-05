import { useState, useEffect } from "react"
import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Prenom = () => {
    const [classname, setClassname] = useState("")
    const {prenom, setPrenom, erreurPrenom} = useContext(UserContext)

    //render
    useEffect(()=>{
        if(erreurPrenom){
            setClassname(" is-invalid")
        }
        else{
            setClassname("")
        }
    }, [erreurPrenom])
    return (
        <div className="mb-3 col-md-3">
            <label htmlFor="prenomInput" className="form-label">Prénom</label>
            <input type="text" className={"form-control" + classname} id="prenomInput" placeholder="prenom" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}} required />
            {
                erreurPrenom && 
                <div className="invalid-feedback">
                    Minimum 2 caractère
                </div>
            }
        </div>

    )
}
export default Prenom;