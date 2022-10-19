import Select from "../TemplateFormulaire/Select"
import { Marques } from "../../../data/Marques"
import { useContext, useState } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import { useEffect } from "react"

const Marque = () => {
    //variable
    const {marqueUpdate, setMarqueUpdate, infoSku} = useContext(FormulaireContext)
    const [marques, setMarques] = useState([])
    //Fonction
    useEffect(()=>{
        let arrayMarque = [...Marques]
        let marqueExist = false
        arrayMarque.forEach(element=>{
            if(marqueUpdate == element){
                marqueExist = true;
            }
        })
        if(!marqueExist){
            arrayMarque.push(marqueUpdate)
        }
        setMarques(arrayMarque)

    }, [infoSku])
    //render
    return (
        <Select id="selectMarque" label="Marque" value={marqueUpdate} setValue={setMarqueUpdate} list={marques} />
    )
}
export default Marque;