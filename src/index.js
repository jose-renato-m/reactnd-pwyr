import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'

import App from './components/App'

const store = createStore(reducer, middleWare)

ReactDOM.render(
    <Provider store={store}>
        <App />   
    </Provider>, 
document.getElementById('root')
)