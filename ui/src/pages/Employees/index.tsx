import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Employees.module.scss";
import CrudTitle from "components/CrudTitle";
import { useFetchData } from "services/useFetchData";
import loading from "../../assets/crud/loading-gif.gif";
import { iEmployee } from "types/models";
import { checkAndFormatDate } from "services/checkAndFormatDate";
import { useDeleteData } from "services/useDeleteData";

export default function Employees() {
	const navigate = useNavigate();
	const token = localStorage.getItem("authToken");
	const [crudData, setCrudData] = useState([]);
	const notify = () => toast.info('Você precisa fazer login para acessar esta rota!', {
		toastId: "loginNeeded"
	});

	useEffect(() => {
		if(!token) {
			notify();
			navigate("/login");
		}else {
			useFetchData("employees").then(res => { setCrudData(res.data) });
		}
    }, [token]);

	const handleDeleteDoc = (id: string) => {
		useDeleteData("employees", id);
		window.location.reload();
	}

	return (
		<section className={styles.mainContainer}>
			<CrudTitle>Profissionais</CrudTitle>
			<div className={styles.btnContainer}>
                <button onClick={() => navigate("/crud/employees/form")} className={styles.newItemBtn}>+ Novo</button>
            </div>
			<table cellSpacing={0} cellPadding={0} className={styles.crudTable}>
                <thead className={styles.crudHeader}>
					<th>ID</th>
					<th>Nome</th>
					<th>E-mail</th>
					<th>Especialidade</th>
					<th>Nascimento</th>
					<th>Gênero</th>
					<th>Cidade</th>
                    <th>Estado</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </thead>
                <tbody className={styles.crudBody}>
                    {crudData && crudData.length > 0 ?
                        crudData.map((employee: iEmployee, index: React.Key) => (
                            <tr className={styles.crudRow} key={index}>
                                <td>{employee.id}</td>
                                <td>{employee.fullName}</td>
                                <td>{employee.email}</td>
								<td>{employee.expertise}</td>
                                <td>{checkAndFormatDate(employee.birthDate)}</td>
                                <td>{employee.genre}</td>
                                <td>{employee.city}</td>
                                <td>{employee.state}</td>
                                <td>
                                    <button className={styles.editBtn} onClick={() => navigate("/crud/employees/form", { state: { docId: employee.id }})}>Editar</button>
                                </td>
                                <td>
                                    <button className={styles.deleteBtn} onClick={() => handleDeleteDoc(employee.id)}>Excluir</button>
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