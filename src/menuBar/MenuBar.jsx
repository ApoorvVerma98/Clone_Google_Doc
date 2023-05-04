import React from "react";
import styles from "./MenuBar.module.css";
import File from "../component/FileButton";

import { AiOutlineStar } from "react-icons/ai";
import { MdDriveFileMoveOutline } from "react-icons/md";
function MenuBar() {
  const nav = [
    { id: 1, name: "Edit" },
    { id: 2, name: "View" },
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
        </div>
      </div>
      <ul className={styles.list}>
        <li className={styles.file}>
          <File />
        </li>
        {nav.map((ele) => {
          return (
            <li className={styles.lis} key={ele.id}>
              {ele.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuBar;
