/* eslint-disable */

import { createStore, applyMiddleware, compose } from 'redux'
import middleware from './middleware'
import reducer from './home'


const finalCreateStore = compose(
    applyMiddleware.apply(this, middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

export const store = function (initialState) {
    const trey = createStore(reducer, initialState, finalCreateStore)
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./home', () => {
            const nextRootReducer = require('./home')
            trey.replaceReducer(nextRootReducer)
        })
    }
    return trey
}()
