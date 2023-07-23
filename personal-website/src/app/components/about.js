import Image from "next/image"

export default function About() {
    return (
        <>
            <div className="white-section-container" >
                <h1 className = "header">A bit about me...</h1>
                    <div id = "about-text">
                        <p>
                        I’m a highly motivated <span className="blue">fullstack software developer</span> currently pursuing my undergraduate degree
                        in <span className="blue">computer science</span> at the <span className="blue">Georgia Institute of Technology</span> with concentrations in 
                        <span className="blue"> Systems & Architecture</span> and <span className="blue">Information Internetworks</span>. 
                        I am always looking to bolster my understanding and knowledge of computer science whether it is through working for companies such
                        as <span className="blue">Lockheed Martin</span>, joining computing clubs and participating in hackathons, or 
                        developing several varied projects of my own choosing.
                        <br></br><br></br>
                        I go the extra mile to learn, from self studying all my APs in high school to trying a new course on Khan Academy every summer. I devote all my energy into what I am doing and 
                        love collaborating with people, constantly learning, and experiencing something new everyday!
                        <br></br><br></br>
                        In my free time, I spend a lot of time on various clubs and activities on campus including <span className="blue">Bits Of Good</span>, a 
                        coding club focused on making websites for non-profits, and <span className="blue">Let’s Try This</span>, Georgia Tech’s Resident Improv Troupe. 
                        I’m also a big reader, and have made it my mission to finish all the books on Times’ <span className="blue">100 Greatest Books of All Time</span> (I’ve finished around 40 so far!).
                        </p>
                    </div>
                    <div style={{"clear": "both"}}></div>
                </div>
        </>
    )
}

