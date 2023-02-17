import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

//Components
import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
