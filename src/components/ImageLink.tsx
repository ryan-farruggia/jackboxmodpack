import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

interface ImageLinkProps {
  to: string;
  src: string;
  alt?: string;
  style?: React.CSSProperties;
}

const ImageLink: React.FC<ImageLinkProps> = ({ to, src, alt = '', style }) => {
  return (
    <Link to={to} style={style} className='image-link'>
      <img src={src} alt={alt} style={{height: '200px'}} />
    </Link>
  );
}

export default ImageLink;
