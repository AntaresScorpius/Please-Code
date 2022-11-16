import ListTitle from "./ListTitle";
import ListItem from "./ListItem";

function Accordion({data, selected, setSelected}) {
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <ListTitle
              item={item}
              selected={selected}
              index={index}
              toggle={toggle}
            />
            <ListItem item={item} selected={selected} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
