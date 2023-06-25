import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
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
          <Route path="/Login" element={< Login />} />
          <Route path="/Signup" element={< Signup />} />

        </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
