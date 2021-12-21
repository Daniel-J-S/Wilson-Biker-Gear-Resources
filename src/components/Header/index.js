import { logout } from '../../services/firebase';
import './Header.css';

export default function Header({ user }) {
    return (
        <header className="Header" style={{
            justifyContent: user ? 'space-between': 'center',
            padding: user ? '0 1rem' : 0,
        }}>
            <h1>WBG Resources</h1>
            {
                user &&
                <button onClick={logout}>Logout</button>
            }
        </header>
    );
};