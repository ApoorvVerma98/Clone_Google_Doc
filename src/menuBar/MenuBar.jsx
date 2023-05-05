import React from "react";
import styles from "./MenuBar.module.css";
import File from "../component/MenuFileButton";
import MessageIcon from "@mui/icons-material/Message";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Avatar from "@mui/material/Avatar";
import Edit from "../component/MenuEditButton";
import ViewButton from "../component/MenuViewButton";
import { AiOutlineStar } from "react-icons/ai";
import { MdDriveFileMoveOutline } from "react-icons/md";


function MenuBar() {
  const nav = [
    { id: 3, name: "Insert" },
    { id: 4, name: "Format" },
    { id: 5, name: "Tools" },
    { id: 6, name: "Extensions" },
    { id: 7, name: "Help" },
  ];
  return (
    <div>
      <div className={styles.maincontainer}>
        <img
          className={styles.docimg}
          src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png"
          alt="dummy img"
        />
        <p contentEditable className={styles.mainhead}>
          Untitled document
        </p>
        <div className={styles.mainimg}>
          <AiOutlineStar className={styles.star} />
          <MdDriveFileMoveOutline className={styles.drive} />
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
        </div>
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
