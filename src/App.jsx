import './App.css';
import Start from './pages/start/start';
import Navbar from './components/navbar/navbar';
import LoginForm from './components/loginForm/Loginform';
import RegisterForm from './components/registerForm/RegisterForm';

function App() {
  return (
    <>
      <div className='body'>
        <Start />
        {/* <Navbar />
        <input type="radio" id="toggle-login" />
        <LoginForm />
        <input type="radio" id="toggle-register" />
        <RegisterForm/> */}
      </div>
    </>
  );
}

export default App;