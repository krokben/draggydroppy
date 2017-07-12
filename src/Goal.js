import React, { Component } from 'react';

export default class Goal extends Component {
	allowDrop(e) {
		e.preventDefault();
	}

  render() {
    return (
      <div
      	style={{backgroundColor: 'red', height: '100px', width: '100px'}}
      	onDragOver={this.allowDrop}
      	onDrop={this.props.drop}
      >
      	{this.props.children}
      </div>
    );
  }
}