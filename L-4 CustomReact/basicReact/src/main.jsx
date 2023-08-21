import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function MyApp(){
  return(
    <div>
      <h1>Custom App !!!</h1>
    </div>
  )
}

// custom react code 
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blanks",
//   },
//   children: "click me to visit google",
// };

const AnotherElement= (
  <a href="https://google.com" target='_blank'> Visit Google </a>
)


const anotherUser= "TEJAS BISEN"
 const reactElement= React.createElement(
  'p',
  {href:"https://google.com",
target:'_blank'},
'Click Me To Visit Google',
anotherUser
 )
ReactDOM.createRoot(document.getElementById('root')).render(
    
<App/>
  
)
