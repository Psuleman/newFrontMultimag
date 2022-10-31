import { Link, useNavigate } from "react-router-dom";
import Template from "../components/Layout/Template";
import "../assets/scss/nouveauProduit.scss"
import { useState, useEffect } from "react";
import Papa from "papaparse"
import Moment from 'moment'

const NouveauProduit = () => {
    //variable
    let navigate = useNavigate()
	const [file, setFile] = useState()
	const [data, setData] = useState()
	const [patienceImport, setPatienceImport] = useState(false)
	const [finImport, setFinImport] = useState(false)
	const [totaldata, setTotaldata] = useState()
	const [totalNewProduct, setTotalNewProduct] = useState()
    let i = 0;
    let progessbar = 0
    //fonction
    useEffect(()=>{
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                if(data){
                    //console.log(data.length)
                    let dateNow = Moment().format('YY')
                    dateNow = parseInt(dateNow)
                    
                    //Comparaison
                    //setTotalNewProduct(data.length)
                    let compteur = 0
                    let compteurNewProduct = 0

                    
                    for(let item in data)
                    {
                        if(parseInt(data[item][0])>0)
                        {
                            let dateArr = Moment(data[item][1], 'DD/MM/YYYY').format()
                            let donnesJson = {
                                sku: parseInt(data[item][0]),
                                taille: data[item][23],
                                dateArrivee:  "" + Moment(dateArr).format("YYYY-MM-DD"),
                                codeFournisseur: ""+ data[item][2],
                                nomFournisseur: ""+ data[item][3],
                                referenceFournisseur : ""+data[item][4],
                                codeCouleur: ""+ data[item][5],
                                referenceCouleur1 : ""+ data[item][6],
                                referenceCouleur2 : ""+ (data[item][7]?data[item][7]:""),                            
                                codeSaison: data[item][8]?parseInt(data[item][8]):0,
                                codeCategorieUnivers: data[item][10] ?parseInt(data[item][10]):0,//famille1
                                categorieUnivers: ""+ (data[item][11]?data[item][11]: ""),
                                codeModeAquisition: data[item][12]?parseInt(data[item][12]):0, //famille 2  
                                modeAcquisition: ""+ (data[item][13]?data[item][13]: ""),
                                codeSousCategorieFnr: data[item][14] ?parseInt(data[item][14]):0,//famille 3
                                sousCategorieFnr: ""+ (data[item][15]?data[item][15]:""),
                                codeTag: data[item][16] ?parseInt(data[item][16]):0, //famille 4
                                tag: ""+ (data[item][17]?data[item][17]:""),
                                codeFamille5: data[item][18] ?parseInt(data[item][18]):0,
                                famille5: ""+ (data[item][19]?data[item][19]:""),
                                codeFamille6: data[item][20] ?parseInt(data[item][20]):0,
                                famille6: ""+ (data[item][21]?data[item][21]:""),
                                stockMag0 : data[item][26] ?parseInt(data[item][26]):0,
                                stockMag3 : data[item][28] ?parseInt(data[item][28]):0,
                                stockMag7 : data[item][30] ?parseInt(data[item][30]):0,
                                stockMag9 : data[item][32] ?parseInt(data[item][32]):0,
                                stockMag11 : data[item][34] ?parseInt(data[item][34]):0,
                                stockMag12 : data[item][36] ?parseInt(data[item][36]):0,
                                stockMag14 : data[item][38] ?parseInt(data[item][38]):0,
                                stockMag18 : data[item][40] ?parseInt(data[item][40]):0,
                                stockMag20 : data[item][42] ?parseInt(data[item][42]):0,
                                stockMag60 : data[item][44] ?parseInt(data[item][44]):0,
                                grilleTailleFournisseur: ""+(data[item][22]?data[item][22]:""),
                                prixVente : data[item][24]?parseFloat(data[item][24]):0,
                                anneeSortie: data[item][9]?parseInt(data[item][9]):0

                            }
                            //request post
                            console.log(JSON.stringify(donnesJson))					      
                            let token = JSON.parse(localStorage.getItem('user_multimag')).token
                            const requestOptions = {
                                method: 'POST',
                                headers: { 
                                'Content-Type': 'application/json',
                                accept: 'application/json',
                                //Authorization : `Bearer ${token}`
                                },
                                body: JSON.stringify(donnesJson)
                            };

                            //fetch('http://212.129.3.31:8080/api/produits', requestOptions)
                            fetch('http://localhost:8001/api/produits', requestOptions)
                            .then(response => {
                                //response.json()
                                
                                if(response.ok){
                                    compteurNewProduct++	
                                                                
                                }
                                compteur++
                                i++
                                let progessbar = (i * 100) / data.length
                                if(compteur == data.length){
                                    setFinImport(true)
                                    setTotalNewProduct(compteurNewProduct)
                                    setPatienceImport(false)

                                }
                            })
                            //.then(data => return data)
                            .catch(err=>{
                                //console.log(err)
                            });	
                        }
                    }
                }
            }            
        }
        else{
            navigate('/')
        }

    }, [data])

	const handleSubmit = (e) => {
		e.preventDefault()

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
					let tabTemporaire = []
					for(let i in donnees){
						let dateProduit = Moment(donnees[i][1], 'DD/MM/YYYY').format("YYYY-MM-DD")
						if(Moment(dateProduit).isAfter(dateAnterieur)){
							//console.log(dateAnterieur)
								tabTemporaire.push(donnees[i])
						}
					}
					setData(tabTemporaire) //A REMETTRE

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
							console.log("test")
							tabTemporaire.push(donnees[i])
						 }
						 else{
							//console.log(dateProduit)
						 }
				}
					setData(tabTemporaire)
					console.log(tabTemporaire)*/
				}})

			}
		}		
		}
    //render
    return (
        <Template>
            <header>
                <div><Link to="/liste-produit">Liste des produits > </Link></div>
                <div className="fs-3 fw-bolder">Importer les produits</div>
            </header>
            <section className="contentInfoProduit  mt-3">
                <div id="newProduit" className="pt-3 px-3 pb-4">
                    <div>Importer le fichier product.csv de multimag</div>
                    <small>Tous les champs sont obligatoires.</small>
                    <form className="mt-3"  onSubmit={handleSubmit}>
                    <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <label htmlFor="formFile" class="form-label">Votre fichier</label>
                        <input className="form-control" type="file" id="formFile" required onChange={(e)=>{setFile(e.target.files)}}  />
                    </div>

                    <div><button className="btn btn-outline-dark">Envoyer</button></div>
                    </form>
                </div>
                {
                    patienceImport && 
                    <div className="pt-3 px-3 pb-4">
                        {
                            finImport && "Terminer"
                        }
                        {
                            patienceImport && 
                            <div>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="mx-3">Traitement en cours...</span>
                            <div>{progessbar} %</div>
                            </div>


                            


                        }
                    </div>
                }
                {
                    finImport && 
                    <div className="pt-3 px-3 pb-4">
                        {
                            totaldata && <div>{totaldata} produits importer</div>
                        }
                        {
                            totaldata && finImport && <div>
                            {
                                totalNewProduct>1 ?
                                <h5>{totalNewProduct} nouveaux produits sur {totaldata} produits importer</h5> 
                                : 
                                <h5>{totalNewProduct} nouveau produit sur {totaldata} produits importer</h5> 
                            }
                        </div>
                        }

                    </div>   
                }       
            </section>

        </Template>
    )
}

export default NouveauProduit;