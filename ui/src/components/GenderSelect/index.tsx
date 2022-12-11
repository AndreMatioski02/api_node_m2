import styles from "./GenderSelect.module.scss";

interface iGenderSelectProps {
    onChange: (e: any) => void;
    value: string;
    label?: string;
}

export default function GenderSelect({onChange, value, label}: iGenderSelectProps) {
    return(
        <div className={styles.selectContainer}>
            <label htmlFor={label}>{label}</label>
            <select
                className={styles.genderSelect}
                onChange={onChange}
                value={value}
                name={label}
            >
                <option value="">Selecione um...</option>
                <option value="M">M</option>
                <option value="F">F</option>
            </select>
        </div>
    );
}