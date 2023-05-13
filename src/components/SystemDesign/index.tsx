import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionToggleEventHandler,
} from "@fluentui/react-components";
import { Add20Filled, Subtract20Filled } from "@fluentui/react-icons";
import LoadBalancing from "./loadBalancing";
import DropDown from "./dropdown";

export const SystemDesign = () => {
  const [openItem, setOpenItems] = React.useState(0);
  const handleToggle = React.useCallback<AccordionToggleEventHandler>(
    (_, data) => {
      setOpenItems(data.value as number);
    },
    []
  );
  return (
    <>
      <h2 style={{ textAlign: "left" }}>System Design</h2>
      <Accordion onToggle={handleToggle} openItems={openItem}>
        <AccordionItem value={1}>
          <AccordionHeader
            expandIcon={openItem === 1 ? <Subtract20Filled /> : <Add20Filled />}
          >
            Click Up List View
          </AccordionHeader>
          <AccordionPanel></AccordionPanel>
        </AccordionItem>
        <AccordionItem value={2}>
          <AccordionHeader
            expandIcon={openItem === 2 ? <Subtract20Filled /> : <Add20Filled />}
          >
            Alchemy: Flight Booking Site
          </AccordionHeader>
          <AccordionPanel></AccordionPanel>
        </AccordionItem>
        <AccordionItem value={3}>
          <AccordionHeader
            expandIcon={openItem === 3 ? <Subtract20Filled /> : <Add20Filled />}
          >
            Load Balancing
          </AccordionHeader>
          <AccordionPanel>
            <LoadBalancing />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={4}>
          <AccordionHeader
            expandIcon={openItem === 4 ? <Subtract20Filled /> : <Add20Filled />}
          >
            Dropdown
          </AccordionHeader>
          <AccordionPanel>
            <DropDown />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SystemDesign;
