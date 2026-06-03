import React from "react";
import { useAccordionContext } from "./Accordion.jsx";
import { useAccordionItemContext } from "./AccordionItem.jsx";
const AccordionTitle = ({ id, children, className }) => {
  const { toggleItem } = useAccordionContext();
  const { id: itemId } = useAccordionItemContext();
  return (
    <h3 onClick={() => toggleItem(itemId)} className={className}>
      {children}
    </h3>
  );
};

export default AccordionTitle;
