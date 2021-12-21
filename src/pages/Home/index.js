import { useState } from 'react';
import { login } from '../../services/firebase';
import { useHistory } from 'react-router-dom';

import './Home.css';

export default function Home(props) {
    const [ state, setState ] = useState(getInitialState());
    const history = useHistory();

    function getInitialState() {
        return {
            email: '',
            password: '',
        }
    }

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = state;
        if(!email || !password)  return;
        await login(email, password);
        history.push('/resources');
        setState(getInitialState());
    };

    return (
        <main className="Home">
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input 
                        type="email" 
                        name="email"
                        onChange={handleChange} 
                    />
                </label>
                <label>Password
                    <input 
                        type="password" 
                        name="password"
                        onChange={handleChange} 
                    />
                </label>
                <input type="submit" value="Login" />
            </form>
        </main>
    );
};