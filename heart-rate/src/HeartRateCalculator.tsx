import React, { useState } from 'react';
import { HeartRateInput } from './HeartRateInput';
import { HeartRateForm } from './HeartRateForm';

export const HeartRateCalculator = () => {
  const [maxHeartRate, setMaxHeartRate] = useState(0);

  const handleSubmit = (heartRateInput: HeartRateInput) => {
    setMaxHeartRate(220 - heartRateInput.age);
  };

  return (
    <div>
      <HeartRateForm onSubmit={handleSubmit} />
      {maxHeartRate > 0 ? (
        <p className="text-error">
          Your maximum heart rate should be {maxHeartRate}.
        </p>
      ) : null}
    </div>
  );
};
