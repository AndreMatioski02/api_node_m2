import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CrudTitle from "components/CrudTitle";
import styles from "./Services.module.scss";
import loading from "../../assets/crud/loading-gif.gif";
import { useFetchData } from "services/useFetchData";
import { iService } from "types/models";
import { useDeleteData } from "services/useDeleteData";

export default function Services() {
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
			useFetchData("services").then(res => { setCrudData(res.data) });
		}
    }, [token]);
	
	const handleDeleteDoc = (id: string) => {
		useDeleteData("services", id);
		window.location.reload();
	}

	return (
		<section className={styles.mainContainer}>
			<CrudTitle>Serviços Oferecidos</CrudTitle>
			<div className={styles.btnContainer}>
                <button onClick={() => navigate("/crud/services/form")} className={styles.newItemBtn}>+ Novo</button>
            </div>
			<table cellSpacing={0} cellPadding={0} className={styles.crudTable}>
                <thead className={styles.crudHeader}>
					<th>ID</th>
					<th>Serviço</th>
					<th>Descrição</th>
					<th>Profissional</th>
					<th>Animal</th>
					<th>Cliente</th>
					<th>Editar</th>
                    <th>Excluir</th>
                </thead>
                <tbody className={styles.crudBody}>
                    {crudData && crudData.length > 0 ?
                        crudData.map((service: iService, index: React.Key) => (
                            <tr className={styles.crudRow} key={index}>
                                <td>{service.id}</td>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td>{service.employeeName}</td>
                                <td>{service.animalName}</td>
                                <td>{service.clientName}</td>
                                <td>
                                    <button className={styles.editBtn} onClick={() => navigate("/crud/services/form", { state: { docId: service.id }})}>Editar</button>
                                </td>
                                <td>
                                    <button className={styles.deleteBtn} onClick={() => handleDeleteDoc(service.id)}>Excluir</button>
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