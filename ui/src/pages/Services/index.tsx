import CrudTitle from "components/CrudTitle";
import DataDisplay from "components/DataDisplay";
import styles from "./Services.module.scss";

export default function Services() {

	return (
		<section className={styles.mainContainer}>
			<CrudTitle>Serviços Oferecidos</CrudTitle>
			<DataDisplay />
		</section>
	);
}