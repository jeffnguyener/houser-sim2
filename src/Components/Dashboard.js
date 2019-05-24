import React, { Component } from 'react'
import House from './House'
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
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
    handleAddProperty(){
        
    }

    render() {
        return (
            <div>
                Dashboard
                <div className="add-prop">
                <button onClick={}>Add New Property</button>
                </div>
            <House />
            </div>
        )
    }
}

export default Dashboard;