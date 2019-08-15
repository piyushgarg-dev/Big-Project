import React from 'react';
import './App.css';

import Login from './Pages/Login'
import Signup from './Pages/Signup'


function App() {
    // const [data,setdata] = useState();
    // fetch('/api').then(res=>res.json()).then(msg=>setdata(msg))
  return (
    <div className="App">
      <Signup/>
    </div>
  );
}

export default App;
