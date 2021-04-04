import React, { Component } from 'react';
import '../App.css';
import * as ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

class ProgressBar extends Component {
  constructor(props) {
    super();
    this.state = {fillPercent: 0}
  }

  componentDidMount= () => {
    let barElement = ReactDOM.findDOMNode(this).querySelector("#fill");
    this.setState({fillPercent: this.props.percentage});
    setTimeout(() => {
      barElement.style.width = this.props.percentage+"%";
    }, 0);
    let actualPercent = ReactDOM.findDOMNode(this).querySelector("#percentage");
    actualPercent.addEventListener('DOMSubtreeModified', () => {
      this.setState({fillPercent: this.props.percentage});
    });
  }

  componentDidUpdate = () => {
    let barElement = ReactDOM.findDOMNode(this).querySelector("#fill");
    setTimeout(() => {
      barElement.style.width = this.props.percentage+"%";
      if(this.props.percentage === 100) {
        barElement.style.backgroundColor = "#00FF00";
      } else {
        barElement.style.backgroundColor = '#bb2bff';
      }
    }, 0);
  }

  render() {
    return (
      <div>
        <div id="progress-bar">
          <div id="fill"></div>
        </div>
        <strong id="percentage">{this.props.percentage}%</strong>
      </div>
    );
  }
}

export default ProgressBar;