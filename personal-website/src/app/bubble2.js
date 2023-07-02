export default function Bubble2() {
    return (
        <div className="infoBubble">
            <img src = "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDY0NTMyOTQzNDgwNDU0/buying-your-first-desktop-computer.jpg" className="infoImage"/>
            <div className="infoText">
                <h2>
                    I wrote my first "app" on Khan Academy when I was in sixth grade in ProcessingJS. Since then, I have developed more skills in 
                    <span className = "blue"> software development</span> that apply to more than making a ball move. I am proficient with&nbsp;
                    {["Python", "C", "JavaScript", "HTML", "CSS", "SQL"].map((lang) => {return (<span className="blue">{lang}<span className="white">,</span> </span>)})}and <span className="blue">Java</span>.
                    
                    <br /><br />
                    I also have experience with <span className = "blue">fullstack website development</span>, and associated frameworks including&nbsp;
                    {["React", "Express", "Next.js", "Node"].map((lang) => {return (<span className="blue">{lang}<span className="white">,</span> </span>)})}and <span className="blue">MongoDB</span>.
                    I have also created and worked on projects that incorporate all these skills. 
                </h2>
            </div>
        </div>
    );
}