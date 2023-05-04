import { useState } from "react";
import { AiOutlinePrinter, AiOutlineFontSize  } from "react-icons/ai";
import { RiMarkPenFill  } from "react-icons/ri";
import { FiLink2 } from "react-icons/fi";
import { ImTextColor } from "react-icons/im";
import {icons,fontSizeList,fontFamilyList,emojiList,zoomList,} from "../component/Icons";
import style from "./ToolBar.module.css";
import { RxImage } from "react-icons/rx";

export default function ToolBar ({ printDiv }) {
  const [emoji, setEmoji] = useState("&#128514;");
  const [scaleSize, setScaleSize] = useState("100%");
  const [fontSize, setFontSize] = useState("Font Size");
  const [fontName, setFontName] = useState("Font Style");
  const [color, setColor] = useState("#000000");
  const [higlightColor, setHiglightColor] = useState("#000000");
  const [link, setLink] = useState("");
  const [show, setShow] = useState(false);

  function handleAction(element) {
    if (element.action === 'bold') {
      document.execCommand('bold');
    } else if (element.action === 'italic') {
      document.execCommand('italic');
    } else if (element.action === 'underline') {
      document.execCommand('underline');
    }
  }
  
  function handleFontColor(e) {
    setColor(e.target.value);
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.color = e.target.value;
      range.surroundContents(span);
    }
  }
  
  function handleFontSize(e) {
    setFontSize(e.target.value);
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.fontSize = e.target.value;
      range.surroundContents(span);
    }
  }
  
  function handleHighlightColor(e) {
    setHiglightColor(e.target.value);
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.backgroundColor = e.target.value;
      range.surroundContents(span);
    }
  }
  
  function handleFontStyle(e) {
    setFontName(e.target.value);
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.fontFamily = e.target.value;
      range.surroundContents(span);
    }
  }
  
  function handleEmoji(e) {
    setEmoji(e.target.value);
  
    let emojiHTML;
    if (e.target.value === 'Smile') {
      emojiHTML = '&#128514;';
    } else if (e.target.value === 'Thumbs Up') {
      emojiHTML = '&#128077;';
    } else if (e.target.value === 'Thumbs Down') {
      emojiHTML = '&#128078;';
    }
  
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.innerHTML = emojiHTML;
      range.surroundContents(span);
    }
  }
  
  function handleScale(e) {
    setScaleSize(e.target.value);
    const scale = Number(e.target.value.replace('%', '')) / 100;
    printDiv.current.style.transform = `scale(${scale}, ${scale})`;
  }
  
  function handleOpen(value) {
    setShow(!show);
    if (value === 'link') {
      const link = prompt('Enter the URL:');
      if (link) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const linkNode = document.createElement('a');
          linkNode.href = link;
          linkNode.textContent = selection.toString();
          range.deleteContents();
          range.insertNode(linkNode);
        }
      }
    } else {
      const image = prompt('Enter the image URL:');
      if (image) {
        const imgNode = document.createElement('img');
        imgNode.src = image;
        imgNode.alt = 'Image';
        printDiv.current.appendChild(imgNode);
      }
    }
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
              <AiOutlineFontSize className={style.icon} />
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
          <label htmlFor="highlighColor">
            <RiMarkPenFill style={{ zIndex: "1", color: higlightColor }} />
          </label>
          <input
            className={style.input}
            id="highlighColor"
            type="color"
            value={higlightColor}
            onChange={handleHighlightColor}
          />
        </button>

        <button onClick={() => handleOpen("link")}>
          <label htmlFor="link">
            <FiLink2 />
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
