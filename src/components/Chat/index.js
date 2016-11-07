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
    <form>
        <h1>Chat</h1>
        <ul
            className={styles.textarea}
            readonly
            disabled
        >
            {
                messages.map(m => <li>
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
);
