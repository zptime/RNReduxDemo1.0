import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './js/reducers'
import Router from './router'

/* 创建store传入reducers。使用Provider组件包裹 Group组件, store作为属性传入Provider */
export default class App extends Component {
    render() {
        const store = createStore(rootReducer);
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
