import React, { useState } from 'react';

function BMI_validations() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [result, setResult] = useState('');
  const [errorMsg1,setErrorMsg1]=useState('')
  const [errorMsg2,setErrorMsg2]=useState('')
  const [errorMsg3,setErrorMsg3]=useState('')
 
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
      if (!/^[a-zA-Z\s]+$/.test(name) || name.trim()==='')
      {
        setErrorMsg1('Please enter valid name!');        
        return;
      }
      else{
        setErrorMsg1('');        
      }
      if (!/^\d+(\.\d+)?$/.test(height) || parseFloat(height) <= 0) 
      {
        setErrorMsg2('Please enter a valid height!');
        return;
      }
      else{
        setErrorMsg2('');        
      }
      if (!/^\d+(\.\d+)?$/.test(weight) || parseFloat(weight) <= 0) {
        setErrorMsg3('Please enter a valid weight!');
        return;
      }
      else{
        setErrorMsg3('');        

      }
      calculateBMI()
    };

  return (
    <div className="App">
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          {errorMsg1 && <div className="error" style={{color: "red"}}> {errorMsg1} </div>}
        </div>
        <div>
          <label>Height (in cm):</label>
          <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)}/>
          {errorMsg2 && <div className="error" style={{color: "red"}}> {errorMsg2} </div>}
        </div>
        <div>
          <label>Weight (in kgs):</label>
          <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          {errorMsg3 && <div className="error" style={{color: "red"}}> {errorMsg3} </div>}
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

export default BMI_validations;
