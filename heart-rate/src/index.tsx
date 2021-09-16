import React from 'react';
import ReactDOM from 'react-dom';
import { HeartRateCalculator } from './HeartRateCalculator';

ReactDOM.render(
  <React.StrictMode>
    <HeartRateCalculator />
  </React.StrictMode>,
  document.getElementById('heart-rate-calculator')
);
