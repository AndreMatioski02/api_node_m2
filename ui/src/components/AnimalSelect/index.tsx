import { iAnimal } from "types/models";
import styles from "./AnimalSelect.module.scss";

interface iAnimalSelectProps {
    onChange: (e: any) => void;
    value: string;
    label?: string;
    animalArray: Array<iAnimal>;
}

export default function AnimalSelect({onChange, value, label, animalArray}: iAnimalSelectProps) {
    return(
        <div className={styles.animalSelectContainer}>
            <label htmlFor={label}>{label}</label>
            <select
                className={styles.animalSelect}
                onChange={onChange}
                value={value}
                name={label}
            >
                <option value="">Selecione um...</option>
                {animalArray.map((animal: iAnimal) => (
                    <option value={animal.name}>{animal.name}</option>
                ))}
            </select>
        </div>
    );
}