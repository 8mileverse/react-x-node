//Imports
import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js"; //This is how to import function from other files or external files. Worked with named CORE_CONCEPTS. {Const}
import { EXAMPLES } from "./data.js"; //This is how to import function from other files or external files. Worked with named EXAMPLES. {Const}
import CoreComponent from "./components/CoreComponent.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";


//App function
function App() {
  const [selectedTab, setSelectedTab] = useState("");
  let tabContent = "Please Click a Button";


  //handleSelect
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state';
    // Implement tab navigation logic here
    // console.log(`Clicked on tab: ${(<TabButton />)}`); all ready corrected
    console.log("Tab selceted is :", selectedButton);
    // tabContent = selectedButton; // Update tab content based on selected tab

    setSelectedTab(selectedButton); //This is how to update the state of the selectedTab
    console.log("Tab content is :", tabContent);
  }


  
  return (
    <div>
      <Header />
      <main>
        {/* Section ONE --- Core Concepts */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreItems) => <CoreComponent key={coreItems.title} {...coreItems} /> )}
          </ul>
        </section>

      
       
       {/* Section 2 --- Dynamic T  ab*/}
        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton isSelected={selectedTab === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            {/*This is how to pass function to another function */}
            <TabButton isSelected={selectedTab === 'jsx'} onSelect={() => handleSelect("jsx")}> Jsx </TabButton>
            <TabButton isSelected={selectedTab === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTab === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

          {!selectedTab ? <p>Please Select A Topic</p> : null} {/*Condition as the useState is empty, if no tab is selected make this the default*/}
         
          {selectedTab ? (  
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
          ) : null} {/*This renders the condition if a tab is selcected, let the tab be rendered*/}


        </section>
      </main>
    </div>
  );
}

export default App;
// export default Header;
