import './App.css';
import { Routes,Route,Link, useParams } from 'react-router-dom';
import Home from '../Home/Home';
import Number from '../Number/Number';
import { useState } from 'react';


function App() {
  const [numberCall, setNumberCall] = useState(4);
  const [greeting, setGreeting] = useState("greeting");
  const params = useParams()

  console.log(params);
  return (
    <div className="App">
      <h1>React Router Tutorial</h1>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to={`/${numberCall}`}>Number</Link>
          </li>
          <li>
            <Link to={`/${greeting}`}>Greeting</Link>
          </li>
          
        </ul>
      </nav>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="/:id" element={<Number/>} />
        <Route path="/:id/:bgColor" element={<Number/>} />
        <Route path="/:id/:bgColor/:ffColor" element={<Number/>} />
        
      </Routes>
    </div>
  );
}

export default App;
