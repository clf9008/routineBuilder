import React, { Component } from 'react';
import '../App.css';
import * as ReactDOM from 'react-dom';
import 'dragula/dist/dragula.css';

const dragula = require('react-dragula');

const activityStyle = {
  fontWeight: 600,
  display: 'inline-block',
  padding: 15,
  marginTop: 10,
  margiBottom: 10,
  width: 180,
  userSelect: 'none',
  borderRadius: 5,
  cursor: 'grab'
}

function Activity(props) {
  return (<div style={activityStyle}>{props.task}</div>);
}

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {percentage: 0};
  }

  componentDidMount= () => {
    let nodes = ReactDOM.findDOMNode(this).querySelectorAll('.status');
    const drake = dragula([nodes[0], nodes[1], nodes[2]]);
    let countCompleted = ReactDOM.findDOMNode(this).querySelectorAll('#completed div div');
    this.setState({percentage: parseInt(countCompleted.length/6 * 100)});
    drake.on('drop', (el, source, target, sib) => {
      this.setState({percentage: parseInt(countCompleted.length/6 * 100)});
      this.props.updatePercent();
    });
  }

  componentDidUpdate = () => {
    ReactDOM.findDOMNode(this).querySelectorAll('#completed div div');
  }

  render() {
    return (
      <div className="wrapper-tb">
        <span id="time">
          <h3>PRIORITY</h3>
          <div>Priority 1</div>
          <div>Priority 2</div>
          <div>Priority 3</div>
          <div>Priority 4</div>
          <div>Priority 5</div>
          <div>Priority 6</div>
        </span>

        <span id="incomplete" className="status">
          <h3>INCOMPLETE</h3>
          <div>
            <Activity task="Study for French Quiz" />
          </div>
          <div>
            <Activity task="Do Bio problem set" />
          </div>
          <div>
            <Activity task="Play Fortnite" />
          </div>
          <div>
            <Activity task="Skype call Telegreezus" />
          </div>
        </span>

        <span id="completed" className="status">
          <h3>COMPLETED</h3>
          <div>
            <Activity task="Read El tunel chapter 10" />
          </div>
        </span>

        <span id="missed" className="status">
          <h3>MISSED</h3>
          <div>
            <Activity task="Rabb.it session" />
          </div>
          <div>
          </div>
        </span>
      </div>
    );
  }
}

export default TimeTable;