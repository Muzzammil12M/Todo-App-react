import React, { useState } from "react";
import "./style.css";

const AccordianItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordian-item ${open ? "open" : ""}`}>
      <button className="accordian-question" onClick={() => setOpen(!open)}>
        {item.question}
        <span className="chev">{open ? "-" : "+"}</span>
      </button>
      {open && <div className="accordian-answer">{item.answer}</div>}
    </div>
  );
};

const Accordian = ({ data = [] }) => {
  return (
    <div className="accordian">
      {data.map((d) => (
        <AccordianItem key={d.id} item={d} />
      ))}
    </div>
  );
};

export default Accordian;
