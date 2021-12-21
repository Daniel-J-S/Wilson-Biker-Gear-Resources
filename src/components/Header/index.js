import { logout } from '../../services/firebase';
import logo from '../../images/logo.svg';
import './Header.css';

export default function Header({ user }) {
    return (
        <header className="Header" style={{
            justifyContent: user ? 'space-between': 'center',
            padding: user ? '0 1rem' : 0,
        }}>
            <img src={logo} alt="Wilson Bike Gear" />
            {
                user &&
                <button onClick={logout}>Logout</button>
            }
        </header>
    );
};