import React, { useState } from "react";
import background from "../images/background.png";
import facebook from "../images/facebook.png";
import red from "../images/red.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";
import tiktok from "../images/tiktok.png";
import link from "../images/link.png";
import netflix from "../images/netflix.png";
import saas from "../images/saas.png";
import lakers from "../images/lakers.png";
import { CircularProgress, Modal } from "@mui/material";
import { AiOutlineInstagram, AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
// /youtube/mT_m5bOGXZY
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  background: "#fff",
  boxShadow: 24,
  border: "none",
  padding: "20px",
  outline: "none",
  borderRadius: "10px",
};

const Home = () => {
  const [open, setOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [result, setResult] = useState(null);

  const [post, setPost] = useState({
    post_title: " ",
    post_caption: " ",
    post_pic: "",
    embed_url: "",
    engagement: {
      likes: "",
      comments: "",
      shares: "",
      views: "",
    },
    date: "",

    profile_pic: "",
    username: "",

    collaborators: [],
    credits: [],
    network: "",
    icon: <></>,
  });

  const getSearchData = () => {
    setOpen(true);
    let reqOptions = {
      url: `http://localhost:9000/${searchItem}`,
      method: "GET",
    };

    axios.request(reqOptions).then(function (response) {
      // console.log(response)
      if (searchItem.includes("instagram")) {
        if (response.data.items.length > 0) {
          setResult(response.data.items[0]);
          const data = response.data.items[0];
          setPost({
            post_title: " ",
            post_caption: data.caption.text,
            post_pic:
              data.image_versions2?.candidates.length > 0
                ? data.image_versions2.candidates[0].url
                : "",
            embed_url: "",
            engagement: {
              likes: data.like_count,
              comments: data.comment_count,
              shares: "",
              views: "",
            },
            date: data.taken_at,

            profile_pic: "",
            username: data.user.username,

            collaborators: [],
            credits: [],
            network: "instagram",
            icon: (
              <a href="https://instagram.com/" target="_blank">
                <AiOutlineInstagram className=" w-6 h-6" />
              </a>
            ),
          });
          
        } else {
          setResult([]);
          
        }
      }
    });
  };

  return (
    <>
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
        <div className=" absolute z-20 bottom-32 left-0 w-full flex flex-col items-center justify-center">
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                getSearchData();
              }}
              className=" w-full"
            >
              <input
                required
                onChange={(e) => setSearchItem(e.target.value)}
                type="text"
                className=" w-full py-4 px-3 border-none bg-transparent outline-none"
                placeholder="post your link to your content"
              />
            </form>
          </div>
        </div>
        <div
          className=" absolute top-0 left-0 w-full h-full z-10 "
          style={{ background: "rgba(0,0,0,0.3)" }}
        ></div>
      </div>
      <p className=" w-full text-center pt-4">
        Trusted by 1422 creators who collaborate with organizations like:
      </p>
      <div className=" w-full mt-3 flex items-center justify-center gap-3">
        <img src={netflix} alt="" />
        <img src={saas} alt="" />
        <img src={lakers} alt="" />
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        {result === null ? (
          <div className=" h-full w-full flex items-center justify-center">
            <CircularProgress />
          </div>
        ) : (
          <div style={style}>
            <>
              {result.length !== 0 ? (
                <>
                  <div className=" flex items-center justify-between">
                    {searchItem.includes("instagram") && (
                      <p className=" text-sm">
                        Add {post.network} post:
                        <a
                          href="https://instagram.com/"
                          className=" text-gray-900 font-medium pl-4"
                        >
                          https://{post.network}.com/
                        </a>
                      </p>
                    )}
                    <div className=" flex items-center gap-2">
                      {post.username}
                      {post.icon}
                    </div>
                  </div>
                  <div className=" flex  gap-5 pt-4">
                    {post.post_pic !== "" && (
                      <img
                        src={post.post_pic}
                        style={{ objectFit: "cover" }}
                        className=" w-40  h-40"
                        alt=""
                      />
                    )}
                    {post.profile_pic !== "" && (
                      <img
                        src={post.profile_pic}
                        style={{ objectFit: "cover" }}
                        className=" w-40  h-40"
                        alt=""
                      />
                    )}
                    <div className=" w-full relative">
                      <div className=" w-full flex items-center justify-between">
                        <h1 className=" text-gray-700 text-2xl">
                          {post.post_title}
                        </h1>
                        <p>{post.date}</p>
                      </div>
                      <div className=" pt-3 grid grid-cols-4 gap-4">
                        {post.engagement.views !== "" && (
                          <div>
                            <h6 className=" font-bold">Views</h6>
                            <p className=" font-medium">
                              {post.engagement.views}
                            </p>
                          </div>
                        )}
                        {post.engagement.likes !== "" && (
                          <div>
                            <h6 className=" font-bold">Likes</h6>
                            <p className=" font-medium">
                              {post.engagement.likes}
                            </p>
                          </div>
                        )}
                        {post.engagement.comments !== "" && (
                          <div>
                            <h6 className=" font-bold">Comments</h6>
                            <p className=" font-medium">
                              {post.engagement.comments}
                            </p>
                          </div>
                        )}
                        {post.engagement.shares !== "" && (
                          <div>
                            <h6 className=" font-bold">Shares</h6>
                            <p className=" font-medium">
                              {post.engagement.shares}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className=" absolute bottom-0 right-0">
                        <button
                          style={{ background: "#2983ED" }}
                          className=" text-white font-medium px-3 text-sm rounded-md py-2 flex items-center gap-4"
                        >
                          <AiOutlinePlus className=" w-5 h-5" />
                          Add Post to Creator.app
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                "No Data found"
              )}
            </>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Home;
