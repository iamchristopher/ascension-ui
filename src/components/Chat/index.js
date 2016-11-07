import React from 'react';
import styles from './style.css';

export default ({
    messages = [
        {
            sender: 'CarlCastello',
            text: 'Donec ipsum odio, tempor at mollis ac'
        }
    ]
}) => (
    <div className={styles.panel}>
        <h3 className={styles.title}>Chat</h3>
        <ul className={styles.tabs}>
            <li className="active"><a href="#">Room (0)</a></li>
            <li><a href="#">Lobby (0)</a></li>
        </ul>
        <form className={styles.subpanel}>
            <ul
                className={styles.textarea}
                readOnly
                disabled
            >
                {
                    messages.map((m, i) => <li key={i}>
                        <b>{m.sender}: </b>{m.text}
                    </li>)
                }
            </ul>
            <input
                className={styles.input}
                placeholder="Enter message"
            />
            <button
                className={styles.button}
            >
                Send
            </button>
        </form>
    </div>
);
