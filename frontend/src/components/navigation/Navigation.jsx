import { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import styles from './Navigation.module.css';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const [selectedType, selectType] = useState('Stories');
    const navigate = useNavigate();
    let loggedIn = true;

    return (
        <>
        
        <div className={styles.nav}>
            <div className={styles.searchCont}>
                <input type="text" placeholder="Search" />
                <span>🔍</span>
            </div>
            <div className={styles.actionCont}>
                <div className={styles.filter}>
                    <span className={selectedType === 'Stories' ? styles.active : ''} onClick={() => selectType('Stories')}>Stories</span>
                    <span className={selectedType === 'Facts' ? styles.active : ''} onClick={() => selectType('Facts')}>Facts</span>
                    {
                        loggedIn ? <span className={styles.auth}>Logout</span> : <span className={styles.auth}>Login</span>
                    }
                </div>
            </div>
        </div>
            {
                loggedIn && <div className={styles.addBtn}>
                        <IoIosAddCircle size={50} color='darkblue' onClick={()=>navigate('/create-content')}/>
                    </div>
            }
        </>
    )
}