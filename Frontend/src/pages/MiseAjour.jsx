import { useEffect, useState } from "react"
import Moment from 'moment'
import Papa from "papaparse"
import { getTraduction } from "../services/deeple.service"
import { getProduit } from "../services/produit.service"
import { GrilleTaille } from "../data/GrilleTaille"


const MiseAjour = () => {
    const [file, setFile] = useState()
	const [data, setData] = useState()
	const [patienceImport, setPatienceImport] = useState(false)
	const [finImport, setFinImport] = useState(false)
	const [totaldata, setTotaldata] = useState(0)
	const [totalNewProduct, setTotalNewProduct] = useState(false)
    const [progressBar, setProgressBar] = useState(0)

    useEffect(()=>{
        if(data){
            console.log(data)
            let donnees = []

            data.forEach(element => {
                if(parseInt(element[0])>0){
                    /**
                     * Infosku
                     */
                    let sku = element[35].split('_')[0]
                    let infoSku = []

                    let promiseSku = Promise.resolve(getProduit(parseInt(sku)))

                    promiseSku.then((value) =>{
                        if(value){
                            for(let item in value){
                                let valeur = value[item]
                                if(item == "hydra:member"){
                                    infoSku = valeur
                                }
                            }
                        }
                    })

                    /**
                     * Caractéristique produits
                     * Nom Produit , description produit, dimension, poids, pays origine, coupe et entretien
                     */

                    let nom_produit = element[3].split(element[5]+' ', )[1]
                    let poids = parseFloat(element[38])>0 ? parseFloat(element[38]) : parseInt(0)
                    let pays_origine = element[52] // 100
                    let coupe = element[70]
                    let entretien = element[72]


                    /**
                     * Tags, Categorie, sous catégorie, filtre, couleur, univers
                     */
                    let tags = element[7]
                    let tagTab = element[7].split(",")
                    let couleur = ""
                    let color = ""
                    let categorie = ""
                    let category = ""
                    let souscategorie = ""
                    let souscategory = ""
                    let univers = element[69]
                    let universEn =""

                    tagTab.forEach(element => {
                        element = element.trim()
                        if(element.match(/Couleur/i)){ couleur=element}
                        else if(element.match(/Color/i)){ color=element }                    
                        else if(element.match(/Cat?gorie/i)){ souscategorie = element }//sous catégorie
                        else if(element.match(/Category/i)){souscategory = element}  //sous catégory

                        //Univers
                        else if(element == "Homme" || element=="Femme" || element=="Maison" || element=="Enfant"){
                            univers = element
                        }
                        else if(element == "Men" || element=="Women" || element=="Home" || element=="Kids"){
                            universEn = element.trim()
                        }
                        
                    });

                    /**
                     * Variant
                     */
                    let taille = element[29]
                    let variant_sku = element[35]
                    let variant = []
                    let grilleTaille = ""

                    let grilleTailleTab = GrilleTaille;

                    if(grilleTailleTab /*&& infoSku[0]*/){
                        grilleTailleTab.forEach(element => {
                            if(element.tailles == taille){
                                grilleTaille = element.grilleTaille
                            }
                        });


                        // for(let i in infoSku[0].variants){
                        //     let item = infoSku[0].variants[i]
                        //     let tailleRef = taille

                        //     regex = new RegExp(taille)
                        //     if(item.taille_fnr.match(regex)){
                        //     variant[i] = {
                        //         taille_fnr: item.taille_fnr,
                        //         taille_ref: {taille_ref: tailleRef},
                        //         variant_sku: variant_sku
                        //     }                            
                        //     }


                        // }                    
                    }

                    /**
                     * Tarifs
                     */
                    let prix = parseFloat(element[40])
                    let prix_reduit = parseFloat(element[41])

                    let tarifs = []
                    tarifs[0] = {
                        pays: {pays: "France"},
                        prix_vente: prix,
                        remise: prix_reduit ? (prix_reduit * 100) / prix : null
                    }

                    /**
                     * Matières
                     */

                    let matiere1 = element[73]
                    let pourcentage1 = parseFloat(element[74]) // % à enlever
                    let matiere2 = element[75]
                    let pourcentage2 = parseFloat(element[76]) // % à enlever

                    let matiere3 = element[87]
                    let pourcentage3 = parseFloat(element[88]) // % à enlever
                    let matiere4 = element[89]
                    let pourcentage4 = parseFloat(element[90])
                    let matiere5 = element[91]
                    let pourcentage5 = parseFloat(element[92]) // % à enlever

                    let matiere6 = element[94]
                    let pourcentage6 = parseFloat(element[95]) // % à enlever
                    let matiere7 = element[96]
                    let pourcentage7 = parseFloat(element[97])

                    let matiere8 = element[104]
                    let pourcentage8 = parseFloat(element[105]) // % à enlever
                    let matiere9 = element[106]
                    let pourcentage9 = parseFloat(element[107]) // % à enlever
                    let matiere10 = element[113]
                    let pourcentage10 = parseFloat(element[114])

                    let matiereUpdate = []
                    matiereUpdate.push( { matiere:  { matiere : matiere1}, pourcentageMatiere: pourcentage1 })
                    matiereUpdate.push( { matiere:  { matiere : matiere2}, pourcentageMatiere:pourcentage2 })
                    matiereUpdate.push( { matiere:  { matiere : matiere3}, pourcentageMatiere:pourcentage3 })
                    matiereUpdate.push( { matiere:  { matiere : matiere4}, pourcentageMatiere:pourcentage4 })
                    matiereUpdate.push( { matiere:  { matiere : matiere5}, pourcentageMatiere:pourcentage5 })
                    matiereUpdate.push( { matiere:  { matiere : matiere6}, pourcentageMatiere: pourcentage6 })
                    matiereUpdate.push( { matiere:  { matiere : matiere7}, pourcentageMatiere:pourcentage7 })
                    matiereUpdate.push( { matiere:  { matiere : matiere8}, pourcentageMatiere:pourcentage8 })
                    matiereUpdate.push( { matiere:  { matiere : matiere9}, pourcentageMatiere:pourcentage9 })
                    matiereUpdate.push( { matiere:  { matiere : matiere10}, pourcentageMatiere:pourcentage10 })

                    let matiere = []
                    if(matiereUpdate[0].pourcentageMatiere!=0){
                        matiereUpdate.forEach(element => {
                            if(element.pourcentageMatiere>0 && element.matiere && element.matiere.matiere!=""){
                                matiere.push({
                                    matieres :  element.matiere.matiere,
                                    pourcentageMatiere: parseFloat(element.pourcentageMatiere),
                                })
                            }
                        })
                    }
                        
                    // let filtre = {
                    //     filtre: ,
                    //     filtreRefEn: ,
                    //     sousCategorieRef: {
                    //         sousCategorieRef: souscategorie.split("_")[1],
                    //         sousCategorieRefEn: souscategory.split("_")[1],
                    //         categorie_ref: {
                    //             categorieRef: element[6],
                                // categorieRefEn: 
                    //         }
                    //     }
                    // }

                    donnees.push({
                        id_leclaireur : parseInt(element[0]),
                        sku: parseInt(sku),
                        marqueUpdate: element[5],
                        paysOrigine: element[52] ? element[52] : element[101],
                        univers: univers,
                        universEn: universEn,
                        // // filtre: filtre,
                        // categorie: filtre.sousCategorieRef.categorie_ref.categorieRef,
                        // categorieEn: filtre.sousCategorieRef.categorie_ref.categorieRefEn,

                        sousCategorie: souscategorie.split("_")[1],
                        sousCategorieEn: souscategory.split("_")[1],

                        // filtreProduit: filtre.filtre,
                        // filtreProduitEn: filtre.filtreRefEn,

                        couleur: couleur.split("_")[1],
                        couleurEn: color.split("_")[1],
                        entretien: element[72],
                        coupe: element[70],
                        poids: element[38],                
                        dimensionFr: element[102],

                        descriptionFr: element[4],//à revoir avec les "" 93
                        nomProduitFr: nom_produit, //à revoir pour les ""
                        matieres: matiere,
                        grilleTailleRef: grilleTaille,
                        // variantProduits: variant,
                    
                        tarifsProduits: tarifs,
                        tagsRef: tags,
                        dateRef: Moment().format("YYYY-MM-DD"),
                        referencer: true,
                        export: false
                    })                    
                    }

                });


                console.log("donnees", donnees)            
        }

    }, [data])

    const handleSubmit = (e) =>  {
        e.preventDefault()
        setFinImport(false)
        setPatienceImport(true)

        let fichier = file[0].name
        fichier = fichier.split('.')
        let extension = fichier[1]

        if(file){
            if(extension == "csv"){
                Papa.parse(file[0],{
                    complete: function(resultat){
                        let donnees = resultat.data
                        setTotaldata(donnees.length)

                        let dateAnterieur = Moment().subtract(100,'d').format('YYYY-MM-DD')
                        // let dateAnterieur = Moment().subtract(300,'d').format('YYYY-MM-DD')
                        let tabTemporaire = []

                        for(let i in donnees){
                            let dateProduit = Moment(donnees[i][1], 'DD/MM/YYYY').format("YYYY-MM-DD")
                            if(Moment(dateProduit).isAfter(dateAnterieur)){
                                ////console.log(dateAnterieur)
                                tabTemporaire.push(donnees[i])
                            }
                        }
    
                        if((tabTemporaire.length)>0){
                            setData(tabTemporaire.sort()) //A REMETTRE
                        }
                        else{
                         setFinImport(true)
                         setTotalNewProduct(0)
                         setPatienceImport(false)                      
                        }
                    }
                })
            }
        }

    }
    //render
    return (
        <form onSubmit={handleSubmit}>
                <input className="form-control" type="file" id="formFile" required onChange={(e)=>{setFile(e.target.files)}}  />
            <button type="submit">Valider</button>
        </form>
    )
}

export default MiseAjour;