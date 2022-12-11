import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./ClientForm.module.scss";
import GenericInput from "components/GenericInput";
import GenderSelect from "components/GenderSelect";
import { usePostData } from "services/usePostData";
import { useFetchDataById } from "services/useFetchDataById";
import { usePutData } from "services/usePutData";
import GoBackBtn from "components/GoBackBtn";

type docIdState = {
    docId: string;
}

export default function ClientForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [genre, setGenre] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [errorActive, setErrorActive] = useState(false);

    useEffect(() => {
        if(location.state) {
            const locationState = location.state as docIdState;
            useFetchDataById("clients", locationState.docId)
                .then(res => {
                    setFullName(res.data.fullName);
                    setEmail(res.data.email);
                    setBirthDate(res.data.birthDate);
                    setGenre(res.data.genre);
                    setCity(res.data.city);
                    setState(res.data.state);
                });
        }
    }, []);
    
    const fieldValidity = () => {
        if(
            !fullName ||
            !email ||
            !birthDate ||
            !genre ||
            !city ||
            !state
        ) {
            setErrorActive(true);
            return false;
        }else {
            setErrorActive(false);
            return true;
        }
    }

    return(
        <div className={styles.formContainer}>
            <GoBackBtn route="clients" />
            <form 
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    if(!fieldValidity()) {
                        return;
                    }
                    if(!location.state) {
                        usePostData("clients", {
                            fullName,
                            email,
                            birthDate,
                            genre,
                            city,
                            state
                        });
                        toast.success('Cliente cadastrado com sucesso!', { toastId: "client-post-sc"});
                    } else {
                        const locationState = location.state as docIdState;
                        usePutData("clients", {
                            fullName,
                            email,
                            birthDate,
                            genre,
                            city,
                            state
                        }, locationState.docId)
                        toast.success('Cliente alterado com sucesso!', { toastId: "client-put-sc"});
                    }
                    navigate("/crud/clients");
                }}
            >
                <div className={styles.formTitle}>
                    <h2>{location.state ? "Edição" : "Cadastro"} de Cliente</h2>
                </div>
                <h4 style={{ display: !errorActive ? "none" : "flex" }}>
                    Por favor, preencha todos os campos antes de enviar!
                </h4>
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