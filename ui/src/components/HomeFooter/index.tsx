import styles from "./HomeFooter.module.scss";

export default function HomeFooter() {
	return (
		<footer className={styles.footer}>
			<h5>Pet Care © {new Date().getFullYear()}</h5>
		</footer>
	);
}