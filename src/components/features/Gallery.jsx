import React from 'react';

import '../../assets/NewFiles/Css/gallery.css';

import image01 from "../../assets/NewFiles/images/01.jpg"
import image02 from "../../assets/NewFiles/images/02.jpg"
import image03 from "../../assets/NewFiles/images/03.jpg"
import image04 from "../../assets/NewFiles/images/04.jpg"
import image05 from "../../assets/NewFiles/images/05.jpg"
import image06  from "../../assets/NewFiles/images/06.jpeg";



const images = [
  { src: image01, text: 'Image 1' },
  { src: image02, text: 'Image 2' },
  { src: image03, text: 'Image 3' },
  { src: image04, text: 'Image 4' },
  { src: image05, text: 'Image 5' },
  { src: image06, text: 'Image 6' },
  { src: image01, text: 'Image 1' },
  { src: image02, text: 'Image 2' },
  { src: image03, text: 'Image 3' },
  { src: image04, text: 'Image 4' },
  { src: image05, text: 'Image 5' },
  { src: image06, text: 'Image 6' }
];

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
    <h2 className="gallery-heading">Gallery</h2>
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={`Gallery ${index + 1}`} />
          <div className="overlay">
            <div className="text">{image.text}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Gallery;
