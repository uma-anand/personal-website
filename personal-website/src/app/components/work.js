export default function Work() {
    return (
      <>
        <div className="black-section-container" id = "work">
            <h1 className = "header">My experience...</h1>
            <div className="bubble-container">
                <div className="bubble" id="bits-of-good" suppressHydrationWarning>
                    <div className="bubble-pic">
                        <img src = "/bog.svg" />
                    </div>
                    <div className="bubble-text">
                        <h3>Bits Of Good <br></br>
                        <span className = "position">Developer</span> <br></br>
                        <span className = "timeline">Aug 2023 - Present</span>
                        </h3>
                    </div>
                </div>
                <div className="bubble" id="lockheed" suppressHydrationWarning>
                    <div className="bubble-pic">
                        <img src = "/lockheed.svg" />
                    </div>
                    <div className="bubble-text">
                        <h3>Lockheed Martin <br></br>
                        <span className = "position">Software Engineer Intern</span> <br></br>
                        <span className = "timeline">May 2023 - Aug 2023</span>
                        </h3>
                    </div>
                </div>
                <div className="bubble" id="ltt" suppressHydrationWarning>
                    <div className="bubble-pic">
                        <img src = "/ltt.svg" />
                    </div>
                    <div className="bubble-text">
                        <h3>Let's Try This <br></br>
                        <span className = "position">Website Developer</span> <br></br>
                        <span className = "timeline">May 2023 - Present</span>
                        </h3>
                    </div>
                </div>
                <div className="bubble" id="tfi">
                    <div className="bubble-pic">
                        <img src = "/tfi.svg" />
                    </div>
                    <div className="bubble-text">
                        <h3>Teach For India<br></br>
                        <span className = "position">Teaching Volunteer</span> <br></br>
                        <span className = "timeline">May 2020 - Mar 2021</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }