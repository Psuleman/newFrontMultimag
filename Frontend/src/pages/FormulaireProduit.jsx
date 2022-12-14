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
import { useContext } from "react";
import { TemplateContext } from "../components/Layout/Template/Context/TemplateContext";

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
    const [genderUpdate, setGenderUpdate] = useState()
    const [ageUpdate, setAgeUpdate] = useState()

    const [marqueUpdate, setMarqueUpdate] = useState()
    const [paysOrigineUpdate, setPaysOrigineUpdate] = useState()
    const [referenceFournisseurUpdate, setReferenceFournisseurUpdate] = useState()

    const [categorieUpdate, setCategorieUpdate] = useState()
	const [categorieEnUpdate, setCategorieEnUpdate] = useState()
    const [sousCategorieUpdate, setSousCategorieUpdate] = useState()
	const [sousCategorieEnUpdate, setSousCategorieEnUpdate] = useState()
	const [filtreUpdate, setFiltreUpdate] = useState()
	const [filtreEnUpdate, setFiltreEnUpdate] = useState()
    const [categorieGoogleUpdate, setCategorieGoogleUpdate] = useState() //

    const [referenceCouleurUpdate, setReferenceCouleurUpdate] = useState()
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
    const [matiereGoogleUpdate, setMatiereGoogleUpdate] = useState()
	const [tagsReferencementUpdate, setTagsReferencementUpdate] = useState() 

    const [sectionUpdate, setSectionUpdate] = useState("")

    const [save, setSave] = useState(false)

    const [cliquable, setCliquable] = useState(true)
    const [generateTags, setGenerateTags] = useState(true)
    const [infoGenerateTags, setInfoGenerateTags] = useState(true)

    const [messageSave, setMessageSave] = useState()
    const [isSuccessSave, setIsSuccessSave] = useState()
    const [sectionSave, setSectionSave] = useState()

    const [userEmail, setUserEmail] = useState()


    //Fonction
    useEffect(() => {
        setMessageSave()
        setIsSuccessSave()
        setSectionSave()
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

        if(localStorage.getItem("user_multimag")){
            let user = JSON.parse(localStorage.getItem("user_multimag"))
            setUserEmail(user.email)
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
                // //// console.log("sku", sku)
                let promise = Promise.resolve(getProduit(sku));
                promise.then((value) => {
                    if(value){
                        for(let item in value){
                            let valeur = value[item]
                            if(item == "hydra:member"){
                                setInfoSku(valeur[0])
                                //// console.log("valeur[0] : ",valeur[0])
                                //Information
                                let univers = valeur[0].univers!= null ? valeur[0].univers : ""
                                let universEn = valeur[0].univers_en!= null ? valeur[0].univers_en : ""
                                let gender = valeur[0].gender!= null ? valeur[0].gender : ""
                                let age = valeur[0].age!= null ? valeur[0].age : ""


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
                                // //// console.log(valeur[0]);
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
                                //         // console.log(element)
                                //         // console.log(value[0])
                                //         if(value[0] && value[0].grille_taille_fournisseur && (element.grilleTaille == value[0].grille_taille_fournisseur)){
                                //             // console.log("tailles : ", element.tailles)
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
                                //     // console.log("tabVariants ", tabVariants)
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
                                setMatiereGoogleUpdate((value[0] && value[0].material_classification_google) ? value[0].material_classification_google : "")
                                setReferenceFournisseurUpdate(valeur[0].reference_fournisseur ? valeur[0].reference_fournisseur : "")
                                setReferenceCouleurUpdate(valeur[0].reference_couleur ? valeur[0].reference_couleur : "")
                                setGrilleTailleUpdate(grilleTaille)
                                setAttributUpdate(variant)
                                setCategorieUpdate(categorie)
                                setCategorieEnUpdate(categorieEn)
                                setSousCategorieUpdate(sousCategorie)
                                setSousCategorieEnUpdate(sousCategorieEn)
                                setFiltreUpdate(filtre)
                                setFiltreEnUpdate(filtreEn) 
                                setCategorieGoogleUpdate(value[0] && value[0].categorie_google ? value[0].categorie_google : "")                               
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
                                setGenderUpdate(gender)
                                setAgeUpdate(age)
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
                                
                                if(matiere.length>0 && matiereGoogleUpdate!="")
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
    // console.log("info ", infoSku)

    // console.log("userEmail", userEmail)

    const handleClickSave = (e, section) => {
        // // //// console.log("section", section)
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

            if(matiereUpdate.length>0 && matiereGoogleUpdate!="")
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
             * Vérification des données modifier
             * reference fournisseur, marque, pays Origine, Univers, Univers_en (4)
             * Categorie > sous categorie > Filtre / Categorie_en > sous_categorie_en > filtre_en (6)
             * couleur > couleur_en (2)
             * tags 
             * Description_fr, description_en (2)
             * nom_produit_fr, nom_produit_en (2)
             * entretien et coupe (1)
             *              
             * matiere (1)
             * tarifs (1)
             * Tailles, grille taille (2)
             * Dimension, poids
             */

            let point = 0;
            let message = ""

            if((infoSku.marque && (marqueUpdate != infoSku.marque.marque)) || (!infoSku.marque && marqueUpdate!= infoSku.nom_fournisseur)){
                point += 1
                message += "marque, "
            }

            if((infoSku.pays_origine && paysOrigineUpdate != infoSku.pays_origine) || (!infoSku.pays_origine && paysOrigineUpdate!="") ){
                point += 1
                message += "pays origine, "
            }
            if((infoSku.univers_en && universEnUpdate != infoSku.univers_en) || (!infoSku.univers_en && universEnUpdate!="")){
                point += 1
                message += "univers en, "
            }
            if((infoSku.univers && universUpdate != infoSku.univers) || (!infoSku.univers && universUpdate!="")){
                point += 1
                message += "univers, "
            }

            if((infoSku.categorie && categorieUpdate != infoSku.categorie) || (!infoSku.categorie && categorieUpdate !="")){
                point += 1
                message += "categorie, "
            }            
            if((infoSku.sous_categorie && sousCategorieUpdate != infoSku.sous_categorie) || (!infoSku.sous_categorie && sousCategorieUpdate != "")){
                point += 1
                message += "sous categorie, "

            }
            if((infoSku.filtre_produit && filtreUpdate != infoSku.filtre_produit) || (!infoSku.filtre_produit && filtreUpdate != "")){
                point += 1
                message += "filtre produit, "
            }
            if((infoSku.categorie_en && categorieEnUpdate != infoSku.categorie_en) || (!infoSku.categorie_en && categorieEnUpdate != "")){
                point += 1
                message += "categorie en, "
            }            
            if((infoSku.sous_categorie_en && sousCategorieEnUpdate != infoSku.sous_categorie_en) || (!infoSku.sous_categorie_en && sousCategorieEnUpdate != "")){
                point += 1
                message += "sous categorie en, "
            }
            if((infoSku.filtre_produit_en && filtreEnUpdate != infoSku.filtre_produit_en) || (!infoSku.filtre_produit_en && filtreEnUpdate != "")){
                point += 1
                message += "filtre produit en, "
            }

            if((infoSku.couleur && couleurUpdate != infoSku.couleur) || (infoSku.couleur && couleurUpdate != "")){
                point += 1
                message += "couleur, "
            }
            if((infoSku.couleur_en && couleurEnUpdate != infoSku.couleur_en) || (!infoSku.couleur_en && couleurEnUpdate != "")){
                point += 1
                message += "couleur en, "
            }

            if((infoSku.description_fr && descriptionFrUpdate != infoSku.description_fr) || (!infoSku.description_fr && descriptionFrUpdate != "")){
                point += 1
                message += "description fr, "
            }
            if((infoSku.description_en && descriptionEnUpdate != infoSku.description_en) || (!infoSku.description_en && descriptionEnUpdate != "")){
                point += 1
                message += "description en, "
            }

            if((infoSku.nom_produit_fr && nomProduitFrUpdate != infoSku.nom_produit_fr) || (!infoSku.nom_produit_fr && nomProduitFrUpdate != "")){
                point += 1
                message += "nom produit fr, "
            }
            if((infoSku.nom_produit_en && nomProduitEnUpdate != infoSku.nom_produit_en) || (!infoSku.nom_produit_en && nomProduitEnUpdate != "")){
                point += 1
                message += "nom produit en, "
            }
            if((infoSku.entretien && entretienUpdate != infoSku.entretien) || (!infoSku.entretien && entretienUpdate != "")){
                point += 1
                message += "entretien, "
            }
            if(matiere.length != infoSku.matiereProduits.length){
                point += 1
                message += "matiere, "
            }
            if(infoSku.tarifs[0].prix_vente != tarifUpdate[0].prix_vente || (infoSku.tarifs[0].remise && infoSku.tarifs[0].remise != tarifUpdate[0].remise) || (!infoSku.tarifs[0].remise && tarifUpdate[0].remise!=0)){
                point += 1
                message += "tarifs, "
            }

            if( (infoSku.variants[0].taille_ref && infoSku.variants[0].taille_ref.tailleRef != attributUpdate[0].taille_ref) || (!infoSku.variants[0].taille_ref && grilleTailleUpdate!="") ){
                point += 1
                message += "variants, "
            }

            console.log("point", point, "message: ", message)

            let motif = ""
            if(infoSku.referencer = false && referencer == true){
                motif = "référencement"
            }
            else if(infoSku.referencer = true && referencer == true){
                motif = "modification / vérification"
            }



            /**
             * Data à sauvegarder
             */
            let data = {
                sku: infoSku.sku,
                marqueUpdate:  marqueUpdate ? marqueUpdate : (infoSku.marque? infoSku.marque.marque: infoSku.nom_fournisseur),
                paysOrigine: paysOrigineUpdate?paysOrigineUpdate : "",
                univers: universUpdate? universUpdate : infoSku.univers,
                universEn: universEnUpdate? universEnUpdate : infoSku.universEn,
                gender: genderUpdate? genderUpdate: infoSku.gender,
                age: ageUpdate? ageUpdate: infoSku.age,
                referenceFournisseur: referenceFournisseurUpdate ? referenceFournisseurUpdate : infoSku.reference_fournisseur,
                referenceCouleur: referenceCouleurUpdate ? referenceCouleurUpdate : infoSku.reference_couleur,
                // filtre: filtre,
                categorie: filtre.sousCategorieRef.categorie_ref.categorieRef,
                categorieEn: filtre.sousCategorieRef.categorie_ref.categorieRefEn,

                sousCategorie: filtre.sousCategorieRef.sousCategorieRef,
                sousCategorieEn: filtre.sousCategorieRef.sousCategorieRefEn,

                filtreProduit: filtre.filtre,
                filtreProduitEn: filtre.filtreRefEn,

                categorieGoogleUpdate: categorieGoogleUpdate ? categorieGoogleUpdate : "", 

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
                materialClassificationGoogle: matiereGoogleUpdate,
                grilleTailleRef: grilleTailleUpdate,
                variantProduits: attributUpdate ? attributUpdate : [],
              
                tarifsProduits: tarifUpdate ? tarifUpdate : [],
                tagsRef: tagsReferencementUpdate? tagsReferencementUpdate:"",
                dateRef: Moment().format("YYYY-MM-DD"),
                referencer: referencer,
                export: false,
                username: userEmail ? userEmail : null,
                motifTache: motif
              }
              
            console.log("data", JSON.stringify(data))
            // //// console.log("id : ", infoSku.id)
            //// console.log(infoSku)
            let promise = Promise.resolve(setProduit(infoSku.id, data));

            promise.then((value)=>{
                while(!value.ok){
                    setProduit(infoSku.id, data)
                }
                if(value.ok){
                    setIsSuccessSave(true)
                    setMessageSave("Enregistrer avec succès")
                    setSectionSave(sectionUpdate)
                    if(sectionUpdate == "dimensions"){
                        setTimeout(() => {
                            navigate("/produit/detail/" + infoSku.sku)
                        }, 1000);
                        
                    }
                    
                }
                else{
                    setIsSuccessSave(false)
                    setMessageSave("Echec d'enregistrement") 
                    setSectionSave(sectionUpdate)
                }
            })

            
        }
    }
    //render
    return (
        <Template>
            <FormulaireContext.Provider value={{
            infoSku: infoSku, setInfoSku: setInfoSku,
            universUpdate: universUpdate, setUniversUpdate: setUniversUpdate,
            universEnUpdate: universEnUpdate, setUniversEnUpdate: setUniversEnUpdate,
            genderUpdate: genderUpdate, setGenderUpdate: setGenderUpdate,
            ageUpdate: ageUpdate, setAgeUpdate: setAgeUpdate,
            marqueUpdate: marqueUpdate, setMarqueUpdate: setMarqueUpdate,
            paysOrigineUpdate: paysOrigineUpdate, setPaysOrigineUpdate: setPaysOrigineUpdate,
            sectionUpdate: sectionUpdate,
            setSectionUpdate: setSectionUpdate,
            sectionSave: sectionSave, setSectionSave: setSectionSave,

            referenceFournisseurUpdate: referenceFournisseurUpdate, setReferenceFournisseurUpdate: setReferenceFournisseurUpdate,
            categorieUpdate: categorieUpdate, setCategorieUpdate: setCategorieUpdate,
            categorieEnUpdate: categorieEnUpdate, setCategorieEnUpdate: setCategorieEnUpdate,
            sousCategorieUpdate: sousCategorieUpdate, setSousCategorieUpdate: setSousCategorieUpdate,
            sousCategorieEnUpdate: sousCategorieEnUpdate, setSousCategorieEnUpdate: setSousCategorieEnUpdate,
            filtreUpdate: filtreUpdate,	setFiltreUpdate: setFiltreUpdate,
            filtreEnUpdate: filtreEnUpdate,	setFiltreEnUpdate: setFiltreEnUpdate,  
            categorieGoogleUpdate: categorieGoogleUpdate, setCategorieGoogleUpdate: setCategorieGoogleUpdate,
            referenceCouleurUpdate: referenceCouleurUpdate, setReferenceCouleurUpdate: setReferenceCouleurUpdate, 
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
            matiereGoogleUpdate: matiereGoogleUpdate, setMatiereGoogleUpdate: setMatiereGoogleUpdate,
            

            messageSave: messageSave, setMessageSave: setMessageSave,
            isSuccessSave: isSuccessSave, setIsSuccessSave: setIsSuccessSave,

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
                <div><Link to="/produits/export">Liste des produits exporter > </Link></div>
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
