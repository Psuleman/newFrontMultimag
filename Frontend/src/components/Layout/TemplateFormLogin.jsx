
import logo from "../../assets/image/dalena.png"

const TemplateFormLogin = ({children}) => {

    //render
    return (
        
        <div className="vh-100 gradient-custom">
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
                            children
                        }
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}

export default TemplateFormLogin;