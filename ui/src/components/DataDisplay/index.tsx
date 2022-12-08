import { useNavigate } from "react-router-dom";
import styles from "./DataDisplay.module.scss";

export default function DataDisplay() {
    const navigate = useNavigate();

    return(
        <div className={styles.crud}>
            <div className={styles.btnContainer}>
                <button onClick={() => navigate("/crud/professionals/form")} className={styles.newItemBtn}>+ Novo</button>
            </div>
            <table cellSpacing={0} cellPadding={0} className={styles.crudTable}>
                <thead className={styles.crudHeader}>
                    <th>h1</th>
                    <th>h2</th>
                    <th>h3</th>
                    <th>h4</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </thead>
                <tbody className={styles.crudBody}>
                    <tr className={styles.crudRow}>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>
                            <button className={styles.editBtn}>Editar</button>
                        </td>
                        <td>
                            <button className={styles.deleteBtn}>Excluir</button>
                        </td>
                    </tr>
                    <tr className={styles.crudRow}>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>
                            <button className={styles.editBtn}>Editar</button>
                        </td>
                        <td>
                            <button className={styles.deleteBtn}>Excluir</button>
                        </td>
                    </tr>
                    <tr className={styles.crudRow}>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>
                            <button className={styles.editBtn}>Editar</button>
                        </td>
                        <td>
                            <button className={styles.deleteBtn}>Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}