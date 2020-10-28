import React from 'react';

import './ConfirmationPage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { far, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const confirmationPage = (props) => {
    return (
        <div className="confirmationPage">
            <div className="confimationPage_icon"><FontAwesomeIcon icon={faPaperPlane} color='white' size='4x' /></div>
            <h1 className="confirmationPage_header">Bon Voyage!</h1>
            <h5 className="confirmationPage_id">Booking ID#364</h5>
            <p className="confirmationPage_message">A confimation email will be sent to placeholder@email.com shortly</p>
        </div>

    );
}

export default confirmationPage;