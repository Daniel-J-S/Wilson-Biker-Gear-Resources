import { logout } from '../../services/firebase';
import { useHistory, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

export default function Header({ user }) {
    const { push } = useHistory();
    return (
        <header className="Header" style={{
            justifyContent: user ? 'space-between': 'center',
            padding: user ? '0 1rem' : 0,
        }}>
            <Link to="/">
                <img src={logo} alt="Wilson Bike Gear" />
            </Link>
            {
                user &&
                <section>
                    <button onClick={logout}>Logout</button>
                    {
                        user.isAdmin &&
                        <button onClick={() => push('/admin')}>Admin</button>
                    }
                </section>
            }
        </header>
    );
};