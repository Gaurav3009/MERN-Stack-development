// import React from 'react'; // function based 
import {Component} from 'react'; // class based component
import Student from './Student';

class Main extends Component{
    students = [
        {
            name : "Gaurav Pandey",
            year : "3rd year",
            CGPA : "7.94",
            placement : false,
            optedForPEP : true
        },
        {
            name : "Sanish Nirwan",
            year : "3rd year",
            CGPA : "8.00",
            placement : false,
            optedForPEP : true
        },
        {
            name : "Ayush Kumar Pal",
            year : "3rd year",
            CGPA : "9.00",
            placement : false,
            optedForPEP : true
        },
        {
            name : "Shriyansh Agrawal",
            year : "3rd year",
            CGPA : "9.5",
            placement : true,
            optedForPEP : true
        },
        {
            name : "Ayush Kumar Raikwar",
            year : "3rd year",
            CGPA : "10",
            placement : true,
            optedForPEP : false
        }
    ];
    render() {
        return(
            <div className="table-data">
                <table className="tab">
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>CGPA</th>
                        <th>Quality</th>
                    </tr>
                {
                    this.students.map((ele, index)=>(
                        <Student key = {index} data = {ele}/>
                    ))
                }
                </table>
            </div>
        )
    }
}

export default Main;