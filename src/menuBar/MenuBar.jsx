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
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined'
import { documentName } from "./Atom";
import { useRecoilState } from "recoil";
function MenuBar() {
  const [starr, setStarr] = useState(false)
  const[docName,setDocName]=useRecoilState(documentName)
  const nav = [
    { id: 1, name: "INSERT" },
    { id: 2, name: "FORMAT" },
    { id: 3, name: "TOOLS" },
    { id: 4, name: "EXTENSIONS" },
    { id: 5, name: "HELP" },
  ];
  return (
    <div>
 
        <img
          className={styles.docimg}
          src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png"
          alt="dummy img"
        />
        <p className={styles.mainhead}>
        <input type="text" value={docName}
                            onChange={(e) => setDocName(e.target.value)} />
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
          <Tooltip title="Open comment history (ctrl+Alt+Shift+A)">
            <MessageIcon className={styles.message} />
            </Tooltip>
            <Tooltip title="Join a call here or present this tab to the call">
            <a href="https://meet.google.com/">   <VideoChatIcon className={styles.video} style={{fontSize:"1.7rem" ,color:"black"}} /></a>
            </Tooltip>
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
              <button className={styles.lis} key={ele.id}>
                {ele.name}
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuBar;