import React from "react";
import logo from "./logo.svg";
import { Link, Outlet } from "react-router-dom";

import "./App.css";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionToggleEventHandler,
} from "@fluentui/react-components";
import { Add20Filled, Subtract20Filled } from "@fluentui/react-icons";

function App() {
  const [openItem, setOpenItems] = React.useState(0);
  const handleToggle = React.useCallback<AccordionToggleEventHandler>(
    (_, data) => {
      setOpenItems(data.value as number);
    },
    []
  );

  const getIcon = (index: number) => {
    return openItem === index ? <Subtract20Filled /> : <Add20Filled />;
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h1>LevelUp Interview</h1>
        <nav>
          <Accordion onToggle={handleToggle} openItems={openItem}>
            <AccordionItem value={1}>
              <AccordionHeader expandIcon={getIcon(1)}>
                DS & Algorithms
              </AccordionHeader>
              <AccordionPanel>
                <ul>
                  <li>
                    <Link to={`dsa/linkedlists`}>LinkedLists</Link>
                  </li>
                  <li>
                    <Link to={`dsa/trees`}>Trees</Link>
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value={2}>
              <AccordionHeader expandIcon={getIcon(2)}>
                Coding Interviews
              </AccordionHeader>
              <AccordionPanel>
                <ul>
                  <li>
                    <Link to={`interviews/robinhood`}>Robinhood</Link>
                  </li>
                  <li>
                    <Link to={`interviews/alchemy`}>Alchemy</Link>
                  </li>
                  <li>
                    <Link to={`interviews/roblox`}>Roblox</Link>
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value={3}>
              <AccordionHeader expandIcon={getIcon(3)}>
                System Design Interview
              </AccordionHeader>
              <AccordionPanel>
                <ul>
                  <li>
                    <Link to={`systemdesign/dropdown`}>Dropdown</Link>
                  </li>
                  <li>
                    <Link to={`interviews`}>interviews</Link>
                  </li>
                  <li>
                    <Link to={`systemDesign`}>systemDesign</Link>
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value={4}>
              <AccordionHeader expandIcon={getIcon(4)}>
                System Design Prep
              </AccordionHeader>
              <AccordionPanel>
                <ul>
                  <li>
                    <Link to={`systemdesign/cheetsheet`}>CheetSheet</Link>
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </nav>
      </div>
      <div className="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
