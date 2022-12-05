import { useState, useEffect } from "react"
import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

const Nom = () => {
    const [classname, setClassname] = useState("")
    const {nom, setNom, erreurNom} = useContext(UserContext)

    useEffect(()=>{
        if(erreurNom){
            setClassname(" is-invalid")
        }
        else{
            setClassname("")
        }
    }, [erreurNom])

    //render
    return (
        <div className="mb-3 col-md-3">
            <label htmlFor="nomInput" className="form-label">Nom</label>
            <input type="text" className={"form-control" + classname} id="nomInput" placeholder="nom" value={nom} onChange={(e)=>{setNom(e.target.value)}} required />
            {
                erreurNom && 
                <div className="invalid-feedback">
                    Minimum 2 caractère
                </div>
            }

        </div>

    )
}
export default Nom;

