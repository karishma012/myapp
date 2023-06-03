
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
function App() {
  return (
    <>
    

      <NoteState>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/Home" element={< Home />} />

          <Route path="/About" element={< About />} />

        </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
