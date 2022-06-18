import {Component} from 'react';  // {Component} = React.Component

class ToDoListItem extends Component{
    render(){
        return(
            <div>
                    <p>
                        <strong>Task Name : {this.props.data.name} </strong>
                        --- <em>Time : {this.props.data.time}</em>
                        --- <u>Is Task Completed : {this.props.data.isCompleted ? "Yes" : "No"} </u>
                    </p>
            </div>
        );
    }
}

export default ToDoListItem;