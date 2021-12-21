import { useState } from 'react';
import './Home.css';

export default function Home(props) {
    const [ state, setState ] = useState(getInitialState());

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

    const handleSubmit = e => {
        e.preventDefault();
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