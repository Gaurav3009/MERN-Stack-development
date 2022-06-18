import {Component} from 'react';
import Quality from './Quality';

class Student extends Component{
    val = this.props.data;
    status = {
        placement : this.val.placement,
        optedPEP : this.val.optedForPEP
    }
    render(){
        return(
            <tr>
                <td>{this.val.name}</td>
                <td>{this.val.year}</td>
                <td>{this.val.CGPA}</td>
                <Quality data={this.status}/>
            </tr>
        )
    }
}

export default Student;