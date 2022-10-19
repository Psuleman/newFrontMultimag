import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";

const FooterForm = () => {
    //variable
    const {infoSku, sectionUpdate} = useContext(FormulaireContext)
    const [valueBouton, setValueBouton] = useState()

    //fonction
    useEffect(()=>{
        let value = sectionUpdate == "matière" ? "Enregistrer" : "Suivant"
        setValueBouton(value)
    }, [])
    //render
    return (
        <div className="card-footer bg-transparent">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            {
                infoSku ? 
                <button className="btn btn-outline-dark" type="submit">{valueBouton}</button>
                :
                <button className="" type="submit" disabled >{valueBouton}</button>
            }
            
        </div>
        </div>
    )
}

export default FooterForm;