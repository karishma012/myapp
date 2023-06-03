
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <h1>This is me</h1>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={< Home />} />

        <Route path="/About" element={< About />} />

      </Routes>
    </>
  );
}

export default App;
