import Link from "next/link";
import styles from "./page.module.css";

function home () {
    return (
        <div className={styles.containerHome}>
        <div className={styles.containerListas}>
            <h1>exemplos</h1>
            <Link href="/exemplos/ex-01">exemplo 1</Link>
            <Link href="/exemplos/ex-02">exemplo 2</Link>
            <Link href="/exemplos/ex-03">exemplo 3</Link>
            
        </div>

        <div className={styles.containerListas}>
             <h1>atividades</h1>
              <Link href="/atividades/atv1">atividade1</Link>
              <Link href="/atividades/atv2">atividade2</Link>
        </div>
        </div>
    );
}

export default home;