import CoreConcept from './CoreConcept.jsx';
import {CORE_CONCEPTS} from '../data.js';


export default function CoreConcepts(){
    return(
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
    );
}