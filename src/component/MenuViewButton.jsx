import React from "react";
import { useState} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ModeIcon from "@mui/icons-material/Mode";
import styles from "./MenuViewButton.module.css";
import CheckIcon from "@mui/icons-material/Check";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function ViewButton() {
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
        style={{ color: "black" }}
        onClick={handleClickOpen("paper")}
      >
     View
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
    
        sx={{
          width: "35%",
          marginTop: "1rem",
          height: "100%",
          marginLeft: "10rem",
        }}
      >
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText >
            <p className={styles.main}>
              {" "}
              <ModeIcon style={{ marginBottom: "-5px", fontSize: "2rem" }} />
              <span
                style={{ marginLeft: "15px", marginTop: "4px", color: "black" }}
              >
                {" "}
                Mode{" "}
              </span>
              <ArrowRightIcon sx={{ marginLeft: "15rem" }} />
            </p>

            <hr />

            <p className={styles.main}>
              <CheckIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>
                Show print layout
              </span>
            </p>

            <p className={styles.main}>
              <CheckIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>
                {" "}
                Show ruler
              </span>{" "}
            </p>

            <p className={styles.main}>
              <CheckIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>
                Show outline
              </span>
              <span style={{ marginLeft: "4rem" }}>Ctrl+Alt+A Ctrl+Alt+H </span>
            </p>

            <p className={styles.main}>
              <span style={{ marginLeft: "25px", color: "black" }}>
                Show equation toolbar
              </span>
            </p>
            <p className={styles.main}>
              <span style={{ marginLeft: "26px", color: "black" }}>
                Show non printings characters
              </span>
              <span style={{ marginLeft: "12rem" }}>Ctrl+Shift+P</span>
            </p>
            <hr />
            <p className={styles.main}>
              <CheckIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>
                Show comments
              </span>
              <span style={{ marginLeft: "10rem" }}>Ctrl+Alt+Shift+J </span>
            </p>
            <hr />
            <p className={styles.main}>
              <FullscreenIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "25px", color: "black" }}>
                Full screen
              </span>
            </p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
