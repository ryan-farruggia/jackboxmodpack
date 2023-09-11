import React, { CSSProperties } from 'react';
import BackButton from './BackButton';
import '../App.css';
interface PackHeaderProps {
    styles?: CSSProperties;
    text: string,
}

const PackHeader: React.FC<PackHeaderProps> = ({ styles, text }) => {
  return (
    <div style={{padding: '15px', ...styles}}>
      <div style={{alignItems: 'center'}}>
        <BackButton />
        <h1 style={{margin: '0 0 0 20px'}}>{text}</h1>
      </div>
    </div>
  );
}

export default PackHeader;
