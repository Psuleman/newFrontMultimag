import { useState, useEffect } from "react"
import Papa from "papaparse"
import Moment from 'moment'
import { setNewProduit } from "../../services/produit.service"
import { useContext } from "react"
import { NouveauProduitContext } from "./Context/NouveauProduitContext"

const Formulaire = () => {
    const [file, setFile] = useState()
    const {data, setData, setPatienceImport, setFinImport, progressBar, setProgressBar, setTotaldata, totalData, setTotalNewProduct }= useContext(NouveauProduitContext)

    let i = 0
    //fonction
    useEffect(()=>{
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                if(data && data.length>0){
                    ////console.log(data.length)
                    let dateNow = Moment().format('YY')
                    dateNow = parseInt(dateNow)
                    
                    //Comparaison
                    //setTotalNewProduct(data.length)
                    let compteur = 0
                    let compteurNewProduct = 0

                    //console.log(data)
                    let donnees = []

                    for(let i = 0; i<data.length; i++){
                        if(parseInt(data[i][0])>0)
                        {
                            let dataExist = false
                            let dateArr = Moment(data[i][1], 'DD/MM/YYYY').format()

                            let itemData = {
                                sku: parseInt(data[i][0]),
                                dateArrivee:  "" + Moment(dateArr).format("YYYY-MM-DD"),
                                codeFournisseur: ""+ data[i][2],
                                nomFournisseur: ""+ data[i][3],
                                referenceFournisseur : ""+data[i][4],
                                codeCouleur: ""+ data[i][5],
                                referenceCouleur1 : ""+ data[i][6],
                                referenceCouleur2 : ""+ (data[i][7]?data[i][7]:""),                            
                                codeSaison: data[i][8]?parseInt(data[i][8]):0,
                                codeCategorieUnivers: data[i][10] ?parseInt(data[i][10]):0,//famille1
                                categorieUnivers: ""+ (data[i][11]?data[i][11]: ""),
                                codeModeAquisition: data[i][12]?parseInt(data[i][12]):0, //famille 2  
                                modeAcquisition: ""+ (data[i][13]?data[i][13]: ""),
                                codeSousCategorieFnr: data[i][14] ?parseInt(data[i][14]):0,//famille 3
                                sousCategorieFnr: ""+ (data[i][15]?data[i][15]:""),
                                codeTag: data[i][16] ?parseInt(data[i][16]):0, //famille 4
                                tag: ""+ (data[i][17]?data[i][17]:""),
                                codeFamille5: data[i][18] ?parseInt(data[i][18]):0,
                                famille5: ""+ (data[i][19]?data[i][19]:""),
                                codeFamille6: data[i][20] ?parseInt(data[i][20]):0,
                                famille6: ""+ (data[i][21]?data[i][21]:""),
                                grilleTailleFournisseur: ""+(data[i][22]?data[i][22]:""),
                                prixVente : data[i][24]?parseFloat(data[i][24]):0,
                                anneeSortie: data[i][9]?parseInt(data[i][9]):0,
                                variantProduits: []
                            }

                            let dataItem = data[i]

                            if(i>0){
                                for(let j=0; j<donnees.length; j++){
                                    if(donnees[j].sku == dataItem[0]){
                                        //données existe déja
                                        dataExist = true
                                        donnees[j].variantProduits.push({
                                            taille: data[i][23],
                                            stockMag0 : data[i][26] ?parseInt(data[i][26]):0,
                                            stockMag3 : data[i][28] ?parseInt(data[i][28]):0,
                                            stockMag7 : data[i][30] ?parseInt(data[i][30]):0,
                                            stockMag9 : data[i][32] ?parseInt(data[i][32]):0,
                                            stockMag11 : data[i][34] ?parseInt(data[i][34]):0,
                                            stockMag12 : data[i][36] ?parseInt(data[i][36]):0,
                                            stockMag14 : data[i][38] ?parseInt(data[i][38]):0,
                                            stockMag18 : data[i][40] ?parseInt(data[i][40]):0,
                                            stockMag20 : data[i][42] ?parseInt(data[i][42]):0,
                                            stockMag60 : data[i][44] ?parseInt(data[i][44]):0
                                        })
                                        break;
                                    }
                                }
                            }
                            else{
                                dataExist = false
                            }  
                            
                            if(dataExist == false){
                                /**
                                 * Nouveau données
                                 */
                                 itemData.variantProduits.push({
                                    taille: data[i][23],
                                    stockMag0 : data[i][26] ?parseInt(data[i][26]):0,
                                    stockMag3 : data[i][28] ?parseInt(data[i][28]):0,
                                    stockMag7 : data[i][30] ?parseInt(data[i][30]):0,
                                    stockMag9 : data[i][32] ?parseInt(data[i][32]):0,
                                    stockMag11 : data[i][34] ?parseInt(data[i][34]):0,
                                    stockMag12 : data[i][36] ?parseInt(data[i][36]):0,
                                    stockMag14 : data[i][38] ?parseInt(data[i][38]):0,
                                    stockMag18 : data[i][40] ?parseInt(data[i][40]):0,
                                    stockMag20 : data[i][42] ?parseInt(data[i][42]):0,
                                    stockMag60 : data[i][44] ?parseInt(data[i][44]):0
                                 })

                                 donnees.push(itemData)
                            }
                        }

                    }

                    //console.log(donnees)


                    donnees.forEach(element => {
                        //console.log(JSON.stringify(element))
                        const promise = Promise.resolve(setNewProduit(element));

                        promise.then((value) => {
                            if(value && value.ok){
                                compteurNewProduct++
                            }
                            i = i==0 ? 1 : i
                            // //console.log("value", i, ": ", value)
                            // //console.log("data.length : ", data.length)
                            setProgressBar((i*100) / donnees.length)
                            i++

                            // //console.log((i*100) / data.length)

                            // //console.log("progressbar", progressBar)
                            localStorage.setItem("totalData", progressBar)
                            if(i == donnees.length){
                            setFinImport(true)
                            setTotalNewProduct(compteurNewProduct)
                            setPatienceImport(false)
                        }

                    })
                    });

                }
                else{
                    /**
                     * A compléter
                     */
                    //  setFinImport(true)
                    //  setTotalNewProduct(0)
                    //  setPatienceImport(false)                        


                }
            }            
        }
        else{
            navigate('/')
        }

    }, [data])

    const handleSubmit = (e) => {
        //réinitialisation
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
                    //setData(resultat.data)
                    let donnees = resultat.data

                    setTotaldata(donnees.length)

                    let dateAnterieur = Moment().subtract(30,'d').format('YYYY-MM-DD')
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
                        setData(tabTemporaire) //A REMETTRE
                    }
                    else{
                     setFinImport(true)
                     setTotalNewProduct(0)
                     setPatienceImport(false)                      
                    }

                    /*let donnees = resultat.data
                    setTotaldata(donnees.length)
                    let datedeb = Moment("2021-12-31").format('YYYY-MM-DD')
                    let datefin = Moment("2022-08-31").format('YYYY-MM-DD')

                    let tabTemporaire = []
                    for(let i in donnees){
                        let dateProduit = Moment(donnees[i][1], 'DD/MM/YYYY').format("YYYY-MM-DD")
                        
                            if(
                            (Moment(dateProduit).isAfter(datedeb))
                            && 
                            (Moment(dateProduit).isBefore(datefin))
                            ){
                            //console.log("test")
                            tabTemporaire.push(donnees[i])
                            }
                            else{
                            ////console.log(dateProduit)
                            }
                }
                    setData(tabTemporaire)
                    //console.log(tabTemporaire)*/
                }})

            }
        }	
    }
    //render
    return (
        <div id="newProduit" className="pt-3 px-3 pb-4">
            <div>Importer le fichier product.csv de multimag</div>
            <small>Tous les champs sont obligatoires.</small>
            <form className="mt-3"  onSubmit={handleSubmit}>
            <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <label htmlFor="formFile" className="form-label">Votre fichier</label>
                <input className="form-control" type="file" id="formFile" required onChange={(e)=>{setFile(e.target.files)}}  />
            </div>

            <div>
                <button className="btn btn-outline-dark">Envoyer</button>
            </div>
            </form>
            </div>
    )
}

export default Formulaire;
