import { useContext } from "react";
import { useEffect, useState } from "react";
import { ListeContext } from "./Context/ListeContext";

const Footer = () => {
    //variable
    const [listePage, setListePage] =  useState([])
    const {pageCurrent, setPageCurrent, totalSkus, setTotalSkus} = useContext(ListeContext)
    //fonction
    useEffect(()=>{
        let tab =[]
        if(totalSkus<11){
            for(let i=1; i<11; i++){
                tab[0].push(i)
            }
        }
        else{
            if(pageCurrent<5){
                let j = 0;
                for(let i=1; i<7; i++){
                    tab[0][j] = i
                }
                j = 0;
                for(let i=(totalSkus-2); i<3; i++){    
                    tab[2][j] = i
                }
            } //page 4 max
            if(pageCurrent==5){
                let j = 0;
                for(let i=1; i<8; i++){
                    tab[0][j] = i
                    j++
                }
                j = 0;
                for(let i=(totalSkus-2); i<3; i++){
                    
                    tab[2][j] = i
                    j++
                }
            }
            if(pageCurrent==(totalSkus-5)){
                let j = 0;
                for(let i=1; i<3; i++){
                    tab[0][j] = i
                    j++
                }
                j = 0;
                for(let i=(totalSkus-6); i<7; i++){
                    tab[2][j] = i
                    j++
                }
            } 
            else{
                tab[0]=[]
                let j = 0;
                for(let i=1; i<3; i++){
                    tab[0][j] = i
                    j++
                }
                j=0
                for(let i=(pageCurrent-2); i<5; i++){
                    tab[1][j] = i
                    j++
                }
                j=0
                for(let i=(totalSkus-2); i<3; i++){
                    tab[2][j] = i
                    j++
                }
            }
        }
        setListePage(tab)
    }, [])
    //Render
    return (
        <footer className="footerTable pt-4">
            <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Précédent</a>
                </li>
                {
                    listePage[0] && listePage[0].map((item)=>(
                        <li class="page-item"><button class="page-link">{item}</button></li>
                    ))
                }
                <li class="page-item"><a class="page-link" href="#">...</a></li>                
                <li class="page-item"><a class="page-link" href="#">999</a></li>
                <li class="page-item"><a class="page-link" href="#">1000</a></li>
                <li class="page-item">
                <a class="page-link" href="#">Next</a>
                </li>
            </ul>
            </nav>
        </footer>
    )
}
export default Footer;