import React from 'react';
import Panel from '../Panel';
import styles from './style.css';

export default ({ messages, onSubmit }) => (
    <Panel
        title="Chat"
        size={{
            height: 300,
            width: 450
        }}
    >
        <ul className={styles.tabs}>
            <li className="active"><a href="#">Room (0)</a></li>
            <li><a href="#">Lobby (0)</a></li>
        </ul>
        <form
            style={{
                display: 'flex',
                'flex-flow': 'column',
                height: '100%'
            }}
            onSubmit={onSubmit}
        >
            <ul
                className={styles.textarea}
                readOnly
                disabled
                style={{
                    flex: '1 1 auto',
                    height: '100%'
                }}
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
            <div
                style={{
                    display: 'flex',
                    flex: '0 1 auto',
                    'flex-flow': 'row'
                }}
            >
                <input
                    className={styles.input}
                    name="message"
                    placeholder="Enter message"
                    style={{
                        flex: '1 1 auto'
                    }}
                />
                <button
                    className={styles.button}
                    style={{
                        flex: '0 0 auto'
                    }}
                    type="submit"
                >
                    Send message
                </button>
            </div>
        </form>
    </Panel>
);
