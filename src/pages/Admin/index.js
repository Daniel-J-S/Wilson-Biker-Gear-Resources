import { useState, useEffect } from 'react';
import { database } from '../../services/firebase';

import './Admin.css';

export default function Admin() {
    const [ formState, setFormState ] = useState(getInitialState());
    const [ resources, setResources ] = useState([]);


    function getInitialState() {
        return {
            title: '',
            videoLink: '',
        }
    }

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const { title, videoLink } = formState;
        if(!title || !videoLink)  return;
        database.ref('/resources').push({ title, videoLink }, () => {
            setFormState(getInitialState());
        });
    };

    const handleDelete = id => {
        database.ref(`/resources/${id}`).remove();
    }


    const resourceList = resources.map(r => {
        return (
            <li key={r.id}>
                <h3>{r.title}</h3>
                <button onClick={() => handleDelete(r.id)}>Delete</button>
            </li>
        );
    });

    useEffect(() => {
        const unsubscribe = database.ref('/resources').on('value', snapshot => {
            const data = [];
            if(snapshot) {
                snapshot.forEach(child => {
                    data.push({id: child.key, ...child.val()})
                });
            } 
            setResources(data);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <main className="Admin">
            <form onSubmit={handleSubmit}>
                <label>Title
                    <input 
                        type="text" 
                        name="title"
                        onChange={handleChange}
                        value={formState.title} 
                    />
                </label>
                <label>Video Link
                    <input 
                        type="text" 
                        name="videoLink"
                        onChange={handleChange}
                        value={formState.videoLink} 
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {
                resources.length ?
                <ul>
                    {resourceList}
                </ul>
                :
                <ul>
                    <li>There Are No Resources At This Time</li>
                </ul>
            }
        </main>
    );
};