import { useState, createContext, useContext } from "react";
import Child from './Child'
//import ReactDOM from "react-dom/client";

export const ParentContext = createContext();

function Parent() {
  const [parentState, setParentState] = useState("Srilipi");

  return (
    <div>
    <ParentContext.Provider value={parentState}>
        
      <h1>{`Hello ${parentState}!`}</h1>
      <h1>Parent componenet</h1>
      <Child />
    </ParentContext.Provider>
    </div>
    
  );
}
export default Parent;
