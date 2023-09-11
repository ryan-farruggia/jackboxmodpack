import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../App.css';

const BackButton: React.FC = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div style={{alignItems: 'center'}} onClick={handleBackClick} className='back-button'>
            <FontAwesomeIcon icon={faChevronLeft} style={{marginRight: '7px', color: 'deepskyblue'}}/>
            <p style={{color: 'deepskyblue'}}>Back</p>
        </div>
    );
};

export default BackButton;
