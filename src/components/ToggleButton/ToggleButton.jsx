import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn); // Pasamos el nuevo estado al padre
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleButton;
