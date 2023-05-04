import React from "react";
import { HiDownload } from "react-icons/hi";
import style from "./TextArea.module.css";
import jsPDF from "jspdf";
export default function TextArea() {
  function handleDownloadDoc() {
    const content = document.getElementById("content").innerHTML.trim();
    const doc = new jsPDF();
    doc.text(content, 10, 10);
    doc.save("document.pdf");
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
