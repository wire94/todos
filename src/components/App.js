import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './partials/Header';
import store from '../store';
import Home from './Home';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
