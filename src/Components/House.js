import React, { Component } from 'react'
import axios from 'axios'

class House extends Component {
    constructor(props){
        super(props)
        this.state = {
            propertyName: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        }
    }
    componentDidMount(){
        axios.get('/api/getproperties').then(results => {
            this.setState({ 
                propertyName: results.data,
                address: results.data,
                city: results.data,
                state: results.data,
                zip: results.data
            })
        })
    }

    render() {
        const { propertyName, address, city, state, zip} = this.state
        return (
            <div className="house-view">
                {propertyName}
                {address}
                {city}{state}{zip}
            </div>
        )
    }
}

export default House;