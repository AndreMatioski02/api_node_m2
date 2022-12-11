import { useEffect, useState } from "react";
import styles from "./Animals.module.scss";
import { iAnimal } from "types/models";
import CrudTitle from "components/CrudTitle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetchData } from "services/useFetchData";
import loading from "../../assets/crud/loading-gif.gif";
import { checkAndFormatDate } from "services/checkAndFormatDate";
import { useDeleteData } from "services/useDeleteData";

export default function Animals() {
	const navigate = useNavigate();
	const [token] = useState(localStorage.getItem("authToken"));
	const [crudData, setCrudData] = useState([]);
	const notify = () => toast.info('Você precisa fazer login para acessar esta rota!', {
		toastId: "loginNeeded"
	});

	useEffect(() => {
		if(!token) {
			notify();
			navigate("/login");
		}else {
			useFetchData("animals").then(res => { setCrudData(res.data) });
		}
    }, [token]);

	const handleDeleteDoc = (id: string) => {
		useDeleteData("animals", id);
		window.location.reload();
	}

	return (
		<section className={styles.mainContainer}>
			<CrudTitle>Animais Cadastrados</CrudTitle>
			<div className={styles.btnContainer}>
                <button onClick={() => navigate("/crud/animals/form")} className={styles.newItemBtn}>+ Novo</button>
            </div>
			<table cellSpacing={0} cellPadding={0} className={styles.crudTable}>
                <thead className={styles.crudHeader}>
					<th>ID</th>
					<th>Nome</th>
					<th>Cliente</th>
					<th>Raça</th>
					<th>Gênero</th>
					<th>Nascimento</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </thead>
                <tbody className={styles.crudBody}>
                    {crudData && crudData.length > 0 ?
                        crudData.map((animal: iAnimal, index: React.Key) => (
                            <tr className={styles.crudRow} key={index}>
                                <td>{animal.id}</td>
                                <td>{animal.name}</td>
                                <td>{animal.clientName}</td>
                                <td>{animal.breed}</td>
                                <td>{animal.genre}</td>
                                <td>{checkAndFormatDate(animal.birthDate)}</td>
                                <td>
                                    <button 
										className={styles.editBtn} onClick={() => navigate("/crud/animals/form", { state: { docId: animal.id }})}>Editar</button>
                                </td>
                                <td>
                                    <button className={styles.deleteBtn} onClick={() => handleDeleteDoc(animal.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))
						:
						<img src={loading} alt="Loading..." style={{
							width: "40px",
							alignSelf: "center",
							justifySelf: "center",
							marginTop: "20%"
						}}/>
                    }
                </tbody>
            </table>
		</section>
	);
}