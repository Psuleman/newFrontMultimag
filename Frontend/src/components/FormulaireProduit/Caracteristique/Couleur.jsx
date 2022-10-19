import Select from "../TemplateFormulaire/Select"
import { Couleurs } from "../../../data/Couleurs"
import { useContext } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import { useEffect } from "react"
import Input from "../TemplateFormulaire/Input"
import InputDesabled from "../TemplateFormulaire/InputDesabled"
const Couleur = () => {
    //variable
    const {infoSku, couleurUpdate, setCouleurUpdate, setCouleurEnUpdate, couleurEnUpdate} = useContext(FormulaireContext)

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
            <InputDesabled id="inputCouleurFnr" type="text" value={infoSku.reference_couleur} label="Reference couleur" />
            <Select id="selectCouleur" label="Couleur" value={couleurUpdate} setValue={setCouleurUpdate} list={Couleurs} />  
            <Input id="inputCouleurFnr" label="Couleur En" value={couleurEnUpdate} setvalue={setCouleurEnUpdate}   />      
        </section>

    )
}
export default Couleur;