import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../../counterSlice'

function Counter() {
    const [amount,setAmount] = useState(0)

    const disspatch = useDispatch()
    
  const count =  useSelector(state=>state.counterReducer.count)

  const  handleIncrementByAmount =()=>{
    if(amount){
        disspatch(incrementByAmount(amount))
    }else{
        alert("enter a valid amount")
    }
  }
  return (
    <>
     <div className='border rounded text-center p-5'>
        <h1 style={{fontSize:"100px"}}>{count}</h1>
        <div style={{width:"500px"}} className='d-flex justify-content-between mt-5'>
            <button onClick={()=>disspatch(decrement())} className='btn btn-warning' >DECREMENT</button>
            <button onClick={()=>disspatch(reset())} className='btn btn-danger' >Reset</button>
            <button onClick={()=>disspatch(increment())} className='btn btn-success' >Increment</button>
        </div>
            <div className='d-flex justfiy-content-between mt-5'>
                <input onChange={e=>setAmount(e.target.value)} type="text" className="form-control" placeholder='inctement Amount!!!'/>
                <button onClick={handleIncrementByAmount} className='btn btn-primary ms-5' >Increment by Amount</button>
            </div>
     </div>
    </>
  )
}

export default Counter