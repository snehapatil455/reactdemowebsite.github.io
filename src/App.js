import React, {useState} from 'react'; 
import Tweet from './tweet';


function App(){
  const [isRed ,setRed ]= useState(false);
  const [count ,setCount]= useState(0);

 


  const Increment = () => {
    setCount(count +1);
    setRed(!isRed);
  };

  return(
    <div className="app">
    <h1 className={isRed ? 'red' : ""}>Hello guys ..change my colour!</h1>
    <button onClick={Increment}>Increment</button>
    <h1>{count}</h1>
   
    </div>
  );

}

export default App;