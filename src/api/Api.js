import React, { Component } from 'react';

class Api extends Component {
    state = {
        travelPackages: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/TravelExpertsAPI/rs/api/gettravelpackages')
        .then(res => res.json())
        .then((data) => {
            this.setState({ contacts: data })
        })
        .catch(console.log)
    }
}

export default Api;