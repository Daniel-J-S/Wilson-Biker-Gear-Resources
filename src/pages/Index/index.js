
import { useEffect, useState } from 'react';
import { database } from '../../services/firebase';
import './Index.css';

export default function Index(props) {
    const [resources, setResources ] = useState([]);
    const indexItems = resources.map(d => (
        <article key={d.id}>
            <h3>{d.title}</h3>
            <div className="iframe-container">
                <iframe 
                    width="560" 
                    height="315" 
                    src={d.videoLink} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </div>
        </article>
    ));

    useEffect(() => {
        const unsubscribe = database.ref('/resources').on('value', snapshot => {
            const data = [];
            if(snapshot) {
                snapshot.forEach(child => {
                    data.push({id: child.key, ...child.val()})
                    data.sort((a, b) => a.rank - b.rank);
                });
            } 
            setResources(data);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <main className="Index">
            <h1>Site Resources</h1>
            <section>
                {indexItems}
            </section>
        </main>
    );
};