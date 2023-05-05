import React from "react";
import { useState } from "react";
import styles from "./MenuBar.module.css";
import File from "../component/MenuFileButton";
import MessageIcon from "@mui/icons-material/Message";
import { Tooltip } from '@mui/material'
import VideoChatIcon from "@mui/icons-material/VideoChat";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Avatar from "@mui/material/Avatar";
import Edit from "../component/MenuEditButton";
import ViewButton from "../component/MenuViewButton";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';

function MenuBar() {
  const [starr, setStarr] = useState(false)
  const nav = [
    { id: 1, name: "Insert" },
    { id: 2, name: "Format" },
    { id: 3, name: "Tools" },
    { id: 4, name: "Extensions" },
    { id: 5, name: "Help" },
  ];
  return (
    <div>
 
        <img
          className={styles.docimg}
          src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png"
          alt="dummy img"
        />
        <p contentEditable className={styles.mainhead}>
          Untitled document
        </p>
        <div className={styles.lefticon}>
        <Tooltip title="Star">
        <p onClick={() => setStarr(!starr)}>
         {starr ? <StarIcon sx={{ fontSize: "1.5rem", color: '#4285F4' }} /> : <StarOutlineIcon sx={{ fontSize: "1.5rem" }} />}
         </p>
        </Tooltip>
        <Tooltip title="Move">
        <p><DriveFileMoveOutlinedIcon sx={{ fontSize: "1.5rem" }} /></p>
          </Tooltip>
          <Tooltip title="See document status">
                            <p><CloudDoneOutlinedIcon sx={{ fontSize: "1.5rem" }} /></p>
                        </Tooltip>
                        </div>
          <div className={styles.righticon}>
            <MessageIcon className={styles.message} />
            <VideoChatIcon className={styles.video} />
            <div className={styles.shares}>
              {" "}
              <LockOpenIcon className={styles.lock} />{" "}
              <p style={{ marginTop: "-0.4rem", marginLeft: "20px" }}>Share</p>
            </div>
            <Avatar
              className={styles.user}
              alt="Remy Sharp"
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            />
         
  
      </div>
      <ul className={styles.list}>
        <li className={styles.file}>
          <File />
        </li>
        <li className={styles.file}>
          <Edit />
        </li>
        <li className={styles.file}>
          <ViewButton />
        </li>
        {nav.map((ele) => {
          return (
            <>
              <li className={styles.lis} key={ele.id}>
                {ele.name}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuBar;
