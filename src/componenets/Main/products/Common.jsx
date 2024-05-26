import React, { useContext } from "react";
import sty from "../View.module.css";
import { ItemsContex } from "../../ProductContex/ItemsContex";

const Common = (props) => {
  const { addToChart, cartItems } = useContext(ItemsContex);
  const { id, item, tag, price } = props.data;

  return (
    <div id="common" className={sty.items}>
      <img src={item} alt="item" className={sty.ice} />
      <div className={sty.describtion}>
        <div style={{ display: 'flex', justifyContent: "space-around" }}>
          <b>{tag}</b>
        <h4>{price}</h4>
        </div>
        <button className={sty.add} onClick={() => addToChart(id)}>Add to chart</button>
      </div>
    </div>
  );
};

export default Common;
