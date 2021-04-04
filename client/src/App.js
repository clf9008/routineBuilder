import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import About from "./components/layout/About";
import Profile from "./components/layout/Profile";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import background from "./App.css";
import * as ReactDOM from 'react-dom';
import ProgressBar from './components/progressBar';
import TimeTable from './components/timeTable';
import styled, { keyframes } from 'styled-components';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super();
        this.state = { percentage: 0 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () => {
        let countCompleted = ReactDOM.findDOMNode(this).querySelectorAll('#completed div div');
        this.setState({ percentage: parseInt(countCompleted.length / 6 * 100) });
    }

    componentDidMount = () => {
        this.handleChange();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Nav />
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Footer />
                </div>

            </Router>
            
        );
    };
};

    export default App
