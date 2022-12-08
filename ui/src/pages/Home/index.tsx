import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home() {
	const navigate = useNavigate();

	return (
		<section className={styles.mainContainer}>
			<div className={styles.homeText}>
				<h1>Bem-vindo ao Pet Care!</h1>
				<h2>Aqui você encontra os principais serviços de Petshop oferecidos na região</h2>
			</div>
			<div className={styles.startBtn}>
				<button onClick={() => navigate("/crud")}>Começar</button>
			</div>
		</section>
	);
}