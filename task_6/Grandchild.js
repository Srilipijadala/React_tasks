import { useState, createContext, useContext } from "react";
import { ParentContext } from './Parent';

function Grandchild(){
    const parentState=useContext(ParentContext)
    return (
        <div>
          <h1>Grandchild component</h1>
          <h2>{`Hello ${parentState} again!`}</h2>
        </div>
      );
}
export default Grandchild;
