(this["webpackJsonpmy-app2"]=this["webpackJsonpmy-app2"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),r=a(7),o=a.n(r),i=(a(13),a(5)),l=a(1),c=a(2),u=a(3),h=a(4),p=(a(14),function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"constructTask",value:function(){var t=[];t.push(n.a.createElement("div",{className:"t_time"},this.props.task[1]));for(var e=2;e<this.props.task.length;e++){var a=this.props.task[e];if(a.includes("->")){var s=a.split("->");t.push(n.a.createElement("a",{target:"blank",href:s[1]},s[0]))}else t.push(n.a.createElement("div",{className:"t_note"},a))}var r=[];return r.push(n.a.createElement("div",{className:"t_title"},this.props.task[0])),r.push(n.a.createElement("div",{className:"t_detail"},t)),r}},{key:"getColorfromString",value:function(t){for(var e=0,a=0;a<t.length;a++)e+=t.charCodeAt(a)*Math.pow(10,a);return"rgb("+e%255+","+e/1e3%255+","+e/1e6%255+")"}},{key:"oppGetColorfromString",value:function(t){var e=this.getColorfromString(t).split("(")[1].split(")")[0].split(",");return"rgb("+Math.abs(255-parseFloat(e[0]))+","+Math.abs(255-parseFloat(e[1]))+","+Math.abs(255-parseFloat(e[2]))+")"}},{key:"render",value:function(){return n.a.createElement("div",{className:"Task",style:{backgroundColor:this.getColorfromString(this.props.task[0]),color:this.oppGetColorfromString(this.props.task[0].split().reverse().join())}},this.constructTask())}}]),a}(s.Component)),m=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).state={class:""},s}return Object(c.a)(a,[{key:"constructHours",value:function(){for(var t=[],e=[],a=0;a<this.props.tasks.length;a++){var s=this.props.tasks[a][1].split("-")[0].trim().split(":"),r=60*parseInt(s[0])+parseInt(s[1]);e.push(r)}for(var o=0;o<this.props.tasks.length;o++){var i=this.getMinIndex(e),l=this.props.tasks[i];t.push(n.a.createElement(p,{task:l})),e[i]=1440}return t}},{key:"getMinIndex",value:function(t){for(var e=0,a=0;a<t.length;a++)t[e]>t[a]&&(e=a);return e}},{key:"getClassName",value:function(){return this.props.active?"active":""}},{key:"render",value:function(){return n.a.createElement("div",{className:"Hour "+this.getClassName()},this.constructHours())}}]),a}(s.Component),v=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).updateHours=function(){if(s.props.active){for(var t=[],e=0;e<24;e++)t[e]=!1;t[(new Date).getHours()]=!0,s.setState({active:t})}},s.state={active:[],hourTasks:[]},s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){for(var t=[],e=0;e<24;e++)t[e]=!1;this.setState({active:t}),this.updateHours(),setInterval(this.updateHours,5e3),this.distributeHourlyTask()}},{key:"distributeHourlyTask",value:function(){for(var t=[],e=0;e<13;e++)t.push([]);var a,s=Object(i.a)(this.props.tasks);try{for(s.s();!(a=s.n()).done;){var n=a.value;t[n[1].split("-")[0].split(":")[0]-7].push(n)}}catch(r){s.e(r)}finally{s.f()}this.setState({hourTasks:t})}},{key:"constructHours",value:function(){if(0!==this.state.hourTasks.length){var t=[];t.push(n.a.createElement("div",{className:"d_title"},n.a.createElement("div",null,this.props.title)));for(var e=7;e<20;e++)t.push(n.a.createElement(m,{active:this.state.active[e],hour:e,tasks:this.state.hourTasks[e-7]}));return t}}},{key:"render",value:function(){return n.a.createElement("div",{className:"Day"},this.constructHours())}}]),a}(s.Component),d=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).UpdateDay=function(){for(var t=[],e=((new Date).getDay()+6)%7,a=0;a<7;a++)t[a]=a===e;s.setState({active:t})},s.state={allTasks:[],active:[]},s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=new Map;t.set("Mon",0),t.set("Tue",1),t.set("Wed",2),t.set("Thu",3),t.set("Fri",4),t.set("Sat",5),t.set("Sun",6);for(var e=[],a=0;a<7;a++)e.push([]);for(var s=0,n=["CSE 312 A | Mon Wed Fri 9:30-10:20 | Zoom -> https://washington.zoom.us/j/376298892 | Course Page -> https://courses.cs.washington.edu/courses/cse312/20sp/index.html | Ed -> https://us.edstem.org/courses/377/discussion/ | gradescope -> https://www.gradescope.com/courses/108804","CSE 312 AC | Thu 10:30-11:20 | Zoom -> https://washington.zoom.us/j/587576087 | Zoom new -> https://washington.zoom.us/j/742702292","CSE 344 A | Mon Wed Fri 13:30-14:20 | Piazza -> https://piazza.com/washington/spring2020/cse344/home | Course Page -> http://cs.washington.edu/344 | Zoom -> https://washington.zoom.us/j/332606302 | Homework assignments: you are allowed a total of 6 late-days with at most 2 late-days per assignment | ","CSE 344 AB | Thu 9:30-10:20 | Zoom -> https://www.google.com/url?q=https%3A%2F%2Fcanvas.uw.edu%2Fcourses%2F1371939%2Fexternal_tools%2F95443&sa=D&sntz=1&usg=AFQjCNFHsCdp-cgZBCVbZbqoFWQ7i8Hczw | ","DRAMA 215 A | Mon Wed 15:30-17:20 | Zoom -> https://washington.zoom.us/j/258117693 | ","CSE 473 A | Mon Wed Fri 14:30-15:20 | Ed -> https://us.edstem.org/courses/407/discussion/ | Zoom -> https://washington.zoom.us/j/916784016 | Readings -> https://courses.cs.washington.edu/courses/cse473/20sp/csenetid/readings.html | Calendar -> https://courses.cs.washington.edu/courses/cse473/20sp/calendar/calendar.html","CSE 492 J | Thu 12:30-13:20 | Zoom -> https://washington.zoom.us/j/255040719 ","CSE 492 J | Tue 12:30-13:20 | Zoom -> https://washington.zoom.us/j/184769811 ","Getup | Mon Tue Wed Thu Fri 8:30","Lunch | Mon Tue Wed Thu Fri Sat Sun 12:00","Run | Tue Thu Sat 18:00-18:30 ","Dinner | Mon Tue Wed Thu Fri Sat Sun 19:00","Test | Sun 17:00"];s<n.length;s++){var r,o=n[s],l=[],c=[],u=Object(i.a)(o.split("|"));try{for(u.s();!(r=u.n()).done;){var h=r.value;""!==(h=h.trim())&&l.push(h)}}catch(b){u.e(b)}finally{u.f()}if(!(l.length<2)){for(var p=2;p<l.length;p++)c.push(l[p]);var m,v=l[1].split(","),d=Object(i.a)(v);try{for(d.s();!(m=d.n()).done;)for(var f=m.value,g=(f=f.trim()).split(" "),k=0;k<g.length-1;k++){var y=[];y.push(l[0]),y.push(g[g.length-1]);var E,w=Object(i.a)(c);try{for(w.s();!(E=w.n()).done;){var T=E.value;y.push(T)}}catch(b){w.e(b)}finally{w.f()}e[t.get(g[k])].push(y)}}catch(b){d.e(b)}finally{d.f()}}}this.setState({allTasks:e}),this.UpdateDay(),setInterval(this.UpdateDay,1e6)}},{key:"constructDays",value:function(){if(0!==this.state.allTasks.length)return n.a.createElement("div",null,n.a.createElement("div",{id:"timeAxis"},n.a.createElement("div",null,"7am"),n.a.createElement("div",null,"8am"),n.a.createElement("div",null,"9am"),n.a.createElement("div",null,"10am"),n.a.createElement("div",null,"11am"),n.a.createElement("div",null,"12pm"),n.a.createElement("div",null,"1pm"),n.a.createElement("div",null,"2pm"),n.a.createElement("div",null,"3pm"),n.a.createElement("div",null,"4pm"),n.a.createElement("div",null,"5pm"),n.a.createElement("div",null,"6pm"),n.a.createElement("div",null,"7pm")),n.a.createElement(v,{title:"Monday",tasks:this.state.allTasks[0],active:this.state.active[0]}),n.a.createElement(v,{title:"Tuesday",tasks:this.state.allTasks[1],active:this.state.active[1]}),n.a.createElement(v,{title:"Wednesday",tasks:this.state.allTasks[2],active:this.state.active[2]}),n.a.createElement(v,{title:"Thursday",tasks:this.state.allTasks[3],active:this.state.active[3]}),n.a.createElement(v,{title:"Friday",tasks:this.state.allTasks[4],active:this.state.active[4]}),n.a.createElement(v,{title:"Saturday",tasks:this.state.allTasks[5],active:this.state.active[5]}),n.a.createElement(v,{title:"Sunday",tasks:this.state.allTasks[6],active:this.state.active[6]}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},this.constructDays())}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3a19bbde.chunk.js.map