import React, { Component } from 'react';
import Box from './Box';
import Goal from './Goal';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			transfer: {
				element: null,
				parent: null,
				new: null
			},
			box: true
		}
	}

	chooseTransferElement(state) {
		switch(state.transfer.element.props.name) {
			case 'box':
				return Box;
			default:
				return null;
		}
	}

	drag(item) {
		const transfer = this.state.transfer;
		transfer.element = item;
		this.setState({transfer});
	}

	drop(e, parent) {
		e.preventDefault();

		const item = React.createElement(
			this.chooseTransferElement(this.state),
			[this.state.transfer.element.props]
		);

		const key = this.state.transfer.element.props.name;
		let stateKey = this.state[key];
		stateKey = false;
		this.setState({[key]: stateKey});

		const transfer = this.state.transfer;
		transfer.parent = parent;
		transfer.new = item;
		this.setState({transfer});
	}

	render() {
		return (
			<div>
				{this.state.box ? <Box name="box" ref={x => this.box = x} drag={() => this.drag(this.box)} /> : null}
				<br /><br /><br /><br />
				<Goal ref={x => this.goal = x} drop={(e) => this.drop(e, this.goal)}>
					{this.state.transfer.parent === this.goal ? this.state.transfer.new : null}
				</Goal>
				<br /><br /><br /><br />
				<Goal ref={x => this.goal2 = x} drop={(e) => this.drop(e, this.goal2)}>
					{this.state.transfer.parent === this.goal2 ? this.state.transfer.new : null}
				</Goal>
			</div>
		);
	}
}