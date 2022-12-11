import { useNavigate } from "react-router-dom";
import styles from "./GoBackBtn.module.scss";

type iGoBackBtnProps = {
    route: string;
}

export default function GoBackBtn({route}: iGoBackBtnProps) {
    const navigate = useNavigate();

    return(
        <div className={styles.backBtnContainer}>
            <button 
                className={styles.backBtn} 
                onClick={() => navigate(`/crud/${route}`)}
            >
                {"<"} Voltar
            </button>
        </div>
    );
}