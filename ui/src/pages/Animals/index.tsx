import CrudTitle from "components/CrudTitle";
import DataDisplay from "components/DataDisplay";
import styles from "./Animals.module.scss";

export default function Animals() {

	return (
		<section className={styles.mainContainer}>
			<CrudTitle>Animais Cadastrados</CrudTitle>
			<DataDisplay />
		</section>
	);
}