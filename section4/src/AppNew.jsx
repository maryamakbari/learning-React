import { Fragment } from 'react';
import Header from "./components/Header.jsx";
import Examples from './components/Examples.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>        
      </main>
    </Fragment>
  );
}

export default App;
