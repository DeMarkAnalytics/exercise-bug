import React from 'react';
import useRandomPrice from './price-hook';
import './Flasher.css';

function Flasher() {
  const newPrice = useRandomPrice();

  return (
    <div className="flasher">
      <div className={`price price-flash`}>
        {newPrice}
      </div>
    </div>
  );
}

export default Flasher;
