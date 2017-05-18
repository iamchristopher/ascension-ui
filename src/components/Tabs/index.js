import React from 'react';
import styles from './style.css';

export const TabContainer = ({ children }) => (
    <ul className={styles.tabs}>
        { children }
    </ul>
);

export const Tab = ({
    isActive,
    children,
    onClick = () => {}
}) => (
    <li>
        <a href="#">{ children }</a>
    </li>
);
