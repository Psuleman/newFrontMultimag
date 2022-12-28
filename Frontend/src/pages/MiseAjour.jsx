import { useEffect, useState } from "react"
import Moment from 'moment'
import Papa from "papaparse"


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
                let sku = element[35].split('_')[0]
                donnees.push({
                    id_leclaireur : element[0],
                    sku: sku,
                    marqueUpdate: element[5],
                    // paysOrigine: paysOrigineUpdate?paysOrigineUpdate : "",
                    // univers: universUpdate? universUpdate : infoSku.univers,
                    // universEn: universEnUpdate? universEnUpdate : infoSku.universEn,
                    // referenceFournisseur: referenceFournisseurUpdate ? referenceFournisseurUpdate : infoSku.reference_fournisseur,
                    // referenceCouleur: referenceCouleurUpdate ? referenceCouleurUpdate : infoSku.reference_couleur,
                    // // filtre: filtre,
                    // categorie: filtre.sousCategorieRef.categorie_ref.categorieRef,
                    // categorieEn: filtre.sousCategorieRef.categorie_ref.categorieRefEn,

                    // sousCategorie: filtre.sousCategorieRef.sousCategorieRef,
                    // sousCategorieEn: filtre.sousCategorieRef.sousCategorieRefEn,

                    // filtreProduit: filtre.filtre,
                    // filtreProduitEn: filtre.filtreRefEn,

                    // couleur: couleurUpdate?couleurUpdate:"",
                    // couleurEn: couleurEnUpdate?couleurEnUpdate:"",
                    // entretien: entretienUpdate?entretienUpdate:"",
                    // entretienEn: entretienEnUpdate?entretienEnUpdate:"",
                    // coupe: coupeUpdate?coupeUpdate:"",
                    // coupeEn: coupeEnUpdate?coupeEnUpdate:"",

                    // longueur: longueurUpdate? parseFloat(longueurUpdate) : null,
                    // largeur: largeurUpdate? parseFloat(largeurUpdate) : null,
                    // hauteur: hauteurUpdate? parseFloat(hauteurUpdate) : null,
                    // poids: poidsUpdate? parseFloat(poidsUpdate) : null,                
                    // dimensionFr: dimensionFrUpdate? dimensionFrUpdate : null,

                    descriptionFr: element[4],
                    // descriptionEn: descriptionEnUpdate? descriptionEnUpdate : "",
                    // nomProduitFr: nomProduitFrUpdate? nomProduitFrUpdate : "",
                    // nomProduitEn: nomProduitEnUpdate? nomProduitEnUpdate : "", 
                    // matieres: matiere,
                    // grilleTailleRef: grilleTailleUpdate,
                    // variantProduits: attributUpdate ? attributUpdate : [],
                
                    // tarifsProduits: tarifUpdate ? tarifUpdate : [],
                    // tagsRef: tagsReferencementUpdate? tagsReferencementUpdate:"",
                    // dateRef: Moment().format("YYYY-MM-DD"),
                    // referencer: referencer,
                })                    
                }

            });


            console.log(donnees)            
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
                            // if(Moment(dateProduit).isAfter(dateAnterieur)){
                                ////console.log(dateAnterieur)
                                tabTemporaire.push(donnees[i])
                            // }
                        }
    
                        if((tabTemporaire.length)>0){
                            setData(tabTemporaire) //A REMETTRE
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