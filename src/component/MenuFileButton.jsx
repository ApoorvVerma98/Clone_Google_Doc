import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ArticleIcon from "@mui/icons-material/Article";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DownloadIcon from "@mui/icons-material/Download";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import HistoryIcon from "@mui/icons-material/History";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import PrintIcon from "@mui/icons-material/Print";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styles from "./MenuFileButton.module.css";

export default function MenuFileButton() {
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
        File
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        sx={{ width: "40%", marginTop: "3rem", height: "100%" }}
      >
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText>
            <p className={styles.main}>
              {" "}
              <ArticleIcon style={{ marginBottom: "-5px" }} />
              <span
                style={{ marginLeft: "15px", marginTop: "4px", color: "black" }}
              >
                {" "}
                New{" "}
              </span>
              <ArrowRightIcon sx={{ marginLeft: "12rem" }} />{" "}
            </p>

            <p className={styles.main}>
              <FolderOpenIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "8px", color: "black" }}>Open </span>
              <span style={{ marginLeft: "10rem" }}>Ctrl+O </span>
            </p>

            <p className={styles.main}>
              <ContentCopyIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "8px", color: "black" }}>
                Make a copy
              </span>{" "}
            </p>
            <hr />
            <p className={styles.main}>
              <PersonAddAltIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "8px", color: "black" }}>Share</span>
              <ArrowRightIcon sx={{ marginLeft: "12rem" }} />{" "}
            </p>

            <p className={styles.main}>
              <MailOutlineIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "8px", color: "black" }}>Email</span>
              <ArrowRightIcon sx={{ marginLeft: "12rem" }} />{" "}
            </p>

            <p className={styles.main}>
              <DownloadIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>
                Download
              </span>
              <ArrowRightIcon sx={{ marginLeft: "10rem" }} />{" "}
            </p>
            <hr />
            <p className={styles.main}>
              <DriveFileRenameOutlineIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>
                Rename
              </span>{" "}
            </p>

            <p className={styles.main}>
              <DriveFileMoveIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>
                Move
              </span>{" "}
            </p>
            <p className={styles.main}>
              <AddToDriveIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>
                Add Shortcut to Drive
              </span>{" "}
            </p>

            <p className={styles.main}>
              <DeleteOutlineIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>
                Move to trash
              </span>{" "}
            </p>

            <hr />
            <p className={styles.main}>
              <HistoryIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>
                Version History
              </span>{" "}
            </p>

            <p className={styles.main}>
              <OfflinePinIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>
                Make available offline
              </span>{" "}
            </p>

            <hr />
            <p className={styles.main}>
              <InfoIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>
                Details
              </span>{" "}
            </p>

            <p className={styles.main}>
              <LanguageIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>
                Language
              </span>{" "}
            </p>

            <p className={styles.main}>
              <DescriptionIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>
                Page Setup
              </span>{" "}
            </p>

            <p className={styles.main}>
              <PrintIcon style={{ marginBottom: "-5px" }} />
              <span style={{ marginLeft: "7px", color: "black" }}>Print</span>
              <span style={{ marginLeft: "10rem" }}>Ctrl+P </span>{" "}
            </p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
