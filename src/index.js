import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedback = [{
    feeling:'',
    understanding: 0
}];

const studentReducer = ( state = feedback, action) => {

    switch (action.type) {

        case 'FEELING':
            console.log (' This is feedback', feedback)
            return [action.payload];
        
        case 'UNDERSTANDING':
            return [action.payload];
        
            
        
        default:
            return state
    }
    }











const storeInstance = createStore(
    combineReducers({
        studentReducer

    }),
    applyMiddleware( logger ), 
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
