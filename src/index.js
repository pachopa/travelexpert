import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from 'axios';

// global axios config
axios.defaults.baseURL = 'http://localhost:8080/TravelExpertsAPI/rs/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// intercept request before they are passed to the rest of the app
axios.interceptors.request.use(request => {
    console.log(request);
    // **edit request here as needed (add headers, filter etc)**
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById("root"));
