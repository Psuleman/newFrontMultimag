import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Moment from "moment"
import Ceintre from "../../../assets/image/cintre-de-vetements.png"
import { ListeContext } from "../Context/ListeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const ValueListe = ({item}) => {
    //variable
    const [showVariant, setShowVariant] = useState(false)
    const [categorie, setCategorie] = useState()
    const [stock, setStock] = useState([])
    const [imgExist, setImgExist] = useState(false)
    const [tagBackground, setTagBackground] = useState("")
    const [variants, setVariants] = useState([])

    const {serviceUser} = useContext(ListeContext)
    let navigate = useNavigate()

    let image = ""
    let images = item.pictures
    images = images.split(";")

    image = images[0];
    //fonction
    useEffect(()=>{
        //console.log("item variants", item.variants)
        //image


        // fetch(item.pictures)
        fetch(image)
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
        if(item.variants){
            let arrayTemp = item.variants
            arrayTemp.forEach(element => {
                if(element.stock_18!=null && element.stock_7!=null && element.stock_14!=null && element.stock_0!=null && element.stock_9!=null && element.stock_3!=null){
                tab = {
                    boissy : tab.boissy + element.stock_18,
                    sevigne : tab.sevigne + element.stock_7,
                    herold : tab.herold + element.stock_14,
                    depot : tab.depot + element.stock_0,
                    referencement : tab.referencement + element.stock_9,
                    total : tab.total + element.stock_3,
                    taille : tab.taille + ", " + element.taille_fnr
                }                    
                }

                
            });
            tab.taille = tab.taille.substring(1)
        }
        setStock(tab)


        /**
         * Categorie
         */
        if(item.filtre){
            let categorieItem = (item.filtre_produit) ? item.categorie : item.categorie_univers
            categorieItem += " > " + (item.filtre_produit ? item.filtre_produit : item.sous_categorie_fnr)
            setCategorie(categorieItem)
        }

        let tabVariants = []
        item.variants.forEach(element => {
            if(element.stock_18!=null && element.stock_7!=null && element.stock_14!=null && element.stock_0!=null && element.stock_9!=null && element.stock_3!=null){
                tabVariants.push(element)
            }
            
        });
        setVariants(tabVariants)


    }, [])
    console.log("item : ", item)
    const handleClick = () => {
        let path = `/produit/` + item.sku + ``;
        navigate(path)
    }

    const handleClickDetail = () => {
        let path = `/produit/detail/` + item.sku
        navigate(path)
    }
    //Render
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
            <td className="px-2">{item.marque ? item.marque.marque : item.nom_fournisseur}</td>
            <td className="px-2">{item.univers}</td>
            <td className="px-2">{categorie ? categorie : item.filtre.filtre}</td>
            <td className="px-2">{item.couleur}</td>
            <td className="px-2">{item.tarifs[0].prix_vente} €</td>
            <td className="px-2">{item.tarifs[0].remise ? item.tarifs[0].remise : 0}</td>
            <td className="px-2">
            {
                imgExist ? 
                <img src={image} alt="non disponible" className="imgListTab"  /> 
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
                <td className="px-2 status">{item.tag}
                {item.referencer == 1 && <p className="text-success">Référencer</p>}
                </td>
            }

            <td className="px-2 action">
                <center>
                    {
                        serviceUser=="admin" ?
                        <div className="modifier text-muted" onClick={handleClick}>
                            <i className="fa fa-pen"></i>
                        </div>
                        :
                        <div>
                           <button type="button" className="btn btn-light" onClick={handleClickDetail}>Détail</button>
                        </div>
                    }

                </center>
            </td>
              
        </tr>
        {

            showVariant && variants && 
            variants.map((i, index)=>(
            <tr key={"variant_" + i + "_" + index}>
                <td className="px-2 sku" colSpan="2" >{i.variant_sku}</td>
                <td className="px-2" colSpan="10"></td>
                <td className="px-2">{i.taille_fnr}</td>
                <td className="px-2">{i.stock_18}</td> 
                <td className="px-2">{i.stock_7}</td>
                <td className="px-2">{i.stock_14}</td>
                <td className="px-2">{i.stock_0}</td>
                <td className="px-2">{i.stock_9}</td>
                <td className="px-2">{i.stock_3}</td>
                <td className="px-2 status" />                
                <td className="px-2 action" />            
            </tr>
            ))
        }  

    </tbody>        
    )
}
export default ValueListe;