import React from 'react';
import styles from './style.css';

export default ({
    current = 0,
    max = 0
}) => {
    const currentBarWidth = (current / max) * 100;
    console.log(currentBarWidth);

    return (
        <div
            className={styles.container}
            title={`${ current } / ${ max }`}
        >
            <div
                className={styles.current}
                style={{
                    width: `${currentBarWidth}%`
                }}
            >
            </div>
        </div>
    );
};
