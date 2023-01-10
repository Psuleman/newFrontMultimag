import { useState } from "react"
import { useEffect } from "react"

    const Select = ({id, label, value, setValue, list, index }) => {
    //variable
    const [search, setSearch] = useState("")
    const [arrayList, setArrayList] = useState([])
    const [listInitial, setListInitial] = useState([])
    //fonction
    useEffect(()=>{ 
        if((!listInitial || listInitial.length==0) && list){
            setListInitial(list)
            setArrayList(list.sort())
        }
        if(listInitial){
            //list = sortList(list)
            if(!search || search=="")
                setArrayList(listInitial.sort())
            
            else{
                setArrayList(oldList=>{
                    let newList = []
                    let regex = new RegExp(majuscule(search), "i")
                    if(search && search != "" && listInitial && listInitial.length > 0){
                        console.log(listInitial)
                        listInitial.forEach(element => {
                            if(element && majuscule(element).match(regex))
                                    newList.push(element) 

                        });
                    }
                    return newList
                })
            }
        }


    }, [search, listInitial])

    // console.log("arrayList", arrayList)

    // console.log("search ", search)

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
                tabObjet.push(elementObject)
            });
        });
        // console.log("tabObjet", tabObjet)
        return tabObjet;
    }

    const handleClick = () => {
        //let tab = [...list]
        //tab.push(search)
        //setArrayList(tab)

        setValue((oldState)=>{
            let newState = [...oldState]
            newState[index].etat = search
            return newState
        })
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
                    listInitial && arrayList.map((item, indexliste)=>{
                        
                        return (
                            <div className="dropdown-item" key={label+"_index_" + indexliste}>
                                <div className="p-1 cursor-pointer" id={label+"_"+indexliste} key={label+"_"+indexliste} onClick={(e) => {
                                    setValue((oldState)=>{
                                        let newState = [...oldState]
                                        newState[index].etat = item
                                        return newState
                                    })
                                    setSearch("")
                                }}>{ item }</div>
                            </div>
                        )                   
                    })   
                }
                {
                    !listInitial &&
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