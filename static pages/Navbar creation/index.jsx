

import { createRoot } from "react-dom/client"; 

const root = createRoot(document.getElementById("root"))

function MyAwesomeNavbar() {
    return (
       <nav className="navbar">
        <div className="navdiv">
            <div className="logo">
                <a href="#">CodingNinja</a>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <button><a href="#">SignIn</a></button>
                <button><a href="#">SignOut</a></button>
            </ul>
        </div>
       </nav>
    )
}
function MainContent(){
    return <h1>React is great!</h1>
}
/*
const h1=document.createElement("h1"); (imperative)
h1.textContent="React is great!"
h1.className="header"
document.getElementById("root").appendChild(h1)
*/

root.render(
    <div>
        <MyAwesomeNavbar />
        <MainContent />
    </div>
)