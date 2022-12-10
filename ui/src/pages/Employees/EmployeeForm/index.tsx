import { useState } from "react";
import GenericInput from "components/GenericInput";
import styles from "./EmployeeForm.module.scss";

export default function EmployeeForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    return(
        <div className={styles.formContainer}>
            <form>
                <GenericInput type="text" onChange={(e) => setFullName(e.currentTarget.value)} value={fullName}/>
                <GenericInput type="email" onChange={(e) => setEmail(e.currentTarget.value)} value={email}/>
                <GenericInput type="text" onChange={(e) => setFullName(e.currentTarget.value)} value={fullName}/>
                <GenericInput type="text" onChange={(e) => setFullName(e.currentTarget.value)} value={fullName}/>
            </form>
        </div>
    );
}