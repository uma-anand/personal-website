export default function HCMS () {
    return (
        <>
            <div id = "HCMSTool"></div>
            <br></br><br></br><br></br>
            <div className="projects-flex">
                <div className="projects-flex-left">
                    <div className="projects-header" style={{"background-color": "#FFF181"}}>
                        <h1>HCMS Tool</h1>
                        <h2>JavaScript, React, HTML, CSS, MySQL</h2>
                        <h4>May 2023 - Jun 2023</h4>
                        <br></br>
                    </div>
                    <div className="project-points">
                        <h4>
                            <strong>What it is:</strong>
                                <ul>
                                    <li>Tool to keep track of incoming, existing, and archived hardware and software in Lockheed Martin</li>
                                </ul>
                            <strong>Key Features I implemented:</strong>
                                <ul>
                                    <li>Password Security using two way RSA encryption</li>
                                    <li>Permission restricted notes feature with full CRUD functionality</li>
                                    <li>Creating an error log for server fails</li>
                                    <li>Implementing exports and imports processes of Excel files</li>
                                </ul>
                        </h4>
                    </div>
                </div>
                <div className="projects-flex-right" style={{"background-color": "#FEFBE2"}}>
                    <h3>
                    During my internship at Lockheed Martin, I was assigned to work on the <span className="yellow">HCMS Tool</span>- a web application that kept track of hardware and software at <span className="yellow">Lockheed Martin</span> used in the F35 Fighter Jet.
<br></br><br></br>
One of the tasks I worked on was <span className="yellow">Password Security</span>- a problem I had found and decided to solve of my own accord. I had found a problem in the way a user’s password was stored, making it very vulnerable. To fix this, I initially thought of using a hashing library and hashing the passwords with a salt before storing them.
<br></br><br></br>
However, when I started the implementation, it became clear that this would not be possible. The way hashing works is that it hashes the actual password and checks if it corresponds to the supplied hash. The way the application was designed, however, meant that there was no comparison. Rather, to check if the password was right, the server tried using it to establish a connection to the database. As there was no comparison involved, I had to find another solution.
<br></br><br></br>
The nature of the server meant that I had to be able to encrypt the raw password when sent from the UI to the server and decrypt it in the server before testing the connection with the database. Revisiting every introductory cryptography course’s favorite form of encryption, I decided to <span className="yellow">implement RSA</span>. However, I had to make sure that at no point was the private key exposed. This posed another challenge as the only encryption library that Lockheed Martin allowed on their systems generated unique keys that could not be replicated given the same seed. So if I wanted to encrypt it on the interface side, to get the private key to the server to decrypt, I would have to expose the private key.
<br></br><br></br>
As this was definitely not an option, I was left with creating the keys on the server side. At no point during the process could I send the private key or the raw password across files. This meant that when logging in, the page would then have to fetch the public key that was created in the server side and then sent across to the UI. In the meanwhile, the private key that was generated alongside the public key would be sent within the private server file to another function where it would await decryption. Once the encrypted password was sent to the server, it would finally decrypt it, send it to the database which would return a success or failure which was then communicated to the server and finally, the interface. The only things that were sent between files were an <span className="yellow">encrypted password</span> and the <span className="yellow">public key</span>. Success at last!
<br></br><br></br>
Password security was the second task I tackled after coming to Lockheed and definitely the one that required the most thought. Afterwards, I took on a multitude of tasks including creating an <span className="yellow">error log</span>, building a <span className="yellow">CRUD compatible permission-restricted notes feature</span>, <span className="yellow">validation actions that intelligently detect and correct invalid data during data imports</span>, building a <span className="yellow">testing environment</span> as opposed to the production one, creating <span className="yellow">export and import functionality</span> for Excel files, and several other bug fixes and new features. 
                    </h3>
                </div>
            </div>
        </>
    );
}