import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		let classList = ["333	Systems Programming",
			"421	Algorithms",
			"EE215	Signal Conditioning",
			"341	Languages",
			"401	Compilers",
			"402	Domain Specific Languages",
			"403	Software Engineering",
			"427	Computational Biology",
			"431	Complexity",
			"440	HCI I",
			"442	Visualization",
			"444	Databases",
			"446	Machine Learning",
			"447	NLP",
			"451	OS",
			"452	Distributed Systems",
			"455	Computer Vision",
			"456	Story Design for Animation",
			"457	Graphics",
			"458	Animation",
			"459	Character Animation",
			"461	Networks",
			"464	Adv Topics in Animation",
			"469	Computer Architecture I",
			"470	Computer Architecture II",
			"474	Embedded SW",
			"478	Autonomous Robots",
			"484	Security"]


		let mapping = new Map();

		classList.forEach(i => {
			mapping.set(i, 1);
		});

		this.state = {
			"rank": mapping,
			"classes": classList,
			"out": false
		};

	}


	construct_cards() {
		let ret = [];
		let classList = [...this.state.classes];
		classList.sort((a, b) => {
			return this.state.rank.get(b) - this.state.rank.get(a);
		});
		classList.forEach(i => {
			ret.push(<div className="class-card" key={i} 
				style={{"fontSize":(80/i.length + 15) + "px", 
				"backgroundColor":"rgba(114, 255, 33, " + (this.state.rank.get(i) / 20) + ")"}}
				>{i}</div>);
		});
		return ret;
	}

	construct_question() {
		// pick random 
		let ret = [];
		let random_class = [];

		let class1 = this.state.classes[Math.floor(Math.random() * this.state.classes.length)];
		let class2 = this.state.classes[Math.floor(Math.random() * this.state.classes.length)];

		while (class2 === class1) {
			class2 = this.state.classes[Math.floor(Math.random() * this.state.classes.length)];
		}

		ret.push(<div className="class-choice" key="1" style={{"fontSize":(80/class1.length + 25) + "px"}}
			onClick={() => {this.betterThan(class1, class2)}}
			>{class1}</div>);
		ret.push(<div className="class-choice" key="2" style={{"fontSize":(80/class1.length + 25) + "px"}}
			onClick={() => {this.betterThan(class2, class1)}}
			>{class2}</div>);
		return ret;
	}

	betterThan(c1, c2) {
		this.state.rank.set(c1, this.state.rank.get(c1) + this.state.rank.get(c2));
		this.forceUpdate();
	}

	render() {
		return (
			<div id="App">
				<div id="question-area">
					<h4>Which one?</h4>
					<div id="question-area-class">
						{this.construct_question()}
						
					</div>
				</div>
				<div id="display-area">
					{this.construct_cards()}
				</div>
			</div>
		);
	}



}

export default App;
