import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";
import ImageLink from './components/ImageLink';
import LargeTitle from './components/Titles';
import Description from './components/Description';
import { Pack1, Pack3, Pack4, Pack5, Pack6, Pack7, Pack8, Pack9, Pack10, Pack1FibbageXL, Pack1Lieswatter, Pack1Wordspud, Pack1YDKJ, Pack1Drawful } from './components/Packs';
import Pack2 from './components/Packs/Pack2';
import { Pack2Bidiots, Pack2Bombcorp, Pack2Earwax, Pack2Fibbage2, Pack2QuiplashXL } from './components/Packs/Pack2';
import { useTransition, animated } from 'react-spring';
import { CSSProperties, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface MainContentProps {
  styles?: CSSProperties;
}

const MainContent: React.FC<MainContentProps> = ({ styles }) => {
  let location = useLocation();
  const imageNames = [
    '../bganimation/jackboxlogo.png',
    '../bganimation/quip1.png',
    '../bganimation/quip2.png',
    '../bganimation/quip3.png',
    '../bganimation/quip4.png',
    '../bganimation/quip5.png',
    '../bganimation/quip6.png',
    '../bganimation/tko1.png',
    '../bganimation/tko2.png',
    '../bganimation/tko3.png',
    '../bganimation/tko4.png',
    '../bganimation/tko5.png',
    '../bganimation/tko6.png',
    '../bganimation/tko7.png',
    '../bganimation/tko8.png',
    '../bganimation/tko9.png',
    '../bganimation/tko10.png',
    '../bganimation/tko11.png',
    '../bganimation/tko12.png',
    '../bganimation/tko13.png',
    '../bganimation/tko14.png',
    '../bganimation/tko15.png',
    '../bganimation/tko16.png',
    '../bganimation/mbubbles.png',
    '../bganimation/mayonnaise.png',
    '../bganimation/ydkjfs.png',
  ];
  const transitions = useTransition(location, {
    from: { opacity: 0, position: 'absolute', width: '100%', transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-50%)' },
  });
  
  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageNames.length);
    return `../bganimation/${imageNames[randomIndex]}`;
  }

  if (location.pathname === "/") {
    return (
      <div style={{flexDirection: 'column', alignItems: 'center', zIndex: 2, justifyContent: 'center', width: '100%', ...styles}}>
        {Array(25).fill(null).map((_, idx) => (
          <img 
            key={idx} 
            className="image-bubble" 
            src={randomImage()}
            alt=""
            style={{
              left: `${Math.random() * 100}vw`,
              width: `70px`,
              animationDelay: `${Math.random() * 80}s`,
              animationDuration: `${(Math.random() * (1 - 0.1) + 1) * 50}s`,
              zIndex: -1,
              userSelect: 'none',
            }}
          />
        ))}
        <div style={{flexDirection: 'column', alignItems: 'center', zIndex: 2, marginBottom: '20px'}}>
          <img src={'jackboxlogodevlight.png'} />
          <LargeTitle text='The Jackbox Mod Pack' styles={{margin: 0}}/>
          <Description text='Modify your Jackbox games for the ultimate customized experience!' styles={{fontWeight: 600, margin: '0px 0px 25px 0px'}}/>
        </div>
        <div style={{marginBottom: '10px'}}>
          <ImageLink to='/pack1' src='pack1.png' />
          <ImageLink to='/pack2' src='pack2.png' />
          <ImageLink to='/pack3' src='pack3.png' />
          <ImageLink to='/pack4' src='pack4.png' />
          <ImageLink to='/pack5' src='pack5.png' />
        </div>
        <div style={{marginBottom: '30px'}}>
          <ImageLink to='/pack6' src='pack6.png' />
          <ImageLink to='/pack7' src='pack7.png' />
          <ImageLink to='/pack8' src='pack8.png' />
          <ImageLink to='/pack9' src='pack9.png' />
          <ImageLink to='/pack10' src='pack10.png' />
        </div>
        <footer style={{position: 'fixed', bottom: 0, backgroundColor: '#1C212C', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
          <FontAwesomeIcon icon={faHeart} color='red' fontSize={'12px'} />
          <p style={{color: 'white', fontFamily: 'Roboto', fontSize: '12px', margin: '0 0 0 8px', padding: '10px 0px'}}>Buy us a coffee</p>
        </footer>
      </div>
    );
  }

  return transitions((style: any, item) => (
    <animated.div style={{...style}}>
      <Routes location={item}>
        <Route path="/pack1" element={<Pack1 />} />
        <Route path="/pack1/drawful" element={<Pack1Drawful />} />
        <Route path="/pack1/fibbagexl" element={<Pack1FibbageXL />} />
        <Route path="/pack1/lieswatter" element={<Pack1Lieswatter />} />
        <Route path="/pack1/wordspud" element={<Pack1Wordspud />} />
        <Route path="/pack1/ydkj" element={<Pack1YDKJ />} />

        <Route path="/pack2" element={<Pack2 />} />
        <Route path="/pack2/bidiots" element={<Pack2Bidiots />} />
        <Route path="/pack2/bombcorp" element={<Pack2Bombcorp />} />
        <Route path="/pack2/earwax" element={<Pack2Earwax />} />
        <Route path="/pack2/fibbage2" element={<Pack2Fibbage2 />} />
        <Route path="/pack2/quiplashxl" element={<Pack2QuiplashXL />} />

        <Route path="/pack3" element={<Pack3 />} />
        <Route path="/pack4" element={<Pack4 />} />
        <Route path="/pack5" element={<Pack5 />} />
        <Route path="/pack6" element={<Pack6 />} />
        <Route path="/pack7" element={<Pack7 />} />
        <Route path="/pack8" element={<Pack8 />} />
        <Route path="/pack9" element={<Pack9 />} />
        <Route path="/pack10" element={<Pack10 />} />
      </Routes>
    </animated.div>
  ));
}

const App: React.FC = () => {  
  return (
    <Router>
      <div className="App">
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
