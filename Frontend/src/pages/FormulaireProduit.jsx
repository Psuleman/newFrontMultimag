import { Link, useNavigate, useParams } from "react-router-dom";
import Template from "../components/Layout/Template"
import Recapitulatif from "../components/FormulaireProduit/Recapitulatif";
import Caracteristique from "../components/FormulaireProduit/Caracteristique";
import Description from "../components/FormulaireProduit/Description";
import Information from "../components/FormulaireProduit/Information";
import Matiere from "../components/FormulaireProduit/Matiere";
import "../assets/scss/formulaireProduit.scss"
import { useState, useEffect } from "react";
import Taille from "../components/FormulaireProduit/Taille";
import Tarifs from "../components/FormulaireProduit/Tarifs";
import {FormulaireContext} from "../components/FormulaireProduit/Context/FormulaireContext"
import Moment from 'moment';
import {setProduit} from "../services/produit.service"

const FormulaireProduit = () => {
    //variable
    let navigate = useNavigate()
    let { skuProduit } = useParams()
    const [page, setPage] = useState()
    const [sku, setSku] = useState(skuProduit)
    const [infoSku, setInfoSku] = useState([])
    //données à partager
    const [universUpdate, setUniversUpdate] = useState()
    const [universEnUpdate, setUniversEnUpdate] = useState()
    const [marqueUpdate, setMarqueUpdate] = useState()
    const [paysOrigineUpdate, setPaysOrigineUpdate] = useState()


    const [categorieUpdate, setCategorieUpdate] = useState()
	const [categorieEnUpdate, setCategorieEnUpdate] = useState()
    const [sousCategorieUpdate, setSousCategorieUpdate] = useState()
	const [sousCategorieEnUpdate, setSousCategorieEnUpdate] = useState()
	const [filtreUpdate, setFiltreUpdate] = useState()
	const [filtreEnUpdate, setFiltreEnUpdate] = useState()
    const [couleurUpdate, setCouleurUpdate] = useState()
	const [couleurEnUpdate, setCouleurEnUpdate] = useState()
	const [coupeUpdate, setCoupeUpdate] = useState()
	const [coupeEnUpdate, setCoupeEnUpdate] = useState()
	const [entretienUpdate, setEntretienUpdate] = useState()
	const [entretienEnUpdate, setEntretienEnUpdate] = useState()
	const [dimensionFrUpdate, setDimensionFrUpdate] = useState()
	const [dimensionEnUpdate, setDimensionEnUpdate] = useState()

	const [nomProduitFrUpdate, setNomProduitFrUpdate] = useState("")
	const [nomProduitEnUpdate, setNomProduitEnUpdate] = useState("")
	const [descriptionFrUpdate, setDescriptionFrUpdate] = useState("")
	const [descriptionEnUpdate, setDescriptionEnUpdate] = useState("")

    const [grilleTailleUpdate, setGrilleTailleUpdate] = useState()
	const [attributUpdate, setAttributUpdate] = useState([])
	const [tarifUpdate, setTarifUpdate] = useState([])


    const [matiereUpdate, setMatiereUpdate] = useState([])
	const [tagsReferencementUpdate, setTagsReferencementUpdate] = useState() 

    const [sectionUpdate, setSectionUpdate] = useState("")
    //Fonction
    useEffect(() => {
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                //si token existe
                if(localStorage.getItem('page') == 'liste produit'){
                    setPage(localStorage.getItem('page'))
                }                
                else{
                    localStorage.setItem('page', 'liste produit')
                    setPage('liste produit')
                }                  
            }            
        }
        else{
            navigate('/')
        }

        //SKU dans le lien
        setSku(parseInt(sku))
        setSectionUpdate("information")
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                //const url = "http://212.129.3.31:8080/api/export_produit_temporaires?sku=" + sku
                const url = "http://localhost:8001/api/produits?sku=" + sku
                const header = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                       // Authorization : `Bearer ${token}` 			
                    },
                    cache: "default",
                }

                fetch(url,header)
                .then(function(res){
                    if(res.ok){
                        return res.json()
                    }
                 })
                .then(function(value){
                    setInfoSku(value[0])

                    //Information
                    value[0].univers!= null ? setUniversUpdate(value[0].univers) : setUniversUpdate("")
                    value[0].univers_en!= null ? setUniversEnUpdate(value[0].univers_en) : setUniversEnUpdate("")

                    value[0].marqueProduit != null ? setMarqueUpdate(value[0].marqueProduit) : setMarqueUpdate("")

                    value[0].pays_origine == null ? setPaysOrigineUpdate("") : setPaysOrigineUpdate(value[0].paysOrigine) 
                    
                    //Caractéristique
                    value[0].categorie != null ? setCategorieUpdate(value[0].categorie) : setCategorieUpdate("")
                    value[0].categorie_en != null ? setCategorieEnUpdate(value[0].categorie_en) : setCategorieEnUpdate("")

                    value[0].sous_categorie != null ? setSousCategorieUpdate(value[0].sous_categorie) : setSousCategorieUpdate("")
                    value[0].sous_categorie_en != null ? setSousCategorieEnUpdate(value[0].sous_categorie_en) : setSousCategorieEnUpdate("")

                    value[0].filtre_produit != null? setFiltreUpdate(value[0].filtre_produit): setFiltreUpdate("")
                    value[0].filtre_produit_en != null? setFiltreEnUpdate(value[0].filtre_produit_en): setFiltreEnUpdate("")

                    value[0].couleur != null ? setCouleurUpdate(value[0].couleur) : setCouleurUpdate()
                    value[0].couleur_en != null? setCouleurEnUpdate(value[0].couleur_en) : setCouleurEnUpdate()

                    value[0].coupe != null? setCoupeUpdate(value[0].coupe) : setCoupeUpdate("")
                    value[0].entretien != null? setEntretienUpdate(value.entretien) : setEntretienUpdate("")
                    value[0].dimension_fr != null? setDimensionFrUpdate(value[0].dimension_fr) :  setDimensionFrUpdate("")
                    value[0].dimension_en != null? setDimensionEnUpdate(value[0].dimension_en) : setDimensionEnUpdate("")

                    value[0].description_fr != null? setDescriptionFrUpdate(value[0].description_fr) :  setDescriptionFrUpdate("")
                    value[0].description_en != null? setDescriptionEnUpdate(value[0].description_en) : setDescriptionEnUpdate("")                    
                    
                    value[0].nom_produit_fr != null? setNomProduitFrUpdate(value[0].nom_produit_fr) :  setNomProduitFrUpdate("")
                    value[0].nom_produit_en != null? setNomProduitEnUpdate(value[0].nom_produit_en) : setNomProduitEnUpdate("")

                    value[0].variants.taille_ref.grille_taille_ref != null? setGrilleTailleUpdate(value[0].variants.taille_ref.grille_taille_ref) : setGrilleTailleUpdate("")
                    //tailles
                    setAttributUpdate(value[0].variants)

                    //tarifs
                    setTarifUpdate(value[0].variants)

                    value[0].matiereProduit!=null ? setMatiereUpdate(value[0].matiereProduit) : setMatiereUpdate([])
                    //tags
                    value[0].tags_ref !=null? setTagsReferencementUpdate(value[0].tags_ref) : setTagsReferencementUpdate("")
                })
               
                .catch(function(err){
                })
            }            
        }  
    }, [])
    const handleClickSave = (e, section) => {
        e.preventDefault()
        setSectionUpdate(section)
        let token =  JSON.parse(localStorage.getItem('user_multimag')).token
        if(!token){
            navigate('/')
        }
        else{
            //tags ref
            let tags_text = universUpdate + ',' + universEnUpdate+',Couleur_'+couleurUpdate+',Color_'+ couleurEnUpdate+','+filtreUpdate+','+filtreEnUpdate+','+sousCategorieUpdate+','+sousCategorieEnUpdate+',Catégorie_'+sousCategorieUpdate+',Category_'+sousCategorieEnUpdate+',Créateur_'+marqueUpdate+',Designer_'+marqueUpdate+','+produit.referenceFournisseur+','+categorieUpdate+','+categorieEnUpdate+','+produit.saison
            setTagsReferencementUpdate(tags_text)

            let referencer = false
            if((produit.sousCategorie!="")
                && (filtreUpdate!="")
                //&& (paysOrigineUpdate!="")
                && (grilleTailleUpdate!="")
                && (attributUpdate!="")
                //&& (value[i].coupe!="")
                //&& (value[i].entretien!="") A REDEMANDER
                && (descriptionFrUpdate!="")
                && (descriptionEnUpdate!="")
                && (nomProduitFrUpdate!="")
                && (nomProduitEnUpdate!="")
                && (matiereUpdate!=null)
            ){
                referencer = true
            }
            let filtre = {
                filtre: filtreUpdate? filtreUpdate:"",
                filtre_ref_en: filtreEnUpdate? filtreEnUpdate:"",
                sousCategorieRef: {
                    sous_categorie_ref: sousCategorieUpdate?sousCategorieUpdate:infoSku.sousCategorie,
                    sous_categorie_ref_en: sousCategorieEnUpdate?sousCategorieEnUpdate:infoSku.sousCategorieEn,
                    categorie_ref: {
                        categorie_ref: categorieUpdate?categorieUpdate:infoSku.categorie,
                        categorie_ref_en: categorieEnUpdate?categorieEnUpdate:infoSku.categorieEn,
                    }
                }
            }
            let matiere = []
            if(matiereUpdate && matiereUpdate.length && matiereUpdate[0].matiere!=""){
                matiereUpdate.forEach(element => {
                    if(element.value!=""){
                        matiere.push({
                            matiere : element.matiere,
                            pourcentageMatiere: element.pourcentageMatiere
                        })
                    }
                })
            }
            let data = {
                sku: infoSku.sku,
                marqueProduit:  marqueUpdate ? marqueUpdate : infoSku.marque,
                paysOrigine: paysOrigineUpdate?paysOrigineUpdate : "",
                univers: universUpdate? universUpdate : infoSku.univers,
                universEn: universEnUpdate? universEnUpdate : infoSku.universEn,
              
                filtre: filtre,

                couleur: couleurUpdate?couleurUpdate:"",
                couleurEn: couleurEnUpdate?couleurEnUpdate:"",
                entretien: entretienUpdate?entretienUpdate:"",
                entretienEn: entretienEnUpdate?entretienEnUpdate:"",
                coupe: coupeUpdate?coupeUpdate:"",
                coupeEn: coupeEnUpdate?coupeEnUpdate:"",
                dimensionFr: dimensionFrUpdate? dimensionFrUpdate : "",
                dimensionEn: dimensionEnUpdate? dimensionEnUpdate : "",
              
                descriptionFr: descriptionFrUpdate? descriptionFrUpdate : "",
                descriptioEn: descriptionEnUpdate? descriptionEnUpdate : "",
                nomProduitFr: nomProduitFrUpdate? nomProduitFrUpdate : "",
                nomProduitEn: nomProduitEnUpdate? nomProduitEnUpdate : "", 
              
                variants: attributUpdate ? attributUpdate : [],
              
                tarifs: tarifUpdate ? tarifUpdate : [],
                matiereProduits: matiere,
                tagsRef: tagsReferencementUpdate? tagsReferencementUpdate:"",
                dateRef: Moment().format("YYYY-MM-DD"),
                referencer: referencer,
              }
              
            console.log(JSON.stringify(data))
            console.log('result ',setProduit(infoSku.id, data))
        }
    }
    //render
    return (
        <Template>
            <FormulaireContext.Provider value={{
            infoSku: infoSku, setInfoSku: setInfoSku,
            universUpdate: universUpdate, setUniversUpdate: setUniversUpdate,
            universEnUpdate: universEnUpdate, setUniversEnUpdate: setUniversEnUpdate,
            marqueUpdate: marqueUpdate, setMarqueUpdate: setMarqueUpdate,
            paysOrigineUpdate: paysOrigineUpdate, setPaysOrigineUpdate: setPaysOrigineUpdate,
            sectionUpdate: sectionUpdate,
            setSectionUpdate: setSectionUpdate,

            categorieUpdate: categorieUpdate, setCategorieUpdate: setCategorieUpdate,
            categorieEnUpdate: categorieEnUpdate, setCategorieEnUpdate: setCategorieEnUpdate,
            sousCategorieUpdate: sousCategorieUpdate, setSousCategorieUpdate: setSousCategorieUpdate,
            sousCategorieEnUpdate: sousCategorieEnUpdate, setSousCategorieEnUpdate: setSousCategorieEnUpdate,
            filtreUpdate: filtreUpdate,	setFiltreUpdate: setFiltreUpdate,
            filtreEnUpdate: filtreEnUpdate,	setFiltreEnUpdate: setFiltreEnUpdate,   
            couleurUpdate: couleurUpdate, setCouleurUpdate: setCouleurUpdate,
            couleurEnUpdate: couleurEnUpdate, setCouleurEnUpdate: setCouleurEnUpdate,
            coupeUpdate: coupeUpdate, setCoupeUpdate: setCoupeUpdate,
            coupeEnUpdate: coupeEnUpdate, setCoupeEnUpdate: setCoupeEnUpdate,
            entretienUpdate: entretienUpdate, setEntretienUpdate: setEntretienUpdate,
            entretienEnUpdate: entretienEnUpdate, setEntretienEnUpdate: setEntretienEnUpdate,
            dimensionFrUpdate: dimensionFrUpdate, setDimensionFrUpdate: setDimensionFrUpdate,
            dimensionEnUpdate: dimensionEnUpdate, setDimensionEnUpdate: setDimensionEnUpdate,

            descriptionFrUpdate: descriptionFrUpdate, setDescriptionFrUpdate: setDescriptionFrUpdate,
            descriptionEnUpdate: descriptionEnUpdate, setDescriptionEnUpdate: setDescriptionEnUpdate,
            nomProduitFrUpdate: nomProduitFrUpdate, setNomProduitFrUpdate: setNomProduitFrUpdate,
            nomProduitEnUpdate: nomProduitEnUpdate, setNomProduitEnUpdate: setNomProduitEnUpdate,

            grilleTailleUpdate: grilleTailleUpdate, setGrilleTailleUpdate
            :setGrilleTailleUpdate,

            attributUpdate: attributUpdate, setAttributUpdate: setAttributUpdate,

            tarifUpdate: tarifUpdate, setTarifUpdate: setTarifUpdate,

            matiereUpdate: matiereUpdate, setMatiereUpdate: setMatiereUpdate,
            handleClickSave: handleClickSave,

        }}>
            <header>
                <div><Link to="/">Liste des produits > </Link></div>
                <div className="fs-3 fw-bolder">Modification produit {sku}</div>
            </header>
            <div className="d-xxl-flex d-xl-flex d-lg-flex d-md-flex mt-4 flex-row flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column-reverse justify-content-xxl-between justify-content-xl-start justify-content-lg-start justify-content-md-start "  id="produit">
                <Recapitulatif />
                <section className="col-xxl-10 col-xl-9 col-lg-9 col-md-9 col-sm-12 mt-3 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 md-sm-3 scrollContent" >
                    {/**
                     * Information produit
                     */}
                    <Information />               
                    {/**
                     * Caracteristique produit
                     */}
                    <Caracteristique />

                    {/**
                     * Description produit
                     */}
                    <Description />  


                    {/**
                     * Taille produit
                     */}
                    <Taille />  

                    {/**
                     * Tarifs produit
                     */}
                    <Tarifs />                      

                    {/**
                     * Matière produit
                     */}
                    <Matiere />

                </section>
            </div>
            </FormulaireContext.Provider>
        </Template>
    )
}

export default FormulaireProduit;
