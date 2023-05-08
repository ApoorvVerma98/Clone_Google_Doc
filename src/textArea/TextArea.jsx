import React, { useState, useRef } from "react";
import ToolBar from "../editorBar/EditorBar";
import style from "./TextArea.module.css";
import { HiDownload } from "react-icons/hi";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRecoilValue } from "recoil";
import { documentName } from "../menuBar/Atom";
export default function HomePage() {
  const title = useRecoilValue(documentName);
  const [pdfName, setPdfName] = useState("");
  const fileInputRef = useRef(null);


  const printDiv = useRef();

  async function handleDownload() {
    const sheetContent = document.getElementById(`printablediv`);
    const canvas = await html2canvas(sheetContent, { dpi: 300 });
    const imageData = canvas.toDataURL("image/png", 1.0);
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
    });
    pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
    pdfDoc.save(`${pdfName || title}.pdf`);
  }

  function handleInputChange(event) {
    setPdfName(event.target.value);
  }

  function handleFileUpload(event) {
    if (event.target.files[0]) {
      let imgUrl = URL.createObjectURL(event.target.files[0]);
      let img = document.createElement("img");
      console.log(imgUrl);

      img.style.maxWidth = "50%";
      img.style.maxHeight = "50%";

      img.src = imgUrl;
      document.execCommand("insertHTML", false, img.outerHTML);
}
  }

  return (
    <div>
      <div className={style.ToolBar}>
        <ToolBar fileInputRef = {fileInputRef} printDiv={printDiv} />        
      </div>
      <div className={style.main}>
        <div className={style.wrapper}>
          <div
            ref={printDiv}
            id="printablediv"
            className={style.textArea}
            contentEditable="true"
          />
             <input
            ref={fileInputRef}
            id="imageUpload"
            hidden
            type="file"
            accept="image/*"
            // style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </div>
      </div>
      <div className={style.downloaddoc}>
        <HiDownload onClick={handleDownload} />
      </div>
    </div>
  );
}
