import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Description from "../components/DetailProduit/Description";
import Image from "../components/DetailProduit/Image";
import Stock from "../components/DetailProduit/Stock";
import TemplateList from "../components/DetailProduit/TemplateList";
import Template from "../components/Layout/Template";
import { getProduit } from "../services/produit.service";

const DetailProduit = () => {
    const [sku, setSku] = useState()
    const [informations, setInformations] = useState()
    const [caracteristique, setCaracteristique] = useState()
    const [matiere, setMatiere] = useState()
    const [stock, setStock] = useState()
    const [description, setDescription] = useState()

    const [infoSku, setInfoSku] = useState()
    let {skuProduit} = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                //si token existe
                if(skuProduit){
                    setSku(parseInt(skuProduit))

                    let promise = Promise.resolve(getProduit(parseInt(skuProduit)));
                    promise.then((value) => {
                        if(value){
                            for(let item in value){
                                if(item == "hydra:member"){
                                    setInfoSku(value[item][0])

                                    let data = value[item][0]

                                    let informationProduit = [
                                        {label : "Référence fournisseur", value: data.reference_fournisseur},
                                        {label : "Marque", value: data.marque ? data.marque.marque : data.nom_fournisseur},
                                        {label : "Univers", value: data.univers },
                                        {label : "Pays Origine", value: data.pays_origine}
                                    ]
                                    setInformations(informationProduit)

                                    let caracteristiqueProduit = [
                                        {label: "Nom du Produit", value: data.nom_produit_fr},
                                        {label: "Catégorie", value: data.categorie + " > " + data.sous_categorie + " > " + data.filtre_produit},
                                        {label: "Couleur", value: data.couleur},
                                        {label: "Dimension", value: data.dimension_fr},
                                        {label: "Poids", value: data.poids},
                                        {label: "Coupe", value: data.coupe},
                                        {label: "Entretien", value: data.entretien},
                                        {label: "Tarifs initial", value: data.tarifs[0].prix_vente + "€"},
                                    ]
                                    if(data.tarifs[0].remise){
                                        caracteristiqueProduit.push({label: "Tarifs remisé", value: (data.tarifs[0].prix_vente - (data.tarifs[0].prix_vente * (data.tarifs[0].remise/100))) + "€"})
                                    }


                                    setCaracteristique(caracteristiqueProduit)

                                    let matiereProduits = []
                                    data.matiereProduits.forEach(element => {
                                        matiereProduits.push({
                                            label: element.matiere.matiere, 
                                            value: element.pourcentageMatiere + "%"
                                        })
                                    });
                                    setMatiere(matiereProduits)

                                    let descriptionProduit = [
                                        { label: "FR", value: data.description_fr },
                                        { label: "EN", value: data.description_en },   
                                    ]
                                    setDescription(descriptionProduit)

                                    let stocks = []
                                    data.variants.forEach(element => {
                                        let total = element.stock_0 + element.stock_14 + element.stock_18 + element.stock_3 + element.stock_7 + element.stock_9
                                        stocks.push({
                                            label: "Taille " + (element.taille_ref ? element.taille_ref.taille_ref : element.taille_fnr),
                                            value: [element.stock_18, element.stock_7, element.stock_14, element.stock_0, element.stock_9, total]
                                        })
                                    })

                                    setStock(stocks)
                                }
                            }
                        }
                    })
                }               
            }            
        }
        else{
            navigate('/')
        }
    }, [sku])
    //render
    return (
        <Template>
            <header>
                <div><Link to="/produits/listes">Liste des produits > </Link></div>
                <div className="fs-3 fw-bolder">Détail produit {parseInt(sku)}</div>
            </header>
            <div className="d-xxl-flex d-xl-flex d-lg-flex d-md-flex mt-4 flex-row flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column-reverse justify-content-xxl-between justify-content-xl-start justify-content-lg-start justify-content-md-start "  id="produit">
                {infoSku && <Image picture={infoSku.pictures} />}

                <section className="col-xxl-10 col-xl-9 col-lg-9 col-md-9 col-sm-12 mt-3 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 md-sm-3 scrollContent" >
                    <div>
                        <TemplateList titre={"IDENTIFICATION DU PRODUIT"} tab={informations} />
                        <TemplateList titre={"CARACTERISTIQUE"} tab={caracteristique} />
                        <TemplateList titre={"MATIERES"} tab={matiere} />
                        <Description titre={"DESCRIPTION"} tab={description}  />
                        <Stock titre = "STOCK & TAILLE" tab={stock} />

                    </div>
                </section>
            </div>
        </Template>
    )
}

export default DetailProduit;