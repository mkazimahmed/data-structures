import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionToggleEventHandler,
} from "@fluentui/react-components";
import { Add20Filled, Subtract20Filled } from "@fluentui/react-icons";
import Robinhood from "./robinhood";
import Alchemy from "./alchemy";
import Roblox from "./roblox";

export const LinkedLists = () => {
  const [openItem, setOpenItems] = React.useState(0);
  const handleToggle = React.useCallback<AccordionToggleEventHandler>(
    (_, data) => {
      setOpenItems(data.value as number);
    },
    []
  );
  return (
    <>
      <h2 style={{ textAlign: "left" }}>Interviews</h2>
      <Accordion onToggle={handleToggle} openItems={openItem}>
        <AccordionItem value={1}>
          <AccordionHeader
            expandIcon={openItem === 1 ? <Subtract20Filled /> : <Add20Filled />}
          >
            Robinhood: Display Series in Candlestick Pattern
          </AccordionHeader>
          <AccordionPanel>
            <Robinhood />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={2}>
          <AccordionHeader
            expandIcon={openItem === 2 ? <Subtract20Filled /> : <Add20Filled />}
          >
            Alchemy: Build UI to add currency using coinbase API
          </AccordionHeader>
          <AccordionPanel>
            <Alchemy />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={3}>
          <AccordionHeader
            expandIcon={openItem === 3 ? <Subtract20Filled /> : <Add20Filled />}
          >
            Roblox: Implement a task runner that executes an array of tasks.
          </AccordionHeader>
          <AccordionPanel>
            <Roblox />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default LinkedLists;
