import React, { Component } from 'react'

class Wizard extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    resetForm = () => {
        this.setState()
      }

    render() {
        return (
            <div>
                <button onClick={this.resetForm}
                        type="button">Cancel</button>
            <div className="propertyname">
                <h3>Property Name</h3>
            <input type="text"
                    placeholder="Property Name"
                // onChange={}
                // value={} 
                />
            </div>
            <div className="address">
                <h3>Address</h3>
                <input type="text"
                    placeholder="Address"
                // onChange={}
                // value={}
                />
            </div>
            <div className="city">
                <h3>City</h3>
                <input type="text"
                    placeholder="Address"
                // onChange={}
                // value={}
                />
            </div>
            <div className="state">
                <h3>State</h3>
                <input type="text"
                    placeholder="Address"
                // onChange={}
                // value={}
                />
            </div>
            <div className="zip">
                <h3>Zipcode</h3>
                <input type="text"
                    placeholder="Address"
                // onChange={}
                // value={}
                />
            </div>
                <button>Complete</button>
            </div>
        )
    }
}

export default Wizard;