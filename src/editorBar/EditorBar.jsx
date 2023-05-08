import React, { useState, useRef } from "react";
import { AiOutlinePrinter, AiOutlineHighlight } from "react-icons/ai";
import { ImFontSize, ImTextColor } from "react-icons/im";
import { icons, fontSizeList, fontFamilyList,  zoomList, heading } from "../component/ToolBar-Icons";
import style from "./EditorBar.module.css";
import { RxImage } from "react-icons/rx";

export default function ToolBar(props) {
  const printDiv = props.printDiv;
  const fileInputRef = props.fileInputRef;
  const [scaleSize, setScaleSize] = useState("100%");
  const [fontSize, setFontSize] = useState("Font Size");
  const [fontName, setFontName] = useState("Font Style");
  const [color, setColor] = useState("#000000");
  const [highlightColor, setHighlightColor] = useState("#000000");
  // const [show, setShow] = useState(false);
  // const fileInputRef = useRef(null);

  function handleAction(element) {
    document.execCommand(`${element.action}`);
  }
  
  function handleFontColor(e) {
    setColor(e.target.value);
    document.execCommand("foreColor", false, e.target.value);
  }
  
  function handleFontSize(e) {
    setFontSize(e.target.value);
    document.execCommand("fontSize", false, e.target.value);
  }
  
  function handleHighlightColor(e) {
    setHighlightColor(e.target.value);
    document.execCommand("backColor", false, e.target.value);
  }
  
  function handleFontStyle(e) {
    setFontName(e.target.value);
    document.execCommand("fontName", false, e.target.value);

    if (e.target.value === "Smile") {
      document.execCommand("insertHTML", false, "&#128514");
    } else if (e.target.value === "Thumbs Up") {
      document.execCommand("insertHTML", false, "&#128077");
    } else if (e.target.value === "Thumbs Down") {
      document.execCommand("insertHTML", false, "&#128078");
    }
  }
  
  const handleText = (value) => {
    document.execCommand("formatBlock", false, value);
  };

  function handleScale(e) {
    setScaleSize(e.target.value);
    if (e.target.value === "100%") {
      printDiv.current.style.transform = "scale(1,1)";
    } else if (e.target.value === "150%") {
      printDiv.current.style.transform = "scale(1.5,1)";
    } else if (e.target.value === "200%") {
      printDiv.current.style.transform = "scale(2,1)";
    } else if (e.target.value === "50%") {
      printDiv.current.style.transform = "scale(0.65,0.65)";
    } else if (e.target.value === "25%") {
      printDiv.current.style.transform = "scale(0.5,0.5)";
    } else if (e.target.value === "75%") {
      printDiv.current.style.transform = "scale(0.8,1)";
    }
  }

  const handlePrint = () => {
    let printContents = printDiv.current.innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  function handleImage(){
    fileInputRef.current.click();
  }

//   function handleFileUpload(event) {
//     if (event.target.files[0]) {
//       let imgUrl = URL.createObjectURL(event.target.files[0]);
//       let img = document.createElement("img");
//       console.log(imgUrl);

//       img.style.maxWidth = "50%";
//       img.style.maxHeight = "50%";

//       img.src = imgUrl;
//       document.execCommand("insertHTML", false, img.outerHTML);
// }
//   }

  return (
    <div>
      <div className={style.wrapper}>
        {icons.slice(0, 2).map((element, index) => (
          <button key={index} onClick={() => handleAction(element)}>
            {element.icon}
          </button>
        ))}
        <button onClick={handlePrint}>
          <AiOutlinePrinter />
        </button>
        {icons.slice(3, 5).map((element, index) => (
          <button key={index} onClick={() => handleAction(element)}>
            {element.icon}
          </button>
        ))}
        <div className={style.fontStyleBox}>
          <select
            style={{ width: "100%" }}
            className={style.fontStyle}
            id="fontStyle"
            onChange={handleScale}
          >
            <option>{scaleSize}</option>
            {zoomList.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>
        <select onChange={(e) => handleText(e.target.value)}>
          <option value="">Normal Text</option>
          {heading.map((x, i) => (
            <option value={x.value} key={i}>
              {x.icon}
            </option>
          ))}
        </select>
        <div className={style.fontStyleBox}></div>
        <div className={style.fontStyleBox}>
          <select
            className={style.fontStyle}
            id="fontStyle"
            onChange={handleFontStyle}
          >
            <option>{fontName}</option>
            {fontFamilyList.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>
        <div className={style.fontSize}>
          <label htmlFor="fontSize">
            <span>
              <ImFontSize className={style.icon} />
            </span>
          </label>
          <select id="fontSize" onChange={handleFontSize}>
            <option>3</option>
            {fontSizeList.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>
        {icons.slice(5, 9).map((element, index) => (
          <button key={index} onClick={() => handleAction(element)}>
            {element.icon}
          </button>
        ))}
        <button>
          <label htmlFor="color">
            <ImTextColor style={{ color: color }} />
          </label>
          <input
            className={style.input}
            id="color"
            type="color"
            value={color}
            onChange={handleFontColor}
          />
        </button>
        <div>
         <button style={{border: "1px solid"}}  onClick={handleImage} htmlFor="imageUpload">
            <RxImage  />
           </button>
           
        </div>
        <button>
          <label htmlFor="highlightColor">
            <AiOutlineHighlight
              style={{ zIndex: "1", color: highlightColor }}
            />
          </label>
          <input
            className={style.input}
            id="highlightColor"
            type="color"
            value={highlightColor}
            onChange={handleHighlightColor}
          />
          
        </button>
        {icons.slice(9).map((element, index) => (
          <button key={index} onClick={() => handleAction(element)}>
            {element.icon}
          </button>
        ))}
       
      </div>
    </div>
  );
}
