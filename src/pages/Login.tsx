import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/auth-styles';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {user} = useAuth()

  const navigate = useNavigate();

  useEffect(()=>{
    if (user){
      navigate("/profile")
    }
  },[user, navigate])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate('/profile');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div style={styles.form}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={styles.error}>{error}</p>}
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Login</legend>
          <input
            style={styles.input}
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={styles.input}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </fieldset>
      </form>
    </div>
  );
};
export default Login;
