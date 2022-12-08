import CrudTitle from "components/CrudTitle";
import DataDisplay from "components/DataDisplay";
import styles from "./Professionals.module.scss";

export default function Professionals() {

	return (
		<section className={styles.mainContainer}>
			<CrudTitle>Profissionais</CrudTitle>
			<DataDisplay />
		</section>
	);
}