
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
function App() {
  return (
    <>
    

      <NoteState>
        <Navbar />
        <Alert message = "This is amazing"/>
        <div className="container">
        <Routes>
        <Route path="/" element={< Home />} />

          <Route path="/Home" element={< Home />} />

          <Route path="/About" element={< About />} />

        </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
