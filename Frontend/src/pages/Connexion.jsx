import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

        //login
            let donnesJson = {
                email: email,
                password: password,
                //token: "test" //à enlever
            }
            console.log(JSON.stringify(donnesJson))
            localStorage.setItem("user_multimag", JSON.stringify(donnesJson)) 

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                accept: 'application/json'
                },
                body: JSON.stringify(donnesJson)
            };
            let url = "http://212.129.3.31:8080/api/login"
            //let url = "http://localhost:8001/api/login"
            fetch(url, requestOptions)
            .then(response => {
                if(response.ok)
                {
                    const promise = Promise.resolve(response.json());
                    
                    promise.then((value) => {
                        let donneesUser = {
                            email : email,
                            token : value.token
                        }
                        localStorage.setItem("user_multimag", JSON.stringify(donneesUser)) 
                        navigate('/liste-produit')
                    })
                    //Redirection
                    console.log("redirection")
                    navigate('/liste-produit')
                }
                else{
                    setEchecConnexion(true)
                }
                setLoading(false) 
            })
            .catch(err=>{
                //console.log(err)
            });	     
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
                        <h2 className="fw-bold mb-2 text-uppercase">MULTIMAG</h2>
                        <p className="text-blue-50 mb-5">Saisissez votre email et votre mot de passe!</p>

                        {
                            echecConnexion && 
                            <div className="alert alert-danger" role="alert">                            
                             <FontAwesomeIcon icon={faTriangleExclamation} /> Echec de connexion
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

                        <p className="small mb-5 pb-lg-2"><a className="text-blue-50" href="#!">Forgot password?</a></p>
                        
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