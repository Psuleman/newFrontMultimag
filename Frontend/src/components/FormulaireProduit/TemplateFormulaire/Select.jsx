import { useState } from "react"
import { useEffect } from "react"

    const Select = ({id, label, value, setValue, list, itemValue }) => {
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
                    let regex = new RegExp(search, "i")
                    if(search && search != ""){
                        oldList.forEach(element => {
                            let item = (itemValue != "") ? eval('element.' + itemValue) : element
                            if(item.match(regex))
                                newList.push(element)
                        });
                    }
                    return newList
                })
                
            }
        }


    }, [search, list])

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
    //Render
    return (
    <div className="col-md-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <section className="list-group dropdown">
            <div className="form-select" data-bs-toggle="dropdown">{ value ? value : "Choisissez"}</div>               
            <div className="dropdown-menu section-list-select p-0">
                <div className="list-group-item dropdown-item p-0">
                <div className="input-group">
                    <span className="input-group-text rounded-0 border border-0" id="basic-addon1"><i className="fas fa-search"></i></span>
                    <input type="text" className="form-control rounded-0 border border-0" placeholder={label} aria-label={label} aria-describedby="basic-addon1" value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                </div>
                <div className="height-select border border-1">
                {
                    list && arrayList.map((item, index)=>{
                        item = (itemValue != "") ? eval('item.' + itemValue) : item
                        return (
                            <div className="dropdown-item" key={label+"_index_" + index}>
                                <div className="p-1 cursor-pointer" id={label+"_"+index} key={label+"_"+index} onClick={() => {
                                    setValue(item)
                                    setSearch("")
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