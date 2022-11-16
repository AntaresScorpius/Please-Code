function Accordion({data, selected, setSelected}){

    const toggle = (index) => {
        if(selected === index){
          return setSelected(null);
        }
        setSelected(index);
      }
    return(
        <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <div className="title" onClick={() => toggle(index)}>
                <h2>{item.topic}</h2>
                <span>{selected === index ? '-' : '+'}</span>
            </div>
            <div className={selected === index ? 'content show': 'content'}>
              {item.problem.map((prob, i) => {
                return (
                  <div key={prob.name}>
                    <p>{prob.name} {prob.link}</p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Accordion;