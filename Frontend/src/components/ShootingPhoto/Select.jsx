import { useState } from "react"
import { useEffect } from "react"

    const Select = ({id, label, value, setValue, list, itemValue, index }) => {
    //variable
    const [search, setSearch] = useState("")
    const [arrayList, setArrayList] = useState([])
    //fonction
    useEffect(()=>{ 
        if(list){
            //list = sortList(list)
            if(!search || search=="")
                setArrayList(list.sort())
            
            else{
                setArrayList(oldList=>{
                    let newList = []
                    let regex = new RegExp(majuscule(search), "i")
                    if(search && search != ""){
                        list.forEach(element => {
                            if(itemValue==""){
                                if(element && majuscule(element).match(regex))
                                    newList.push(element)                                
                            }
                            else{
                                let item = eval('element.' + itemValue)
                                if(majuscule(item).match(regex))
                                    newList.push(element)                                
                            }

                        });
                    }
                    return newList
                })
            }
        }


    }, [search, list])

    console.log("search ", search)

    const majuscule = (text) => {
        if(text){        
        let result = text.replace(/[àâä]/i, 'a')
        result = result.replace(/[éèêë]/i, 'e')
        result = result.replace(/[öô]/i, 'o')
        result = result.replace(/[iìîï]/i, 'i')
        result = result.replace(/[ùü]/i, 'u')
        
        return result.toUpperCase()
        }
        else{
            return text
        }
    }
    const sortList = (tab) => {
        let arraySort = new Set()

        //array unique
        tab.forEach(element => {
            element = (itemValue != "") ? eval('element.' + itemValue) : element
            arraySort.add(element)
        });

        //aray sort
        let tableau = []
        arraySort.forEach(element => {
            tableau.push(element)
        });
        tableau.sort()

        //object sort
        let tabObjet = []
        tableau.forEach(element => {
            tab.forEach(elementObject => {
                let i = (itemValue != "") ? eval('elementObject.' + itemValue) : element
                if(i == element)
                    tabObjet.push(elementObject)
            });
        });
        console.log("tabObjet", tabObjet)
        return tabObjet;
    }

    const handleClick = () => {
        let tab = [...arrayList]
        tab.push(search)
        setValue(search)
        setSearch("")
    }
    //Render
    return (
        <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <label htmlFor={id} className="form-label">{label}</label>
        <section className="list-group dropdown">
            <div className="form-select" data-bs-toggle="dropdown">{ value ? value : "Choisissez"}</div>               
            <div className="dropdown-menu section-list-select p-0">
                <div className="list-group-item dropdown-item p-0">
                <div className="input-group">
                    <span className="input-group-text rounded-0 border border-0" id="basic-addon1"><i className="fas fa-search"></i></span>
                    <input type="text" className="form-control rounded-0 border border-0" placeholder={label} aria-label={label} aria-describedby="basic-addon1" value={search} onChange={(e)=>setSearch(e.target.value)} />
                    <button className="input-group-text rounded-0 border border-0" type="button" onClick={handleClick}>Ajouter</button>
                </div>
                {/* <div className="input-group">
                    <span className="input-group-text rounded-0 border border-0" id="basic-addon1"><i className="fas fa-search"></i></span>
                    <input type="text" className="form-control rounded-0 border border-0" placeholder={label} aria-label={label} aria-describedby="basic-addon1" value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div> */}
                </div>
                <div className="height-select border border-1">
                {
                    list && arrayList.map((item, index)=>{
                        item = (itemValue != "") ? eval('item.' + itemValue) : item
                        return (
                            <div className="dropdown-item" key={label+"_index_" + index}>
                                <div className="p-1 cursor-pointer" id={label+"_"+index} key={label+"_"+index} onClick={(e) => {
                                    // setValue((oldState) => {
                                    //     let newState = [...oldState]
                                    //     newState[index].etat = e.target.value

                                    //     return newState
                                    // })
                                    //setSearch("")
                                }}>{ item }</div>
                            </div>
                        )                   
                    })   
                }
                {
                    !list &&
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

export default Select;