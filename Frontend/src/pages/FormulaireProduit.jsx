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
import {getProduit, setProduit} from "../services/produit.service"
import Dimension from "../components/FormulaireProduit/Dimension";
import EntretienCoupe from "../components/FormulaireProduit/EntretienCoupe";
import { setMatiereProduit } from "../services/matiereproduit.service";
import { GrilleTailleFnr } from "../data/GrilleTailleFnr";

const FormulaireProduit = () => {
    //variable
    let navigate = useNavigate()
    let { skuProduit } = useParams()
    const [page, setPage] = useState()
    const [sku, setSku] = useState(skuProduit)
    const [infoSku, setInfoSku] = useState([])
    //données à partager
    const [indicationDone, setIndicationDone] = useState()
    const [caracteristiqueDone, setCaracteristiqueDone] = useState()
    const [matiereDone, setMatiereDone] = useState()
    const [tarifsDone, setTarifsDone] = useState()
    const [tailleDone, setTailleDone] = useState()
    const [descriptionDone, setDescriptionDone] = useState()
    const [entretienCoupeDone, setEntretienCoupeDone] = useState()
    const [dimensionDone, setDimensionDone] = useState()

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

	const [hauteurUpdate, setHauteurUpdate] = useState()
	const [longueurUpdate, setLongueurUpdate] = useState()
	const [largeurUpdate, setLargeurUpdate] = useState()
	const [poidsUpdate, setPoidsUpdate] = useState()
	const [dimensionFrUpdate, setDimensionFrUpdate] = useState("")

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

    const [save, setSave] = useState(false)

    const [cliquable, setCliquable] = useState(true)
    const [generateTags, setGenerateTags] = useState(true)
    const [infoGenerateTags, setInfoGenerateTags] = useState(true)

    //Fonction
    useEffect(() => {
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                //si token existe
                let user = JSON.parse(localStorage.getItem('user_multimag'))
                let service = (user.service && (user.service == "e-shop & référencement" || user.service == "IT" )) ? "admin" : "user"

                if(service=="user"){
                    navigate('/produit/detail/' + parseInt(sku))
                }



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
                // //console.log("sku", sku)
                let promise = Promise.resolve(getProduit(sku));
                promise.then((value) => {
                    if(value){
                        for(let item in value){
                            let valeur = value[item]
                            if(item == "hydra:member"){
                                setInfoSku(valeur[0])
                                //console.log("valeur[0] : ",valeur[0])
                                //Information
                                let univers = valeur[0].univers!= null ? valeur[0].univers : ""
                                let universEn = valeur[0].univers_en!= null ? valeur[0].univers_en : ""
                                let marque = valeur[0].nom_fournisseur ? valeur[0].nom_fournisseur : ""
                                // valeur[0].marque != null ? setMarqueUpdate(valeur[0].marqueProduit) : setMarqueUpdate("")

                                let paysOrigine = valeur[0].pays_origine == null ? "" : valeur[0].pays_origine
                                valeur[0].pays_origine == null ? setPaysOrigineUpdate("") : setPaysOrigineUpdate(paysOrigine) 
                                
                                //Caractéristique
                                let categorie = valeur[0].categorie != null ? valeur[0].categorie : ""
                                let categorieEn = valeur[0].categorie_en != null ? valeur[0].categorie_en : ""
                                let sousCategorie = valeur[0].sous_categorie != null? valeur[0].sous_categorie : ""
                                
                                let sousCategorieEn = valeur[0].sous_categorie_en? valeur[0].sous_categorie_en : ""

                                let filtre = valeur[0].filtre_produit != null? valeur[0].filtre_produit : ""
                                let filtreEn = valeur[0].filtre_produit_en != null? valeur[0].filtre_produit_en : ""                                
                                let couleur = valeur[0].couleur != null? valeur[0].couleur : ""
                                let couleurEn = valeur[0].couleur_en != null? valeur[0].couleur_en : ""

                                let nomProduitFr = valeur[0].nom_produit_fr != null ? valeur[0].nom_produit_fr : ""
                                let nomProduitEn = valeur[0].nom_produit_en != null ? valeur[0].nom_produit_en : ""
                                let descriptionFr = valeur[0].description_fr != null ? valeur[0].description_fr : ""
                                let descriptionEn = valeur[0].description_en != null ? valeur[0].description_en : ""
                                let coupe = valeur[0].coupe != null ? valeur[0].coupe : ""
                                let entretien = (valeur[0].entretien != null) ? valeur[0].entretien : ""

                                //tailles
                                // //console.log(valeur[0]);
                                let variant = []
                                let grilleTaille = ""
                                for(let i in valeur[0].variants){
                                    let item = valeur[0].variants[i]
                                    let tailleRef = item.taille_ref? item.taille_ref.taille_ref : ""
                                    grilleTaille = item.taille_ref? item.taille_ref.grille_taille_ref.grilleTailleRef : ""

                                    if(grilleTaille=="" && item.taille_fnr=="TU"){
                                        grilleTaille="Taille Unique"
                                    }
                                    variant[i] = {
                                        taille_fnr: item.taille_fnr,
                                        taille_ref: {taille_ref: tailleRef},
                                        variant_sku: item.variant_sku
                                    }
                                }

                                // if(GrilleTailleFnr){
                                //     let tabVariants = []
                                //     GrilleTailleFnr.forEach(element => {
                                //         console.log(element)
                                //         console.log(value[0])
                                //         if(value[0] && value[0].grille_taille_fournisseur && (element.grilleTaille == value[0].grille_taille_fournisseur)){
                                //             console.log("tailles : ", element.tailles)
                                //             element.tailles.forEach(elementTaille => {
                                //                 tab = {
                                //                     taille_fnr: elementTaille,
                                //                     tailleRef: {tailleRef: ""},
                                //                     variant_sku: value[0].sku + "_" + elementTaille
                                //                 }
                                //                 tabVariants.push(tab)
                                //             });
                                //         }
                                //     });
                                //     console.log("tabVariants ", tabVariants)
                                //     setAttributUpdate(tabVariants)
                                // }




                                /**
                                 * Dimension: Hauteur, Poids, Largeur, Longueur
                                 */
                                 let hauteur= valeur[0].hauteur != null ? valeur[0].hauteur : 0
                                 let largeur= valeur[0].largeur != null ? valeur[0].largeur : 0
                                 let longueur= valeur[0].longueur != null ? valeur[0].longueur : 0
                                 let poids = valeur[0].poids != null ? valeur[0].poids : 0
                                 let dimension = valeur[0].dimension_fr ? valeur[0].dimension_fr : ""

                                //tarifs
                                let tarifs = []
                                if(valeur[0].tarifs){                                    
                                    tarifs[0] = {
                                        pays: {pays: "France"},
                                        prix_vente: valeur[0].tarifs[0].prix_vente,
                                        remise: valeur[0].tarifs[0].remise ? valeur[0].tarifs[0].remise : 0
                                    }
                                    setTarifUpdate(tarifs)
                                }

                                //matiere
                                let matiere = []
                                if(valeur[0].matiereProduits && valeur[0].matiereProduits.length>0){
                                    for(let i in valeur[0].matiereProduits){
                                        let item = valeur[0].matiereProduits[i]
                                        matiere[i] = {
                                            matiere : item.matiere,
                                            pourcentageMatiere: item.pourcentageMatiere
                                        }
                                    }
                                }
                                else{
                                    for(let i=0; i<2; i++){
                                        matiere[i] = {
                                            matiere : {matiere : ""},
                                            pourcentageMatiere: 0
                                        }
                                    }
                                }
                                setMatiereUpdate(matiere)

                                setGrilleTailleUpdate(grilleTaille)
                                setAttributUpdate(variant)
                                setCategorieUpdate(categorie)
                                setCategorieEnUpdate(categorieEn)
                                setSousCategorieUpdate(sousCategorie)
                                setSousCategorieEnUpdate(sousCategorieEn)
                                setFiltreUpdate(filtre)
                                setFiltreEnUpdate(filtreEn)                                
                                setCouleurUpdate(couleur)
                                setCouleurEnUpdate(couleurEn)
                                setCoupeUpdate(coupe)
                                setEntretienUpdate(entretien)                                
                                setDescriptionFrUpdate(descriptionFr)
                                setDescriptionEnUpdate(descriptionEn)                  
                                setNomProduitFrUpdate(nomProduitFr)
                                setNomProduitEnUpdate(nomProduitEn)
                                setUniversUpdate(univers)
                                setUniversEnUpdate(universEn)
                                setMarqueUpdate(valeur[0].marque ? valeur[0].marque.marque : marque)
                                setHauteurUpdate(hauteur)
                                setLargeurUpdate(largeur)
                                setLongueurUpdate(longueur)
                                setPoidsUpdate(poids)
                                setDimensionFrUpdate(dimension)
                                //tags
                                valeur[0].tags_ref !=null? setTagsReferencementUpdate(valeur[0].tags_ref) : setTagsReferencementUpdate("")

                                valeur[0].tags_ref !=null? setInfoGenerateTags("Générer automatiquement. Vous pouvez apporter une modification.") : setInfoGenerateTags("")

                                /**
                                 * Véririfer si tous les section sont complétés
                                 */
                                 if(marque!="" && paysOrigine!="" && univers!= "" && universEn!="")
                                    setIndicationDone(true)
                                 else 
                                    setIndicationDone(false)

                                if(categorie!="" && categorieEn!="" && sousCategorie!="" && sousCategorieEn!="" && filtre!="" && filtreEn!="" && couleur!="" && couleurEn!="")
                                    setCaracteristiqueDone(true)
                                else
                                    setCaracteristiqueDone(false)
                                
                                if(matiere.length>0)
                                    setMatiereDone(true)
                                else
                                    setMatiereDone(false)
                    
                                if(tarifs[0].prix_vente > 0 && tarifs[0].remise>0)
                                    setTarifsDone(true)
                                else if(tarifs[0].prix_vente > 0 && tarifs[0].remise==0)
                                    setTarifsDone(null)
                                else
                                    setTarifsDone(false)
                                

                                let variantDone = 0
                                variant.forEach(element => {
                                    if(element.taille_ref && element.taille_ref.taille_ref!=""){
                                        variantDone++
                                    }
                                });
                                if(grilleTaille && (variantDone == variant.length)){
                                    setTailleDone(true)
                                }
                                else{
                                    setTailleDone(false)
                                }
                                
                    
                                if(nomProduitFr!="" && descriptionFr!="")
                                    setDescriptionDone(true)
                                else
                                    setDescriptionDone(false)
                    
                                if(entretien!="" && coupe != "")
                                    setEntretienCoupeDone(true)
                                else if(entretien!="" && coupe == "")
                                    setEntretienCoupeDone(null)
                                else
                                    setEntretienCoupeDone(false)

                                if(dimension!="" && largeur!=0 && longueur!=0 && hauteur!=0 && poids!=0)
                                    setDimensionDone(true)
                                else
                                    setDimensionDone(null)
                            }
                        }
                    }
                })
            }            
        }  
    }, [])
    console.log("info ", infoSku)

    const handleClickSave = (e, section) => {
        // // //console.log("section", section)
        e.preventDefault()
        setSectionUpdate(section)
        let token =  JSON.parse(localStorage.getItem('user_multimag')).token
        if(!token){
            navigate('/')
        }
        else{
            //tags ref
            let tags_text = universUpdate + ',' + universEnUpdate + ',Couleur_'+couleurUpdate + ',Color_'+ couleurEnUpdate+','+filtreUpdate+','+filtreEnUpdate+','+sousCategorieUpdate+','+sousCategorieEnUpdate+',Catégorie_'+sousCategorieUpdate+',Category_'+sousCategorieEnUpdate+',Créateur_'+marqueUpdate+',Designer_'+marqueUpdate+','+infoSku.reference_fournisseur+','+categorieUpdate+','+categorieEnUpdate+','+infoSku.saison
            if(tagsReferencementUpdate=="" || !tagsReferencementUpdate)
                setTagsReferencementUpdate(tags_text)


            let referencer = false
            if((infoSku.sousCategorie!="")
                && (filtreUpdate!="")
                && (paysOrigineUpdate!="")
                && (grilleTailleUpdate!="")
                && (attributUpdate!="")
                //&& (value[i].coupe!="")
                //&& (value[i].entretien!="") A REDEMANDER
                && (descriptionFrUpdate!="")
                // && (descriptionEnUpdate!="")
                && (nomProduitFrUpdate!="")
                // && (nomProduitEnUpdate!="")
                && (matiereUpdate!=null)
            ){
                referencer = true
            }

            //data à sauvegarder

            let filtre = {
                filtre: filtreUpdate? filtreUpdate:"",
                filtreRefEn: filtreEnUpdate? filtreEnUpdate:"",
                sousCategorieRef: {
                    sousCategorieRef: sousCategorieUpdate?sousCategorieUpdate:infoSku.sousCategorie,
                    sousCategorieRefEn: sousCategorieEnUpdate?sousCategorieEnUpdate:infoSku.sousCategorieEn,
                    categorie_ref: {
                        categorieRef: categorieUpdate?categorieUpdate:infoSku.categorie,
                        categorieRefEn: categorieEnUpdate?categorieEnUpdate:infoSku.categorieEn,
                    }
                }
            }
            let matiere = []
            if(matiereUpdate && matiereUpdate.length>0 && matiereUpdate[0].pourcentageMatiere!=0){
                matiereUpdate.forEach(element => {
                    if(element.pourcentageMatiere>0 && element.matiere && element.matiere.matiere!=""){
                        matiere.push({
                            matieres :  element.matiere.matiere,
                            pourcentageMatiere: parseFloat(element.pourcentageMatiere),
                        })
                    }
                })
            }


            // let marque = { marque : marqueUpdate}

            /**
             * Véririfer si tous les section sont complétés
             */
            if(marqueUpdate!="" && paysOrigineUpdate!="" && universUpdate!= "" && universEnUpdate!="")
                setIndicationDone(true)
            else 
                setIndicationDone(false)

            if(categorieUpdate!="" && categorieEnUpdate!="" && sousCategorieUpdate!="" && sousCategorieEnUpdate!="" && filtreUpdate!="" && filtreEnUpdate!="" && couleurUpdate!="" && couleurEnUpdate!="")
                setCaracteristiqueDone(true)
            else
                setCaracteristiqueDone(true)

            if(matiereUpdate.length>0)
                setMatiereDone(true)
            else
                setMatiereDone(false)

            if(tarifUpdate[0].prix_vente > 0)
                setTarifsDone(true)
            else
                setTarifsDone(false)
            
            let variantDone = 0
            attributUpdate.forEach(element => {
                if(element.taille_ref && element.taille_ref!=""){
                    variantDone++
                }
            });
            if(grilleTailleUpdate && (variantDone == attributUpdate.length)) 
                setTailleDone(true)
            else
                setTailleDone(false)

            if(nomProduitFrUpdate!="" && descriptionFrUpdate!="")
                setDescriptionDone(true)
            else
                setDescriptionDone(false)

            if(entretienUpdate!="" && coupeUpdate != "")
                setEntretienCoupeDone(true)
            else if(entretienUpdate!="" && coupeUpdate == "")
                setEntretienCoupeDone(null)
            else
                setEntretienCoupeDone(false)

            if(dimensionFrUpdate!="" && largeurUpdate!=0 && longueurUpdate!=0 && hauteurUpdate!=0 && poidsUpdate !=0)
                setDimensionDone(true)
            else
                setDimensionDone(null)
            /**
             * Data à sauvegarder
             */
            let data = {
                sku: infoSku.sku,
                marqueUpdate:  marqueUpdate ? marqueUpdate : (infoSku.marque? infoSku.marque.marque: infoSku.nom_fournisseur),
                paysOrigine: paysOrigineUpdate?paysOrigineUpdate : "",
                univers: universUpdate? universUpdate : infoSku.univers,
                universEn: universEnUpdate? universEnUpdate : infoSku.universEn,
              
                // filtre: filtre,
                categorie: filtre.sousCategorieRef.categorie_ref.categorieRef,
                categorieEn: filtre.sousCategorieRef.categorie_ref.categorieRefEn,

                sousCategorie: filtre.sousCategorieRef.sousCategorieRef,
                sousCategorieEn: filtre.sousCategorieRef.sousCategorieRefEn,

                filtreProduit: filtre.filtre,
                filtreProduitEn: filtre.filtreRefEn,

                couleur: couleurUpdate?couleurUpdate:"",
                couleurEn: couleurEnUpdate?couleurEnUpdate:"",
                entretien: entretienUpdate?entretienUpdate:"",
                entretienEn: entretienEnUpdate?entretienEnUpdate:"",
                coupe: coupeUpdate?coupeUpdate:"",
                coupeEn: coupeEnUpdate?coupeEnUpdate:"",

                longueur: longueurUpdate? parseFloat(longueurUpdate) : null,
                largeur: largeurUpdate? parseFloat(largeurUpdate) : null,
                hauteur: hauteurUpdate? parseFloat(hauteurUpdate) : null,
                poids: poidsUpdate? parseFloat(poidsUpdate) : null,                
                dimensionFr: dimensionFrUpdate? dimensionFrUpdate : null,

                descriptionFr: descriptionFrUpdate? descriptionFrUpdate : "",
                descriptionEn: descriptionEnUpdate? descriptionEnUpdate : "",
                nomProduitFr: nomProduitFrUpdate? nomProduitFrUpdate : "",
                nomProduitEn: nomProduitEnUpdate? nomProduitEnUpdate : "", 
                matieres: matiere,
                grilleTailleRef: grilleTailleUpdate,
                variantProduits: attributUpdate ? attributUpdate : [],
              
                tarifsProduits: tarifUpdate ? tarifUpdate : [],
                tagsRef: tagsReferencementUpdate? tagsReferencementUpdate:"",
                dateRef: Moment().format("YYYY-MM-DD"),
                referencer: referencer,
              }
              
            console.log("data", JSON.stringify(data))
            // //console.log("id : ", infoSku.id)
            //console.log(infoSku)
            setProduit(infoSku.id, data)
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

            hauteurUpdate: hauteurUpdate, setHauteurUpdate: setHauteurUpdate,
            longueurUpdate: longueurUpdate, setLongueurUpdate: setLongueurUpdate,
            largeurUpdate: largeurUpdate, setLargeurUpdate: setLargeurUpdate,
            poidsUpdate: poidsUpdate, setPoidsUpdate: setPoidsUpdate,
            dimensionFrUpdate: dimensionFrUpdate, setDimensionFrUpdate: setDimensionFrUpdate,

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

            indicationDone : indicationDone, setIndicationDone : setIndicationDone, 
            caracteristiqueDone : caracteristiqueDone, setCaracteristiqueDone : setCaracteristiqueDone, 
            matiereDone : matiereDone, setMatiereDone : setMatiereDone, 
            tarifsDone : tarifsDone, setTarifsDone : setTarifsDone, 
            tailleDone : tailleDone, setTailleDone : setTailleDone, 
            descriptionDone : descriptionDone, setDescriptionDone : setDescriptionDone, 
            entretienCoupeDone : entretienCoupeDone, setEntretienCoupeDone : setEntretienCoupeDone, 
            dimensionDone : dimensionDone, setDimensionDone : setDimensionDone, 
            cliquable: cliquable, setCliquable: setCliquable,
            tagsReferencementUpdate: tagsReferencementUpdate, setTagsReferencementUpdate: setTagsReferencementUpdate,
            generateTags : generateTags, setGenerateTags : setGenerateTags,
            infoGenerateTags : infoGenerateTags, setInfoGenerateTags : setInfoGenerateTags
        }}>
            <header>
                <div><Link to="/produits/listes">Liste des produits > </Link></div>
                <div className="fs-3 fw-bolder">Modification produit {parseInt(sku)}</div>
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
                     * Matière produit
                     */}
                    <Matiere />

                    {/**
                     * Tarifs produit
                     */}
                    <Tarifs />    

                    {/**
                     * Taille produit
                     */}
                    <Taille />  

                    {/**
                     * Description produit
                     */}
                    <Description />  

                    {/**
                     * Description produit
                     */}
                    <EntretienCoupe />  

                    {/**
                     * Dimension
                     */}
                     <Dimension />
                </section>
            </div>
            </FormulaireContext.Provider>
        </Template>
    )
}

export default FormulaireProduit;
