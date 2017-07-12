import React, { Component } from 'react';

export default class Box extends Component {
  render() {
    return (
      <div
      	style={{backgroundColor: 'green', height: '50px', width: '50px'}}
      	draggable
      	onDragStart={this.props.drag}
      >
      </div>
    );
  }
}