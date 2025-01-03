import { useState } from "react";

export default function Calculator(){
    //state variable

    const[principal, setPrincipal]=useState(0);
    const[rate, setRate]= useState(0);
    const[time,setTime]= useState(0);
    const[result,setResult]=useState(null);
    const calculateInvestment=()=>{
        const A =principal*Math.pow(1+rate/100,time);
        setResult(A.toFixed(2));
    }
    return (
        <div>
          <div>
            <label>Principal: </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Rate of Interest (%): </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Time (years): </label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
            />
          </div>
          <button onClick={calculateInvestment}>Calculate</button>
          {result && <h3>Future Value: RS{result}</h3>}
        </div>
      );
    }