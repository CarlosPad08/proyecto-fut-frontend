import './App.css';
import Navbar from './components/navbar/navbar';
import LoginForm from './components/loginForm/Loginform';

function App() {
  return (
    <>
      <div className='body'>
        <Navbar />
        <input type="radio" id="toggle-login" />
        <LoginForm />
      </div>
    </>
  );
}

export default App;