import { useState } from "react";
import { AiOutlinePrinter, AiOutlineHighlight } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import { ImFontSize, ImTextColor } from "react-icons/im";
import {
  icons,
  fontSizeList,
  fontFamilyList,
  emojiList,
  zoomList,
  heading,
} from "../component/ToolBar-Icons";
import style from "./EditorBar.module.css";
import { RxImage } from "react-icons/rx";

export default function ToolBar({ printDiv }) {
  const [emoji, setEmoji] = useState("&#128514;");
  const [scaleSize, setScaleSize] = useState("100%");
  const [fontSize, setFontSize] = useState("Font Size");
  const [fontName, setFontName] = useState("Font Style");
  const [color, setColor] = useState("#000000");
  const [highlightColor, setHighlightColor] = useState("#000000");
  const [link, setLink] = useState("");
  const [show, setShow] = useState(false);

  function handleAction(element) {
    document.execCommand(`${element.action}`);
  }
  function handleFontColor(e) {
    setColor(e.target.value);
    console.log(e.target.value);
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
    console.log(e.target.value);
  }
  function handleEmoji(e) {
    setEmoji(e.target.value);

    if (e.target.value === "Smile") {
      document.execCommand("insertHTML", false, "&#128514");
    } else if (e.target.value === "Thumbs Up") {
      document.execCommand("insertHTML", false, "&#128077");
    } else if (e.target.value === "Thumbs Down") {
      document.execCommand("insertHTML", false, "&#128078");
    }
    console.log(e.target.value);
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

  function handleOpen(value) {
    setShow(!show ? true : false);
    if (value === "link") {
      document.execCommand("createLink", false, link);
    } else {
      document.execCommand("insertImage", false, link);
    }
    setLink("");
  }

  const handlePrint = () => {
    let printContents = printDiv.current.innerHTML;
    console.log(printContents);
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

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
        <div className={style.fontStyleBox}>
          <select onChange={handleEmoji}>
            <option>Emoji</option>
            {emojiList.map((x, i) => (
              <option key={i}>{x.icon}</option>
            ))}
          </select>
        </div>
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
        <button onClick={() => handleOpen("link")}>
          <label htmlFor="link">
            <BsLink />
          </label>
        </button>
        <button onClick={() => handleOpen("insertImage")}>
          <label htmlFor="link">
            <RxImage />
          </label>
        </button>
        {icons.slice(9).map((element, index) => (
          <button key={index} onClick={() => handleAction(element)}>
            {element.icon}
          </button>
        ))}
      </div>
      {show ? (
        <div className={style.linkBox}>
          <h4>Paste your Link Here....</h4>
          <input
            id="link"
            value={link}
            type="url"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
