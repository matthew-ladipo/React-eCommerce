import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Foot = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" , color: 'gray', }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#d2d7d7",
        }}
      >
        <img src="IMG_5176.JPG" alt="" />
      </div>
      <div style={{ display:'flex', justifyContent: 'space-between', margin: "0 10px", padding: "0 10px" }}>
        <h4>Developed by matthew ladipo .O</h4>
        <p>&copy; 2024 </p>
        <div>
          <h4>matthewladipo@gmail.com</h4>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', fontSize: '30px' }}>
            <li>
              <CiFacebook />
            </li>
            <li>
              <FaWhatsapp />
            </li>
            <li>
              <CiTwitter />
            </li>
            <li>
              <FaGithub />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Foot;
