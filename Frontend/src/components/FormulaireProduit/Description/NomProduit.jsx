import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import Input from "../TemplateFormulaire/Input";
import translate from "deepl"
import { useEffect } from "react";

const NomProduit = () => {
    //variable
    const {nomProduitFrUpdate, setNomProduitFrUpdate, nomProduitEnUpdate, setNomProduitEnUpdate} = useContext(FormulaireContext)
    
    useEffect(()=>{
        if(nomProduitFrUpdate && nomProduitFrUpdate!=""){
            translate({
                text: nomProduitFrUpdate,
                target_lang: 'EN',
                auth_key: '85feb087-efb6-fec2-bd2b-e4f2309944c5',
                // All optional parameters available in the official documentation can be defined here as well.
              })
              .then(result => {
                if(result.data){
                    setNomProduitEnUpdate(result.data.translations[0].text)
                }
              })
              .catch(error => {
                  console.error(error)
              });
        }
    }, [nomProduitFrUpdate])
    
    //render
    return (
        <section className="row g-3">
            <Input id="inputNomProduit" label="Nom du produit" value={nomProduitFrUpdate} setValue={setNomProduitFrUpdate} />
            {
                nomProduitEnUpdate && 
                <Input id="inputNomProduitEn" label="Nom du produit En" value={nomProduitEnUpdate} setValue={setNomProduitEnUpdate} />             
            }
        </section>

    )
}
export default NomProduit;