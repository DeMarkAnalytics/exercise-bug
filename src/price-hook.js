import React from 'react';

export default function useRandomPrice() {
  const [newPrice, setNewPrice] = React.useState((Math.random() * 1000).toFixed(2));
  const [timer, setTimer] = React.useState();

  // set a random time for every price update
  React.useEffect(() => {
    if (timer) {
      clearInterval(timer);
    }

    const randTime = (Math.random() * (5000) + 2000);
    const intervalId = setInterval(() => {
      // set a random price from 0 to 100
      setNewPrice((Math.random() * 1000).toFixed(2)); 
    }, randTime);

    setTimeout(() => {
      setTimer(intervalId);
    }, randTime - 10); 

    return () => {
      // clean up interval on component unmount
      clearInterval(timer)
    }
  }, [timer])

  return newPrice
}