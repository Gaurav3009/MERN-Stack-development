import {Component} from 'react';

class Quality extends Component{
    p = this.props.data.placement;
    o = this.props.data.optedPEP;
    render() {
        return (
            <td> 
                {
                    this.p ? this.o ? "Good" : "Excelent" : this.o ? "Bad" : "Average"
                }
            </td>
        )
    }
}

export default Quality;