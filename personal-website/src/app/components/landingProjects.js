export default function LandingProjects() {
    return (
       <div className="landinghome">
            <div className="space-between-flex">
                <div className="left-space">
                    <h1 className="landingheader">My <br></br> Projects</h1>
                </div>
                <div className="right-space">
                    <img src = '/projectscomp.svg' height = '200'></img>
                </div>
            </div>
            <h3>Click each widget for more information about the project...</h3>
            
            <div className="bubble-container">
                <a href="#AlphaCalc">
                    <div className="bubble" id="alphacalc">
                        <div className="bubble-pic">
                            <img src = "/python.svg" height="67px" width="67px"/>
                        </div>
                        <div className="bubble-text">
                            <h3>AlphaCalc- A Verbal Calculator<br></br>
                            <span className = "position">Python, MySQL</span> <br></br>
                            <span className = "timeline">Sep 2021 - Feb 2022</span>
                            </h3>
                        </div>
                    </div>
                </a>
                <a href="#HCMSTool">
                    <div className="bubble" id="hcms">
                        <div className="bubble-pic">
                            <img src = "/javascript.svg" height="67px" width="67px"/>
                        </div>
                        <div className="bubble-text">
                            <h3>HCMS Tool<br></br>
                            <span className = "position">JavaScript, React, HTML, CSS, MySQL</span> <br></br>
                            <span className = "timeline">May 2023 - Jun 2023</span>
                            </h3>
                        </div>
                    </div>
                </a>
                <a href='#PersonalWebsite'>
                    <div className="bubble" id="personal-website">
                        <div className="bubble-pic">
                            <img src = "/react.svg" height="67px" width="67px"/>
                        </div>
                        <div className="bubble-text">
                            <h3>Personal Website<br></br>
                            <span className = "position">React, JavaScript, HTML, CSS, Next.js</span> <br></br>
                            <span className = "timeline">Jun 2023 - Jul 2023</span>
                            </h3>
                        </div>
                    </div>
                </a>
                <a href="#BetterPokeAPI">
                    <div className="bubble" id="better-pokeapi">
                        <div className="bubble-pic">
                            <img src = "/nextjs.svg" height="67px" width="67px"/>
                        </div>
                        <div className="bubble-text">
                            <h3>Better PokeAPI<br></br>
                            <span className = "position">Next.js, JavaScript, HTML, CSS</span> <br></br>
                            <span className = "timeline">Jan 2023 - Feb 2023</span>
                            </h3>
                        </div>
                    </div>
                </a>
                <a href="#AnimalTrainingPortal">
                    <div className="bubble" id="animal-training">
                        <div className="bubble-pic">
                            <img src = "/mongodb.svg" height="67px" width="67px"/>
                        </div>
                        <div className="bubble-text">
                            <h3>Animal Training Portal<br></br>
                            <span className = "position">MongoDB, JavaScript, HTML, CSS</span> <br></br>
                            <span className = "timeline">Jan 2023 - Feb 2023</span>
                            </h3>
                        </div>
                    </div>
                </a>
                <a href="#LightsOut">
                    <div className="bubble" id="lights-out">
                        <div className="bubble-pic">
                            <img src = "/C.svg" height="67px" width="67px"/>
                        </div>
                        <div className="bubble-text">
                            <h3>Lights Out<br></br>
                            <span className = "position">C, GBA</span> <br></br>
                            <span className = "timeline">Mar 2023</span>
                            </h3>
                        </div>
                    </div>
                </a>
            </div>
       </div>
    );
}