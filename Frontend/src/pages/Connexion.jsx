import { useState } from "react";

const Connexion = () => {
    //variable
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    //fonction
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("email", email)
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

                        <div className="form-outline form-blue mb-4">
                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                            <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>

                        <div className="form-outline form-blue mb-4">
                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                            <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
                        </div>

                        <p className="small mb-5 pb-lg-2"><a className="text-blue-50" href="#!">Forgot password?</a></p>

                        <button className="btn btn-outline-dark btn-lg px-5" type="submit">Login</button>

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