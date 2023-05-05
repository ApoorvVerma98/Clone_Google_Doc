import { BiUndo, BiRedo } from "react-icons/bi";
import { RxFontItalic } from "react-icons/rx";
import { AiOutlineStrikethrough, AiOutlinePrinter } from "react-icons/ai";
import {
  MdSpellcheck,
  MdImagesearchRoller,
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
} from "react-icons/md";
import { FaRemoveFormat } from "react-icons/fa";
import { RiSubscript, RiSuperscript, RiUnderline } from "react-icons/ri";
import { GoListOrdered, GoListUnordered } from "react-icons/go";
import {
  BsTextIndentLeft,
  BsTypeBold,
  BsTextIndentRight,
} from "react-icons/bs";

export const icons = [
  {
    icon: <BiUndo />,
    action: "undo",
  },
  {
    icon: <BiRedo />,
    action: "redo",
  },
  {
    icon: <AiOutlinePrinter />,
    action: "",
  },
  {
    icon: <MdSpellcheck />,
    action: "",
  },
  {
    icon: <MdImagesearchRoller />,
    action: "",
  },
  {
    icon: <BsTypeBold />,
    action: "bold",
  },
  {
    icon: <RxFontItalic />,
    action: "italic",
  },
  {
    icon: <RiUnderline />,
    action: "underline",
  },
  {
    icon: <AiOutlineStrikethrough />,
    action: "strikethrough",
  },
  {
    icon: <MdFormatAlignLeft />,
    action: "justifyLeft",
  },
  {
    icon: <MdFormatAlignCenter />,
    action: "justifyCenter",
  },
  {
    icon: <MdFormatAlignRight />,
    action: "justifyRight",
  },
  {
    icon: <MdFormatAlignJustify />,
    action: "justifyFull",
  },
  {
    icon: <GoListOrdered />,
    action: "insertOrderedList",
  },
  {
    icon: <GoListUnordered />,
    action: "insertUnorderedList",
  },
  {
    icon: <RiSuperscript />,
    action: "superscript",
  },

  {
    icon: <RiSubscript />,
    action: "subscript",
  },
  {
    icon: <BsTextIndentLeft />,
    action: "indent",
  },
  {
    icon: <BsTextIndentRight />,
    action: "outdent",
  },
  {
    icon: <FaRemoveFormat />,
    action: "removeFormat",
  },
];

export const heading = [
  {
    icon: "Heading 1",
    value: "H1",
  },
  {
    icon: "Heading 2",
    value: "H2",
  },
  {
    icon: "Heading 3",
    value: "H3",
  },
  {
    icon: "Heading 4",
    value: "H4",
  },
  {
    icon: "Heading 5",
    value: "H5",
  },
  {
    icon: "Heading 6",
    value: "H6",
  },
];

export const fontSizeList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const fontFamilyList = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "Roboto",
  "ui-monospace",
  "Montserrat",
  "emoji",
  "math",
  "fangsong",
  "Raleway",
];

export const headingList = ["H1", "H2", "H3", "H4", "H5", "H6"];

export const emojiList = [
  {
    icon: "Smile",
    value: "&#128514",
  },
  {
    icon: "Thumb-Up",
    value: "&#128514",
  },
  {
    icon: "Thumb-Down",
    value: "&#128514",
  },
  {
    icon: "Kiss",
    value: "&#128536",
  },
];

export const zoomList = ["25%", "50%", "75%", "100%", "150%", "200%"];
