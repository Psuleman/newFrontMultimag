import Select from "../TemplateFormulaire/Select"
import { Couleurs } from "../../../data/Couleurs"
import { useContext } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import { useEffect } from "react"
import Input from "../TemplateFormulaire/Input"
import InputDesabled from "../TemplateFormulaire/InputDesabled"
const Couleur = () => {
    //variable
    const {infoSku, couleurUpdate, setCouleurUpdate, setCouleurEnUpdate, couleurEnUpdate, referenceCouleurUpdate, setReferenceCouleurUpdate} = useContext(FormulaireContext)

    //fonction
    useEffect(()=>{
        if(couleurUpdate && Couleur && couleurUpdate!=""){
            Couleurs.forEach(element=>{
                if(couleurUpdate == element.couleur_ref){
                    setCouleurEnUpdate(element.couleur_ref_en)
                }
            })
        }
        else{
            Couleurs.forEach(element => {
                if(infoSku.reference_couleur!=null){
                    let regex = new RegExp(element.couleur_ref_en, "i")
                    if(infoSku.reference_couleur.match(regex)){
                        setCouleurUpdate(element.couleur_ref)
                        setCouleurEnUpdate(element.couleur_ref_en)
                    }
                }
            });
        }
    }, [infoSku, couleurUpdate])
    //render
    return (
        <section className="row g-3 mt-1">
            {/* <InputDesabled idInput="inputCouleurFnr" typeInput="text" valeur={infoSku.reference_couleur} labelInput="Reference couleur" /> */}
            <Input label={"Reference couleur"} id={"inputCouleurFnr"} value={referenceCouleurUpdate} setValue={setReferenceCouleurUpdate} />
            <Select id="selectCouleur" label="Couleur" value={couleurUpdate} setValue={setCouleurUpdate} list={Couleurs} itemValue="couleur_ref" />  
            <Input id="inputCouleurFnr" label="Couleur En" value={couleurEnUpdate} setValue={setCouleurEnUpdate}   />      
        </section>

    )
}
export default Couleur;