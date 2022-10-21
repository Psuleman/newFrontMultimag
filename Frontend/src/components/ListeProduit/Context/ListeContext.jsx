import React from 'react'
import { useEffect, useState } from 'react'

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
    const [pageCurrent, setPageCurrent] = useState()
    const [totalSkus, setTotalSkus] = useState()
    const [urlListTotal, setUrlListTotal] = useState()
    const [produitExist, setProduitExist] = useState(true)
    //fonction
    useEffect(()=>{
        let url = "http://localhost:8001/api/produits"
        let urlRequestTotal = ""
        //page Current
        if(!pageCurrent)
            setPageCurrent(1)

        //url
        if(urlListTotal)
            urlRequestTotal=urlListTotal
        
        urlRequestTotal = url + "?pagination=false"

        const header = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                //Authorization : `Bearer ${token}` 			
            },
            cache: "default",
        }
        fetch(urlRequestTotal, header)
        .then(function(res) {
            //console.log(res.json())
            return res.json();
        })
        .then(function(value) {
            if(value.length > 0){
                setTotalSkus(value.length)
                let tabCategory = []
                let tabUnivers = []
                let tabMarque = []
                let tabTag = []
                for(let item in value)
                {
                    tabCategory.push(value[item].categorie)
                    tabUnivers.push(value[item].univers)
                    tabMarque.push(value[item].marqueProduit)
                    tabTag.push(value[item].code_tag ? value[item].code_tag : 0)
                }
                tabCategory = [... new Set(tabCategory)]
                tabUnivers = [... new Set(tabUnivers)]
                tabMarque = [... new Set(tabMarque)]
                tabTag = [... new Set(tabTag)]
                let arrayTag = [
                    {code_tag: 0, tag: "Non tagué"},
                    {code_tag: 1, tag: "Détagué"},
                    {code_tag: 2, tag: "Internet"},
                    {code_tag: 3, tag: "Leclaireur"},
                ]
                let tabTemporaire = []
                tabTag.forEach(element => {
                    arrayTag.forEach(item=>{
                        if(element == item.code_tag)
                        tabTemporaire.push(item)
                    })
                });
                setCategorieFiltreTab(tabCategory)
                setUniversFiltreTab(tabUnivers)
                setMarqueFiltreTab(tabMarque)
                setTagFiltreTab(tabTemporaire)
            }         
            
        })
        .catch(function(err) {
            //(err)
        })

        let page = pageCurrent ? pageCurrent : 1
        url += "?pagination=true&page=" + page

        //les filtre: categorie, univers, tag, 
        if(categorieFiltre)
            url += "&filtre.sousCategorieRef.categorie_ref.categorie_ref=" + categorieFiltre
        
        if(universFiltre)
            url += "&univers=" + universFiltre

        if(marqueFiltre)
            url += "&marque.marque=" + marqueFiltre
        
        if(tagFiltre)
            url += "&code_tag=" + tagFiltre

        
        setSkus([])
        request(url)
        
    }, [urlListTotal, categorieFiltre, universFiltre, marqueFiltre, tagFiltre])

    if(totalSkus)
        console.log('totalsku', totalSkus)

    const request = (url) => {
        if(localStorage.getItem('user_multimag')){
            let token = JSON.parse(localStorage.getItem('user_multimag')).token
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
            pageCurrent: pageCurrent, setPageCurrent: setPageCurrent,
            totalSkus: totalSkus, setTotalSkus: setTotalSkus,
            urlListTotal: urlListTotal, setUrlListTotal: setUrlListTotal,
        }}>
            {children}
        </ListeContext.Provider>
    )
}

export default ListeContextProvider;
