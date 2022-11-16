import React from "react";

function Title({item, selected, index, toggle}) {
  const [solved, setSolved] = React.useState(0);
  const currentSolved = item.problem.filter(
    (problem) => problem.status === true
  );
  const titleOnClickHandler = (e) => {
    setSolved(currentSolved.length);
    toggle(index);
  };

  React.useEffect(() => {
    setSolved(currentSolved.length);
  }, [currentSolved]);
  return (
    <div className="title" onClick={titleOnClickHandler}>
      <h2>{item.topic + ` (${solved} / ${item.problem.length} )`}</h2>
      <span>{selected === index ? "-" : "+"}</span>
    </div>
  );
}
export default Title;
