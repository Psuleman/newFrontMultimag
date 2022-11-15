import Moment from "moment"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Ceintre from "../../../assets/image/cintre-de-vetements.png"

const Value = ({item}) => {
    //variable
    const [showVariant, setShowVariant] = useState(false)
    const [categorie, setCategorie] = useState()
    const [stock, setStock] = useState([])
    const [imgExist, setImgExist] = useState(false)
    const [tagBackground, setTagBackground] = useState("")
    let navigate = useNavigate()

    //fonction
    useEffect(()=>{
        console.log("item variants", item.variants)
		//image
		fetch(item.pictures)
		.then(function(response) {
			if(response.status != 404){
				setImgExist(true)
			}
			else{
				setImgExist(false)
			}
		  
		})
		.then(function(myBlob) {

		}).catch((err)=>{});


        let tab = {
            boissy : 0,
            sevigne : 0,
            herold : 0,
            depot : 0,
            referencement : 0,
            total : 0,  
            taille : ""          
        }
        // if(item.variants){
        //     let arrayTemp = item.variants
        //     arrayTemp.forEach(element => {
        //         tab = {
        //             boissy : tab.boissy + element.stockages[0].stock_18,
        //             sevigne : tab.sevigne + element.stockages[0].stock_7,
        //             herold : tab.herold + element.stockages[0].stock_14,
        //             depot : tab.depot + element.stockages[0].stock_0,
        //             referencement : tab.referencement + element.stockages[0].stock_9,
        //             total : tab.total + element.stockages[0].stock_3,
        //             taille : tab.taille + ", " + element.taille_fnr
        //         }
                
        //     });
        //     tab.taille = tab.taille.substring(1)
        // }
        setStock(tab)


        /**
         * Categorie
         * 
         *         console.log("item ", item.filtre.sousCategorieRef.categorieRef.categorieRef)

         */
        if(item.filtre){
            let categorieItem = item.filtre ? item.filtre.sousCategorieRef.categorieRef.categorieRef : item.categorie_univers
            categorieItem += " > " + (item.filtre ? item.filtre.filtre : item.sous_categorie_fnr)
            setCategorie(categorieItem)
        }
    }, [])

    const handleClick = () => {
        let path = `/produit/` + item.sku + ``;
        navigate(path)
    }

    //render
    return (
        <tbody>
            <tr>
                <td className="px-2 detailSku">
                <center>
                    <div className="subsku" onClick={()=>{setShowVariant(!showVariant)}}>
                        {showVariant ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
                    </div>
                </center>
                </td>
                <td className="px-2 sku"><a href={item.lien} target="black">{item.sku}</a></td>


                <td className="px-2">{item.saison}</td>
                <td className="px-2">{Moment(item.date_arrivee).format("DD-MM-YYYY")}</td>
                <td className="px-2">{item.dateRef ? Moment(item.dateRef).format("DD-MM-YYYY") : ""}</td>
                <td className="px-2">{item.marque ? item.marque : item.nom_fournisseur}</td>
                <td className="px-2">{item.univers}</td>
                <td className="px-2">{categorie ? categorie : item.filtre.filtre}</td>
                <td className="px-2">{item.couleur}</td>
                <td className="px-2">{item.tarifs[0].prix_vente} €</td>
                <td className="px-2">{item.tarifs[0].remise ? item.tarifs[0].remise : 0}</td>
                <td className="px-2">
                {
                    imgExist ? 
                    <img src={item.pictures} alt="non disponible" /> 
                    :
                    <img src={Ceintre} alt="non disponible" className="imgListTab" />
                }
                </td>
                <td className="px-2">{stock.taille}</td>
                <td className="px-2">{stock.boissy}</td>
                <td className="px-2">{stock.sevigne}</td>
                <td className="px-2">{stock.herold}</td>
                <td className="px-2">{stock.depot}</td>
                <td className="px-2">{stock.referencement}</td>
                <td className="px-2">{stock.total}</td>
            
                {
                    item.code_tag == 0 ? 
                    <td className="px-2 text-bg-warning status">Non tagué</td>
                    :
                    <td className="px-2 status">{item.tag}</td>
                }
                <td className="px-2 action">
                    <center>
                        <div className="modifier text-muted" onClick={handleClick}>
                            <i className="fa fa-pen"></i>
                        </div>
                    </center>
                </td>                
            </tr>
            {
                showVariant &&
                item.variants.map((i, index)=>(
                <tr key={index}>
                    <td className="px-2 sku" colSpan="2" >{i.variant_sku}</td>
                    <td className="px-2" colSpan="10"></td>
                    <td className="px-2">{i.taille_fnr}</td>
                    <td className="px-2">{i.stockages[0].stock_18}</td> 
                    <td className="px-2">{i.stockages[0].stock_7}</td>
                    <td className="px-2">{i.stockages[0].stock_14}</td>
                    <td className="px-2">{i.stockages[0].stock_0}</td>
                    <td className="px-2">{i.stockages[0].stock_9}</td>
                    <td className="px-2">{i.stockages[0].stock_3}</td>
                    <td className="px-2 status" />                
                    <td className="px-2 action" />                
                </tr>
                ))
            }  

        </tbody>
    )
}

export default Value

