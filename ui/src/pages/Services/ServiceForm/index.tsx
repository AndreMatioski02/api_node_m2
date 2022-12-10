import { useEffect, useState } from "react";
import styles from "./ServiceForm.module.scss";
import { useNavigate } from "react-router-dom";
import GenericInput from "components/GenericInput";
import { usePostData } from "services/usePostData";
import { iAnimal, iClient, iEmployee } from "types/models";
import { useFetchData } from "services/useFetchData";
import PersonSelect from "components/PersonSelect";
import AnimalSelect from "components/AnimalSelect";

export default function ClientForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [animalName, setAnimalName] = useState("");
    const [clientName, setClientName] = useState("");

    const [allEmployees, setAllEmployees] = useState<iEmployee[]>([]);
    const [allAnimals, setAllAnimals] = useState<iAnimal[]>([]);
    const [allClients, setAllClients] = useState<iClient[]>([]);

    useEffect(() => {
		useFetchData("employees").then(res => { setAllEmployees(res.data) });
		useFetchData("animals").then(res => { setAllAnimals(res.data) });
		useFetchData("clients").then(res => { setAllClients(res.data) });
    }, []);

    return(
        <div className={styles.formContainer}>
            <form 
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    usePostData("services", {
                        name,
                        description,
                        employeeName,
                        animalName,
                        clientName
                    });
                    navigate("/crud/services");
                }}
            >
                <div className={styles.formTitle}>
                    <h2>Cadastro de Serviço</h2>
                </div>
                <GenericInput 
                    type="text"
                    onChange={(e) => setName(e.currentTarget.value)}
                    value={name}
                    label="Serviço"
                />
                <GenericInput 
                    type="text"
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    value={description}
                    label="Descrição do Serviço"
                />
                <PersonSelect
                    onChange={(e) => setEmployeeName(e.target.value)}
                    value={employeeName}
                    label="Profissional Responsável"
                    personArray={allEmployees}
                />
                <AnimalSelect 
                    onChange={(e) => setAnimalName(e.target.value)}
                    value={animalName}
                    label="Animal"
                    animalArray={allAnimals}
                />
                <PersonSelect
                    onChange={(e) => setClientName(e.target.value)}
                    value={clientName}
                    label="Cliente"
                    personArray={allClients}
                />

                <button className={styles.submitBtn} type="submit">Enviar</button>
            </form>
        </div>
    );
}