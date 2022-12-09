import styles from "./GenericInput.module.scss";

interface iGenericInputProps {
    type: string;
    onChange: (e: any) => void;
    value: string;
    label?: string;
}

export default function GenericInput({type, onChange, value, label}: iGenericInputProps) {
    return(
        <div className={styles.genInputContainer}>
            <label htmlFor={label}>{label}</label>
            <input 
                type={type}
                className={styles.genInput}
                onChange={onChange}
                value={value}
                name={label}
            />
        </div>
    );
}