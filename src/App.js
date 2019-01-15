import React, { Component } from 'react';
import MainPage from './MainPage/MainPage';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <MainPage />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;