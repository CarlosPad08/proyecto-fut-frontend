import './App.css';
import Navbar from './components/navbar/navbar';
import LoginForm from './components/loginForm/Loginform';
import RegisterForm from './components/footer/registerForm/RegisterForm';

function App() {
  return (
    <>
      <div className='body'>
        <Navbar />
        <input type="radio" id="toggle-login" />
        <LoginForm />
        <input type="radio" id="toggle-register" />
        <RegisterForm/>
      </div>
    </>
  );
}

export default App;