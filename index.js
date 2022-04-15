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
/*
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

     ReactDOM.render(
        Navigacija,
         document.getElementById("root2")
         );
*/
/*
const Zadatak = (
     <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons i love React</h3>
        <ol>
            <li>Its composable</li>
            <li>Its delarative</li>
            <li>Its a hireable skill</li>
            <li>Its actively maintained by skilled people</li>
        </ol>
     </div>
)

ReactDOM.render(Zadatak, document.getElementById("root"))
*/

const page = (
   <div>
        <h1>Fun facts about React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on Github</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including
                  mobile apps
              </li>
          </ul>        
    </div>
)
const slike = (
    <img src="./images/React-icon.svg.png" width="40px" />
)
ReactDOM.render(page, document.getElementById("root"))
ReactDOM.render(slike, document.getElementById("logo"))