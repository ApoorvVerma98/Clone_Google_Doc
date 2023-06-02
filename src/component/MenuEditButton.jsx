import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { BiUndo, BiRedo } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFindReplace } from "react-icons/md";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentPasteOffIcon from "@mui/icons-material/ContentPasteOff";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import styles from "./MenuEditButton.module.css";

export default function MenuEditButton() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  return (
    <div>
      <Button
        style={{ color: "black"  }}
        onClick={handleClickOpen("paper")}
      >
        Edit
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        sx={{
          width: "34%",
          marginTop: "2rem",
          height: "100%",
          marginLeft: "8rem",
        }}
      >
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText>
            <p className={styles.main}>
              {" "}
              <BiUndo style={{ marginBottom: "-5px", fontSize: "2rem" }} />
              <span
                style={{ marginLeft: "15px", marginTop: "4px", color: "black" }}
              >
                {" "}
                Undo{" "}
              </span>
              <span style={{ marginLeft: "13rem" }}>Ctrl+Z </span>
            </p>

            <p className={styles.main}>
              <BiRedo style={{ marginBottom: "-5px", fontSize: "2rem" }} />
              <span style={{ marginLeft: "18px", color: "black" }}>Redo</span>
              <span style={{ marginLeft: "13.3rem" }}>Ctrl+Y </span>
            </p>

            <hr />
            <p className={styles.main}>
              <ContentCutIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>Cut</span>
              <span style={{ marginLeft: "14.2rem" }}>Ctrl+X </span>
            </p>

            <p className={styles.main}>
              <ContentCopyIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>Copy</span>
              <span style={{ marginLeft: "13.5rem" }}>Ctrl+C </span>{" "}
            </p>

            <p className={styles.main}>
              <ContentPasteIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>Paste</span>
              <span style={{ marginLeft: "13.2rem" }}>Ctrl+V </span>{" "}
            </p>

            <p className={styles.main}>
              <ContentPasteOffIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>
                Paste without Formatting
              </span>
              <span style={{ marginLeft: "11.5rem" }}>Ctrl+Shift+V </span>
            </p>
            <hr />

            <p className={styles.main}>
              <SelectAllIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>Move</span>
              <span style={{ marginLeft: "13rem" }}>Ctrl+A </span>
            </p>

            <p className={styles.main}>
              <RiDeleteBin6Line style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>
                {" "}
                Delete
              </span>{" "}
            </p>

            <hr />

            <p className={styles.main}>
              <MdOutlineFindReplace style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>
                Find And Replace
              </span>
              <span style={{ marginLeft: "14.5rem" }}>Ctrl+H </span>
            </p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
