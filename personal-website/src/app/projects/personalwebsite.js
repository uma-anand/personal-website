export default function PersonalWebsite () {
    return (
        <>
            <div id = "PersonalWebsite"></div>
            <br></br><br></br><br></br>
            <div className="projects-flex">
                <div className="projects-flex-left">
                    <div className="projects-header" style={{"background-color": "#C3F2FF"}}>
                        <h1>Personal<br></br>Website</h1>
                        <h2>React, JavaScript, HTML, CSS, Next.js</h2>
                        <h4>Jun 2023 - Present</h4>
                        <br></br>
                        <h4><span className = "github-button">GitHub &gt;</span></h4>
                        <br></br>
                    </div>
                    <div className="project-points">
                        <h4>
                            <strong>What it is:</strong>
                                <ul>
                                    <li>The website you're on right now!</li>
                                    <li>A personal website I built entirely from scratch- from designing the UI to implementing it</li>
                                </ul>
                            <strong>Key Features:</strong>
                                <ul>
                                    <li>Ease of Navigability (I hope)</li>
                                    <li>Clean, accessible UI (again, I hope)</li>
                                    <li>Fast runtime with no lag (something I’m a bit more sure about)</li>
                                </ul>
                        </h4>
                    </div>
                </div>
                <div className="projects-flex-right" style={{"background-color": "#EBFAFF"}}>
                    <h3>
                    The reason I ever started learning web development was so that I could create a <span className="blue">personal website</span>. It took around half a year after I learned some web development before I actually started this website. When I originated the plan, my vision for the website was quite grandiose- something resembling Apple’s elaborate websites... because it can’t be too much harder than Wix, right? It took me two days of learning HTML to realize that I was badly mistaken.
                    <br></br><br></br>
Once I had accrued a reasonable amount of website development knowledge, however, I decided I was finally ready to start making the <span className="blue">design from first principles on Figma</span>.
                    <br></br><br></br>
I have always enjoyed design and playing with colors and fonts to very obsessive levels sometimes. In the past, I have gone through every single font on Figma to find the perfect bold Sans Serif font for a heading in a project. Designing an entire website to represent myself as a person with total creative freedom would either be a complete disaster or the perfect challenge. I started with a blank Figma template and came up with the entire design for the homepage of the website. It took two days.
                    <br></br><br></br>
The static coding for the homepage then took one and a half days. It was my <span className="blue">first time working off a template I had created myself</span> and not just free-handing the website or using another person’s Figma file. There were completely new things I had to learn from scratch like creating the <span className="blue">typing animation</span> in the homepage of the website using nothing but CSS. At the end of the entire project, <span className="blue">the whole process from design to deployment ended up taking under two weeks</span> of summer vacation, barely spending an hour a day on it. It was then that I realized that my skills had come a far way from spending an hour trying to center a &lt;div&gt;. I was far from becoming one of the numerous heaven sent YouTube Tutorial channels for website development, but I had come a long way.


                    </h3>
                </div>
            </div>
        </>
    );
}