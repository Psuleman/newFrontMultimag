import { useContext } from "react"
import { useEffect, useState } from "react"
import { ListeContext } from "./Context/ListeContext"
import { ListeExportContext } from "./Context/ListeExportContext"

const ToutCocher = () => {
    const {totalSkus} = useContext(ListeContext)
    const {listesProduitExport, listesProduit, setListesProduit, setListesProduitExport} = useContext(ListeExportContext)
    const [isChecked, setIsChecked] = useState()

    useEffect(()=>{


        if(listesProduit && listesProduitExport && (listesProduit.length == listesProduitExport.length)) {
            setIsChecked(true)
        }
        else{
            setIsChecked(false)
        }
    }, [listesProduitExport, listesProduit])

    // console.log("totalSkus ", listesProduit)
    // console.log("listeExport ", listesProduitExport)

    const handleChangeAllCoched = () => {
        let check = !isChecked
        setListesProduit(oldState=>{
            let newState = [...oldState]
            for(let i in newState){
                newState[i].isChecked = check
            }

            return newState;
        })
        if(check){
            setListesProduitExport(listesProduit)            
        }
        else{
            setListesProduitExport([])            
        }
        setIsChecked(check)

    }
    //render
    return (
    <div className="form-check me-3">
        {
            isChecked &&
            <input className="form-check-input" type="checkbox" value={isChecked} id="flexCheckToutCocher" onChange={()=>{
            handleChangeAllCoched()
            }} checked />
        }
        {
            !isChecked &&
            <input className="form-check-input" type="checkbox" value={isChecked} id="flexCheckToutCocher" onChange={()=>{
            handleChangeAllCoched()
            }} />        }
        <label className="form-check-label" for="flexCheckToutCocher">
            Tout cocher 
        </label>
    </div>
    )
}

export default ToutCocher;