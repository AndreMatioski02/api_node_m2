import styles from "./GenericInput.module.scss";

interface iGenericInputProps {
    type: string;
    onChange: (e: any) => void;
    value: string;
}

export default function GenericInput({type, onChange, value}: iGenericInputProps) {
    return(
        <input 
            type={type}
            className={styles.genInput}
            onChange={onChange}
            value={value}
        />
    );
}