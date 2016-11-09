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
            <p
                style={{
                    float: 'left',
                    width: '40%',
                    textAlign: 'justify'
                }}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit justo quis lacus laoreet, in maximus ante tristique. Ut mi elit, interdum nec viverra ut, eleifend non sem. Integer malesuada risus interdum tincidunt placerat. Aliquam erat volutpat. Pellentesque condimentum, ante at efficitur mollis, quam sapien rutrum neque, id imperdiet odio massa ac eros. Ut vulputate consequat lectus, vel viverra elit suscipit in. Cras aliquam ornare aliquam.</p>

            <p>Fusce nec quam sed nunc fermentum suscipit nec sollicitudin risus. In viverra augue non mauris dapibus, ac gravida leo accumsan. Vivamus ut eros a risus hendrerit ornare ac quis elit. Phasellus elementum molestie elit, sed maximus turpis semper at. Mauris interdum ante quis rhoncus vestibulum. Curabitur lobortis vestibulum arcu at condimentum..</p>
            <p>Fusce nec quam sed nunc fermentum suscipit nec sollicitudin risus. In viverra augue non mauris dapibus, ac gravida leo accumsan. Vivamus ut eros a risus hendrerit ornare ac quis elit. Phasellus elementum molestie elit, sed maximus turpis semper at. Mauris interdum ante quis rhoncus vestibulum. Curabitur lobortis vestibulum arcu at condimentum. Curabitur lacinia ullamcorper cursus. Curabitur id ipsum consectetur, lacinia dui id, ultricies diam. Aenean hendrerit augue ut sodales faucibus. Praesent quis facilisis lorem. Fusce aliquet est quis nisl tempor scelerisque. Nam condimentum lobortis pharetra. Etiam vel purus tincidunt, volutpat sapien nec, placerat tortor.</p>
            <p>Fusce nec quam sed nunc fermentum suscipit nec sollicitudin risus. In viverra augue non mauris dapibus, ac gravida leo accumsan. Vivamus ut eros a risus hendrerit ornare ac quis elit. Phasellus elementum molestie elit, sed maximus turpis semper at. Mauris interdum ante quis rhoncus vestibulum. Curabitur lobortis vestibulum arcu at condimentum. Curabitur lacinia ullamcorper cursus. Curabitur id ipsum consectetur, lacinia dui id, ultricies diam. Aenean hendrerit augue ut sodales faucibus. Praesent quis facilisis lorem. Fusce aliquet est quis nisl tempor scelerisque. Nam condimentum lobortis pharetra. Etiam vel purus tincidunt, volutpat sapien nec, placerat tortor.</p>
        </div>
    </Provider>,
  document.getElementById('root')
);
