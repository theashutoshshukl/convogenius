import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
// React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Home and Auth
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
// Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Chat from './pages/Chat';

const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          {/* Home & Auth */}
          <Route exact path='/' element={<Main />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          {/* Pages */}
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/chat' element={<Chat />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;