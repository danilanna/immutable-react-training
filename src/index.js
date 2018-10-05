import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'todomvc-app-css/index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import { ImmutableTodoAppContainer } from './containers/ImmutableTodoAppContainer';
import { VanillaTodoAppContainer } from './containers/VanillaTodoAppContainer';

ReactDOM.render(
    <Provider store={store}>
        <div>
            {
                window.location.pathname === '/vanilla' 
                ? <VanillaTodoAppContainer></VanillaTodoAppContainer>
                : <ImmutableTodoAppContainer></ImmutableTodoAppContainer>
            }
        </div>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

