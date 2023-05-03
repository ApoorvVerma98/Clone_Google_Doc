import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
import { AiOutlineStrikethrough, AiFillPrinter } from "react-icons/ai";
import {MdSpellcheck,MdImagesearchRoller,MdFormatAlignCenter,MdFormatAlignJustify,
MdFormatAlignLeft,MdFormatAlignRight,MdRedo,MdUndo} from "react-icons/md";
import { FaRemoveFormat } from "react-icons/fa";
import { RiSubscript, RiSuperscript } from "react-icons/ri";
import { GoListOrdered, GoListUnordered } from "react-icons/go";
import { BsTextIndentLeft, BsTextIndentRight } from "react-icons/bs";

export const icons = [
  {
    icon: <MdUndo />,
    action: "undo"
  },
  {
    icon: <MdRedo />,
    action: "redo"
  },
  {
    icon: <AiFillPrinter />,
    action: ""
  },
  {
    icon: <MdSpellcheck />,
    action: ""
  },
  {
    icon: <MdImagesearchRoller />,
    action: ""
  },
  {
    icon: <BiBold />,
    action: "bold"
  },
  {
    icon: <BiItalic />,
    action: "italic"
  },
  {
    icon: <BiUnderline />,
    action: "underline"
  },
  {
    icon: <AiOutlineStrikethrough />,
    action: "strikethrough"
  },
  {
    icon: <MdFormatAlignLeft />,
    action: "justifyLeft"
  },
  {
    icon: <MdFormatAlignCenter />,
    action: "justifyCenter"
  },
  {
    icon: <MdFormatAlignRight />,
    action: "justifyRight"
  },
  {
    icon: <MdFormatAlignJustify />,
    action: "justifyFull"
  },
  {
    icon: <GoListOrdered />,
    action: "insertOrderedList"
  },
  {
    icon: <GoListUnordered />,
    action: "insertUnorderedList"
  },
  {
    icon: <RiSuperscript />,
    action: "superscript"
  },
  
  {
    icon: <RiSubscript />,
    action: "subscript"
  },
  {
    icon: <BsTextIndentLeft />,
    action: "indent"
  },
  {
    icon: <BsTextIndentRight />,
    action: "outdent"
  },
  {
    icon: <FaRemoveFormat />,
    action: "removeFormat"
  }
];

export const fontSizeList = [1, 2, 3, 4, 5, 6, 7];

export const fontFamilyList = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "ui-sans-serif",
  "ui-monospace",
  "ui-rounded",
  "emoji",
  "math",
  "fangsong"
];

export const headingList = ["H1", "H2", "H3", "H4", "H5", "H6"];

export const emojiList = [
  {
    icon : "Smile",
    value : "&#128514",
  } ,
  {
    icon : "Thumb-Up",
    value : "&#128514",
  } ,
  {
    icon : "Thumb-Down",
    value : "&#128514",
  } ,
  {
    icon : "Kiss",
    value : "&#128536",
  } ,
];

export const zoomList = ["25%","50%","75%", "100%", "150%", "200%"]