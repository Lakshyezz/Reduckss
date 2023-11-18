import { useSelector, useDispatch } from "react-redux";
import { increament, decreament ,reset, increamentByAmt} from "./counterSlice"
import { useState } from "react";

const Counter = () => {
    const count =  useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [increaseBy, setIncreaseBy] = useState(0);
    const addValue = Number(increaseBy) || 0
    
    const resetAll = () =>{
      setIncreaseBy(0);
      dispatch(reset())
    }

  return (
    <section>
        <p> {count}</p>
        <div>
            <button onClick={() => dispatch(increament())}>+</button>
            <button onClick={() => dispatch(decreament())}>-</button>
            <input
            type="text"
              value={increaseBy} 
              onChange={(e) => setIncreaseBy(e.target.value)}
            />
            <div>
              <button onClick={()=> dispatch(increamentByAmt(addValue))}>Add Value</button>
              <button onClick={() => dispatch( reset())}>Reset Value</button>
            </div>
        </div>
    </section>
  )
}

export default Counter