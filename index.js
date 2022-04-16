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

/*
const page = (
   <div>
       <img src="./images/React-icon.svg.png" width="40px" />
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
ReactDOM.render(page, document.getElementById("root"))
*/

/*
function Page () {
    return (
        <div>
       <img src="./images/React-icon.svg.png" width="40px" />
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
    }

    ReactDOM.render(<Page/>, document.getElementById("root"))
    */

    function Header() {
        return (
        <header>
            <nav>
                <img src="./images/React-icon.svg.png" width="40px" />
            </nav>
        </header>
        )
    }
    function Footer() {
        return (
            <footer>
            <small>Ⓒ 2022 ID software development. All rights reserved.</small>
             </footer> 
        )
    }
    function NaslovLista() {
        return (
            <div>
            <h1>Reasons why im excited to learn React!</h1>
            <ol>
                <li>Its a popular library</li>
                <li>Im more likely to get a job as a developer
                    if u know React!
                </li>
            </ol>
            </div>
        )
    }

function Page() { 
    return (
        <div>
            <Header />
            <NaslovLista />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page/>, document.getElementById('root'));

