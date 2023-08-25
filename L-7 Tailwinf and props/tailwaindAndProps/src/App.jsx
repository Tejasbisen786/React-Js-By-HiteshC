import './App.css'
import Card from './component/card'

function App() {
  let myObject={
    username:"Tejas",
    age:21
  }

  let newArr=[2.3,5]

  return (
   <>
     <div className='bg-green-400'>
      <h1 className='text-white'> Tejas Bisen</h1>
      <br />
      <p className='text-black bg-green-400'>Lorem ipsum dolor sit amet.</p>
     </div>

     <Card userName="Tushar Bisen"  btnText="Click me"/>
     <Card userName="Tejas Bisen"   />

   
   
   
   </>
     
  )
}

export default App

