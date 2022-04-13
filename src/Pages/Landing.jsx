import React from "react";
import background from "../images/background.png";
import facebook from "../images/facebook.png";
import red from "../images/red.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";
import tiktok from "../images/tiktok.png";
import link from "../images/link.png";
const Home = () => {
  return (
    <div className=" relative w-full h-full">
      <img
        src={background}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt=""
      />
      <div className=" absolute z-20 top-5 left-0 w-full h-full">
        <h1 className=" font-bold text-white text-2xl text-center w-full">
          creator.app
        </h1>
      </div>
      <div className=" absolute z-20 bottom-10 left-0 w-full flex flex-col items-center justify-center">
        <div className=" flex items-center gap-5">
          <div className=" flex items-center gap-3">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} className=" cursor-pointer" alt="" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={red} className=" cursor-pointer" alt="" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} className=" cursor-pointer" alt="" />
            </a>
          </div>
          <h1 className=" font-bold text-white text-2xl text-center ">
            Unbundle your creator resume
          </h1>
          <div className=" flex items-center gap-3">
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className=" cursor-pointer" alt="" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img src={twitter} className=" cursor-pointer" alt="" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank">
              <img src={tiktok} className=" cursor-pointer" alt="" />
            </a>
          </div>
        </div>

        <div className=" w-2/4 bg-white mt-5 rounded-full px-5 flex items-center">
          <img src={link} alt="" />
          <input
            type="text"
            className=" w-full py-4 px-3 border-none bg-transparent outline-none"
            placeholder="post your link to your content"
          />
        </div>
      </div>
      <div className=" absolute top-0 left-0 w-full h-full z-10 " style={{background:"rgba(0,0,0,0.3)"}}>

      </div>
    </div>
  );
};

export default Home;
