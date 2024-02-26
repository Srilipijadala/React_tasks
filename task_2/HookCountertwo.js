import React, {useState} from 'react'

function HookCountertwo()
{
    const initialCount=0
    const [ count, setCount] = useState(initialCount)
    const incrementFive = () => {
        for(let i=0;i<5;i++)
        {
            setCount(prevCount => prevCount +1 )
        }
    }
    return(
       
       <div>
            <div> Count: {count} </div>
            <button onClick={ ()=>setCount(prevCount => prevCount+1)}> Count Increment</button>
            <button onClick={ ()=>setCount(prevCount => prevCount-1)}> Count Decrement</button>
            <button onClick={ ()=>setCount(initialCount)}> Count Reset</button>
            <button onClick={ incrementFive }> Count Increment 5</button>

       </div>
    )

}
export default HookCountertwo;
