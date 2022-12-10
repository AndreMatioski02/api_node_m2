import { useEffect, useState } from "react";
import { useFetchData } from "services/useFetchData";
import GenericInput from "components/GenericInput";
import styles from "./AnimalForm.module.scss";
import PersonSelect from "components/PersonSelect";
import GenderSelect from "components/GenderSelect";
import { iClient } from "types/models";
import { usePostData } from "services/usePostData";
import { useNavigate } from "react-router-dom";

export default function AnimalForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [clientName, setClientName] = useState("");
    const [breed, setBreed] = useState("");
    const [genre, setGenre] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [allClients, setAllClients] = useState<iClient[]>([]);

    useEffect(() => {
		useFetchData("clients").then(res => { setAllClients(res.data) });
    }, []);

    return(
        <div className={styles.formContainer}>
            <form 
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    usePostData("animals", {
                        name,
                        clientName,
                        breed,
                        genre,
                        birthDate
                    });
                    navigate("/crud/animals");
                }}
            >
                <div className={styles.formTitle}>
                    <h2>Cadastro de Animal</h2>
                </div>
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