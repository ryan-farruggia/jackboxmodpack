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
    <div style={{alignItems: 'center', flexDirection: 'column', width: '100%', justifyContent: 'center', ...styles}}>
        <Description text='¯\_(ツ)_/¯' styles={{color: 'white', fontSize: '30px', margin: '0 0 10px 0'}}/>
        <Description text={text} styles={{textAlign: 'center', color: 'white', margin: '0 0 0 10px'}} />
    </div>
  );
}

export default NotAvailable;
