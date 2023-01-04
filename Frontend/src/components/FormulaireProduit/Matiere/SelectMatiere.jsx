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
                    let recherche = splitText(search, '*', ``)
                    recherche = splitText(recherche, '(', ``)
                    recherche = splitText(recherche, ')', ``)
                    recherche = splitText(recherche, '?', ``)
                    recherche = splitText(recherche, '+', ``)


                    console.log("recherche", recherche)
                    let regex = new RegExp(recherche.toUpperCase(), "g")
                    if(search && search != ""){
                        Matieres.forEach(element => {
                            let item = eval('element.matiere')
                            item = item.toUpperCase()
                            if(item.match(regex))
                                newList.push(element)
                        });
                    }
                    return newList
                })
                
            }
        }


    }, [search, Matieres])

    const handleClick = () => {
        let tab = [...arrayList]
        tab.push(search)

        setMatiereUpdate(oldState=>{
            let newState = [...oldState]
            newState[indexMatiere].matiere.matiere = search
            return newState
        })
        setSearch("")
    }

    const splitText = (texte, str, replace) => {

        // let result = ""
        // for (let item in texte) {
        //     if(texte[item]==`\"`){
        //         result += `\"\"`
        //     }
        //     else{
        //         result += texte[item]
        //     }
        // }

        // return result
        let result = ""
        for (let item in texte) {
            if(texte[item]==`${str}`){
                result += `${replace}`
            }
            else{
                result += texte[item]
            }
        }

        return result

    }

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

                    <button className="input-group-text rounded-0 border border-0" type="button" onClick={handleClick}>Ajouter</button>

                </div>
                </div>
                <div className="height-select border border-1">
                {
                    Matieres && arrayList.map((item, index)=>{
                        item = eval('item.matiere')
                        return (
                            <div className="dropdown-item" key={"matiere_"+ index}>
                                <div className="p-1 cursor-pointer" id={label+"_"+index} key={label+"_"+index} onClick={() => {
                                    setMatiereUpdate(oldState=>{
                                        let newState = [...oldState]
                                        newState[indexMatiere].matiere.matiere = item
                                        return newState
                                    })
                                }}>{ item }</div>
                            </div>
                        )                   
                    })   
                }
                {
                    !Matieres &&
                    <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
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