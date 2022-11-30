import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ListeContext } from "./Context/ListeContext";

const Pagination = () => {
    const [valuePage, setValuePage] = useState([])
    const {currentPage, setCurrentPage, nextPage, setNextPage, lastPage, setLastPage} = useContext(ListeContext)
    /**
     * pagination 10 page 
     * 6 ... 2 (1à4)
     * 7 ... 2 (5)
     * 2 ... 5 ... 2 (toujour au milieu)
     * 2 ... 7 (-5)
     */


    useEffect(()=>{
        let tab = []

        if(lastPage<10){
           tab = [1,2,3,4,5,6,7,8,9,10]
        }
        else{
            if(currentPage<5){
                let prevlast = lastPage - 1
                tab = [1,2,3,4,5,6, "...", prevlast, lastPage]
            }
            if(currentPage==5){
                let prevlast1 = lastPage - 1

                let center1 = currentPage - 2
                let center2 = currentPage - 1 
                let center3 = currentPage
                let center4 = currentPage + 1
                let center5 = currentPage + 2

                tab = [1,2, "...", center1, center2, center3, center4, center5 , "...", prevlast1, lastPage]

            }
            if(currentPage>(lastPage-5)){
                let prevlast1 = lastPage - 1
                let prevlast2 = lastPage - 2
                let prevlast3 = lastPage - 3
                let prevlast4 = lastPage - 4
                let prevlast5 = lastPage - 5

                tab = [1,2, "...", prevlast5, prevlast4, prevlast3, prevlast2, prevlast1, lastPage]
            }
            if(currentPage == (lastPage-5)){
                let prevlast1 = lastPage - 1
                let prevlast2 = lastPage - 2
                let prevlast3 = lastPage - 3
                let prevlast4 = lastPage - 4

                tab = [1,2, "...", prevlast4, prevlast3, prevlast2, prevlast1, lastPage]                
            }

        }
        setValuePage(tab)

    }, [currentPage])

    const handleClick = (index, item) => {
        let newPage = 0
        if(item === "..."){
            newPage = (index == 2) ? (currentPage - 5) : (currentPage + 5)

            newPage = newPage<=0 ? 1 : newPage
        }
        else{
            newPage = parseInt(item)
        }


        setCurrentPage(newPage)
    }
    console.log("currentPage ", currentPage)

    //render
    return (
        <nav aria-label="Page navigation example" className="mt-2">
        <ul className="pagination justify-content-center">
            {
                currentPage == 1 ?
                <li className="page-item disabled">
                    <a className="page-link cursor-pointer" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                :
                <li className="page-item disabled">
                    <a className="page-link cursor-pointer">Previous</a>
                </li>
            }            

            {
                valuePage &&
                valuePage.map((item, index)=>{
                    let bg = (parseInt(item)==currentPage) ? "isSelectedPage" : "pagination" 

                    return (
                        <li className={"page-item cursor-pointer "}  onClick={()=>{handleClick(index, item)}}>
                            <a className={"page-link cursor-pointer"  + bg}>{item}</a>
                        </li>
                    )
                })
            } 
            {
                currentPage == lastPage ? 
                <li className="page-item disabled">
                    <a className="page-link cursor-pointer" tabindex="-1" aria-disabled="true">Next</a>
                </li>
                :
                <li className="page-item cursor-pointer">
                    <a className="page-link">Next</a>
                </li>                
            }          

        </ul>
        </nav>
    )
}

export default Pagination;

