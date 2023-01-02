import { useEffect } from "react";
import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import Textarea from "../TemplateFormulaire/Textarea";
import translate from "deepl"

const DescriptionProduit = () => {
    //variable
    const {descriptionFrUpdate, setDescriptionFrUpdate, descriptionEnUpdate, setDescriptionEnUpdate, infoSku} = useContext(FormulaireContext)

    useEffect(()=>{
        if(descriptionFrUpdate && descriptionFrUpdate!=""){
            translate({
                text: descriptionFrUpdate,
                target_lang: 'EN',
                auth_key: '85feb087-efb6-fec2-bd2b-e4f2309944c5',
                // All optional parameters available in the official documentation can be defined here as well.
              })
              .then(result => {
                if(result.data){
                    setDescriptionEnUpdate(result.data.translations[0].text)
                }
              })
              .catch(error => {
                  console.error(error)
              });
        }
    }, [descriptionFrUpdate])
    //render
    return (
        <section className="row g-3 mt-1">
            <Textarea id="inputDescriptionFr" label="Description du produit" value={descriptionFrUpdate} setValue={setDescriptionFrUpdate} />
            {
                (descriptionEnUpdate && descriptionEnUpdate!="") &&
                <Textarea id="inputDescriptionEn" label="Description du produit EN" value={descriptionEnUpdate} setValue={setDescriptionEnUpdate} />
            }
        </section>
    )
}

export default DescriptionProduit;
