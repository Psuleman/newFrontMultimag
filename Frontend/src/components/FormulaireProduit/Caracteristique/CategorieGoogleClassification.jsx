import { useEffect, useState } from "react"
import { useContext } from "react"
import { GoogleCode } from "../../../data/ClassificationGoogle"
import { FormulaireContext } from "../Context/FormulaireContext"
import Input from "../TemplateFormulaire/Input"

const CategorieGoogleClassification = () => {
    const [tabCategorieGoogle, setTabCategorieGoogle] = useState([])
    const {categorieGoogleUpdate, setCategorieGoogleUpdate, filtreEnUpdate, categorieEnUpdate} = useContext(FormulaireContext)

    useEffect(()=>{
        let categorieGoogleTemp = ""
        let sousCategorieGoogleTemp = ""
        let filtre = ""
        if(filtreEnUpdate && categorieEnUpdate){
            let tab = [...GoogleCode]

            if(tab){
                tab.forEach(element => {

                    let tabCategorieMultimag = categorieEnUpdate.split(' ')

                    tabCategorieMultimag.forEach(elementCategorieMultimag => {
                        let regex = new RegExp(elementCategorieMultimag.toLowerCase(), "i")

                        if(elementCategorieMultimag != "&" ){

                            let categorieGooglefind = element.categorie.split(">")
                            // console.log("categorieGooglefind ", categorieGooglefind)
                            if(elementCategorieMultimag && categorieGooglefind && categorieGooglefind[1] && categorieGooglefind[1].toLowerCase().match(regex)){
                                // console.log("comparaison ", element.categorie , " ", elementCategorieMultimag)
                                setTabCategorieGoogle(oldState => {
                                    let newState = [...oldState]
                                    newState.push(element.categorie)

                                    return newState
                                })
                            }
                        }
                    });
                    

                });                
            }


        }
    }, [filtreEnUpdate])
    console.log(tabCategorieGoogle)
    //render
    return (
        <section className="row g-3 mt-1">
            <Input type="text" id={"categorie_google"} label={"Catégorie Google"} value={categorieGoogleUpdate} setValue={setCategorieGoogleUpdate} />
        </section>
    )
}

export default CategorieGoogleClassification