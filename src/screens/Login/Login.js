import React from "react";
import {useNavigate} from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import {styles} from "./styles";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleInputEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleInputPassword = (event) => {
        setPassword(event.target.value);
    }

    const login = () => {
        if (email === '' && password === '') {
            alert('Introduce un email y una contraseña');
        } else {
            navigate('/');
        }
    };

    return (
        <div style={styles.screenContainer}>
            <div style={styles.cardContainer}>
                <div style={styles.mainContainer}>
                    <LoginHeader/>
                    <LoginForm
                        email={email}
                        password={password}
                        handleInputEmail={handleInputEmail}
                        handleInputPassword={handleInputPassword}
                        login={login}/>
                </div>
            </div>
        </div>
    )

}
export default Login;