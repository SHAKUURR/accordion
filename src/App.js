import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, SetCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem
          title={el.title}
          key={el.title}
          numb={i}
          curOpen={curOpen}
          onOpen={SetCurOpen}
          text={el.text}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, numb, text, curOpen, onOpen }) {
  const isOpen = numb === curOpen;

  function handleClick() {
    onOpen(isOpen ? null : numb);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{numb < 9 ? `0${numb + 1}` : numb + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
