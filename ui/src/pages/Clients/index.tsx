import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CrudTitle from "components/CrudTitle";
import styles from "./Clients.module.scss";
import { useFetchData } from "services/useFetchData";
import loading from "../../assets/crud/loading-gif.gif";

export default function Clients() {
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
			useFetchData("clients").then(res => { setCrudData(res.data) });
		}
    }, [token]);

	return (
		<section className={styles.mainContainer}>
			<CrudTitle>Clientes</CrudTitle>
			<div className={styles.btnContainer}>
                <button onClick={() => navigate("/crud/clients/form")} className={styles.newItemBtn}>+ Novo</button>
            </div>
			<table cellSpacing={0} cellPadding={0} className={styles.crudTable}>
                <thead className={styles.crudHeader}>
					<th>ID</th>
					<th>Nome</th>
					<th>E-mail</th>
					<th>Nascimento</th>
					<th>Gênero</th>
					<th>Cidade</th>
                    <th>Estado</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </thead>
                <tbody className={styles.crudBody}>
                    {crudData && crudData.length > 0 ?
                        crudData.map((client: any, index: React.Key) => (
                            <tr className={styles.crudRow} key={index}>
                                <td>{client.id}</td>
                                <td>{client.fullName}</td>
                                <td>{client.email}</td>
                                <td>{client.birthDate}</td>
                                <td>{client.genre}</td>
                                <td>{client.city}</td>
                                <td>{client.state}</td>
                                <td>
                                    <button className={styles.editBtn}>Editar</button>
                                </td>
                                <td>
                                    <button className={styles.deleteBtn}>Excluir</button>
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