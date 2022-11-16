function ListItem({item, selected, index}) {
  return (
    <div className={selected === index ? "content show" : "content"}>
      {item.problem.map((prob, i) => {
        return (
          <div className="problem-div" key={prob.name}>
            <a className="problem-link" href={prob.link}>
              {prob.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}
export default ListItem;
