//ReactDOM.render (<h1 className="header">Hello, React</h1>, document.getElementById("root"));

/*
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
*/

//JSX
/*
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
*/

const Navigacija = (
    <nav>
        <h1>Manijak.com</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    
)



ReactDOM.render(
    Navigacija,
     document.getElementById("root")
     );