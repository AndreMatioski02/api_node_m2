import styles from "./HubLink.module.scss";

interface iHubLinkProps {
    children: string;
    imageUrl: string;
    onClick: () => void;
}

export default function HubLink({children, imageUrl, onClick}: iHubLinkProps) {
    return(
        <div 
            className={styles.buttonBg}
            onClick={onClick}
            style={{
                backgroundImage: `url("${imageUrl}")`,
            }}
        >
            <div className={styles.btnContainer}>
                <button className={styles.linkButton}>
                    {children}
                </button>
            </div>
        </div>
    );
}