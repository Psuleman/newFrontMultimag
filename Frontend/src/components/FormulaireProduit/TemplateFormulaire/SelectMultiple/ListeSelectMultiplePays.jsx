import { useState } from "react";
import { useContext, useEffect } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import { SelectContext } from "./Context/SelectContext";

const ListeSelectMultiplePays = ({item}) => {
    //variable
    const [checkbox, setCheckbox] = useState(false)
    const [attribut, setAttribut] = useState()
    const [initialValue, setInitialValue] = useState(true)
    const [paysTarif, setPaysTarif] = useState()

    const {tarifUpdate, setTarifUpdate, infoSku, totalList} = useContext(FormulaireContext)
    const {indexTarif, list, setValue, tarif, setTarif} = useContext(SelectContext) 

    //fonction
    useEffect(()=>{
        // if(initialValue){
            /**
             * initialisation
             * Checked tous les pays déjà dans tarifUpdate
             */
            if(tarifUpdate){
                console.log("tarif update ", tarifUpdate)
                tarifUpdate[indexTarif].pays.forEach(element => {
                    if(item == "France" && indexTarif==0){ setAttribut("disabled") }
                    else{
                        if(element.pays === item){ setAttribut("checked") }
                        else{ setAttribut("") }
                    }
                })
            }
        // }

        // else{
        //     /**
        //      * Modification
        //      */
        //      let tab = [...tarifUpdate]
        //     if(checkbox){
        //         /**
        //          * la case a été cocher
        //          * ajouter le pays
        //          */
        //         console.log("case coché")
        //         setAttribut("checked")
                
        //         tab[indexTarif].pays.push({pays: item})
        //     }
        //     else{
        //         /**
        //          * case décocher
        //          * enlever le pays
        //          */
        //          console.log("case décoché")
        //          setAttribut("")
        //          let newTabPays = []
        //          tab[indexTarif].pays.forEach(element => {
        //             if(element.pays != item) { newTabPays.push(element) }
        //          })

        //          tab[indexTarif].pays = newTabPays
        //     }
        //     setTarifUpdate(tab)
        //     setInitialValue(true)
        //     console.log("tab", tab)

        // }
    }, [infoSku, list])

    const handleClick = (i) => {
        /**
         * Modification
         */
        let tab = [...tarifUpdate]
        if(i){
            /**
             * la case a été cocher
             * ajouter le pays
             */
            console.log("case coché")
            setAttribut("checked")
            
            tab[indexTarif].pays.push({pays: item})
        }
        else{
            /**
             * case décocher
             * enlever le pays
             */
                console.log("case décoché")
                setAttribut("")
                let newTabPays = []
                tab[indexTarif].pays.forEach(element => {
                if(element.pays != item) { newTabPays.push(element) }
                })

                tab[indexTarif].pays = newTabPays
        }
        setTarifUpdate(tab)
        setInitialValue(true)
        console.log("tab", tab)
    }
    //render
    return (
        <div className="form-check">
            {
                attribut && attribut=="disabled" &&
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked disabled />
            }
            {
                attribut && attribut=="checked" &&
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e)=>{
                    setCheckbox(false)
                    let i = false
                    handleClick(i)
                }} checked />
            }
            {
                (!attribut || attribut=="")  &&
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e)=>{
                    setCheckbox(true)
                    let i = true
                    handleClick(i)}}/>           
            }

            <label className="form-check-label" for="flexCheckDefault">{item}</label>

        </div>
    )
}
export default ListeSelectMultiplePays;