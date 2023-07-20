export default function AnimalTraining () {
    return (
        <>
            <div id = "AnimalTrainingPortal"></div>
            <br></br><br></br><br></br>
            <div className="projects-flex">
                <div className="projects-flex-left">
                    <div className="projects-header" style={{"background-color": "#CDEFC7"}}>
                        <h1>Animal Training<br></br>Portal</h1>
                        <h2>MongoDB, JavaScript, HTML, CSS, React, Next.js</h2>
                        <h4>Mar 2023 - Apr 2023</h4>
                        <br></br>
                        <h4><span className = "github-button">GitHub &gt;</span></h4>
                        <br></br>
                    </div>
                    <div className="project-points">
                        <h4>
                            <strong>What it is:</strong>
                                <ul>
                                    <li>Portal for animal trainers to log hours trained on various animals</li>
                                </ul>
                            <strong>Key Features:</strong>
                                <ul>
                                    <li>Encrypt passwords with salt and hash</li>
                                    <li>Use JWT cookies to maintain connection to page</li>
                                    <li>Comes with memory and graphing capabilities</li>
                                    <li>Middleware to prevent invalid requests</li>
                                    <li>API calls to MongoDB clusters</li>
                                </ul>
                        </h4>
                    </div>
                </div>
                <div className="projects-flex-right" style={{"background-color": "#E8F4E6"}}>
                    <h3>
                    The Animal Training Portal was a web-app for animal trainers to use. You could register animals, trainers, and admin users. Then, trainers could log in and log hours training particular animals. Admin users could view all the animals and trainers in the database and alter them- something other users could not do.
<br></br><br></br>
The Animal Training Portal contained some trickier parts of back-end such as <span className="green">JWT authentication</span>, creating <span className="green">middleware functions</span>, and <span className="green">password encryption</span>. This was my first encounter with these elements, and it was a project I learned a lot from.
<br></br><br></br>
The entire project also coincided with many of my final exams, so <span className="green">time management</span> became crucial. It was also the <span className="green">first time I had used React</span> to create an entire front-end from scratch. I had never learned any React before- so to make the front-end, I just read the React docs homepage and started coding.
<br></br><br></br>
Before we made the front-end though, we tested the entire application on <span className="green">Postman</span>, simulating all the API calls.
<br></br><br></br>
Working on the Animal Training Portal was my first group project with more than two people, and through it I learned to become a better team player and become a more effective communicator, in addition to strengthening my back-end skills.

                    </h3>
                </div>
            </div>
        </>
    );
}