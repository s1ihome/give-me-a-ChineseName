
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Breadcrumb} from 'antd'
import { Router, Route, IndexRoute, Link, browserHistory, IndexRedirect } from 'react-router'
import { store } from '../redux/store'
import token from '../util/token'

// views
import FullLayoutView from '../view/layoutView/FullLayoutView'

import TestView from '../view/discoverView/TestView'
import ProfileView from '../view/discoverView/ProfileView'
import ListView from '../view/discoverView/ListView'

import PageNotFound from '../view/serverView/404'

const requireCredentials = store => (nextState, replace, next) => {
    const login = token.isLogin()
    if (!login) {
        replace({
            pathname: '/login',
            query: {
                next: nextState.location.pathname + nextState.location.search
            }
        })
    }
    next()
}

const scrollToTop = () => window.scrollTo(0, 0)

const Root = () => {
    return (
        <Provider store={store} >
            <Router history={browserHistory} >
                <Route path='/' component={FullLayoutView}>
                    <IndexRoute component={TestView}/>
                    <Route path='test' component={TestView} />
                    <Route path='profile' component={ProfileView} />
                    <Route path='list' component={ListView} />
                    <Route path="*" component={PageNotFound} />
                </Route>
            </Router>
        </Provider>
    )
}

export default Root
