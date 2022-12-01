import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllProduit } from '../../../services/produit.service'

export const ListeContext = React.createContext({})

const ListeContextProvider = ({children}) => {
    const [skus, setSkus] = useState([])
    const [totalSkus, setTotalSkus] = useState()
    const [nextPage, setNextPage] = useState()
    const [lastPage, setLastPage] = useState()
    const [currentPage, setCurrentPage] = useState()
    const [searchSkus, setSearchSkus] = useState("")
    const [categorieFiltre, setCategorieFiltre] = useState()
    const [universFiltre, setUniversFiltre] = useState()
    const [marqueFiltre, setMarqueFiltre] = useState()
    const [tagFiltre, setTagFiltre] = useState()
    const [categorieFiltreTab, setCategorieFiltreTab] = useState()
    const [universFiltreTab, setUniversFiltreTab] = useState()
    const [marqueFiltreTab, setMarqueFiltreTab] = useState()
    const [tagFiltreTab, setTagFiltreTab] = useState()
    const [validateSearchSkus, setValidateSearchSkus] = useState(false)

    const {liste} = useParams()

    let navigate = useNavigate()

    //fonction
    useEffect(()=>{
        setTotalSkus()

        if(liste != "listes" && liste != "referencement" && liste != "modification" &&  liste != "export"){
            navigate(`/produits/listes`)
        }
        //les filtre: categorie, univers, tag,
        let filtre = "" 
        let pageActuelle = currentPage ? currentPage : 1

        if(searchSkus!=""){
            filtre = "&sku=" + parseInt(searchSkus)
            pageActuelle = 1
        }
        else{
            filtre = ""
            setSearchSkus("")
            if(categorieFiltre)
                filtre += "&filtre.sous_categorie_ref.categorie_ref.categorie_ref=" + categorieFiltre
            
            if(universFiltre)
                filtre += "&univers=" + universFiltre

            if(marqueFiltre)
                filtre += "&marque.marque=" + marqueFiltre
            
            if(tagFiltre)
                filtre += "&code_tag=" + tagFiltre
        }


        
        
        const promise = Promise.resolve(getAllProduit(liste, filtre, pageActuelle))

        promise.then((value) => {
            console.log(value)
            if(value){ 
                let totalListe = 0    
                for(let item in value){
                    let valeur = value[item]
                    if(item == "hydra:member"){
                        setSkus(valeur)
                        if(!categorieFiltre && !universFiltre && !marqueFiltre && !tagFiltre && !searchSkus){

                            let tabCategory = []
                            let tabUnivers = []
                            let tabMarque = []
                            let tabTag = []
                            for(let key in valeur)
                            {
                                tabCategory.push(valeur[key].categorie)
                                tabUnivers.push(valeur[key].univers)
                                let marqueProduit = valeur[key].marque ? valeur[key].marque.marque : valeur[key].nom_fournisseur
                                tabMarque.push(marqueProduit)
                                tabTag.push(valeur[key].code_tag ? valeur[key].code_tag : 0)
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
                    }
                    
                    if(item == "hydra:totalItems"){
                        setTotalSkus(valeur)
                        totalListe = valeur
                    }
                    if(item == "hydra:view")
                    {
                        /**
                         * Pagination
                         */
                        for(let itemPage in valeur){
                            let page = valeur[itemPage].replace("/api/produits?page=", "")
                            page = parseInt(page)

                            if(itemPage == "hydra:first"){
                                let pageActuelle = currentPage>1 ? currentPage : 1
                                setCurrentPage(pageActuelle)
                            }
                            if(itemPage == "hydra:last"){
                                setLastPage(page)
                            }                            
                            if(itemPage == "hydra:next"){
                                setNextPage(page)
                            } 

                            let lastpageListe = totalListe/10
                            lastpageListe = parseInt(lastpageListe)

                            console.log("lastpageListe", lastpageListe)
                            console.log("exact value last page", totalListe/10)
                            lastpageListe = ((totalListe/10)!=lastpageListe) ? (lastpageListe+1) : lastpageListe
                            
                            let lastpageListeInt = lastpageListe<1 ? 1 : parseInt(lastpageListe)

                            if(lastpageListe != lastPage){
                                setLastPage(lastpageListe)
                            }
                            // if(itemPage = "@type=hydra:PartialCollectionView")){
                            //     setCurrentPage(1)
                            //     setNextPage(2)
                            //     let lastpageListe = totalListe/10
                            //     lastpageListe = lastpageListe<1 ? 1 : lastpageListe
                            //     setLastPage(lastpageListe)
                            // }                     
                        }
                    }
                }       
                
            }
        })
    }, [categorieFiltre, universFiltre, marqueFiltre, tagFiltre, validateSearchSkus, currentPage, liste])
    // render
    return (
        <ListeContext.Provider value={{
            liste: liste,
            skus: skus, setSkus: setSkus,
            totalSkus: totalSkus, setTotalSkus: setTotalSkus,
            categorieFiltre: categorieFiltre, setCategorieFiltre: setCategorieFiltre,
            categorieFiltreTab: categorieFiltreTab, setCategorieFiltreTab: setCategorieFiltreTab,
            universFiltre: universFiltre, setUniversFiltre: setUniversFiltre,
            universFiltreTab: universFiltreTab, setUniversFiltreTab: setUniversFiltreTab,
            marqueFiltre: marqueFiltre, setMarqueFiltre: setMarqueFiltre,
            marqueFiltreTab: marqueFiltreTab, setMarqueFiltreTab: setMarqueFiltreTab,
            tagFiltre: tagFiltre, setTagFiltre: setTagFiltre,
            tagFiltreTab: tagFiltreTab, setTagFiltreTab: setTagFiltreTab,
            searchSkus: searchSkus, setSearchSkus: setSearchSkus,
            validateSearchSkus: validateSearchSkus, setValidateSearchSkus: setValidateSearchSkus,

            currentPage: currentPage, setCurrentPage: setCurrentPage,
            nextPage: nextPage, setNextPage: setNextPage,
            lastPage: lastPage, setLastPage: setLastPage,
            
        }}>
            {children}
        </ListeContext.Provider>
    )
}

export default ListeContextProvider;