import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react';
import { Avatar } from './Avatar';
export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
            
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/103512217?v=4" />
                <strong>Júlia Reis</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">                
                    <PencilLine />
                    Editar seu perfil 
                </a>

            </footer>

        </aside>
    );
}