import { useState, useEffect } from "react";
import ImageLink from "../ImageLink";
import NotAvailable from "../NotAvailable";
import PageHeader from "../PageHeader";
import LargeTitle, { MediumTitle, SmallTitle } from "../Titles";
import Description from "../Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCode, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import './Packs.css';

interface PackProps {
}

interface PackSubProps {

}

const Pack2: React.FC<PackProps> = ({  }) => {
    return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text='Jackbox Party Pack 2' styles={{width: '100%'}} />
      <div style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
        <MediumTitle text='Choose a game to modify.' />
        <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
          <ImageLink to='bidiots' src='./pack2/bidiots.png' />
          <ImageLink to='earwax' src='./pack2/earwax.png' />
          <ImageLink to='bombcorp' src='./pack2/bombcorp.png' />
        </div>
        <div style={{justifyContent: 'space-evenly', width: '100%', marginBottom: '50px'}}>
          <ImageLink to='fibbage2' src='./pack2/fibbage2.png' />
          <ImageLink to='quiplashxl' src='./pack2/quiplashXL.png' />
        </div>
      </div>
    </div>
    );
}

const Pack2Bidiots: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 2 > Bidiots" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

const Pack2Bombcorp: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 2 > Bombcorp" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}
interface ApiResponse {
  output: string;
}
const Pack2Earwax: React.FC<PackSubProps> = ({  }) => {
  const [output, setOutput] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [showSpinner, setShowSpinner] = useState(false);

  let badrequest = false;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
    let btn = document.getElementById('earwaxbtn') as HTMLButtonElement;
    if (btn) {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.transition = '0.2s';
    }    
  }

  const handleUpload = async () => {
    setShowSpinner(true);
    if (!selectedFiles) {
      setOutput("No files selected");
      setShowSpinner(false);
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('oggFiles', selectedFiles[i]);
    }

    try {
      const response = await fetch('http://localhost:5000/pack2earwax', {
        method: 'POST',
        body: formData,
      });

      if (response.status !== 200) {
        console.log('Unexpected status code:', response.status);
        throw new Error("Network response was not ok");
     }
     if (response.status == 200) {
      badrequest = false;
        setOutput(output)
     }
     
      const data: ApiResponse = await response.json();
      setOutput(data.output);
    } catch (error) {
      badrequest = true;
      console.error(error);
      setOutput("Error uploading files");
    } setShowSpinner(false);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  return (
    <div style={{display: 'flex', padding: '15px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 2 > Earwax" styles={{width: '100%'}} />
      <LargeTitle text="Earwax Mods" styles={{margin: '20px 0 0 0'}}/>
      <div style={{display: 'flex', flexDirection: 'column', marginTop: '30px', alignItems: 'center', justifyContent: 'center', background: '#222', borderRadius: '8px', padding: '20px', width: '95%'}}>
        <MediumTitle text="Custom Audio Files" styles={{margin: '0 0 10px 0'}}/>
        <Description text="Upload custom audio files to Earwax to be randomly distributed to players." styles={{margin: '0 0 25px 0'}}/>
        <input type="file" accept=".ogg" multiple onChange={handleFileChange} style={{color: 'white', fontFamily: 'Inter', fontSize: '20px', width: '300px', marginLeft: '30px'}}/>
        <span style={{color: '#999', fontFamily: 'Inter', fontWeight: 600, fontSize: '16px', marginTop: '15px'}}>Supported file types: .ogg</span>
        <button id="earwaxbtn" onClick={handleUpload} style={{marginTop: '20px', width: '25%', opacity: 0.4, transition: '0.2s'}}>Select Earwax Directory</button>
        {showSpinner && <div className={`spinner ${!showSpinner ? 'fadeOut' : ''}`}></div>}
        {output && 
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            {badrequest ? 
            <div style={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
              <FontAwesomeIcon icon={faXmarkCircle} style={{fontSize: '25px', color: 'red'}}/>
              <Description text={output || 'Uploading...'} styles={{color: 'red', margin: '0 0 0 10px', fontWeight: 600}}/>
            </div>
            : 
            <div style={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
              <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: '25px', color: 'limegreen'}}/>
              <Description text={output || 'Uploading...'} styles={{color: 'limegreen', margin: '0 0 0 10px', fontWeight: 600}}/>
            </div>
            }
          </div>
        }
      </div>

      <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px', alignItems: 'center', justifyContent: 'center', background: '#222', borderRadius: '8px', padding: '20px', width: '95%', opacity: 0.4}}>
        <MediumTitle text="Custom Voice Prompts" styles={{margin: '0 0 10px 0'}}/>
        <Description text="Upload custom voice prompts to Earwax to be narrated live in-game." styles={{margin: '0 0 15px 0'}}/>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <FontAwesomeIcon icon={faCode} style={{fontSize: '20px', color: 'dodgerblue', marginRight: '10px'}} />
          <SmallTitle text="In Development" styles={{margin: 0}}/>
        </div>
        
      </div>
    </div>
  );
}

const Pack2Fibbage2: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 2 > Fibbage 2" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

const Pack2QuiplashXL: React.FC<PackSubProps> = ({  }) => {
  return (
    <div style={{padding: '15px', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <PageHeader text="Jackbox Party Pack 2 > Quiplash XL" styles={{width: '100%'}} />
      <NotAvailable text="Couldn't find any mods for this game." styles={{marginTop: '200px'}} />
    </div>
  );
}

export {Pack2Bidiots, Pack2Bombcorp, Pack2Earwax, Pack2QuiplashXL, Pack2Fibbage2}
export default Pack2;