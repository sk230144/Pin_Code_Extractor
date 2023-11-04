import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      isRunning: false,
      startTime: 0,
      currentTime: 0,
    };
  }

  handleStartStop = () => {
    if (this.state.isRunning) {
      clearInterval(this.timer);
    } else {
      const startTime = Date.now() - this.state.currentTime;
      this.timer = setInterval(() => {
        this.setState({
          currentTime: Date.now() - startTime,
        });
      }, 10);
    }

    this.setState({
      isRunning: !this.state.isRunning,
      startTime: this.state.isRunning ? 0 : Date.now(),
    });
  };

  handleReset = () => {
    if (this.state.isRunning) {
      clearInterval(this.timer);
    }
    this.setState({
      isRunning: false,
      currentTime: 0,
      startTime: 0,
    });
  };

  componentWillUnmount() {
    if (this.state.isRunning) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <div className="stopwatch">
          <h1>Stopwatch</h1>
          <div className="time">
            {this.formatTime(this.state.currentTime)}
          </div>
          <div className="controls">
            <button onClick={this.handleStartStop}>
              {this.state.isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={this.handleReset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }

  formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = (time % 1000).toString().slice(0, 2);

    return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds}`;
  };
}

export default Stopwatch;
