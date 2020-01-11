import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

import App from './components/App'
import './index.css'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(thunk, loadingBarMiddleware()))
)

ReactDOM.render(
    <Provider store={store}>
        <App />   
    </Provider>, 
document.getElementById('root')
)