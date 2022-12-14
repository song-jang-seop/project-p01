import React, { Component } from 'react';
import Customer from './components/Customer'
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { CircularProgress } from '@mui/material';

/*
React Life Cycle
1. constructor()
2. componentWillMount()
3. render()
4. compoentDidMount()

props or state -> shouldComponetUpdate()
*/


class App extends Component {
    state = {
        customers: "",
        completed: 0
    }

    componentDidMount() {
        //this.timer = this.setState(this.progress, 20);

        this.callApi()
           .then(res => this.setState({customers: res}))
           .catch(err => console.log(err));

    }

    callApi = async () => {
        const response = await fetch('/api/customers');
        const body = await response.json();

        return body;
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0: completed + 1 });
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.customers ? this.state.customers.map(c => {
                        return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> );
                        }) : 
                        <TableRow>
                            <TableCell colSpan="6" align="center">
                                <CircularProgress value={this.state.completed}/>
                            </TableCell>
                        </TableRow>
                        }
                    </TableBody>      
                </Table>
                <CustomerAdd/>
            </div>
        );
    }
}

export default App;