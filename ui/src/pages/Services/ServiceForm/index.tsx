import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./ServiceForm.module.scss";
import GenericInput from "components/GenericInput";
import { usePostData } from "services/usePostData";
import { iAnimal, iClient, iEmployee } from "types/models";
import { useFetchData } from "services/useFetchData";
import PersonSelect from "components/PersonSelect";
import AnimalSelect from "components/AnimalSelect";
import { useFetchDataById } from "services/useFetchDataById";
import { usePutData } from "services/usePutData";
import GoBackBtn from "components/GoBackBtn";

type docIdState = {
    docId: string;
}

export default function ClientForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [animalName, setAnimalName] = useState("");
    const [clientName, setClientName] = useState("");
    const [errorActive, setErrorActive] = useState(false);

    const [allEmployees, setAllEmployees] = useState<iEmployee[]>([]);
    const [allAnimals, setAllAnimals] = useState<iAnimal[]>([]);
    const [allClients, setAllClients] = useState<iClient[]>([]);

    useEffect(() => {
		useFetchData("employees").then(res => { setAllEmployees(res.data) });
		useFetchData("animals").then(res => { setAllAnimals(res.data) });
		useFetchData("clients").then(res => { setAllClients(res.data) });
        if(location.state) {
            const locationState = location.state as docIdState;
            useFetchDataById("services", locationState.docId)
                .then(res => {
                    setName(res.data.name);
                    setDescription(res.data.description);
                    setEmployeeName(res.data.employeeName);
                    setAnimalName(res.data.animalName);
                    setClientName(res.data.clientName);
                });
        }
    }, []);

    const fieldValidity = () => {
        if(
            !name ||
            !description ||
            !employeeName ||
            !animalName ||
            !clientName
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
            <GoBackBtn route="services" />
            <form 
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    if(!fieldValidity()) {
                        return;
                    }
                    if(!location.state) {
                        usePostData("services", {
                            name,
                            description,
                            employeeName,
                            animalName,
                            clientName
                        });
                        toast.success('Serviço cadastrado com sucesso!', { toastId: "service-post-sc"});
                    } else {
                        const locationState = location.state as docIdState;
                        usePutData("services", {
                            name,
                            description,
                            employeeName,
                            animalName,
                            clientName
                        }, locationState.docId)
                        toast.success('Serviço alterado com sucesso!', { toastId: "service-put-sc"});
                    }
                    navigate("/crud/services");
                }}
            >
                <div className={styles.formTitle}>
                    <h2>{location.state ? "Edição" : "Cadastro"} de Serviço</h2>
                </div>
                <h4 style={{ display: !errorActive ? "none" : "flex" }}>
                    Por favor, preencha todos os campos antes de enviar!
                </h4>
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