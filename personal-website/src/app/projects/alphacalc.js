export default function AlphaCalc () {
    return (
        <>
            <div id = "AlphaCalc"></div>
            <br></br><br></br><br></br>
            <div className="projects-flex">
                <div className="projects-flex-left">
                    <div className="projects-header">
                        <h1>AlphaCalc-<br></br>A Verbal Calculator</h1>
                        <h2>Python, MySQL</h2>
                        <h4>Sep 2021 - Feb 2022</h4>
                        <br></br>
                        <h4><a target="#" href = "https://github.com/hak-uma-matata/AlphaCalc"><span className = "github-button">GitHub &gt;</span></a></h4>
                        <br></br>
                    </div>
                    <div className="project-points">
                        <h4>
                            <strong>What it is:</strong>
                                <ul>
                                    <li>Calculator that can process natural language input both verbally and written</li>
                                </ul>
                            <strong>Key Features:</strong>
                                <ul>
                                    <li>Speech recognition software</li>
                                    <li>Presets can be edited, added, and deleted</li>
                                    <li>Comes with memory and graphing capabilities</li>
                                </ul>
                        </h4>
                    </div>
                </div>
                <div className="projects-flex-right">
                    <h3>The way we orate mathematics is very different from the way we write it. The goal of AlphaCalc was to bridge the divide.
                    <br></br><br></br>
AlphaCalc is a calculator (with a GUI component) that takes <span className="blue">verbal input in the form of text or audio</span>, such as "4 multiplied by 3" and converts it into a mathematical expression which it evaluates. Users can <span className="blue">add, edit, or delete presets</span> such as "star" evaluating to "*" and the calculator will then interpret “star” as referring to multiplication from then on. You can even specify which type the preset falls into. Presets are not a literal translation of the operation. Rather they have to be interpreted because they can fall into different types in our spoken language. Take the difference between “subtract 4 by 3” and “subtract 4 from 3” or the difference between binary operations and unary operations in spoken language. Further complicating the problem is interpreting the <span className="blue">order of operations</span> from spoken sentences. Thus, a seemingly simple goal gives rise to several intricacies which we had to tackle in AlphaCalc.
                    <br></br><br></br>
In addition to the basic functionality, we added several other features like a <span className="blue">memory</span> and a <span className="blue">graphing component</span>. I also created a <span className="blue">search algorithm</span> to find presets which composed of a type, translation, and two operation parts in a single O(n) perusal that orders itself automatically in order of highest relevance.
</h3>
                </div>
            </div>
        </>
    );
}