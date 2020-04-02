import React, {Component} from 'react';


// props:
//	task: []
//	- element:  ["CSE 312 A", "9:30-10:20", "Zoom -> https", "adwwadawd"]

class Task extends Component {


	constructTask() {
		// console.log(this.props.task);

		let taskDetails = [];
		taskDetails.push(
			<div className="t_time">{this.props.task[1]}</div>
		);
		for (let i = 2; i < this.props.task.length; i++) {
			let clause = this.props.task[i];
			if (clause.includes("->")) {
				let link = clause.split("->");
				taskDetails.push(
					<a target="blank" href={link[1]}>{link[0]}</a>
				);
			} else {
				taskDetails.push(
					<div className="t_note">{clause}</div>
				);
			}
		}
		
		let resultHtml = [];
		resultHtml.push(
			<div className="t_title">{this.props.task[0]}</div>
		);
		resultHtml.push(
				<div className="t_detail">
					{taskDetails}
				</div>
			);

		return resultHtml;
	}

	getColorfromString(str) {
		let sum = 0;
		for (let i = 0; i < str.length; i++) {
			sum += str.charCodeAt(i) * Math.pow(10, i);
		}
		let r = sum % 255;
		let g = sum / 1000 % 255;
		let b = sum / 1000000 % 255;
		return "rgb(" + r + "," + g + "," + b + ")";
	}
	oppGetColorfromString(str) {
		let rgb = this.getColorfromString(str);
		let colors = rgb.split("(")[1].split(")")[0].split(",");
		// console.log(rgb.split("(")[1].split(")")[0]);
		let R = Math.abs(255 - parseFloat(colors[0]));
		let G = Math.abs(255 - parseFloat(colors[1]));
		let B = Math.abs(255 - parseFloat(colors[2]));
		return "rgb(" + R + "," + G + "," + B + ")";
	}


	render() {
		return (
			<div className="Task" 
				style={{backgroundColor: this.getColorfromString(this.props.task[0]),
					color: this.oppGetColorfromString(this.props.task[0].split().reverse().join())}}>
				{this.constructTask()}
			</div>
		);
	}
}

export default Task;
