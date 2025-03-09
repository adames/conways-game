import './App.css'
import Grid from './components/Grid'


function App() {

  return (
    <div className='App'>
      <Grid />
    </div> 
  )
}

export default App

/*
  <li>1. Any live cell with 2-3 neighbors survives</li>
  <li>2. Any dead cell with 3 neighbors becomes alive</li>
  <li>3. All other cells die or stay dead</li>
*/