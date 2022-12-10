import { iClient, iEmployee } from "types/models";
import styles from "./PersonSelect.module.scss";

interface iPersonSelectProps {
    onChange: (e: any) => void;
    value: string;
    label?: string;
    personArray: Array<iClient> | Array<iEmployee>;
}

export default function ClientSelect({onChange, value, label, personArray}: iPersonSelectProps) {
    return(
        <div className={styles.personSelectContainer}>
            <label htmlFor={label}>{label}</label>
            <select
                className={styles.personSelect}
                onChange={onChange}
                value={value}
                name={label}
            >
                <option value="">Selecione um...</option>
                {personArray.map((person: iClient | iEmployee) => (
                    <option value={person.fullName}>{person.fullName}</option>
                ))}
            </select>
        </div>
    );
}