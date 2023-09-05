import React, { CSSProperties } from 'react';
import '../App.css';
import Description from './Description';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface NotAvailableProps {
    text: string,
    styles?: CSSProperties;
}

const NotAvailable: React.FC<NotAvailableProps> = ({ text, styles }) => {
  return (
    <div style={{alignItems: 'center', ...styles}}>
        <FontAwesomeIcon icon={faInfoCircle} color='white' style={{fontSize: '20px'}}/>
        <Description text={text} styles={{textAlign: 'center', margin: '0 0 0 10px'}} />
    </div>
  );
}

export default NotAvailable;
