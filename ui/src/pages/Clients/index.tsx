import CrudTitle from "components/CrudTitle";
import DataDisplay from "components/DataDisplay";
import styles from "./Clients.module.scss";

export default function Clients() {

	return (
		<section className={styles.mainContainer}>
			<CrudTitle>Clientes</CrudTitle>
			<DataDisplay />
		</section>
	);
}