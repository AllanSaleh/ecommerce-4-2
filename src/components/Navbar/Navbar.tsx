import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className='nav-container'>
      <Link to='/' className='link'>
        Home
      </Link>
      <Link to='/cart' className='link'>
        Cart
      </Link>
      {user ? (
        <>
          <Link to='/profile' className='link'>
            Profile
          </Link>
          <Link to='/logout' className='link'>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to='/register' className='link'>
            Register
          </Link>
          <Link to='/login' className='link'>
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
