import logo from './logo.svg';
import './App.css';
import{Routes,Route} from 'react-router-dom'
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/room/:roomId' element={<h1>room</h1>}></Route>
     </Routes>
    </div>
  );
}

export default App;
