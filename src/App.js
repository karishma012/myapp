
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
        <Routes>
          <Route path="/Home" element={< Home />} />

          <Route path="/About" element={< About />} />

        </Routes>
      </NoteState>
    </>
  );
}

export default App;
