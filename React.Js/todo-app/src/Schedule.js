import {Component} from 'react';  // {Component} = React.Component
import ToDoList from './components/ToDoList';
class Schedule extends Component{
    taskList1 = [ //For Today
        {
            name : "Finish Homework",
            time : "10AM",
            isCompleted : true
        }, 
        {
            name : "Attend Seminar",
            time : "1PM",
            isCompleted : true
        }, 
        {
            name : "Go To Play",
            time : "5:30PM",
            isCompleted : false
        }
    ];

    taskList2 = [ // For Tomorrow
    {
        name : "Go To Stadium",
        time : "12AM",
        isCompleted : false
    }, 
    {
        name : "Go To College",
        time : "2PM",
        isCompleted : false
    }, 
    {
        name : "Cutiebaazi",
        time : "5PM",
        isCompleted : false
    }
    ];
    render(){
        return(
            <div>
                <h1>Today's Task</h1>
                <ToDoList key={1} taskList={this.taskList1}/>
                <hr/>
                <h1>Tomorrow's Task</h1>
                <ToDoList key={2} taskList={this.taskList2}/>
            </div>
        );
    }
}

export default Schedule;