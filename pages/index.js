import {useState} from "react"

export default function Home() {
  const [number, setNumber] = useState(0); //number is current state and setNumber is used to update our state.

  return (
    <div>
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
   
    </div>
  )
}
