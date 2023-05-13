import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionToggleEventHandler,
} from "@fluentui/react-components";
import { Add20Filled, Subtract20Filled } from "@fluentui/react-icons";
import { Reverse } from "./reverse";

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
      <h2 style={{ textAlign: "left" }}>Linked Lists</h2>
      <Accordion onToggle={handleToggle} openItems={openItem}>
        <AccordionItem value={1}>
          <AccordionHeader
            expandIcon={openItem === 1 ? <Subtract20Filled /> : <Add20Filled />}
          >
            Reverse Linked List
          </AccordionHeader>
          <AccordionPanel>
            <Reverse />
          </AccordionPanel>
        </AccordionItem>
        {/* <AccordionItem value={2}>
          <AccordionHeader
            expandIcon={openItem === 2 ? <Subtract20Filled /> : <Add20Filled />}
          >
            Accordion Header 2
          </AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 2</div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={3}>
          <AccordionHeader
            expandIcon={openItem === 3 ? <Subtract20Filled /> : <Add20Filled />}
          >
            Accordion Header 3
          </AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 3</div>
          </AccordionPanel>
        </AccordionItem> */}
      </Accordion>
    </>
  );
};

export default LinkedLists;
