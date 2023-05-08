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

  return (
    <div>
      <div className={style.ToolBar}>
        <ToolBar printDiv={printDiv} />
      </div>
      <div className={style.main}>
        <div className={style.wrapper}>
          <div
            ref={printDiv}
            id="printablediv"
            className={style.textArea}
            contentEditable="true"
          />
        </div>
      </div>
      <div className={style.downloaddoc}>
        <HiDownload onClick={handleDownload} />
      </div>
    </div>
  );
}
