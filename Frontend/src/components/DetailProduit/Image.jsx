import { useState, useEffect } from "react"
import Ceintre from "../../assets/image/cintre-de-vetements.png"

const Image = ({picture}) => {
    const [tabImg, setTabImg] = useState()

    useEffect(()=>{
        let tab = picture.split(';')
        tab.pop()
        tab.pop() 
        setTabImg([])
        for(let item in tab) {
            let reponse = fetch(tab[item])
            .then(function(response) {
                return response
            })
            .then(function(myBlob) {
                return myBlob
            })       
            
            let promise = Promise.resolve(reponse)

            promise.then(function(value) {
                if(value){
                    if(value.ok == true){
                        setTabImg(oldState=>{
                            let newState = [...oldState]
                            newState.push(tab[item])

                            return newState
                        })
                    }
                }
            })


            if(tabImg && tabImg.length == 0){
                setTabImg(Ceintre)
            }
        }



        
    }, [picture])

   // console.log(tabImg)
    return (
    <aside className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-0 pe-0">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {
                tabImg && tabImg.length>0 && tabImg.map((item, index)=>{
                    return (
                        <div>{
                            (index==0)  &&
                            <div className="carousel-item active w-850">
                            <img src={item} className="d-block w-100" alt="..."/>
                            </div>
                        }
                        {
                            (index!=0) &&
                            <div className="carousel-item">
                            <img src={item}className="d-block w-100" alt="..."/>
                            </div>
                        }
                        </div>
                    )
                })
            }
            {
                (!tabImg || tabImg.length==0) &&
                <div className="carousel-item active w-850">
                    <img src={Ceintre} className="d-block w-100" alt="..."/>
                </div>
            }

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span style={{color: "red"}} className="carousel-control-prev-icon" aria-hidden="true" ></span>
            <span className="visually-hidden"  style={{color: "red"}}>Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </aside>        
    )
}

export default Image