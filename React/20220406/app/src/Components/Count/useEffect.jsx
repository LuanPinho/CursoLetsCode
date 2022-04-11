import React, {useState} from "react"

export default function Count() {
    const [count,setCount] = useState(0)
    
    return <>
        <h1>Contador: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Me click</button>
    </>
}