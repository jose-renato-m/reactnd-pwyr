import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import App from './components/App'
import record from './record'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const history = createBrowserHistory()

const store = createStore(
    connectRouter(history)(reducer), 
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk, loadingBarMiddleware()))
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter record={record}>
            <App />
        </ConnectedRouter>                 
    </Provider>, 
document.getElementById('root')
)