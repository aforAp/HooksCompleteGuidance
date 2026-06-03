import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionContent({ children, className, isOpen }) {
  const { openItemId, toggleItem } = useAccordionContext();
  const { id } = useAccordionItemContext();
  const isOpens = openItemId === id;
  const cssName = isOpens
    ? `${className ?? ""} open`
    : `${className ?? ""} close`;
  console.log(className);
  return (
    <div className={className} className={cssName}>
      {children}
    </div>
  );
}
