import styles from "./CrudTitle.module.scss";

interface iCrudTitleProps {
    children: string;
}

export default function CrudTitle({children}: iCrudTitleProps) {
    return(
        <h1 className={styles.title}>{children}</h1>
    );
}