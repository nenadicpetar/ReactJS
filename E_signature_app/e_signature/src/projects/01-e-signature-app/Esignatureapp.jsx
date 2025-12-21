import React from "react";
import Title from "./components/Title";

export default function Esignatureapp() {
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };
  document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={"Name"} />
      <Title classes={"main-title mb-4"} text={"Date"} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, labore
        laboriosam officia aliquid ratione ea tenetur quas, nesciunt delectus
        ducimus, nemo unde. Natus consectetur pariatur repellendus delectus a
        magni aliquid?
      </p>
      <footer
        classname="d-flex" 
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "60vp",
        }}
      >
        <input type="date" value={""} style={{ inputStyle }} />
        <input type="text" value={""} style={{ inputStyle }} />
      </footer>
    </div>
  );
}
