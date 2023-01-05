import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllFiltres, getAllProduit } from '../../../services/produit.service'
import { Univers } from '../../../data/Univers'
import { getCategories } from '../../../services/categorie.service'
import { getMarques } from '../../../services/marques.services'
import Moment from 'moment'

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
    const [saisonFiltre, setSaisonFiltre] = useState()
    const [categorieFiltreTab, setCategorieFiltreTab] = useState()
    const [universFiltreTab, setUniversFiltreTab] = useState()
    const [marqueFiltreTab, setMarqueFiltreTab] = useState()
    const [tagFiltreTab, setTagFiltreTab] = useState()
    const [saisonFiltreTab, setSaisonFiltreTab] = useState()

    const [validateSearchSkus, setValidateSearchSkus] = useState(false)
    const [serviceUser, setServiceUser] = useState()

    const {liste} = useParams()

    let navigate = useNavigate()

    //fonction
    useEffect(()=>{
        let tabUnivers = []
        Univers.forEach(element => {
            tabUnivers.push(element.univers_ref)
        });
        setUniversFiltreTab(tabUnivers)

        let arrayTag = [
            {code_tag: 0, tag: "Non tagué"},
            {code_tag: 1, tag: "Détagué"},
            {code_tag: 2, tag: "Internet"},
            {code_tag: 3, tag: "Leclaireur"},
        ]
        setTagFiltreTab(arrayTag)

        let tabCategory = []
        const promiseCategorie = Promise.resolve(getCategories())

        promiseCategorie.then((value)=>{

            for(let item in value) {
                if(item == "hydra:member"){
                    value[item].forEach(element => {
                        tabCategory.push(element.categorieRef)
                    });
                }
                setCategorieFiltreTab(tabCategory)
            }
        })


        let anneeYY = Moment().format("YY")
        let anneeYYYY = Moment().format("YYYY")
        let tabSaison = []
        for(let y=anneeYYYY; y>1985; y--){
            tabSaison.push("SS"+anneeYY)
            tabSaison.push("FW"+anneeYY);
            anneeYYYY = Moment(anneeYYYY, "YYYY").subtract(1, "years").format("YYYY");
            anneeYY = Moment(anneeYY, "YY").subtract(1, "year").format("YY");
        }            
        setSaisonFiltreTab(tabSaison)

        



        // let tabMarque = []
        // const promiseMarque = Promise.resolve(getMarques())

        // promiseMarque.then((value)=>{
        //     for(let item in value) {
        //         if(item == "hydra:member"){
        //             // console.log(value[item])
        //         }
        //     }
        // })

        /***
         * 
         */
        setTotalSkus()
        let service = ""
        if(localStorage.getItem("user_multimag")){
            let utilisateur = JSON.parse(localStorage.getItem("user_multimag"))
            service = (utilisateur.service == "e-shop & référencement" || utilisateur.service == "IT") ? "admin" : "user"
            // service = (utilisateur.service == "e-shop" || utilisateur.service == "IT") ? "user" : "admin"
            setServiceUser(service)
        }

        if((service=="user") || (liste != "listes" && liste != "referencement" && liste != "modification" &&  liste != "export" &&  liste != "tableau-de-bord")){
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
                filtre += "&nom_fournisseur=" + marqueFiltre
            
            if(tagFiltre)
                filtre += "&code_tag=" + tagFiltre

            if(saisonFiltre)
                filtre += "&saison=" + saisonFiltre

                
        }

        let oldUrl = localStorage.getItem("filtre_multimag") ? localStorage.getItem("filtre_multimag") : ""
        oldUrl += ""
        if(filtre!= localStorage.getItem("filtre_multimag")){
            pageActuelle = 1
            //// // console.log(localStorage.getItem("filtre_multimag") + " != " + filtre)
        }

        localStorage.setItem("filtre_multimag", filtre)

        
        
        const promise = Promise.resolve(getAllProduit(liste, filtre, pageActuelle))

        promise.then((value) => {
            // console.log("value ", value)
            if(value){ 
                let totalListe = 0    
                for(let item in value){
                    let valeur = value[item]
                    if(item == "hydra:member"){
                        //// // console.log("value", value)
                        setSkus(valeur)
                        if(!categorieFiltre && !universFiltre && !marqueFiltre && !tagFiltre && !searchSkus){

                            //let tabCategory = []
                            //let tabUnivers = []
                            let tabMarque = []
                            //let tabTag = []
                            for(let key in valeur)
                            {
                            //     //tabCategory.push(valeur[key].categorie)
                            //     //tabUnivers.push(valeur[key].univers)
                                let marqueProduit = valeur[key].marque ? valeur[key].marque.marque : valeur[key].nom_fournisseur
                                tabMarque.push(marqueProduit)
                            //     //tabTag.push(valeur[key].code_tag ? valeur[key].code_tag : 0)
                            }
                            //tabCategory = [... new Set(tabCategory)]
                            //tabUnivers = [... new Set(tabUnivers)]
                            tabMarque = [... new Set(tabMarque)]
                            // tabTag = [... new Set(tabTag)]
    
    
                            // let arrayTag = [
                            //     {code_tag: 0, tag: "Non tagué"},
                            //     {code_tag: 1, tag: "Détagué"},
                            //     {code_tag: 2, tag: "Internet"},
                            //     {code_tag: 3, tag: "Leclaireur"},
                            // ]
                            // let tabTemporaire = []
                            // tabTag.forEach(element => {
                            //     arrayTag.forEach(item=>{
                            //         if(element == item.code_tag)
                            //         tabTemporaire.push(item)
                            //     })
                            // });
                            //setCategorieFiltreTab(tabCategory)
                            //setUniversFiltreTab(tabUnivers)
                            setMarqueFiltreTab(tabMarque.sort())
                            //setTagFiltreTab(tabTemporaire)
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

                        //// // console.log("pagination")
                        for(let itemPage in valeur){
                            //// // console.log("value pagination ", itemPage, " : ", valeur[itemPage])
                            //let page = valeur[itemPage].replace("/api/produits?page=", "")//erreur
                            let page = valeur[itemPage].split("page=")//erreur

                            //// // console.log(valeur[itemPage].split("page="))
                            page = parseInt(page[1])


                            //// // console.log("page ", page)
                            // if(itemPage == "hydra:first"){
                            //     let pageActuelles = currentPage>1 ? currentPage : page
                            //     setCurrentPage(pageActuelles)
                            // }
                            if(itemPage == "hydra:last"){
                                setLastPage(page)
                            }                            
                            if(itemPage == "hydra:next"){
                                setNextPage(page)
                                let pageActuelles = page == 1 ? 1 : (page-1)
                                setCurrentPage(pageActuelles)
                            } 

                            let lastpageListe = totalListe/10
                            lastpageListe = parseInt(lastpageListe)

                            // // // console.log("lastpageListe", lastpageListe)
                            // // // console.log("exact value last page", totalListe/10)
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

                /**
         * FILTRE
         */

                // let promiseFiltre = Promise.resolve(getAllFiltres())

                // promiseFiltre.then((value)=>{
                //     if(!categorieFiltreTab && !universFiltreTab && !marqueFiltreTab && !tagFiltreTab && !saisonFiltreTab){
                //         if(value){ 
                //             for(let item in value){
                //                 let valeur = value[item]
                //                 if(item == "hydra:member"){
                //                     let tabCategory = []
                //                     let tabUnivers = []
                //                     let tabMarque = []
                //                     let tabTag = []
                //                     let tabSaison = []
        
                //                     // console.log("valeur ", valeur)
        
                //                     for(let itemValeur in valeur){
                //                         tabCategory.push(valeur[itemValeur].categorie)
                //                         tabUnivers.push(valeur[itemValeur].univers)
                //                         let marqueProduit = valeur[itemValeur].marque ? valeur[itemValeur].marque.marque : valeur[itemValeur].nom_fournisseur
                //                         tabMarque.push(marqueProduit)
                //                         tabTag.push(valeur[itemValeur].code_tag ? valeur[itemValeur].code_tag : 0)
                //                         tabSaison.push(valeur[itemValeur].saison)
                //                     }
        
                //                     tabCategory = [... new Set(tabCategory)]
                //                     tabUnivers = [... new Set(tabUnivers)]
                //                     tabMarque = [... new Set(tabMarque)]
                //                     tabTag = [... new Set(tabTag)]
                //                     tabSaison = [... new Set(tabSaison)]
        
                //                     let arrayTag = [
                //                         {code_tag: 0, tag: "Non tagué"},
                //                         {code_tag: 1, tag: "Détagué"},
                //                         {code_tag: 2, tag: "Internet"},
                //                         {code_tag: 3, tag: "Leclaireur"},
                //                     ]
                //                     let tabTemporaire = []
                //                     tabTag.forEach(element => {
                //                         arrayTag.forEach(item=>{
                //                             if(element == item.code_tag)
                //                             tabTemporaire.push(item)
                //                         })
                //                     });
        
                //                     setCategorieFiltreTab(tabCategory)
                //                     setUniversFiltreTab(tabUnivers)
                //                     setMarqueFiltreTab(tabMarque)
                //                     setTagFiltreTab(tabTemporaire)
                //                     setSaisonFiltreTab(tabSaison.reverse())
                //                 }
                //             }
                //         }
                //     }
                // })
        
    }, [categorieFiltre, universFiltre, marqueFiltre, tagFiltre, saisonFiltre, validateSearchSkus, currentPage, liste])


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
            saisonFiltre: saisonFiltre, setSaisonFiltre: setSaisonFiltre,
            saisonFiltreTab: saisonFiltreTab, setSaisonFiltreTab: setSaisonFiltreTab,

            searchSkus: searchSkus, setSearchSkus: setSearchSkus,
            validateSearchSkus: validateSearchSkus, setValidateSearchSkus: setValidateSearchSkus,

            currentPage: currentPage, setCurrentPage: setCurrentPage,
            nextPage: nextPage, setNextPage: setNextPage,
            lastPage: lastPage, setLastPage: setLastPage,
            serviceUser: serviceUser,
        }}>
            {children}
        </ListeContext.Provider>
    )
}

export default ListeContextProvider;