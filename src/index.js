import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/configureStore';

import './index.css';
import App from './containers/Chat';
import Notifications from './containers/Notification';

window.AscensionStore = store();

ReactDOM.render(
    <Provider store={window.AscensionStore}>
        <div>
            <App />
            <Notifications />
        </div>
    </Provider>,
  document.getElementById('ui')
);
