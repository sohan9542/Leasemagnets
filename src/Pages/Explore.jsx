import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardComponent from "../Card";
import { collaborators, fakedata, roles, tags } from "../data/data";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Autocomplete from "@mui/material/Autocomplete";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const Explorer = () => {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width:400,
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    borderRadius: "10px",
  };

  const [secondModal, setSecondModal] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div className=" min-h-screen">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=" flex items-center justify-between pb-2">
            <h5 className=" text-gray-800 font-bold text-xl">Engagement</h5>
            <div className=" w-10 h-10 rounded-full border overflow-hidden flex items-center justify-center">
              <Button onClick={handleClose} className=" w-full h-full">
                <RiCloseLine className=" w-5 h-5" />
              </Button>
            </div>
          </div>
          <div>
            <h5 className=" text-gray-700 font-medium pt-2">Views</h5>
            <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-3 pt-1 pb-3 border-b w-full">
              <TextField
                id="outlined-basic"
                label="Min"
                type="number"
                className=" rounded-md"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Max"
                type="number"
                className=" rounded-md"
                variant="outlined"
              />
            </div>
            <h5 className=" text-gray-700 font-medium pt-2">Comments</h5>
            <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-3 pt-1 pb-3 border-b w-full">
              <TextField
                id="outlined-basic"
                label="Min"
                type="number"
                className=" rounded-md"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Max"
                type="number"
                className=" rounded-md"
                variant="outlined"
              />
            </div>
            <h5 className=" text-gray-700 font-medium pt-2">Shares</h5>
            <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-3 pt-1 pb-3 border-b w-full">
              <TextField
                id="outlined-basic"
                label="Min"
                type="number"
                className=" rounded-md"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Max"
                type="number"
                className=" rounded-md"
                variant="outlined"
              />
            </div>
            <h5 className=" text-gray-700 font-medium pt-2">Likes</h5>
            <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-3 pt-1 pb-3 border-b w-full">
              <TextField
                id="outlined-basic"
                label="Min"
                type="number"
                className=" rounded-md"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Max"
                type="number"
                className=" rounded-md"
                variant="outlined"
              />
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={secondModal}
        onClose={() => setSecondModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=" flex items-center justify-between pb-2">
            <h5 className=" text-gray-800 font-bold text-xl">Credits</h5>
            <div className=" w-10 h-10 rounded-full border overflow-hidden flex items-center justify-center">
              <Button
                onClick={() => setSecondModal(false)}
                className=" w-full h-full"
              >
                <RiCloseLine className=" w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className=" w-full py-2 specific">
            <Autocomplete
              multiple
              id="tags-outlined"
              options={collaborators.data}
              getOptionLabel={(option) => (
                <div className=" flex items-center justify-center gap-3">
                  <img
                    src={option.avatarUrl}
                    className=" w-10 h-10 rounded-full"
                    alt=""
                  />
                  <div className=" flex flex-col py-2">
                    <h6 className=" font-bold text-lg">{option.name}</h6>
                    <p>{option.username}</p>
                  </div>
                </div>
              )}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Creators or companies that collaborated with Kelsy L Alston"
                />
              )}
            />
          </div>
          <div className=" w-full pt-2 pb-4 border-b">
            <Autocomplete
              multiple
              id="tags-outlined"
              options={roles}
              getOptionLabel={(option) => option.name}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="Roles on posts" />
              )}
            />
          </div>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={() => setOpen2(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=" flex items-center justify-between pb-2">
            <h5 className=" text-gray-800 font-bold text-xl">Tags</h5>
            <div className=" w-10 h-10 rounded-full border overflow-hidden flex items-center justify-center">
              <Button
                onClick={() => setOpen2(false)}
                className=" w-full h-full"
              >
                <RiCloseLine className=" w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className=" w-full py-2">
            <h5 className=" pb-2 font-medium">Event/Campaign</h5>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={[{ data: "No data" }]}
              getOptionLabel={(option) => option.data}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="Event/Campaign" />
              )}
            />
          </div>
          <div className=" w-full pt-2 pb-4 border-b">
            <h5 className=" pb-2 font-medium">Tags</h5>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={tags}
              getOptionLabel={(option) => (
                <div className=" flex items-center gap-2">
                  <h5 className=" text-2xl font-bold">#</h5>
                  {option.value}
                </div>
              )}
              filterSelectedOptions
              renderInput={(params) => <TextField {...params} label="Tags" />}
            />
          </div>
        </Box>
      </Modal>
      <Modal
        open={open3}
        onClose={() => setOpen3(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=" flex items-center justify-between pb-2">
            <h5 className=" text-gray-800 font-bold text-xl">Keywords</h5>
            <div className=" w-10 h-10 rounded-full border overflow-hidden flex items-center justify-center">
              <Button
                onClick={() => setOpen3(false)}
                className=" w-full h-full"
              >
                <RiCloseLine className=" w-5 h-5" />
              </Button>
            </div>
          </div>

          <TextField className=" w-full" />
        </Box>
      </Modal>
      <Modal
        open={open4}
        onClose={() => setOpen4(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=" flex items-center justify-between pb-2">
            <h5 className=" text-gray-800 font-bold text-xl">More</h5>
            <div className=" w-10 h-10 rounded-full border overflow-hidden flex items-center justify-center">
              <Button
                onClick={() => setOpen4(false)}
                className=" w-full h-full"
              >
                <RiCloseLine className=" w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className=" w-full ">
            <h6 className=" font-semibold">Network</h6>
            <div className=" flex items-center gap-x-3 border-b pb-2 flex-wrap">
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="Twitter"
              />
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="Instagram"
              />
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="Facebook"
              />
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="Youtube"
              />
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="Tiktok"
              />
            </div>
            <h6 className=" font-semibold pt-4">File Type</h6>
            <div className=" flex items-center gap-x-3 border-b pb-2 flex-wrap">
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="Vedio"
              />
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="Gif"
              />
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="Image"
              />
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="Text"
              />
            </div>
            <h6 className=" font-semibold pt-4">Date</h6>
            <div className=" w-full grid grid-cols-2 gap-2 pt-2">
              <TextField
                id="date"
                label="Posted After"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="date"
                label="Posted Before"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
        </Box>
      </Modal>

      <div className="w-full flex items-center justify-center mt-20">
        <div className="container px-4 lg:px-0">
        <div className=" w-full">
              <div className=" grid grid-cols-2 lg:grid-cols-6 gap-5">
                <Button
                  onClick={handleOpen}
                  variant="outlined"
                  className=" capitalize"
                  startIcon={<IoMdArrowDropdown />}
                >
                  Engage..
                </Button>
                <Button
                  onClick={() => setSecondModal(true)}
                  variant="outlined"
                  className=" capitalize"
                  startIcon={<IoMdArrowDropdown />}
                >
                  Credits
                </Button>
                <Button
                  onClick={() => setOpen2(true)}
                  variant="outlined"
                  className=" capitalize"
                  startIcon={<IoMdArrowDropdown />}
                >
                  Tag
                </Button>
                <Button
                  onClick={() => setOpen3(true)}
                  variant="outlined"
                  className=" capitalize"
                  startIcon={<IoMdArrowDropdown />}
                >
                  Keywords
                </Button>
                <Button
                  onClick={() => setOpen4(true)}
                  variant="outlined"
                  className=" capitalize"
                  startIcon={<IoMdArrowDropdown />}
                >
                  More
                </Button>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={10}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value={10}>Most Recent</MenuItem>
                    <MenuItem value={20}>Most Likes</MenuItem>
                    <MenuItem value={30}>Most Views</MenuItem>
                    <MenuItem value={30}>Total Engagements</MenuItem>
                    <MenuItem value={30}>Most Recent Imports</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className=" w-full flex items-center gap-4 justify-end my-3 flex-wrap">
                <p className=" text-lg text-gray-500">
                  {formatCount(fakedata[0].meta.stats.totalLikes)}{" "}
                  <span className=" font-medium text-gray-700">likes</span>
                </p>
                <p className=" text-lg text-gray-500">
                  {formatCount(fakedata[0].meta.stats.totalShares)}{" "}
                  <span className=" font-medium text-gray-700">shares</span>
                </p>
                <p className=" text-lg text-gray-500">
                  {formatCount(fakedata[0].meta.stats.totalComments)}{" "}
                  <span className=" font-medium text-gray-700">comments</span>
                </p>
                <p className=" text-lg text-gray-500">
                  {formatCount(fakedata[0].meta.stats.totalViews)}{" "}
                  <span className=" font-medium text-gray-700">views</span>
                </p>
                <p className=" text-lg text-gray-500">
                  {formatCount(fakedata[0].meta.stats.totalPosts)}{" "}
                  <span className=" font-medium text-gray-700">posts</span>
                </p>
              </div>
              <div className=" grid grid-cols-1 lg:grid-cols-4 gap-2">
                <div className="flex flex-col gap-2">
                  {fakedata[0].data.slice(0, 6).map((item, ind) => (
                    <CardComponent item={item} key={ind} />
                  ))}
                </div>
                <div className="flex flex-col gap-5">
                  {fakedata[0].data.slice(7, 12).map((item, ind) => (
                    <CardComponent item={item} key={ind} />
                  ))}
                </div>
                <div className="flex flex-col gap-5">
                  {fakedata[0].data.slice(13, 19).map((item, ind) => (
                    <CardComponent item={item} key={ind} />
                  ))}
                </div>
                <div className="flex flex-col gap-5">
                  {fakedata[0].data.slice(19, 25).map((item, ind) => (
                    <CardComponent item={item} key={ind} />
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;