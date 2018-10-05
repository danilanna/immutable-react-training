import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'todomvc-app-css/index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import { VanillaTodoAppContainer } from './containers/VanillaTodoAppContainer';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <VanillaTodoAppContainer></VanillaTodoAppContainer>
        </div>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

