import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/configureStore';

import './index.css';
import App from './containers/Chat';
import Notifications from './components/Notifications';

ReactDOM.render(
    <Provider store={store()}>
        <div>
            <App />
            <Notifications />
        </div>
    </Provider>,
  document.getElementById('ui')
);
