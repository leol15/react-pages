import React, {Component} from 'react';
import Task from "./Task";


// props:
//	active : bool
//	tasks
//	- element:  ["CSE 312 A", "9:30-10:20", "Zoom -> https", "adwwadawd"]

class Hour extends Component {

	constructor(props) {
		super(props);
		this.state = {
			class: ""
		}
	}


	constructHours() {
		// make a list of Task obj
		let Tasks = [];
		let times = [];
		for (let i = 0; i < this.props.tasks.length; i++) {
			let task = this.props.tasks[i];
			let timeArr = task[1].split("-")[0].trim().split(":");
			// console.log(timeArr);
			let time = parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]);
			times.push(time);
		}
		

		for (let i = 0; i < this.props.tasks.length; i++) {
			let minIndex = this.getMinIndex(times);

			let task = this.props.tasks[minIndex];
			Tasks.push(
					<Task task={task}/>
				);
			times[minIndex] = 24 * 60;
		}
		// console.log(this.props.tasks);
		return Tasks;
	}
	getMinIndex(arr) {
		let result = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[result] > arr[i]) {
				result = i;
			}
		}
		return result;
	}

	getClassName() {
		if (this.props.active) {
			return "active";
		} else {
			return "";
		}
	}

	render() {
		return (
			<div className={"Hour " + this.getClassName()}>
				{this.constructHours()}
			</div>
		);
	}
}

export default Hour;
