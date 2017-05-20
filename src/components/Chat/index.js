import React from 'react';
import Panel from '../Panel';
import { TabContainer, Tab } from '../Tabs';
import styles from './style.css';

export default ({ messages, onSubmit }) => (
    <Panel
        title="Chat"
        position={{
            x: window.innerWidth - 480,
            y: window.innerHeight - 280
        }}
        size={{
            height: 250,
            width: 450
        }}
    >
        <TabContainer>
            <Tab>Room (0)</Tab>
            <Tab>Lobby (0)</Tab>
        </TabContainer>
        <form
            style={{
                display: 'flex',
                flexFlow: 'column',
                height: '100%'
            }}
            onSubmit={onSubmit}
        >
            <ul
                className={styles.textarea}
                readOnly
                disabled
                style={{
                    flex: '1 1 auto'
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
                    flexFlow: 'row'
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
