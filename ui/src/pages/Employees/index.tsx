import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Employees.module.scss";
import CrudTitle from "components/CrudTitle";
import { useFetchData } from "services/useFetchData";
import loading from "../../assets/crud/loading-gif.gif";

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
                        crudData.map((employee: any, index: React.Key) => (
                            <tr className={styles.crudRow} key={index}>
                                <td>{employee.id}</td>
                                <td>{employee.fullName}</td>
                                <td>{employee.email}</td>
								<td>{employee.expertise}</td>
                                <td>{employee.birthDate}</td>
                                <td>{employee.genre}</td>
                                <td>{employee.city}</td>
                                <td>{employee.state}</td>
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