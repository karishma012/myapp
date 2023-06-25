import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import image from './components/book.jpg';
const mystyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
   
  }
  return (
    <>


      <NoteState>
        <Navbar />
        <Alert alert = {alert} />
        <div className="container"style={mystyle} >
          <Routes>
            <Route path="/" element={< Home />} />

            <Route path="/Home"   element={< Home showalert={showalert}/>} />

            <Route path="/About" element={< About />}  />
            <Route path="/Login" element={< Login showalert={showalert}/>}   />
            <Route path="/Signup" element={< Signup showalert={showalert}/>} />

          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
