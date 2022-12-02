import { useState } from "react";
import TemplateFormLogin from "../components/Layout/TemplateFormLogin"
import ConfPassword from "../components/MonCompte/ConfPassword";
import { UserContext } from "../components/MonCompte/Context/UserContext";
import Email from "../components/MonCompte/Email";
import Password from "../components/MonCompte/Password";

const ResetPassword = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confPassword, setConfPassword] = useState()

    const handleSubmit = () => {
        let data = {
            email: email,
            Password: password,
        }
    }
    //render
    return (
        <TemplateFormLogin>
            <UserContext.Provider value={{
                email: email, setEmail: setEmail,
                password: password, setPassword: setPassword,
                confPassword: confPassword, setConfPassword: setConfPassword,
            }}>
                <form onSubmit={handleSubmit}>
                    <Email/>
                    <Password />
                    <ConfPassword />                    
                </form>

            </UserContext.Provider>

        </TemplateFormLogin>
    )
}

export default ResetPassword;