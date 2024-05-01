import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import { useState} from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
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

    return(
        <Section id="examples">
          <h2>Examples</h2>
          <Tabs ButtonsContainer = 'menu'
          buttons={
          <>
            <TabButton isSelected={selectedTopic==="components"} onClick={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onClick={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onClick={() => handleSelect("state")}>State</TabButton>
          </>}
          > 
           
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
          </div>)} */}

           {/* {tabContent}  Because of using Approach3 */}
          </Tabs>
        </Section>
    );
}
