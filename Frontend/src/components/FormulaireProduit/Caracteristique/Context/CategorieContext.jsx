import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Categories } from '../../../../data/Categories'
import { FormulaireContext } from '../../Context/FormulaireContext'
export const CategorieContext = React.createContext({})

const CategorieContextProvider = ({children}) => {
    //variables 
    const [categories, setCategories] = useState([])
    const [sousCategories, setSousCategories] = useState([])
    const [filtres, setFiltres] = useState([])
    const {categorieUpdate, sousCategorieUpdate, infoSku} = useContext(FormulaireContext)
    useEffect(()=>{
        Categories.forEach(element => {
            setCategories(categories)
            if(element.categorie == categorieUpdate)
            {
                setSousCategories(element.sous_categorie)
                element.sous_categorie.forEach(item => {
                    if(item.sous_categorie == sousCategorieUpdate){
                        setFiltres(item.filtres)
                    }
                })
            }
        })
    }, [infoSku])

    //Render
    return (
        <section className="row g-3 mt-1">
        <CategorieContext.Provider value={{
            categories: categories, setCategories: setCategories,
            sousCategories: sousCategories, setSousCategories: setSousCategories,
            filtres: filtres, setFiltres:setFiltres
        }}>
                {children}
        </CategorieContext.Provider>    
        </section>
    )
}

export default CategorieContextProvider;