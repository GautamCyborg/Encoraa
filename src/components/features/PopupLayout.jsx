import React, { useState } from 'react';
import "../../assets/NewFiles/Css/popuplayout.css"

const PopupLayout = ({ component: Component, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-popup-btn" onClick={onClose}>
          &times;
        </button>
        <Component />
      </div>
    </div>
  );
};

export default PopupLayout;
