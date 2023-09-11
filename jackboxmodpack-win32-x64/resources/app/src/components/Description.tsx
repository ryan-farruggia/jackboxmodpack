import React, { CSSProperties } from 'react';
import '../App.css';
interface DescriptionProps {
  styles?: CSSProperties;
  text: string,
}

const Description: React.FC<DescriptionProps> = ({ text, styles }) => {
  return (
    <div>
        <p style={{fontFamily: 'Inter', color: '#8B8B8B', fontSize: '25px', marginTop: '15px', ...styles}}>{text}</p>
    </div>
  );
}

export default Description;