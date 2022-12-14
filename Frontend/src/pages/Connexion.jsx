import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../services/auth.service'
import logo from "../assets/image/dalena.png"
import "../assets/scss/authentification.scss"
import { getUser } from "../services/user.service";
const Connexion = () => {
    //variable
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [echecConnexion, setEchecConnexion] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(false)
    let navigate = useNavigate();

    //fonction
    useEffect(()=>{
        localStorage.removeItem("user_multimag")
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setEchecConnexion(false)

        //Vérirification de l'utilisateur
        // const promiseUser = Promise.resolve(getUser(email))
        // promiseUser.then((value)=>{
        //     if(value){
        //         let nom = value[0].prenom + " " + value[0].nom.toUpperCase()
        //         if(localStorage.getItem("user_multimag")){
        //             let utilisateur = JSON.parse(localStorage.getItem("user_multimag"))
        //             utilisateur.service = value[0].service
        //             utilisateur.nom = value[0].prenom + " " + value[0].nom.toUpperCase()
        //             localStorage.setItem("user", JSON.stringify(utilisateur))
                    
        //         }					
        //     }
        // })

        //login
            let donnesJson = {
                email: email,
                password: password,
                token: "test" //à enlever
            }


            const promise = Promise.resolve(login(donnesJson));
            promise.then((value) => {
                if(value){               
                    if(!value.token){
                        setEchecConnexion(true)
                    }
                    else{
                        setEchecConnexion(false)

                        let utilisateur = JSON.parse(localStorage.getItem("user"))
                        console.log(utilisateur)
                        let donneesUser = {
                            email : email,
                            token : value.token
                        }
                        localStorage.setItem("user_multimag", JSON.stringify(donneesUser)) 
                        navigate(`/produits/listes`)
                    }
                    setLoading(false)
                    
                    //////console.log("token", value)

                }
            })
     
    }
    //render
    return (
            <form onSubmit={handleSubmit} className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-white text-blue" style={{borderRadius: "1rem"}}>
                    <div className="card-body p-5 text-center">

                        <div className="mb-md-5 mt-md-4 pb-5">
                        <div className="mb-2 logoAuth"><img src={logo} /></div>
                        {/* <h2 className="fw-bold mb-2 text-uppercase">MULTIMAG</h2> */}
                        <p className="text-blue-50 mb-5">Saisissez votre email et votre mot de passe!</p>

                        {
                            echecConnexion && 
                            <div className="alert alert-danger" role="alert">                            
                             <FontAwesomeIcon icon={faTriangleExclamation} /> Echec de connexion / Mot de passe incorrect
                            </div>

                        }

                        <div className="form-outline form-blue mb-4">
                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                            <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>

                        <div className="form-outline form-blue mb-4">
                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                            <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
                        </div>

                        <p className="small mb-5 pb-lg-2"><a className="text-blue-50" href="#!">Mot de passe oublié?</a></p>
                        
                        <button className="btn btn-outline-dark btn-lg px-5" type="submit" onClick={()=>{setLoading(true)}}>Login</button>

                        {
                            loading &&
                            <div className="text-center mt-3">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            </div>                       
                        }
                        
                        </div>

                       {/* 
                       <div>
                        <p className="mb-0">Don't have an account? <a href="#!" className="text-blue-50 fw-bold">Sign Up</a>
                        </p>
                       </div>
                       */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </form>
    )
}
export default Connexion;