
import './App.css'
import Counter from './assets/Counter'
// import Team from './Team'



function App() {
  function handeleClick(){
    alert('button click')
  }
 const handle2 = () =>{
  alert('button2 click')
 }
 const handle3 = (add) =>{
  alert(add + 5)
 }
  return (
    <>
     
      <h1>React</h1>
      {/* <Team></Team> */}
      <Counter></Counter>
      <button onClick={handeleClick}>click1</button>
      <button onClick={handle2}>Click2</button>
      <button onClick={() =>{alert('third click')}}>third</button>
      <button onClick={() =>{handle3(4)}}>Four</button>
    </>
  )
}


export default App