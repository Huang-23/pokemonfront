import '../App.css';
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddEmpModal} from './AddEmpModal';
import {EditEmpModal} from './EditEmpModal';

export class Products extends Component{

    constructor(props){
        super(props);
        this.state={emps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'employee')
        .then(response=>response.json())
        .then(data=>{
            this.setState({emps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteEmp(empid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'employee/'+empid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
      <h1 className='products'>PRODUCTS</h1>
        const {emps, empid,empname,depmt,photofilename,doj}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    
                    <thead>
                        <tr>
                        <th>神奇寶貝大師名字</th>
                        <th>寶可夢類別</th>
                        <th>補獲時間(年/月/日)</th>
                        <th>照片</th>
                        <th>修改資料</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp=>
                            <tr key={emp.EmployeeId}>
                                <td>{emp.EmployeeName}</td>
                                <td>{emp.Department}</td>
                                <td>{emp.DateOfJoining}</td>
                                <td>{emp.PhotoFileName}</td>
                                <td>
        <ButtonToolbar>
        <Button className="mr-2" variant="info"
            onClick={()=>this.setState({editModalShow:true,
            empid:emp.EmployeeId,empname:emp.EmployeeName,depmt:emp.Department,
            photofilename:emp.PhotoFileName,doj:emp.DateOfJoining})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
            onClick={()=>this.deleteEmp(emp.EmployeeId)}>
                    Delete
        </Button>

        <EditEmpModal show={this.state.editModalShow}
            onHide={editModalClose}
            empid={empid}
            empname={empname}
            depmt={depmt}
            photofilename={photofilename}
            doj={doj}
        />
        </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add A Record</Button>

                    <AddEmpModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}
