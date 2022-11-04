import { useContext } from "react"
import { useState, useEffect } from "react"
import {Matieres} from "../../../data/Matieres"
import { FormulaireContext } from "../Context/FormulaireContext"

const SelectMatiere = ({label, value, id, indexMatiere}) => {
    //variable
    const [search, setSearch] = useState("")
    const [arrayList, setArrayList] = useState([])
    const {matiereUpdate, setMatiereUpdate} = useContext(FormulaireContext)
    //fonction
    useEffect(()=>{ 
        if(Matieres){
            //list = sortList(list)
            if(!search || search=="")
                setArrayList(Matieres.sort())
            
            else{
                setArrayList(oldList=>{
                    let newList = []
                    let regex = new RegExp(search, "i")
                    if(search && search != ""){
                        oldList.forEach(element => {
                            let item = eval('element.matiere')
                            if(item.match(regex))
                                newList.push(element)
                        });
                    }
                    return newList
                })
                
            }
        }


    }, [search, Matieres])
    //render
    return (
    <div className="col-md-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <section className="list-group dropdown">
            <div className="form-select" data-bs-toggle="dropdown">{ value ? value : "Choisissez"}</div>               
            <div className="dropdown-menu section-list-select p-0">
                <div className="list-group-item dropdown-item p-0">
                <div className="input-group">
                    <span className="input-group-text rounded-0 border border-0" id="basic-addon1"><i className="fas fa-search"></i></span>
                    <input type="text" className="form-control rounded-0 border border-0" placeholder="Matiere" aria-label={label} aria-describedby="basic-addon1" value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                </div>
                <div className="height-select border border-1">
                {
                    Matieres && arrayList.map((item, index)=>{
                        item = eval('item.matiere')
                        return (
                            <div className="dropdown-item">
                                <div className="p-1 cursor-pointer" id={label+"_"+index} key={label+"_"+index} onClick={() => {
                                    setMatiereUpdate(oldState=>{
                                        let newState = [...oldState]
                                        newState[indexMatiere].matiere = item
                                        return newState
                                    })
                                }}>{ item }</div>
                            </div>
                        )                   
                    })   
                }
                {
                    !Matieres &&
                    <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>                    
                }                
                </div>                
            </div>
        </section>                  

  
    </div>
    )
}

export default SelectMatiere;