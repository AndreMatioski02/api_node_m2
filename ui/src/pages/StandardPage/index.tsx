import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./StandardPage.module.scss";
import HomeHeader from "components/HomeHeader";
import HomeFooter from "components/HomeFooter";

import 'react-toastify/dist/ReactToastify.css';

export default function StandardPage() {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		location.pathname == "/" && navigate("/home");
	});

	return (
		<>
			<HomeHeader />
			<section className={styles.mainContainer}>
				<Outlet />
			</section>
			<HomeFooter />
		</>
	);
}