import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

//Components
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/contact' element={<Contact/>}/> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
