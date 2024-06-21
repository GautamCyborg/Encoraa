import React, { useState } from 'react';
import EXIF from 'exif-js';
import "../../assets/NewFiles/Css/upload.css"
import PopupMap from './PopupMap';
import PopupLayout from './PopupLayout';

const UploadComponent = () => {
  const [image, setImage] = useState(null);
  const [label, setLabel] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        EXIF.getData(img, async function () {
          const lat = EXIF.getTag(this, 'GPSLatitude');
          const lon = EXIF.getTag(this, 'GPSLongitude');
          if (lat && lon) {
            const latRef = EXIF.getTag(this, 'GPSLatitudeRef') || 'N';
            const lonRef = EXIF.getTag(this, 'GPSLongitudeRef') || 'W';
            const latitude = (lat[0] + lat[1] / 60 + lat[2] / 3600) * (latRef === 'N' ? 1 : -1);
            const longitude = (lon[0] + lon[1] / 60 + lon[2] / 3600) * (lonRef === 'W' ? -1 : 1);
            
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            setLocation(data.display_name);
          } else {
            setLocation('');
            setError('No geotags found in the image.');
          }
        });
      };
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Image:', image);
    console.log('Label:', label);
    console.log('Location:', location);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="app-container">
      <div className="upload-container">
        <form className="upload-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Upload Image</h2>
          <div className="form-group">
            <label className="form-label">Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Label:</label>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Location:</label>
            <div className="location-input-group">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-input location-input"
                readOnly
              />
              <button
                type="button"
                className="map-button"
                onClick={openPopup}
              >
                📍
              </button>
              <PopupLayout component={PopupMap} isOpen={isPopupOpen} onClose={closePopup} />
            </div>
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

    </div>
  );
};

export default UploadComponent;

