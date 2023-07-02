import Bubble1 from "./bubble1";
import Bubble2 from "./bubble2";
import Bubble3 from "./bubble3";

export default function Bubbles() {
    return (
        <a id = "about-bubbles">
            <div className = "bubbles">
                <Bubble1 />
                <Bubble2 />
                <Bubble3 />
            </div>
        </a>
    )
}