import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { api } from "services/api";
import GenericInput from "components/GenericInput";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const navigate = useNavigate();

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        const userData = { email, password };
        try {
            await api.post("/login", userData);
            console.log("Sucesso");
            navigate("/crud");
        } catch(error) {
            console.log(error);
        } finally {
            setEmail("");
            setPassword("");
        }
    }

	return (
		<section className={styles.mainContainer}>
            <div className={styles.loginTitleContainer}>
                <h2>Efetue seu login</h2>
            </div>
            <div className={styles.loginContainer}>
                <h3>Preencha os dados abaixo para continuar</h3>
                <GenericInput 
                    type="email" 
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    value={email}
                    label="E-mail"
                />
                <GenericInput 
                    type="password" 
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={password}
                    label="Senha"
                />

                <button className={styles.loginBtn} onClick={(e) => handleLogin(e)}>Enviar</button>
            </div>
		</section>
	);
}