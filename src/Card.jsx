import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SiTiktok } from "react-icons/si";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
export default function CardComponent({ item }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
   <div className=" relative hover_awesome">
      <Card sx={{ maxWidth: 345 }} className="shadow_custom">
      <div className=" w-full flex items-center justify-between pl-2 py-1">
        <div className=" flex items-center gap-1">
          {item.url.includes("instagram") && (
            <AiOutlineInstagram className=" w-6 h-6" />
          )}
          {item.url.includes("tiktok") && <SiTiktok className=" w-6 h-6" />}
          {item.url.includes("twitter") && <FaTwitter className=" w-6 h-6" />}
          {item.url.includes("facebook") && (
            <FaFacebookSquare className=" w-6 h-6" />
          )}

          {item.url.includes("youtube") && <BsYoutube className=" w-6 h-6" />}

          <h5 className=" text-gray-700 font-medium text-base" to="/">
            @{item.account}
          </h5>
        </div>
        <IconButton
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MoreVertIcon className=" cursor-pointer"/>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem className=" font-thin text-gray-600">View details</MenuItem>
          <MenuItem>View on instagram</MenuItem>
          <MenuItem>More From @LoganPaul</MenuItem>
          <MenuItem>Copy post link</MenuItem>
        </Menu>
      </div>

      <CardMedia
        component="img"
        height="194"
        image={`https://ik.imagekit.io/gondola/tr:w-400,h-,fo-auto/${item.thumbnailUrl}`}
        alt="Paella dish"
      />

      <div className=" flex w-full items-center justify-center gap-10 pt-2">
        <div className=" flex gap-1 items-center">
          <FaHeart className=" text-gray-800 w-4 h-4" />
          <p className=" font-light text-gray-500">1m</p>
        </div>
        <div className=" flex gap-1 items-center">
          <RiMessage2Fill className=" text-gray-800 w-5 h-5" />
          <p className=" font-light text-gray-500">12.3k</p>
        </div>
      </div>
      <div className=" w-full grid grid-cols-8 gap-1 p-2">
        {item.credits.map((item, ind) => (
     
            <img
            key={ind}
            src={item.user.avatarUrl}
            className=" h-8 w-8 rounded-full  cursor-pointer"
            alt=""
          />
      
    
        ))}
      </div>

    </Card>
    <div className=" awesome shadow-lg gap-3">
<div className=" h-4 w-4 bg-white absolute toltip_card">

</div>
{item.credits.map((item, ind) => (
     
    <div className=" flex items-center gap-3 px-3 hover:bg-gray-50">
       <img
     key={ind}
     src={item.user.avatarUrl}
     className=" h-8 w-8 rounded-full hover_awesome cursor-pointer"
     alt=""
   />
   <div>
     <h1 className=" text-sm font-semibold text-gray-800">{item.user.name}</h1>
     <h6 className=" text-sm text-gray-500">{item.user.username}</h6>
   </div>
    </div>


 ))}
    </div>
   </div>
  );
}
