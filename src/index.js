import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './redux';
import firebase, { FirebaseContext } from './firebase';
// import Firebase, { FirebaseContext } from './firebase';
{/*<FirebaseContext.Provider value={new Firebase()}>*/}

ReactDOM.render(
    <FirebaseContext.Provider value={firebase}>
        <Provider store={store}>
            <App/>
        </Provider>
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
serviceWorker.unregister();

