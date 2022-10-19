import { Link, useParams } from "react-router-dom";
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

const FormulaireProduit = () => {
    //variable
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

	const [nomProduitFrUpdate, setNomProduitFrUpdate] = useState()
	const [nomProduitEnUpdate, setNomProduitEnUpdate] = useState()
	const [descriptionFrUpdate, setDescriptionFrUpdate] = useState()
	const [descriptionEnUpdate, setDescriptionEnUpdate] = useState()

    const [grilleTailleUpdate, setGrilleTailleUpdate] = useState()
	const [attributUpdate, setAttributUpdate] = useState([])

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
                    value[0].nom_fournisseur != null ? setMarqueUpdate(value[0].nom_fournisseur) : setMarqueUpdate("")
                    value[0].pays_origine == null ? setPaysOrigineUpdate("") : setPaysOrigineUpdate(value[0].paysOrigine) 
                    
                    //Caractéristique
                    value[0].categorie != null ? setCategorieUpdate(value[0].filtre.sousCategorieRef.categorie_ref.categorie_ref) : setCategorieUpdate("")
                    value[0].categorie_en != null ? setCategorieEnUpdate(value[0].filtre.sousCategorieRef.categorie_ref.categorie_ref_en) : setCategorieEnUpdate("")

                    value[0].sousCategorie != null ? setSousCategorieUpdate(value[0].filtre.sousCategorieRef.sous_categorie_ref) : setSousCategorieUpdate("")
                    value[0].sousCategorie != null ? setSousCategorieEnUpdate(value[0].filtre.sousCategorieRef.sous_categorie_ref_en) : setSousCategorieEnUpdate("")

                    value[0].filtre != null? setFiltreUpdate(value[0].filtre): setFiltreUpdate("")
                    value[0].filtre_en != null? setFiltreEnUpdate(value[0].filtre_en): setFiltreEnUpdate("")

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

                    value[0].variants.taille_ref.grille_taille_ref != null? setGrilleTailleUpdate(value[0].variants.taille_ref.grille_taille_ref) : setGrilleTailleUpdate()

                    //tailles
                    setAttributUpdate(value[0].variants)
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
            //Information
            let data = {
                sku: infoSku.sku,
                marque: marqueUpdate ? marqueUpdate : infoSku.marque,
                pays_origine: paysOrigineUpdate?paysOrigineUpdate : "",
                univers: universUpdate? universUpdate : infoSku.univers,
                univers_en: universEnUpdate? universEnUpdate : infoSku.universEn,
                categorie: categorieUpdate?categorieUpdate:produit.categorie,
				categorieEn: categorieEnUpdate?categorieEnUpdate:produit.categorieEn,
                sousCategorie: sousCategorieUpdate?sousCategorieUpdate:produit.sousCategorie,
				sousCategorieEn: sousCategorieEnUpdate?sousCategorieEnUpdate:produit.sousCategorieEn,
				filtre: filtreUpdate? filtreUpdate:"",
				filtreEn: filtreEnUpdate? filtreEnUpdate:"",
                couleur: couleurUpdate?couleurUpdate:"",
				couleurEn: couleurEnUpdate?couleurEnUpdate:"",
                entretien: entretienUpdate?entretienUpdate:"",
				entretienEn: entretienEnUpdate?entretienEnUpdate:"",
				coupe: coupeUpdate?coupeUpdate:"",
				coupeEn: coupeEnUpdate?coupeEnUpdate:"",
                dimensionFrUpdate: dimensionFrUpdate? dimensionFrUpdate : "",
				dimensionEnUpdate: dimensionEnUpdate? dimensionEnUpdate : "",
                
                nomProduitFr: nomProduitFrUpdate? nomProduitFrUpdate : "",
				nomProduitEn: nomProduitEnUpdate? nomProduitEnUpdate : "",
				descriptionFr: descriptionFrUpdate? descriptionFrUpdate : "",
				descriptionEn: descriptionEnUpdate? descriptionEnUpdate : "",

				grilleTaille: grilleTailleUpdate?grilleTailleUpdate : "",
				attribut: attributUpdate?attributUpdate:"",
            }
            console.log(data)
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
