import React from "react";

const Accordion = ({ items }) => {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#panelsStayOpen-collapse${index + 1}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`panelsStayOpen-collapse${index + 1}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`panelsStayOpen-collapse${index + 1}`}
            className={`accordion-collapse collapse ${
              index === 0 ? "show" : ""
            }`}
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
