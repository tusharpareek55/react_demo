import React, { useState, useEffect } from 'react';

export function Useeff() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
      .then((response) => response.json())
      .then((data) => setQuote(data[0].quote))
      .catch((error) => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div>
      <h2>Random Quote:</h2>
      <p>{quote}</p>
    </div>
  );
}
