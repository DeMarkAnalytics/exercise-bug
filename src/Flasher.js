import React from 'react';
import './Flasher.css';

function Flasher() {
  const [newPrice, setNewPrice] = React.useState(0);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      // set a random number from 0 to 100
      setNewPrice((Math.random() * 1000).toFixed(2)); 
    }, 3000);

    return () => {
      // clean up interval on component unmount
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="flasher">
      <div className={`price price-flash`}>
        {newPrice}
      </div>
    </div>
  );
}

export default Flasher;
