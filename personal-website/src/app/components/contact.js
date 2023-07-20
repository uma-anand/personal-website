export default function Contact() {
    return (
        <div className="black-section-container">
            <div className = "side-by-side" id = "contact-grid">
                <div className="left-side">
                    <h1 className = "header" id = "contact">Contact me...</h1>
                    <h5 className="sub-header">Feel free to contact me if you ever want to get in touch!</h5>
                </div>
                <div className="right-side" id = "contact-icons">
                    <a target = '#' href="mailto:uma@gatech.edu"><img src = '/gmail.svg'></img></a>
                    <a target = '#' href="https://www.linkedin.com/in/uma-anand/"><img src = '/linkedin.svg'></img></a>
                    <a target = '#' href="https://github.com/hak-uma-matata"><img src = '/github.svg'></img></a>
                    
                </div>
            </div>
        </div>
    )
  }