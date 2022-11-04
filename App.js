
import React from 'react';
import { Navbar } from './Components/Navbar';
import { Navitems } from './Components/Navitems';
import { DropwdownMenu } from './Components/DropwdownMenu';
import './index.css';


function App() {
  return(
    <div>
      <Navbar>
        <Navitems link="home"/>
        <Navitems link="services" >
            <DropwdownMenu/>
        </Navitems>
        
        <Navitems link="Portfolio"/>
      </Navbar>
    </div>

    
  );
}

export default App;
