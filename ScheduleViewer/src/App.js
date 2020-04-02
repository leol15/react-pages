import React, {Component} from 'react';
import './App.css';
import Day from "./Day";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allTasks: [],
      active: [],
      taskList: [
        "SLEEP 101 A | Mon Tue Wed Thu Fri 8:00 | MyUW -> https://my.uw.edu/ | Learn to sleep well ",
        "EAT 201 C | Mon Tue Wed Thu Fri 9:30, Sat Sun 11:30 | Learn to eat well | Youtube -> https://www.youtube.com/",
        "THINK 300 | Mon Wed Fri 13:30-14:20 | Piazza -> https://piazza.com/class/0000 | Zoom -> https://washington.zoom.us/j/think300 | Note: you are allowed a total of 6 late-days with at most 2 late-days per assignment",
        "DO 200 | Wed 10:20-11:20, Thu 9:30-10:20 | Zoom -> https://washington.zoom.us/j/200 ",
        "HEAR 400 A | Mon Wed 15:30-17:20 | Zoom -> https://washington.zoom.us/j/lll | Books -> https://Google.com | Listenings -> https://dangerouslinkhere",
        "PLAY  101 | Mon Wed Fri 14:30-15:20 | Home -> https://courses.washington.edu/courses/play101 | Calendar -> https://courses.washington.edu/courses/",
        "PLAY 101 C | Thu 15:30-16:20 | Zoom -> https://washington.zoom.us/j/100",
        "HEAR 400 AD | Thu Fri 12:30-13:20 | Zoom -> https://washington.zoom.us/j/101 ",
        "THINK 300 J | Tue 12:30-13:20 | Zoom -> https://washington.zoom.us/j/101 | Calendar -> https://docs.google.com/",
        "FO OD 101 | Mon Tue Wed Thu Fri Sat Sun 19:00"
      ]
    };
  }


  // todo: figuring out how to read in a file 
  componentDidMount() {
    this.updateTasks();

    this.UpdateDay();
    setInterval(this.UpdateDay,1000000);
  }


  // generate and set allTasks from the taskList
  updateTasks() {
    let map = new Map();
    map.set("Mon", 0);
    map.set("Tue", 1);
    map.set("Wed", 2);
    map.set("Thu", 3);
    map.set("Fri", 4);
    map.set("Sat", 5);
    map.set("Sun", 6);

    // clauses [1][2][3]...
    // each day should have an array of tasks
    let daysArray = [];
    for (let i = 0; i < 7; i++) {
      daysArray.push([]);
    }

    for (let str of this.state.taskList) { // one str 
      let clauses = [];
      let taskString = [];
      for (let item of str.split("|")) {
        item = item.trim();
        if (item !== "") {
          clauses.push(item);
        }
      }
      if (clauses.length < 2) {
        continue;
      }
      for (let i = 2; i < clauses.length; i++) {
        taskString.push(clauses[i]);
      }
      // process this particular task with clauses
      let times = clauses[1].split(",");
      for (let time of times) {
        time = time.trim();
        let timeClause = time.split(" ");
        // timeClause: "Wed" "Sat" "10:10-12:10"
        for (let dayIndex = 0; dayIndex < timeClause.length - 1; dayIndex++) {
          let dayTask = [];
          dayTask.push(clauses[0]);
          dayTask.push(timeClause[timeClause.length - 1]);
          for (let element of taskString) {
            dayTask.push(element);
          }
          daysArray[map.get(timeClause[dayIndex])].push(dayTask);
        }
      } 
    }
    // console.log(daysArray);
    this.setState({allTasks: daysArray});
  }


  UpdateDay = () => {
    let boolTable = [];
    let day = (new Date().getDay() + 6) % 7;
    for (let i = 0; i < 7; i++) {
      if (i === day) {
        boolTable[i] = true;
      } else {
        boolTable[i] = false;
      }
    }
    this.setState({active: boolTable});
  }


  // read a file on users pc
  handleFile = (file) => {
    // console.log(file);
    if(!file) {
      return;
    }
    let fileReader = new FileReader();
    fileReader.onloadend = e => {
      let inputStrings = e.target.result.toString().split(/\r?\n/);
      let newTasks = [];
      for (let i = 0; i < inputStrings.length; i++) {
        if (inputStrings[i] !== "" && inputStrings[i] !== '13') {
          newTasks.push(inputStrings[i]);
        }
      }
      // console.log(newTasks);
      this.setState({taskList: newTasks});
      this.updateTasks();
    };
    fileReader.readAsText(file);
  }

  // download the tempate
  downloadTxtFile = () => {
    const element = document.createElement("a");
    let fileString = "";
    for (let str of this.state.taskList) {
      fileString += str +"\n\n";
    }
    const file = new Blob([fileString], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "taskList.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }


  constructDays() {
    // not ready yet
    if (this.state.allTasks.length === 0) {
      return;
    }

    return <div>
      <div id="timeAxis">
        <div>7am</div>
        <div>8am</div>
        <div>9am</div>
        <div>10am</div>
        <div>11am</div>
        <div>12pm</div>
        <div>1pm</div>
        <div>2pm</div>
        <div>3pm</div>
        <div>4pm</div>
        <div>5pm</div>
        <div>6pm</div>
        <div>7pm</div>
      </div>
      <Day title="Monday"   tasks={this.state.allTasks[0]} active={this.state.active[0]}/>
      <Day title="Tuesday"  tasks={this.state.allTasks[1]} active={this.state.active[1]}/>
      <Day title="Wednesday"  tasks={this.state.allTasks[2]} active={this.state.active[2]}/>
      <Day title="Thursday"   tasks={this.state.allTasks[3]} active={this.state.active[3]}/>
      <Day title="Friday"   tasks={this.state.allTasks[4]} active={this.state.active[4]}/>
      <Day title="Saturday"   tasks={this.state.allTasks[5]} active={this.state.active[5]}/>
      <Day title="Sunday"   tasks={this.state.allTasks[6]} active={this.state.active[6]}/>
    </div>;
  }

  render() {
      return (
        <div className="App">
          {this.constructDays()}
          <div id="actionItems">
            <input type="file" id="taskFile" accept=".txt" onChange={e => this.handleFile(e.target.files[0])}/>
            <button onClick={this.downloadTxtFile}>Download text to edit</button>
          </div>
        </div>
      );
    }
}

export default App;
