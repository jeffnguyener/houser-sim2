import React, { Component } from 'react'
import House from './House'
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: [],
            redirect: false
        }
    }
    componentDidMount(){
        axios.get('/api/getproperties').then(results => {
            this.setState({ houses: results.data})
        })
    }
    deleteProperty(id){
        axios.delete(`/api/houses/${id}`).then(results => {
            this.setState({ houses: results.data})
        })
    }
    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }
    handleRedirect = () =>{
        if(this.state.houses)
        return <redirect to='/wizard'/>
    }

    render() {
        return (
            <div>
                Dashboard
                <div className="add-prop">
                {this.handleRedirect()}
                <button onClick={this.setRedirect}>Add New Property</button>
                </div>
            <House />
            </div>
        )
    }
}

export default Dashboard;