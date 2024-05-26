import React from "react";
import classes from "./Headsty.module.css";
import { IoBagSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
// import { ItemsContex } from "../ProductContex/ItemsContex";

const Head = () => {
  //  const { cartItems } = useContext(ItemsContex)
  //  const cartAmount = cartItems[]
  return (
    <div className={classes.first}>
      <div className={classes.prelogo}>
        <div style={{ alignItems: "center", display: "flex" }}>
          <img className={classes.logo} src="IMG_5176.JPG" alt="" />
          <ul className={classes.lists}>
            <a href="/"  id="home">
              <li>Home</li>
            </a>
            <a href="#common">
              <li>Common</li>
            </a>
            <a href="#unique">
              <li>Unique</li>
            </a>
            <a href="#">
              <li>Reconmended</li>
            </a>
          </ul>
        </div>
        <div>
          <div className={classes.leftside}>
            <div className={classes.search}>
              <IoIosSearch />
              <input placeholder="Search product..." />
            </div>
            <div className={classes.bag}>
              <Link to="/charts">
                <span>1</span>
                <IoBagSharp />
              </Link>
            </div>
            <section>
              <p>Sign Up</p>
              <p>Sign In</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
