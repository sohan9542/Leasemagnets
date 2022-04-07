import React, { useState, useEffect } from "react";
import { pageData, user } from "../data/pageData";
import { BsYoutube, BsFillShareFill, BsPlusCircleFill } from "react-icons/bs";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiFillEye,
  AiFillMinusCircle,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaCommentAlt, FaTiktok, FaFacebookSquare } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { tags } from "../data/data";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
const filter = createFilterOptions();
const Singlepage = () => {
  const pdata = pageData.props.pageProps;

  const COUNT_FORMATS = [
    {
      // 0 - 999
      letter: "",
      limit: 1e3,
    },
    {
      // 1,000 - 999,999
      letter: "k",
      limit: 1e6,
    },
    {
      // 1,000,000 - 999,999,999
      letter: "m",
      limit: 1e9,
    },
    {
      // 1,000,000,000 - 999,999,999,999
      letter: "b",
      limit: 1e12,
    },
    {
      // 1,000,000,000,000 - 999,999,999,999,999
      letter: "t",
      limit: 1e15,
    },
  ];

  function formatCount(value) {
    const format = COUNT_FORMATS.find((format) => value < format.limit);

    value = (1000 * value) / format.limit;
    value = Math.round(value * 10) / 10; // keep one decimal number, only if needed

    return value + format.letter;
  }
  const [creators, setCreators] = useState([1]);
  const [showcredit, setShowcredit] = useState(false);
  const [own, setOwn] = useState(false);
  const [reportCredit, setReportCredit] = useState(false);
  const [know, setKnow] = useState(false);
  const [value, setValue] = React.useState(null);

  const [tags2, setTags2] = useState([
    "musicstudio",
    "iphone",
    "ipadair",
    "studiodisplay",
    "appleevent",
  ]);
  const [tags1, setTags1] = useState([]);
  const [newtag] = useState([
    {
      id: 2969,
      title: "ad",
    },
    {
      id: 36647,
      title: "ancestrydna",
    },
    {
      id: 36644,
      title: "ancestrypartner",
    },
    {
      id: 822,
      title: "art",
    },
    {
      id: 4316,
      title: "bscartv",
    },
    {
      id: 3712,
      title: "dadlife",
    },
    {
      id: 36643,
      title: "disclosure",
    },
    {
      id: 823,
      title: "drawing",
    },
    {
      id: 4741,
      title: "family",
    },
    {
      id: 5645,
      title: "familytime",
    },
    {
      id: 1756,
      title: "fyp",
    },
    {
      id: 36736,
      title: "galaxybudspro",
    },
    {
      id: 36631,
      title: "galaxys20ultra",
    },
    {
      id: 36635,
      title: "galaxytabs7+",
    },
    {
      id: 36634,
      title: "galaxywatch3.",
    },
    {
      id: 36737,
      title: "galaxyzflip",
    },
    {
      id: 36739,
      title: "galaxyzfold2",
    },
    {
      id: 36640,
      title: "getthatcheddarentry",
    },
    {
      id: 36633,
      title: "giftguide",
    },
    {
      id: 6168,
      title: "mothersday",
    },
    {
      id: 36645,
      title: "myancestrystory",
    },
    {
      id: 36646,
      title: "myancestrystory.",
    },
    {
      id: 36637,
      title: "qled4k",
    },
    {
      id: 36641,
      title: "realistic",
    },
    {
      id: 36642,
      title: "realorfake",
    },
    {
      id: 31355,
      title: "samsung",
    },
    {
      id: 36632,
      title: "samsung.",
    },
    {
      id: 36468,
      title: "samsungpartner",
    },
    {
      id: 36639,
      title: "samsungpartner,",
    },
    {
      id: 36628,
      title: "samsungpartner#chocolatemommyluv",
    },
    {
      id: 36626,
      title: "samsungthombrowne",
    },
    {
      id: 36638,
      title: "smarttv.",
    },
    {
      id: 10749,
      title: "stitch",
    },
    {
      id: 3719,
      title: "tbt",
    },
    {
      id: 36627,
      title: "teamgalaxy",
    },
    {
      id: 36470,
      title: "teamgalaxy.",
    },
    {
      id: 27086,
      title: "withgalaxy",
    },
  ]);
  const [addtag, setAddtag] = useState(false);
  const [showEvent, setshowEvent] = useState(false);
  const filterItem = (item) => {
    console.log("item", item)
    const data = creators.filter((option) => option !== item)
    console.log(data)
    setCreators(data);
  };
  return (
    <div className=" w-full min-h-screen">
      <div className="flex items-center justify-center mt-20">
        <div className="container px-5 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
          
              {pdata.post.network === 4 && (
                <iframe
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  width="100%"
                  height="360"
                  src={pdata.post.url}
                  id="widget2"
                  data-gtm-yt-inspected-1_19="true"
                />
              )}
             
       
         {pdata.post.network === 2 && (
                <iframe
               
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="responsive_iframe"
                  
                  src={pdata.post.url}
                  id="widget2"
                  data-gtm-yt-inspected-1_19="true"
                />
              )}
       
            
              {pdata.post.network === 3 && (
                <iframe
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  width="100%"
                  height="100%"
                  src={pdata.post.url}
                  id="widget2"
                  data-gtm-yt-inspected-1_19="true"
                />
              )}
              {pdata.post.network === 1 && (
                <iframe
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  width="100%"
                  height="750"
                  className=" overflow-hidden"
                  src={pdata.post.url}
                  id="widget2"
                  data-gtm-yt-inspected-1_19="true"
                />
              )}
              {pdata.post.network === 5 && (
                <iframe
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  width="100%"
                  height="550"
                  src={pdata.post.url}
                  id="widget2"
                  data-gtm-yt-inspected-1_19="true"
                />
              )}
     
            <div>
              <div className=" flex gap-2 items-center text-gray-600">
                {pdata.post.network === 4 && <BsYoutube className=" w-7 h-7" />}
                {pdata.post.network === 1 && (
                  <AiOutlineTwitter className=" w-7 h-7" />
                )}
                {pdata.post.network === 2 && (
                  <AiOutlineInstagram className=" w-7 h-7" />
                )}
                {pdata.post.network === 3 && (
                  <FaFacebookSquare className=" w-7 h-7" />
                )}
                {pdata.post.network === 5 && <FaTiktok className=" w-7 h-7" />}
                <h6 className=" text-xl font-bold">@{pdata.post.account}</h6>
              </div>

              <div
                className=" pt-4 text-gray-800"
                dangerouslySetInnerHTML={{ __html: pdata.post.caption }}
              ></div>
              <div className=" mt-4 flex flex-wrap gap-10 text-gray-800 items-center justify-center pb-4 border-b">
                <div className=" flex items-center gap-1">
                  <AiFillHeart className=" w-5 h-5" />{" "}
                  {pdata.post.currentLikes === null
                    ? "—"
                    : formatCount(pdata.post.currentLikes)}
                </div>
                <div className=" flex items-center gap-1">
                  <AiFillEye className=" w-5 h-5" />{" "}
                  {pdata.post.currentViews === null
                    ? "—"
                    : formatCount(pdata.post.currentViews)}
                </div>
                <div className=" flex items-center gap-1">
                  <BsFillShareFill className=" w-5 h-5" />{" "}
                  {pdata.post.currentShares === null
                    ? "—"
                    : formatCount(pdata.post.currentShares)}
                </div>
                <div className=" flex items-center gap-1">
                  <FaCommentAlt className=" w-5 h-5" />{" "}
                  {pdata.post.currentComments === null
                    ? "—"
                    : formatCount(pdata.post.currentComments)}
                </div>
              </div>
              <div className=" py-5">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-gray-800 text-2xl">CREDITS</h1>
                  <div>
                    {showcredit === false && (
                      <button
                        onClick={() => setShowcredit(true)}
                        className=" flex items-center gap-2 uppercase text-b text-white bg-pr hover:bg-orange-700 px-3 py-2 rounded-xl"
                      >
                        {" "}
                        <BsPlusCircleFill /> GIVE CREDIT
                      </button>
                    )}
                  </div>
                </div>

                {showcredit && (
                  <div className=" lg:pl-6">
                    <div className=" w-full flex items-center justify-between pt-4">
                      <h1 className=" font-bold  text-lg text-pr">
                        GIVE CREDIT
                      </h1>
                      <button
                        onClick={() => setShowcredit(false)}
                        className=" flex items-center gap-2 uppercase text-b rounded-full  bg-transparent hover:bg-pr text-pr hover:text-white px-2 py-2 "
                      >
                        {" "}
                        <IoCloseSharp className=" w-5 h-5" />
                      </button>
                    </div>
                    <h6 className=" text-gray-700 font-bold text-lg pt-3">
                      Creator/Company
                    </h6>
                    <div className=" grid grid-cols-1 gap-3 pt-2">
                      {creators.map((item, ind) => (
                        <div
                          key={ind}
                          className=" grid grid-cols-1 lg:grid-cols-5 gap-2"
                        >
                          <div className="specific lg:col-span-2">
                            <Autocomplete
                              multiple
                              id="tags-outlined"
                              options={user.data}
                              getOptionLabel={(option) => (
                                <div className=" flex items-center justify-center gap-1">
                                  <img
                                    src={option.avatarUrl}
                                    className=" w-10 h-10 rounded-full"
                                    alt=""
                                  />
                                  <div className=" flex flex-col">
                                    <h6 className=" font-bold text-base">
                                      {option.name}
                                    </h6>
                                    <p>{option.username}</p>
                                  </div>
                                </div>
                              )}
                              filterSelectedOptions
                              renderInput={(params) => (
                                <TextField {...params} label="Twitter Handle" />
                              )}
                            />
                          </div>
                          <div className=" w-full lg:col-span-2">
                            <Autocomplete
                              multiple
                              id="tags-outlined"
                              options={pdata.roles}
                              getOptionLabel={(option) => option.name}
                              filterSelectedOptions
                              renderInput={(params) => (
                                <TextField {...params} label="Roles" />
                              )}
                            />
                          </div>
                          <div className=" flex items-center text-pr  justify-center gap-1 ">
                            <BsPlusCircleFill
                              onClick={() =>
                                setCreators([...creators, Math.random()])
                              }
                              className=" w-6
              h-6 cursor-pointer"
                            />
                            {creators.length > 1 ? (
                              <AiFillMinusCircle
                                onClick={() => filterItem(item)}
                                className=" w-7
             h-7 cursor-pointer"
                              />
                            ) : (
                              <AiFillMinusCircle className=" w-7 h-7 text-gray-600 " />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {own === false && (
                      <div>
                        <h6 className=" text-gray-700 font-bold text-lg pt-3 pb-2">
                          Worked for
                        </h6>
                        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-2">
                          <div className="specific lg:col-span-2">
                            <Autocomplete
                              multiple
                              id="tags-outlined"
                              options={user.data}
                              getOptionLabel={(option) => (
                                <div className=" flex items-center justify-center gap-1">
                                  <img
                                    src={option.avatarUrl}
                                    className=" w-10 h-10 rounded-full"
                                    alt=""
                                  />
                                  <div className=" flex flex-col">
                                    <h6 className=" font-bold text-base">
                                      {option.name}
                                    </h6>
                                    <p>{option.username}</p>
                                  </div>
                                </div>
                              )}
                              filterSelectedOptions
                              renderInput={(params) => (
                                <TextField {...params} label="Twitter Handle" />
                              )}
                            />
                          </div>
                          <div className=" w-full lg:col-span-2">
                            <Autocomplete
                              id="combo-box-demo"
                              options={pdata.roles}
                              getOptionLabel={(option) => option.name}
                              renderInput={(params) => (
                                <TextField {...params} label="Roles" />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className=" pt-2">
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={(e) => setOwn(e.target.checked)}
                            name="jason"
                          />
                        }
                        label="I made this for my own account(s)"
                      />
                    </div>
                    <div className=" pt-3 flex items-center gap-3 text-gray-600">
                      <p className=" text-base ">Don't see your role listed?</p>{" "}
                      <button className=" border-none px-2 py-2 rounded-md outline-none bg-transparent hover:bg-pr text-pr hover:text-white">
                        REQUEST IT HERE
                      </button>
                    </div>
                    <div className=" flex items-center justify-end w-full gap-3 pb-2 border-b">
                      <button className=" px-3 py-2 rounded-xl outline-none bg-transparent hover:bg-pr text-pr hover:text-white border border-pr">
                        Cancel
                      </button>
                      <button className=" px-3 py-2 rounded-xl outline-none bg-pr hover:bg-orange-700 text-white border border-pr">
                        Save
                      </button>
                    </div>
                  </div>
                )}

                <div className=" flex items-start pl-6 w-full justify-start flex-col pt-2 pb-2 border-b">
                  {pdata.post.credits.map((item, ind) => (
                    <div
                      key={ind}
                      className=" flex items-center justify-center gap-3"
                    >
                      <img
                        src={item.user.avatarUrl}
                        className=" w-10 h-10 rounded-full"
                        alt=""
                      />
                      <div className=" flex flex-col py-2">
                        <h6 className=" font-bold text-lg">{item.user.name}</h6>
                        <p className=" text-sm text-gray-500">
                          {item.user.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className=" pt-2 lg:pl-6">
                  {reportCredit === false && (
                    <div className=" w-full flex items-center justify-end">
                      <button
                        onClick={() => setReportCredit(true)}
                        className=" px-3 py-2 rounded-xl outline-none bg-transparent hover:bg-pr text-pr hover:text-white border border-pr"
                      >
                        Report A Credit Error
                      </button>
                    </div>
                  )}
                  {reportCredit && (
                    <div>
                      <div className=" w-full flex items-center justify-between pt-4">
                        <h1 className=" font-bold  text-lg text-gray-800">
                          Report a Credit Error
                        </h1>
                        <button
                          onClick={() => setReportCredit(false)}
                          className=" flex items-center gap-2 uppercase text-b rounded-full  bg-transparent hover:bg-pr text-pr hover:text-white px-2 py-2 "
                        >
                          {" "}
                          <IoCloseSharp className=" w-5 h-5" />
                        </button>
                      </div>
                      <div className=" grid grid-cols-1 gap-3 pt-2">
                        <div className=" flex flex-col gap-2">
                          <h1 className=" font-light text-gray-600">
                            Which credit contains an error?
                          </h1>
                          <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={pdata.post.credits}
                            getOptionLabel={(option) => option.user.name}
                            filterSelectedOptions
                            renderInput={(params) => (
                              <TextField {...params} label="Credit" />
                            )}
                          />
                        </div>
                        <div className=" w-full">
                          <h1 className=" font-light text-gray-600 pb-2">
                            What is wrong with the credit?
                          </h1>
                          <TextField className=" w-full" />
                        </div>
                      </div>

                      <div className=" pt-2">
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => setKnow(e.target.checked)}
                              name="jason"
                            />
                          }
                          label="I know the correct credit"
                        />
                      </div>
                      {know && (
                        <>
                          <h6 className=" text-gray-700 font-bold text-lg pt-3">
                            Creator/Company
                          </h6>
                          <div className=" grid grid-cols-1 gap-3 pt-2">
                            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-2">
                              <div className="specific lg:col-span-2">
                                <Autocomplete
                                  multiple
                                  id="tags-outlined"
                                  options={user.data}
                                  getOptionLabel={(option) => (
                                    <div className=" flex items-center justify-center gap-1">
                                      <img
                                        src={option.avatarUrl}
                                        className=" w-10 h-10 rounded-full"
                                        alt=""
                                      />
                                      <div className=" flex flex-col">
                                        <h6 className=" font-bold text-base">
                                          {option.name}
                                        </h6>
                                        <p>{option.username}</p>
                                      </div>
                                    </div>
                                  )}
                                  filterSelectedOptions
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Twitter Handle"
                                    />
                                  )}
                                />
                              </div>
                              <div className=" w-full lg:col-span-2">
                                <Autocomplete
                                  multiple
                                  id="tags-outlined"
                                  options={pdata.roles}
                                  getOptionLabel={(option) => option.name}
                                  filterSelectedOptions
                                  renderInput={(params) => (
                                    <TextField {...params} label="Roles" />
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <h6 className=" text-gray-700 font-bold text-lg pt-3 pb-2">
                              Worked for
                            </h6>
                            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-2 pb-3">
                              <div className="specific lg:col-span-2">
                                <Autocomplete
                                  multiple
                                  id="tags-outlined"
                                  options={user.data}
                                  getOptionLabel={(option) => (
                                    <div className=" flex items-center justify-center gap-1">
                                      <img
                                        src={option.avatarUrl}
                                        className=" w-10 h-10 rounded-full"
                                        alt=""
                                      />
                                      <div className=" flex flex-col">
                                        <h6 className=" font-bold text-base">
                                          {option.name}
                                        </h6>
                                        <p>{option.username}</p>
                                      </div>
                                    </div>
                                  )}
                                  filterSelectedOptions
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Twitter Handle"
                                    />
                                  )}
                                />
                              </div>
                              <div className=" w-full lg:col-span-2">
                                <Autocomplete
                                  id="combo-box-demo"
                                  options={pdata.roles}
                                  getOptionLabel={(option) => option.name}
                                  renderInput={(params) => (
                                    <TextField {...params} label="Roles" />
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <div className=" flex items-center justify-end w-full gap-3 pb-2 border-b">
                        <button className=" px-3 py-2 rounded-xl outline-none bg-transparent hover:bg-pr text-pr hover:text-white border border-pr">
                          Cancel
                        </button>
                        <button className=" px-3 py-2 rounded-xl outline-none bg-pr hover:bg-orange-700 text-white border border-pr">
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className=" pt-8 lg:pl-6">
                  <div className=" w-full grid grid-cols-4">
                    <h6 className=" text-gray-800 text-sm font-bold">Tags</h6>
                    <div className=" col-span-3 flex items-center gap-x-6 gap-y-2 flex-wrap">
                      {tags2.map((item, ind) => (
                        <p
                          key={ind}
                          className=" py-1 px-2 rounded-3xl font-semibold bg-pr text-white text-xs"
                        >
                          {item}
                        </p>
                      ))}

                      {addtag && (
                        <Autocomplete
                          className=" w-44"
                          onChange={(event, newValue) => {
                            if (typeof newValue === "string") {
                              setTags2([...tags2, newValue.title]);
                              setValue({
                                title: newValue,
                              });
                              setAddtag(false);
                            } else if (newValue && newValue.inputValue) {
                              // Create a new value from the user input
                              setTags2([...tags2, newValue.title]);
                              setValue({
                                title: newValue.inputValue,
                              });
                              setAddtag(false);
                            } else {
                              setTags2([...tags2, newValue.title]);
                              setValue(newValue);
                              setAddtag(false);
                            }
                          }}
                          filterOptions={(options, params) => {
                            const filtered = filter(options, params);

                            const { inputValue } = params;
                            // Suggest the creation of a new value
                            const isExisting = options.some(
                              (option) => inputValue === option.title
                            );
                            if (inputValue !== "" && !isExisting) {
                              filtered.push({
                                inputValue,
                                title: `${inputValue}`,
                              });
                            }

                            return filtered;
                          }}
                          selectOnFocus
                          clearOnBlur
                          handleHomeEndKeys
                          id="free-solo-with-text-demo"
                          options={newtag}
                          getOptionLabel={(option) => {
                            // Value selected with enter, right from the input
                            if (typeof option === "string") {
                              return option;
                            }
                            // Add "xxx" option created dynamically
                            if (option.inputValue) {
                              return option.inputValue;
                            }
                            // Regular option
                            return option.title;
                          }}
                          renderOption={(props, option) => (
                            <div
                              {...props}
                              className=" flex items-center gap-2 px-2"
                            >
                              <h5 className=" text-2xl font-bold">#</h5>
                              {option.title}
                            </div>
                          )}
                          freeSolo
                          renderInput={(params) => (
                            <TextField autofocus {...params} label="Tags" />
                          )}
                        />
                      )}
                      {addtag === false && (
                        <p
                          onClick={() => setAddtag(true)}
                          className=" text-pr cursor-pointer "
                        >
                          <AiFillPlusCircle className="w-6 h-6" />
                        </p>
                      )}
                    </div>
                  </div>
                  <div className=" w-full grid grid-cols-4 pt-5">
                    <h6 className=" text-gray-800 text-sm font-bold">
                      Event / Campaign
                    </h6>
                    <div className=" col-span-3 flex items-center gap-x-2 lg:gap-x-6 gap-y-2 flex-wrap">
                      {tags1.map((item, ind) => (
                        <p
                          key={ind}
                          className=" py-1 px-2 rounded-3xl font-semibold bg-pr text-white text-xs"
                        >
                          {item}
                        </p>
                      ))}
                      {showEvent === true && (
                        <Autocomplete
                          className=" w-44"
                          onChange={(event, newValue) => {
                            if (typeof newValue === "string") {
                              setTags1([...tags1, newValue.title]);
                              setValue({
                                title: newValue,
                              });
                              setshowEvent(false);
                            } else if (newValue && newValue.inputValue) {
                              // Create a new value from the user input
                              setTags1([...tags1, newValue.title]);
                              setValue({
                                title: newValue.inputValue,
                              });
                              setshowEvent(false);
                            } else {
                              setTags1([...tags1, newValue.title]);
                              setValue(newValue);
                              setshowEvent(false);
                            }
                          }}
                          filterOptions={(options, params) => {
                            const filtered = filter(options, params);

                            const { inputValue } = params;
                            // Suggest the creation of a new value
                            const isExisting = options.some(
                              (option) => inputValue === option.title
                            );
                            if (inputValue !== "" && !isExisting) {
                              filtered.push({
                                inputValue,
                                title: `${inputValue}`,
                              });
                            }

                            return filtered;
                          }}
                          selectOnFocus
                          clearOnBlur
                          handleHomeEndKeys
                          id="free-solo-with-text-demo"
                          options={newtag}
                          getOptionLabel={(option) => {
                            // Value selected with enter, right from the input
                            if (typeof option === "string") {
                              return option;
                            }
                            // Add "xxx" option created dynamically
                            if (option.inputValue) {
                              return option.inputValue;
                            }
                            // Regular option
                            return option.title;
                          }}
                          renderOption={(props, option) => (
                            <div
                              {...props}
                              className=" flex items-center gap-2 px-2"
                            >
                              <h5 className=" text-2xl font-bold">#</h5>
                              {option.title}
                            </div>
                          )}
                          freeSolo
                          renderInput={(params) => (
                            <TextField autofocus {...params} label="Tags" />
                          )}
                        />
                      )}
                      {showEvent === false && (
                        <p
                          onClick={() => setshowEvent(true)}
                          className=" text-pr cursor-pointer "
                        >
                          <AiFillPlusCircle className="w-6 h-6" />
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
