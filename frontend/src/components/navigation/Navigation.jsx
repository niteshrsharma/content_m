import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation(){
    const [selectedType, selectType] = useState('Stories');
    let loggedIn = true;

    return(
        <div className={styles.nav}>
            <h1 className={styles.title}>Content Management System</h1>
            <div className={styles.filter}>
                <span className={selectedType === 'Stories' ? styles.active : ''} onClick={() => selectType('Stories')}>Stories</span>
                <span className={selectedType === 'Facts' ? styles.active : ''} onClick={() => selectType('Facts')}>Facts</span>
            </div>
            {
                loggedIn ? <button className={styles.auth}>Logout</button> : <button className={styles.auth}>Login</button>
            }
        </div>
    )
}