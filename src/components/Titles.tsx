import React, { CSSProperties } from 'react';
import '../App.css';
import Description from './Description';
interface TitleProps {
  styles?: CSSProperties;
  text: string,
}

const LargeTitle: React.FC<TitleProps> = ({ text, styles }) => {
  return (
    <div>
        <h1 style={{fontFamily: 'JockeyOne', color: 'white', fontSize: '80px', ...styles}}>{text}</h1>
    </div>
  );
}

const MediumTitle: React.FC<TitleProps> = ({ text, styles }) => {
  return (
    <div>
        <h1 style={{fontFamily: 'JockeyOne', color: 'white', fontSize: '50px', ...styles}}>{text}</h1>
    </div>
  );
}

const SmallTitle: React.FC<TitleProps> = ({ text, styles }) => {
  return (
    <div>
        <h1 style={{fontFamily: 'JockeyOne', color: 'white', fontSize: '30px', ...styles}}>{text}</h1>
    </div>
  );
}

export { MediumTitle, SmallTitle };
export default LargeTitle;
