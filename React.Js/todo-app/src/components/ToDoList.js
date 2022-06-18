import {Component} from 'react';  // {Component} = React.Component
import ToDoListItem from './ToDoListItem';
class ToDoList extends Component{
    render(){
        return(
            <div>
                {
                   this.props.taskList.map((task,index)=>(
                    <ToDoListItem key={index} data={task}/>
                   ))
                }
            </div>
        );
    }
}

export default ToDoList;
