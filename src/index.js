import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css'

import App from './components/App'

const persistConfig = {
    key: 'users',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const store = createStore(
    persistedReducer, 
    composeEnhancers(applyMiddleware(thunk, loadingBarMiddleware()))
)
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store} persistor={persistor}>
        <App />   
    </Provider>, 
document.getElementById('root')
)