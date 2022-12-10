import { useNavigate } from "react-router-dom";
import styles from "./HomeHeader.module.scss";
import logo from "../../assets/home/logo.png";

export default function HomeHeader() {
	const navigate = useNavigate();

	const navigateTo = (route: string) => {
		navigate(route);
	}

	return (
		<header className={styles.navContainer}>
			<img 
				onClick={() => navigateTo("/home")}
				className={styles.petshopLogo}
				src={logo} 
				alt="Petshop Logo" 
			/>
			<button onClick={() => navigateTo("/crud")} className={styles.navButton}>Hub</button>
			<button onClick={() => navigateTo("/crud/employees")} className={styles.navButton}>Profissionais</button>
			<button onClick={() => navigateTo("/crud/clients")} className={styles.navButton}>Clientes</button>
			<button onClick={() => navigateTo("/crud/animals")} className={styles.navButton}>Animais</button>
			<button onClick={() => navigateTo("/crud/services")} className={styles.navButton}>Serviços</button>
		</header>
	);
}