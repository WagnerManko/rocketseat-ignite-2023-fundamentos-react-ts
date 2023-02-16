import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';
import { PencilLine } from 'phosphor-react';
import cover from '../assets/cover.jpg'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={cover} alt="Imagem de Capa" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/WagnerManko.png" />

                <strong>Wagner Mengue</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}