import React from 'react'
import { useState } from 'react'

export const ListeContext = React.createContext({})

const ListeContextProvider = ({children}) => {
    //variable
    const [categorieFiltre, setCategorieFiltre] = useState()
    const [universFiltre, setUniversFiltre] = useState()
    const [marqueFiltre, setMarqueFiltre] = useState()
    const [tagFiltre, setTagFiltre] = useState()
    const [categorieFiltreTab, setCategorieFiltreTab] = useState()
    const [universFiltreTab, setUniversFiltreTab] = useState()
    const [marqueFiltreTab, setMarqueFiltreTab] = useState()
    const [tagFiltreTab, setTagFiltreTab] = useState()
    const [skus, setSkus] = useState([])


    //fonction
    const request = (url) => {
        if(localStorage.getItem('user_multimag')){
            let token = JSON.parse(localStorage.getItem('user_multimag')).token
            //const url = "http://212.129.3.31:8080/api/produits" 
            //const url = "http://localhost:8001/api/produits" 
            const header = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    //Authorization : `Bearer ${token}` 			
                },
                cache: "default",
            }

            fetch(url, header)
            .then(function(res) {
                //console.log(res.json())
                return res.json();
            })
            .then(function(value) {
                console.log(value)
                if(value.length > 0){
                    setSkus(value)
                    let tabCategory = []
                    let tabUnivers = []
                    let tabMarque = []
                    let tabTag = []
                    for(let item in value)
                    {
                        tabCategory.push(value[item].categorie)
                        tabUnivers.push(value[item].univers)
                        tabMarque.push(value[item].marqueProduit)
                        tabTag.push(value[item].tag!="" ? value[item].tag : "Non tagué")
                    }
                    tabCategory = [... new Set(tabCategory)]
                    tabUnivers = [... new Set(tabUnivers)]
                    tabMarque = [... new Set(tabMarque)]
                    tabTag = [... new Set(tabTag)]
                    setCategorieFiltreTab(tabCategory)
                    setUniversFiltreTab(tabUnivers)
                    setMarqueFiltreTab(tabMarque)
                    setTagFiltreTab(tabTag)
                }
                else{
                    //console.log("ko")
                }
            })
            .catch(function(err) {
                //(err)
            })   
        }

        else{
            navigate('/')
        }
    }
    //render
    return(
        <ListeContext.Provider value={{
            categorieFiltre: categorieFiltre, setCategorieFiltre: setCategorieFiltre,
            universFiltre: universFiltre, setUniversFiltre: setUniversFiltre,
            marqueFiltre: marqueFiltre, setMarqueFiltre: setMarqueFiltre,
            tagFiltre: tagFiltre, setTagFiltre: setTagFiltre,
            categorieFiltreTab: categorieFiltreTab, setCategorieFiltreTab: setCategorieFiltreTab,
            universFiltreTab: universFiltreTab, setUniversFiltreTab: setUniversFiltreTab,
            marqueFiltreTab: marqueFiltreTab, setMarqueFiltreTab: setMarqueFiltreTab,
            tagFiltreTab: tagFiltreTab, setTagFiltreTab: setTagFiltreTab,
            request: request,
            skus: skus, setSkus: setSkus,
        }}>
            {children}
        </ListeContext.Provider>
    )
}

export default ListeContextProvider;
