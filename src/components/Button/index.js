import React from 'react';
import classnames from 'classnames';
import styles from './style.css';

export default ({
    children,
    className,
    onClick = () => {},
    type = 'button'
}) => (
    <button
        className={classnames(
            styles.button,
            className
        )}
        onClick={onClick}
        type={type}
    >
        { children }
    </button>
);
