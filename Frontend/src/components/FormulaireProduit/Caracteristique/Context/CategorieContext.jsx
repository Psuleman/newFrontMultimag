import React from 'react'
import { useState } from 'react'

export const CategorieContext = React.createContext({})

const CategorieContextProvider = ({children}) => {
    //variables 
    const [categories, setCategories] = useState([])
    const [sousCategories, setSousCategories] = useState([])
    const [filtres, setFiltres] = useState([])

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