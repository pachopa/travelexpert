import React, { Component } from 'react'
import axios from 'axios';

import TravelPackage from '../TravelPackages/TravelPackage';

class TravelPackages extends Component {
    state = {
        travelPackages: [],
        error: false
    }

    componentDidMount() {
        axios.get('/gettravelpackages')
            .then(response => {
                console.log(response.data);

                const travelPackages = response.data
                this.setState({travelPackages})
            })
            .catch(error => {
                this.setState({error: true});
            })
    }

    render() {
        let travelPackages = <p style={{textAlign: 'center'}}>Something went wrong</p>
        // if no errors, map json objects to an array of jsx elements
        if (!this.state.error) {
            travelPackages = this.state.travelPackages.map(travelPackage => {
                return <TravelPackage 
                            name={travelPackage.pkgName}
                            desc={travelPackage.pkgDesc}
                            price={travelPackage.pkgBasePrice}
                       />;
            });
        }

        return (
            <div>
                {travelPackages}
            </div>
        );
    }
}

export default TravelPackages