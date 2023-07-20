export default function BetterPokeAPI () {
    return (
        <>
            <div id = "BetterPokeAPI"></div>
            <br></br><br></br><br></br>
            <div className="projects-flex">
                <div className="projects-flex-right" style={{"background-color": "#E3E3E3"}}>
                    <h3>
                    When I was a child, my main occupation was watching my older brother do whatever he was doing, like most younger siblings. So, when my brother went through a 10 year long Pokemon phase, I entered it with him. We had the complete Pokemon books for Pokemon Black and White and Pokemon X & Y. One summer, I even learned the name and the type of every Pokemon in Black and White. But slowly, as my brother went to college, and I started to have other things to do than follow him around, I lost touch with the world of Pokemon.
<br></br><br></br>
However, when I was taking a course in web development and one of the suggested projects was building a “Better PokeAPI”- refining the commonly used public PokeAPI into a web app with certain specific endpoints, I decided to plunge headfirst into it.
<br></br><br></br>
I used the <span className="gray">Axios</span> package in NPM to perform my promises. With most of the endpoints, I also had to do a bit of <span className="gray">data manipulation</span> and various <span className="gray">algorithm implementations</span>. 
<br></br><br></br>
In addition to the suggested endpoints in the project description, I also decided to implement some new features that I thought would be more helpful to Pokemon players. This included a type compatibility check for a Pokemon that would tell you with types the Pokemon was effective, double effective, ineffective, and doubly ineffective against. In addition, I added an endpoint that would let you know the different locations you could find a Pokemon in, if a trainer was interested in catching that Pokemon.
<br></br><br></br>
Being my first big web-dev project, I stumbled a bit along the way but it refined my knowledge of <span className="gray">API usage</span> and introduced me to the foundations of making a web app.


                     </h3>
                </div>
                <div className="projects-flex-left">
                    <div className="projects-header" style={{"background-color": "#AEAEAE"}}>
                        <h1>Better PokeAPI</h1>
                        <h2>Next.js, JavaScript, HTML, CSS</h2>
                        <h4>Jan 2023 - Feb 2023</h4>
                        <br></br>
                        <h4><a target="#" href="https://github.com/hak-uma-matata/mod-pokeapi-s23"><span className = "github-button">GitHub &gt;</span></a></h4>
                        <br></br>
                    </div>
                    <div className="project-points">
                        <h4>
                            <strong>What it is:</strong>
                                <ul>
                                    <li>Tool to keep track of incoming, existing, and archived hardware and software in Lockheed Martin</li>
                                </ul>
                            <strong>Key Features:</strong>
                                <ul>
                                    <li>Password Security using two way RSA encryption</li>
                                    <li>Permission restricted notes feature with full CRUD functionality</li>
                                    <li>Creating an error log for server fails</li>
                                    <li>Implementing exports and imports processes of Excel files</li>
                                </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}