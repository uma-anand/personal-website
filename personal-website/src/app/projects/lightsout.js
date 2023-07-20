export default function LightsOut () {
    return (
        <>
            <div id = "LightsOut"></div>
            <br></br><br></br><br></br>
            <div className="projects-flex">
                <div className="projects-flex-right" style={{"background-color": "#DEEAF2"}}>
                    <h3>
                    The goal for this project was to write a complete game for a <span className="blue">Game Boy Advanced emulator (GBA)</span> for my computer organization class. The GBA being a very rudimentary, slow, and <span className="blue">limited hardware</span> device, it was very slow and we had to learn to <span className="blue">optimize performance</span> using tricks such as <span className="blue">DMA</span> and using integer arithmetic instead of floating point arithmetic.
<br></br><br></br>
In addition, the way we wrote to the device registers, buttons, controls, etc, was through <span className="blue">hard-coded memory addresses</span>. To set bits in device registers, we would have to create bit masks every time. And this was all apart from the actual logic of the game.
<br></br><br></br>
My game was very Five Nights at Freddy’s inspired- with flickering text and dark backgrounds. The essential point of the game was very simple. Once you started, a torch’s random location was shown for a single second. Then the screen went black and you would have to navigate your character to the place where the torch was before the time ran out. Your score was inversely proportional to the time taken to reach the torch.
<br></br><br></br>
This was my first experience with using a low-level programming language like C in software development- or even my first experience using as low-level a system as a gaming console created in 2001 with a 16.8MHz 32bit ARM7TDMI processor!

 

                     </h3>
                </div>
                <div className="projects-flex-left">
                    <div className="projects-header" style={{"background-color": "#A4CFEC"}}>
                        <h1>Lights Out</h1>
                        <h2>C, GBA</h2>
                        <h4>Mar 2023</h4>
                        <br></br>
                    </div>
                    <div className="project-points">
                        <h4>
                            <strong>What it is:</strong>
                                <ul>
                                    <li>A horror game written for the Game Boy Advanced in C</li>
                                </ul>
                            <strong>Key Features:</strong>
                                <ul>
                                    <li>Created logic and state machine for game</li>
                                    <li>Implemented timer and motion physics</li>
                                    <li>Accessed GBA devices (DMA, Screen, Button etc) through memory-mapped I/O</li>
                                </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}