
import './App.css'
import Counter from './assets/components/Counter'


function App() {

  return (
    <>
  <div className='container'>
    <div className='row'>
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <h1 className='text-center '>Counter App</h1>
       <div style={{height:"80vh"}} className="d-flex justify-content-center align-items-center w-100">
        <Counter/>
       </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
    </>
  )
}

export default App
