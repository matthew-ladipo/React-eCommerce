import React, {useState} from "react";

import chartsty from "./Chart.module.css";

const ChartItems = (props) => {
  const [count, setCount] = useState(0);

  function addChart() {
    setCount(count + 1);
  }
  function removeChart() {
    setCount(count - 1);
  }
  const { id, item, tag, price } = props.data;

  return (
    <div className={chartsty.items}>
      <img src={item} alt="item" className={chartsty.ice} />
      <div className={chartsty.describtion}>
        <b>{tag}</b>
        <h4>{price}</h4>
        <h3>Select number of order</h3>
        <div className={chartsty.addremove}>
              <h5 onClick={removeChart}>-</h5>
              <span>{count}</span>
              <h5 onClick={addChart}>+</h5>
            </div>
      </div>
    </div>
  );
};

export default ChartItems;
