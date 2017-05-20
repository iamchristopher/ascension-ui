import React from 'react';
import styles from './style.css';
import Resizable from 'react-rnd';

const [
    dragHandlerClassName
] = styles.title.split(' ');

export default ({
    children,
    size,
    title = 'Untitled',
    z = 1
}) => (
    <Resizable
        className={styles.panel}
        default={{
            x: 0,
            y: 0,
            width: 200,
            height: 200,
            ...size
        }}
        minHeight={200}
        minWidth={200}
        dragHandlerClassName={'.' + dragHandlerClassName}
        z={z}
    >
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.panelBody}>
            {children}
        </div>
    </Resizable>
);
