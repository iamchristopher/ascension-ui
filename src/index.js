import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    Route
} from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import {
    default as store,
    history
} from './stores/configureStore';

import './index.css';
import Chat from './containers/Chat';
import Notifications from './containers/Notification';
import App from './containers/App';

window.AscensionStore = store();

const routes = [
    {
        path: '/',
        component: () => (
            <div>
                <Chat />
                <Notifications />
            </div>
        )
    },
    {
        path: '/user',
        component: () => <h1>User</h1>,
        routes: [
            {
                path: '/:id',
                component: ({ match }) => <h1>User #{match.params.id}</h1>
            }
        ]
    }
];

const CustomRoute = ({
    path,
    component,
    routes = []
}) => (
    <div>
        <Route
            path={path}
            exact
            render={component}
        />
        {routes.map((route, i) => <CustomRoute
            key={i}
            path={path + route.path}
            component={route.component}
            routes={route.routes}
        />)}
    </div>
);

ReactDOM.render(
    <Provider store={window.AscensionStore}>
        <ConnectedRouter history={history}>
            <App>
                {routes.map((route, i) => <CustomRoute
                    key={i}
                    {...route}
                />)}
            </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
