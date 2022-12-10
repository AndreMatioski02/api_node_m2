import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./CrudHub.module.scss";
import vet from "../../assets/crud/veterinaria.png";
import client from "../../assets/crud/cliente.jpg";
import pet from "../../assets/crud/pet.jpg";
import service from "../../assets/crud/servico.jpg";
import HubLink from "./HubLink";

export default function CrudHub() {
	const navigate = useNavigate();
	const [token] = useState(localStorage.getItem("authToken"));
	const notify = () => toast.info('Você precisa fazer login para acessar esta rota!', {
		toastId: "loginNeeded"
	});

	useEffect(() => {
		if(!token) {
			notify();
			navigate("/login");
		}
    }, [token]);

	return (
		<section className={styles.mainContainer}>
			<div className={styles.hubLinks}>
				<div className={styles.hubLinks__title}>
					<h2>Bem-vindo ao CRUD do Pet Care!</h2>
					<h3>Aqui você pode navegar para cada um dos itens alteráveis através da API</h3>
				</div>
				<div className={styles.hubLinks__links}>
					<HubLink imageUrl={vet} onClick={() => navigate("/crud/employees")}>
						Profissionais do Pet Care
					</HubLink>
					<HubLink imageUrl={client} onClick={() => navigate("/crud/clients")}>
						Clientes
					</HubLink>
					<HubLink imageUrl={pet} onClick={() => navigate("/crud/animals")}>
						Animais Cadastrados
					</HubLink>
					<HubLink imageUrl={service} onClick={() => navigate("/crud/services")}>
						Serviços Oferecidos
					</HubLink>
				</div>
			</div>
		</section>
	);
}