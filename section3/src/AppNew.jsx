import { useState } from 'react';
import {CORE_CONCEPTS} from "./data.js";
import { EXAMPLES } from './data.js';
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(buttonInput){
      setSelectedTopic(buttonInput); 
  }

  // Approach3
  // let tabContent = <p>Please Select a Topic.</p>;
  // if (selectedTopic){
  //   tabContent = ( <div id='tab-content'>
  //     <h3>{EXAMPLES[selectedTopic].title}</h3>
  //     <p>{EXAMPLES[selectedTopic].description}</p>
  //     <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //     </pre>
  //   </div>);
  // }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Improving the below code */}
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept {...conceptItem}  key={(conceptItem.title)}/>))}

            {/* <CoreConcept 
              image = {CORE_CONCEPTS[0].image}
              description ={CORE_CONCEPTS[0].description}
              title ={CORE_CONCEPTS[0].title}
              /> */}
              {/*This is the same as the code above */}
              {/* <CoreConcept {...CORE_CONCEPTS[1]}/> 
              <CoreConcept {...CORE_CONCEPTS[2]}/>
              <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==="components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
         
          {/* Approach1 */}
          {!selectedTopic ? <p>Please Select a Topic.</p> : null}
          {selectedTopic ? ( <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>) : null}


          {/* Approach2 */}
          {/* {!selectedTopic && <p>Please Select a Topic.</p>}
          {selectedTopic && ( <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>) */} 

           {/* {tabContent}  Because of using Approach3 */}

        </section>
      </main>
    </div>
  );
}

export default App;
