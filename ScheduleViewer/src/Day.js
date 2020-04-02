import React, {Component} from 'react';
import Hour from "./Hour";

// props:
//	tasks: []
//	- element:  ["CSE 312 A", "9:30-10:20", "Zoom -> https", "adwwadawd"]

class Day extends Component {

	constructor(props) {
		super(props);
		this.state = {
			active: [],
			hourTasks: []
		};
	}

	componentDidMount() {
		// this.updateHours();
		let boolTable = [];
		for (let i = 0; i < 24; i++) {
			boolTable[i] = false;
		}
		this.setState({active: boolTable});
		this.updateHours();
		setInterval(this.updateHours, 5000);
		// this.distributeHourlyTask();
	}


	distributeHourlyTask() {
		// "CSE 473 A", "2:30-3:20", "Ed -> https://us.edstem.org/courses/407/discussion/"
		// 13 hours!
		// 7 ==>> 0
		let newHourTasks = [];
		for (let i = 0; i < 13; i++) {
			newHourTasks.push([]);
		}
		for (let task of this.props.tasks) {
			let startHour = task[1].split("-")[0].split(":")[0] - 7;
			newHourTasks[startHour].push(task);
			// console.log(task);
			// hourTasks[startHour].push(task); // debug
		}

		this.setState({hourTasks: newHourTasks});
		// console.log(hourTasks);
	}



	updateHours = () => {
		// only update if is active
		if (this.props.active) {
			// console.log("updating");
			let boolTable = [];
			for (let i = 0; i < 24; i++) {
				boolTable[i] = false;
			}
			let hour = new Date().getHours();
			boolTable[hour] = true;
			this.setState({active: boolTable});
		}
	}


	constructHours() {
		if (this.state.active.length === 0) {
			return; // not ready
		}

		// generate an array of tasks for each hour
		let newHourTasks = [];
		for (let i = 0; i < 13; i++) {
			newHourTasks.push([]);
		}
		for (let task of this.props.tasks) {
			let startHour = task[1].split("-")[0].split(":")[0] - 7;
			newHourTasks[startHour].push(task);
			// console.log(task);
			// hourTasks[startHour].push(task); // debug
		}

		let tags = [];		
		tags.push(<div className="d_title"><div>{this.props.title}</div></div>);
		for (let i = 7; i < 20; i++) {
			tags.push(
				<Hour active={this.state.active[i]} hour={i} tasks={newHourTasks[i-7]}/>
			);
		}
		return tags;
	}


	render() {
		return (
			<div className="Day">
				{this.constructHours()}
			</div>
		);
	}
}

export default Day;
