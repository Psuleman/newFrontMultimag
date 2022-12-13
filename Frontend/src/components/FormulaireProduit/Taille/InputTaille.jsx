import { useContext, useEffect, useState } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"

const InputTaille = ({index, id, tailles}) => {
    const [tailleFnr, setTailleFnr] = useState(false)

    const {attributUpdate, setAttributUpdate, infoSku, grilleTailleUpdate} = useContext(FormulaireContext)

    useEffect(()=>{
        if(tailles){
            tailles.forEach(element => {
                if(element.stock_code == attributUpdate[index].taille_fnr){
                    setAttributUpdate((oldState)=>{
                        let newState = [...oldState]
                        newState[index].taille_ref.taille_ref = element.taille_ref
                        return newState
                    })
                }
            });
        }

    }, [tailleFnr])
    
    //render
    return (
        <div className="col-md-3">
            <label htmlFor={id} className="form-label">Taille Fournisseur</label>
            <input type="text" className="form-control" id={id} value={attributUpdate[index].taille_fnr} onChange={(e)=>{ 
                setAttributUpdate((oldState)=>{
                    let newState = [...oldState]
                    newState[index].taille_fnr = e.target.value
                    newState[index].variant_sku = infoSku.sku + "_" + e.target.value
                    return newState
                })
                setTailleFnr(e.target.value)
            }} />
        </div>

    )
}
export default InputTaille