import React from 'react';
import './App.css';

import Login from './Pages/Login'


function App() {
    // const [data,setdata] = useState();
    // fetch('/api').then(res=>res.json()).then(msg=>setdata(msg))
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
