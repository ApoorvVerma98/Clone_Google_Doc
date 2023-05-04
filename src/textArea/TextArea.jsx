import React from "react";
import { HiDownload } from "react-icons/hi";
import style from "./TextArea.module.css";

export default function TextArea() {
  function handleDownloadDoc() {
    const content = document.getElementById("content").innerHTML;
    const blob = new Blob([content], { type: "text/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className={style.main}>
        <div className={style.wrapper}>
          <div id="content" className={style.textArea} contentEditable="true" />
        </div>
      </div>
      <div onClick={handleDownloadDoc} className={style.downloaddoc}>
        <HiDownload />
      </div>
    </div>
  );
}
