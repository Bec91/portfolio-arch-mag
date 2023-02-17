import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

//Components
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
