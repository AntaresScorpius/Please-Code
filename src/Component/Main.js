import "./main.css";
import data from "./data";
import Accordion from "./Accordion"
import {useState} from 'react';

function Main() {
const [selected, setSelected] = useState(null);

  return(
    <div>
      <Accordion data={data} selected={selected} setSelected={setSelected} /> 
      
    </div>
  );
}

export default Main;
