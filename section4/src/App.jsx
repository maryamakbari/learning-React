
import componentImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  return (
    <header>
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>\
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title="Component" 
              description="The core UI building block."
              image={componentImg}
              />
              <CoreConcept/>
              <CoreConcept/>
              <CoreConcept/>
          </ul>
        </section>
        {/* <h2>Core Concepts!</h2> */}
      </main>
    </div>
  );
}

export default App;
