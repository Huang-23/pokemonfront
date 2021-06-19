import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';
import '../App.css';

export class Services extends Component{

  constructor(props){
      super(props);
      this.state={deps:[], addModalShow:false, editModalShow:false}
  }

  refreshList(){
      fetch(process.env.REACT_APP_API+'department')
      .then(response=>response.json())
      .then(data=>{
          this.setState({deps:data});
      });
  }

  componentDidMount(){
      this.refreshList();
  }

  componentDidUpdate(){
      this.refreshList();
  }

  deleteDep(depid){
      if(window.confirm('Are you sure?')){
          fetch(process.env.REACT_APP_API+'department/'+depid,{
              method:'DELETE',
              header:{'Accept':'application/json',
          'Content-Type':'application/json'}
          })
      }
  }
  render(){
    //<h1>留言板</h1>
   // <h1 className='services'>PRODUCTS</h1>
      const {deps, depid,depname}=this.state;
      let addModalClose=()=>this.setState({addModalShow:false});
      let editModalClose=()=>this.setState({editModalShow:false});
      return(
          <div >
              <h1>已被捕獲的寶可夢</h1>
              <Table className="mt-4" striped bordered hover size="sm">
                  <thead>
                      <tr>
                        <th>寶可夢名稱</th>
                        <th>修改或刪除</th>
                      </tr>
                  </thead>
                    <tbody>
                      {deps.map(dep=>
                        <tr key={dep.DepartmentId}>
                              <td>{dep.DepartmentName}</td>
                              <td>
                               <ButtonToolbar>
                                  <Button className="mr-2" variant="info"
                                    onClick={()=>this.setState({editModalShow:true,
                                    depid:dep.DepartmentId,depname:dep.DepartmentName})}>
                                    Edit
                                   </Button>

                                <Button className="mr-2" variant="danger"
                                    onClick={()=>this.deleteDep(dep.DepartmentId)}>Delete</Button>
                                <EditDepModal show={this.state.editModalShow}
                                  onHide={editModalClose} depid={depid} depname={depname}/>
                                </ButtonToolbar>
                              </td>
                          </tr>
                        )}
                  </tbody>
              </Table>
              <ButtonToolbar>
                  <Button variant='primary' 
                  onClick={()=>this.setState({addModalShow:true})}>
                  Add Pokemon</Button>

                  <AddDepModal show={this.state.addModalShow}
                  onHide={addModalClose}/>
              </ButtonToolbar>
          </div>
      )
  }
}