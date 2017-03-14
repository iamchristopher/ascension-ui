import React from 'react';
import styles from './style.css';

export default ({ messages, onSubmit }) => (
    <div className={styles.panel}>
        <h3 className={styles.title}>Chat</h3>
        <ul className={styles.tabs}>
            <li className="active"><a href="#">Room (0)</a></li>
            <li><a href="#">Lobby (0)</a></li>
        </ul>
        <form
            className={styles.subpanel}
            onSubmit={onSubmit}
        >
            <ul
                className={styles.textarea}
                readOnly
                disabled
            >
                {
                    messages.map((m, i) => (
                        m.sender === 'System'
                        ?   <li key={i}>
                                <em>{m.text}</em>
                            </li>
                        :   <li key={i}>
                                <b>{m.sender}: </b> {m.text}
                            </li>
                    ))
                }
            </ul>
            <input
                className={styles.input}
                name="message"
                placeholder="Enter message"
            />
            <button
                className={styles.button}
                type="submit"
            >
                Send
            </button>
        </form>
    </div>
);
