import { useContext, useState } from "react"
import { useEffect } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import { SelectContext } from "./Context/SelectContext"
import { Pays } from "../../../data/Pays";
import InputSearch from "./SelectMultiple/InputSearch"
import OptionValuePays from "./SelectMultiple/OptionValuePays"


    const SelectMultiplePays = ({id, indexTarif }) => {
    //variable
    const [search, setSearch] = useState("")
    const [arrayList, setArrayList] = useState([])
    const [value, setValue] = useState()
    const [tarif, setTarif] = useState([])
    const {tarifUpdate, setTarifUpdate} = useContext(FormulaireContext)

    //fonction
    useEffect(()=>{
        console.log(search)
        if(Pays){
            if(!search || search=="")
                setArrayList(Pays.sort())
            
            else{
                setArrayList(oldList=>{
                    let newList = []
                    let regex = new RegExp(search, "i")
                    if(search && search != ""){
                        oldList.forEach(element => {
                            let item = eval('element.pays')
                            if(item.match(regex))
                                newList.push(element)
                        });
                    }
                    console.log("newList", newList)
                    return newList
                })                
            }
        }
        console.log("arrayList", arrayList)
    }, [search, Pays])

    //Render
    return (
    <div className="col-md-3">
        <label htmlFor={id} className="form-label">Pays</label>
        <section className="list-group dropdown">
            <div className="form-select" data-bs-toggle="dropdown">{ value ? value : "Choisissez"}</div>               
            <div className="dropdown-menu section-list-select p-0">
                <SelectContext.Provider value={{
                    search: search,
                    setSearch: setSearch,
                    arrayList: arrayList,
                    setArrayList: setArrayList,
                }}>
                    <InputSearch placeholder="Pays" />
                    <OptionValuePays indexTarif={indexTarif} />               
                
                </SelectContext.Provider>
                </div>
        </section>                  

  
    </div>
    )
}

export default SelectMultiplePays;