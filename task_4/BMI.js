import React, { useState, Math } from 'react';

function BMI() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [result, setResult] = useState('');

 
  const calculateBMI=()=>{
    const heightM = (height) / 100; //converting into meters
    const bmiCal = ((weight) / (heightM * heightM)).toFixed(3);
    setBMI(bmiCal);
    if (bmiCal < 18.5) {
      setResult('Underweight');
    } else if (bmiCal >= 18.5 && bmiCal < 25) {
      setResult('Normal weight');
    } else {
      setResult('Overweight');
    }

  };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      calculateBMI()
    };
      
    


  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>Height (in cm):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}/>
        </div>
        <div>
          <label>Weight (in kgs):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <button type="submit">Calculate the BMI</button>
      </form>
      {bmi && (
        <div>
          <h3>{name}, your BMI is {bmi}</h3>
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  );
};

export default BMI;
