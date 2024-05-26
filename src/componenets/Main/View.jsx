import React from "react";
import sty from "../Main/View.module.css";
import { FaArrowRight } from "react-icons/fa6";
import Common from "./products/Common";
import { goods } from "./pictures";

const View = () => {
  return (
    <div style={{ backgroundColor: "#edeeef"  }}>
      <div className={sty.contain}>
        <div className={sty.preview}>
          <div className={sty.details}>
            <p>See everything with Blacky</p>
            <h5>
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts we’ve got your
              eyes covered.
            </h5>
            <div className={sty.shopb}>
              <button>
                <a href="#common">Shop now</a>
              </button>
              <FaArrowRight />
            </div>
          </div>
          <div className={sty.face}>
            <img src="DUSN8058.JPG" alt="" />
          </div>
        </div>
      </div>
      <div className={sty.common}>
        <div>
          <p>Common Product</p>
          <div className={sty.item}>
            {goods.map((product) => (
              <Common data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
