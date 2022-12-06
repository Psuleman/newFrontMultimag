import { useContext, useEffect, useState } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import Textarea from "../TemplateFormulaire/Textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Tags = () => {
    const [generate, setGenerate] = useState(false)
    const {universUpdate, universEnUpdate, couleurUpdate, couleurEnUpdate, filtreUpdate, filtreEnUpdate, sousCategorieUpdate, sousCategorieEnUpdate, marqueUpdate, infoSku, categorieUpdate, categorieEnUpdate, tagsReferencementUpdate, setTagsReferencementUpdate} = useContext(FormulaireContext)

    const [tags, setTags] = useState()

    useEffect(()=>{
        let universUpdateTemp = universUpdate ? universUpdate : ""
        let universEnUpdateTemp = universEnUpdate ? universEnUpdate : ""
        let couleurUpdateTemp = couleurUpdate ? couleurUpdate : ""
        let couleurEnUpdateTemp = couleurEnUpdate ? couleurEnUpdate : ""
        let filtreUpdateTemp = filtreUpdate ? filtreUpdate : ""
        let filtreEnUpdateTemp = filtreEnUpdate ? filtreEnUpdate : ""
        let sousCategorieUpdateTemp = sousCategorieUpdate ? sousCategorieUpdate : ""
        let sousCategorieEnUpdateTemp = sousCategorieEnUpdate ? sousCategorieEnUpdate : ""
        let marqueUpdateTemp = marqueUpdate ? marqueUpdate : ""
        let categorieUpdateTemp = categorieUpdate ? categorieUpdate : ""
        let categorieEnUpdateTemp = categorieEnUpdate ? categorieEnUpdate : ""
        let reference_fournisseurTemp = infoSku.reference_fournisseur ? infoSku.reference_fournisseur : ""
        let saisonTemp  = infoSku.saison ? infoSku.saison : ""

        let tags_text = universUpdateTemp + ',' + universEnUpdateTemp + ',Couleur_'+couleurUpdateTemp + ',Color_'+ couleurEnUpdateTemp+','+filtreUpdateTemp+','+filtreEnUpdateTemp+','+sousCategorieUpdateTemp+','+sousCategorieEnUpdateTemp+',Catégorie_'+sousCategorieUpdateTemp+',Category_'+sousCategorieEnUpdateTemp+',Créateur_'+marqueUpdateTemp+',Designer_'+marqueUpdateTemp+','+reference_fournisseurTemp+','+categorieUpdateTemp+','+categorieEnUpdateTemp+','+saisonTemp

        setTags(tags_text)
        if(generate==true){
            setTagsReferencementUpdate(tags_text)
        }

    }, [universUpdate, universEnUpdate, couleurUpdate, couleurEnUpdate, filtreUpdate, filtreEnUpdate, sousCategorieUpdate, sousCategorieEnUpdate, marqueUpdate, infoSku, categorieUpdate, categorieEnUpdate, tagsReferencementUpdate])
    //render
    return (
    <section className="row g-3 mt-3">
        
        <div className="col-md-3">
        <label htmlFor="tagrefTextarea" className="form-label">Tags (séparateur: virgule) <button type="button" class="btn btn-light" onClick={()=>{
            setTagsReferencementUpdate(tags)
            setGenerate(true)
            }}>Générer</button></label>

        <textarea className="form-control" id="tagrefTextarea" rows="3" value={tagsReferencementUpdate} onChange={(e)=>{
            setTagsReferencementUpdate(e.target.value)
            setGenerate(false)
            setMessage(true)
            }} />

        { generate && <div><small><FontAwesomeIcon icon={faTriangleExclamation} /> Génération automatique des données désactiver. Vous avez apporter une modification.</small></div>}
        <div><small style={{color: "blue",}}><FontAwesomeIcon icon={faCircleInfo} /> Vous pouvez cliquer sur <em>Générer</em> pour regénérer.</small></div>
    </div>
    </section>
    )
}

export default Tags;