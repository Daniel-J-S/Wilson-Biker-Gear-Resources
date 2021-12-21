import './Index.css';
import data from '../../data/resources.json';

export default function Index(props) {
    const indexItems = data.map((d, i) => (
        <article key={i}>
            <h3>{d.title}</h3>
            <div className="iframe-container">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/U3SPkP4y-rY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </div>
        </article>
    ));

    return (
        <main className="Index">
            <h1>Site Resources</h1>
            <section>
                {indexItems}
            </section>
        </main>
    );
};