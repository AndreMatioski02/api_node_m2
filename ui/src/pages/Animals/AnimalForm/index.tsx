import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./AnimalForm.module.scss";
import { useFetchData } from "services/useFetchData";
import GenericInput from "components/GenericInput";
import PersonSelect from "components/PersonSelect";
import GenderSelect from "components/GenderSelect";
import { iClient } from "types/models";
import { usePostData } from "services/usePostData";
import { useFetchDataById } from "services/useFetchDataById";
import { usePutData } from "services/usePutData";
import GoBackBtn from "components/GoBackBtn";

type docIdState = {
    docId: string;
}

export default function AnimalForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = useState("");
    const [clientName, setClientName] = useState("");
    const [breed, setBreed] = useState("");
    const [genre, setGenre] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [errorActive, setErrorActive] = useState(false);
    const [allClients, setAllClients] = useState<iClient[]>([]);
    
    useEffect(() => {
        useFetchData("clients").then(res => { setAllClients(res.data) });
        if(location.state) {
            const locationState = location.state as docIdState;
            useFetchDataById("animals", locationState.docId)
                .then(res => {
                    setName(res.data.name);
                    setClientName(res.data.clientName);
                    setBreed(res.data.breed);
                    setGenre(res.data.genre);
                    setBirthDate(res.data.birthDate);
                });
        }
    }, []);

    const fieldValidity = () => {
        if(
            !name ||
            !clientName ||
            !breed ||
            !genre ||
            !birthDate
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
            <GoBackBtn route="animals" />
            <form 
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    if(!fieldValidity()) {
                        return;
                    }
                    if(!location.state) {
                        usePostData("animals", {
                            name,
                            clientName,
                            breed,
                            genre,
                            birthDate
                        });
                        toast.success('Animal cadastrado com sucesso!', { toastId: "animal-post-sc"});
                    } else {
                        const locationState = location.state as docIdState;
                        usePutData("animals", {
                            name,
                            clientName,
                            breed,
                            genre,
                            birthDate
                        }, locationState.docId)
                        toast.success('Animal alterado com sucesso!', { toastId: "animal-put-sc"});
                    }
                    navigate("/crud/animals");
                }}
            >
                <div className={styles.formTitle}>
                    <h2>{location.state ? "Edição" : "Cadastro"} de Animal</h2>
                </div>
                <h4 style={{ display: !errorActive ? "none" : "flex" }}>
                    Por favor, preencha todos os campos antes de enviar!
                </h4>
                <GenericInput 
                    type="text"
                    onChange={(e) => setName(e.currentTarget.value)}
                    value={name}
                    label="Nome"
                />
                <GenericInput 
                    type="text"
                    onChange={(e) => setBreed(e.currentTarget.value)}
                    value={breed}
                    label="Raça"
                />
                <GenderSelect
                    onChange={(e) => setGenre(e.target.value)}
                    value={genre}
                    label="Gênero"
                />
                <GenericInput 
                    type="date"
                    onChange={(e) => setBirthDate(e.currentTarget.value)}
                    value={birthDate}
                    label="Data de Nascimento"
                />
                <PersonSelect 
                    onChange={(e) => setClientName(e.target.value)}
                    value={clientName}
                    label="Cliente (dono)"
                    personArray={allClients}
                />

                <button className={styles.submitBtn} type="submit">Enviar</button>
            </form>
        </div>
    );
}