import React from 'react';
import styles from './style.css';

export default ({ notifications }) => (
    <ul className={styles.container}>
        {notifications.map(({ text }, i) => (
            <li className={styles.panel} key={i}>
                {text}
            </li>
        ))}
    </ul>
);
