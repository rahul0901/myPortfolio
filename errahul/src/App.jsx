import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
