import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericInput from "components/GenericInput";
import styles from "./EmployeeForm.module.scss";
import GenderSelect from "components/GenderSelect";
import { usePostData } from "services/usePostData";

export default function ClientForm() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [expertise, setExpertise] = useState("");
    const [genre, setGenre] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    return(
        <div className={styles.formContainer}>
            <form 
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    usePostData("employees", {
                        fullName,
                        email,
                        birthDate,
                        expertise,
                        genre,
                        city,
                        state
                    });
                    navigate("/crud/employees");
                }}
            >
                <div className={styles.formTitle}>
                    <h2>Cadastro de Profissional</h2>
                </div>
                <GenericInput 
                    type="text"
                    onChange={(e) => setFullName(e.currentTarget.value)}
                    value={fullName}
                    label="Nome"
                />
                <GenericInput 
                    type="text"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    value={email}
                    label="E-mail"
                />
                <GenericInput 
                    type="date"
                    onChange={(e) => setBirthDate(e.currentTarget.value)}
                    value={birthDate}
                    label="Data de Nascimento"
                />
                <GenericInput 
                    type="text"
                    onChange={(e) => setExpertise(e.currentTarget.value)}
                    value={expertise}
                    label="Especialidade"
                />
                <GenderSelect
                    onChange={(e) => setGenre(e.target.value)}
                    value={genre}
                    label="Gênero"
                />
                <GenericInput 
                    type="text"
                    onChange={(e) => setCity(e.currentTarget.value)}
                    value={city}
                    label="Cidade"
                />
                <GenericInput 
                    type="text"
                    onChange={(e) => setState(e.currentTarget.value)}
                    value={state}
                    label="Estado"
                />

                <button className={styles.submitBtn} type="submit">Enviar</button>
            </form>
        </div>
    );
}