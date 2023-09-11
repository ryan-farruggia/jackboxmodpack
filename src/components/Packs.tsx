import React, { useEffect, useState } from 'react';
import PageHeader from './PageHeader';
import ImageLink from './ImageLink';
import '../App.css';
import { MediumTitle } from './Titles';
import NotAvailable from './NotAvailable';

interface PackProps {
}

interface PackSubProps {
}

const Pack1: React.FC<PackProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text='Jackbox Party Pack 1' styles={{width: '100%'}} />
      
      <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
        <MediumTitle text='Choose a game to modify.' />
        <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
          <ImageLink to='drawful' src='./pack1/drawful.png' />
          <ImageLink to='fibbagexl' src='./pack1/fibbageXL.png' />
          <ImageLink to='lieswatter' src='./pack1/lieswatter.png' />
        </div>
        <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
          <ImageLink to='wordspud' src='./pack1/wordspud.png' />
          <ImageLink to='ydkj' src='./pack1/youdontknowjack.png' />
        </div>
      </div>
    </div>
  );
}

const Pack1Drawful: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text='Jackbox Party Pack 1 > Drawful' styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

const Pack1FibbageXL: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text='Jackbox Party Pack 1 > FibbageXL' styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

const Pack1Lieswatter: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text='Jackbox Party Pack 1 > Lie Swatter' styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

const Pack1Wordspud: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text='Jackbox Party Pack 1 > Word Spud' styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

const Pack1YDKJ: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 1 > You Don't Know Jack" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}



const Pack3: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 3' styles={{width: '100%'}} />
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack3/fakinit.png' />
            <ImageLink to='#' src='./pack3/guesspionage.png' />
            <ImageLink to='#' src='./pack3/quiplash2.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack3/teeko.png' />
            <ImageLink to='#' src='./pack3/triviamurderparty.png' />
          </div>
        </div>
      </div>
    );
}

const Pack4: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 4' styles={{width: '100%'}} />
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack4/bracketeering.png' />
            <ImageLink to='#' src='./pack4/civicdoodle.png' />
            <ImageLink to='#' src='./pack4/fibbage3.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack4/monster.png' />
            <ImageLink to='#' src='./pack4/survivetheinternet.png' />
          </div>
        </div>
      </div>
    );
}

const Pack5: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 5' styles={{width: '100%'}} />
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack5/madversecity.png' />
            <ImageLink to='#' src='./pack5/patentlystupid.png' />
            <ImageLink to='#' src='./pack5/splittheroom.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack5/ydkjfs.png' />
            <ImageLink to='#' src='./pack5/zeepledome.png' />
          </div>
        </div>
      </div>
    );
}

const Pack6: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 6' styles={{width: '100%'}} />
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack6/dictionarium.png' />
            <ImageLink to='#' src='./pack6/jokeboat.png' />
            <ImageLink to='#' src='./pack6/pushthebutton.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack6/rolemodels.png' />
            <ImageLink to='#' src='./pack6/triviamurderparty2.png' />
          </div>
        </div>
      </div>
    );
}

const Pack7: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 7' styles={{width: '100%'}} />
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack7/blatherround.png' />
            <ImageLink to='#' src='./pack7/champdup.png' />
            <ImageLink to='#' src='./pack7/devilsandthedetails.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack7/quiplash3.png' />
            <ImageLink to='#' src='./pack7/talkingpoints.png' />
          </div>
        </div>
      </div>
    );
}

const Pack8: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 8' styles={{width: '100%'}} />
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack8/drawfulanimate.png' />
            <ImageLink to='#' src='./pack8/jobjob.png' />
            <ImageLink to='#' src='./pack8/pollmine.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack8/thewheel.png' />
            <ImageLink to='#' src='./pack8/weaponsdrawn.png' />
          </div>
        </div>
      </div>
    );
}

const Pack9: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <PageHeader text='Jackbox Party Pack 9' styles={{width: '100%'}} />
        <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
          <MediumTitle text='Choose a game to modify.' />
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack9/fibbage4.png' />
            <ImageLink to='#' src='./pack9/junktopia.png' />
            <ImageLink to='#' src='./pack9/nonsensory.png' />
          </div>
          <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
            <ImageLink to='#' src='./pack9/quixort.png' />
            <ImageLink to='#' src='./pack9/roomerang.png' />
          </div>
        </div>
      </div>
    );
}

const Pack10: React.FC<PackProps> = ({  }) => {
    return (
      <div style={{padding: '15px', flexDirection: 'column'}}>
        <PageHeader text='Jackbox Party Pack 10' />
        <NotAvailable text='This game is too new. Check back later.' />
      </div>
    );
}

export { Pack1, Pack3, Pack4, Pack5, Pack6, Pack7, Pack8, Pack9, Pack10 }
export { Pack1Drawful, Pack1FibbageXL, Pack1Lieswatter, Pack1Wordspud, Pack1YDKJ }
export default Pack1;
