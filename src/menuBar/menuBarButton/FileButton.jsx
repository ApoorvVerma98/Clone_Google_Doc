import  React from 'react';
import {useState,useEffect,useRef} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ArticleIcon from '@mui/icons-material/Article';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DownloadIcon from '@mui/icons-material/Download';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import HistoryIcon from '@mui/icons-material/History';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';
import PrintIcon from '@mui/icons-material/Print';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function File() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef =useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open]);

  return (
    <div>
      <Button style={{color:"black", fontWeight:600}}  onClick={handleClickOpen('paper')}>File</Button>
    
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{width:"40%",marginTop:"3rem",height:"95%"}}
      >
       
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
   <p className={StyleSheet.main}> <ArticleIcon style={{marginBottom:"-5px" }}/>  <span style={{marginLeft:"15px", marginTop:"4px" ,color:"black", }}>  New </span> 
     <ArrowRightIcon sx={{marginLeft:"12rem"}}/> </p>
 <p>  <FolderOpenIcon style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"8px" ,color:"black", }} >Open </span>  <span style={{marginLeft:"10rem" }} >Ctrl+O </span></p>
 <p>  < ContentCopyIcon style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"8px" ,color:"black", }} >Make a copy</span> </p>
           <hr/>
           <p>  < PersonAddAltIcon style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"8px" ,color:"black" }} >Share</span>  <ArrowRightIcon sx={{marginLeft:"12rem"}}/> </p>
           <p>  < MailOutlineIcon style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"8px" ,color:"black", }} >Email</span>  <ArrowRightIcon sx={{marginLeft:"12rem"}}/> </p>
           <p>  < DownloadIcon  style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" ,color:"black", }} >Download</span>  <ArrowRightIcon sx={{marginLeft:"10rem"}}/> </p>
           <hr/>
           <p>  < DriveFileRenameOutlineIcon  style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" ,color:"black", }} >Rename</span>   </p>
           <p>  < DriveFileMoveIcon  style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" ,color:"black", }} >Move</span>   </p>
           <p>  < AddToDriveIcon  style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" ,color:"black", }} >Add Shortcut to Drive</span>   </p>
           <p>  < DeleteOutlineIcon style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" , color:"black" }} >Move to trash</span>   </p>
          {/* <p>fsdfsdf</p> */}
          {/* <p>fsdfsdf</p> */}

           <hr />
           <p>  <  HistoryIcon style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" , color:"black" }} >Version History</span>   </p>
           <p>  < OfflinePinIcon   style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" ,color:"black", }} >Make available offline</span>   </p>
         
           <hr/>
           <p>  < InfoIcon  style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" ,color:"black", }} >Details</span>   </p>
           <p>  < LanguageIcon  style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" ,color:"black", }} >Language</span>   </p>
           <p>  < DescriptionIcon style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" ,color:"black", }} >Page Setup</span>   </p>
           <p>  < PrintIcon style={{marginBottom:"-5px" }}/>    <span style={{marginLeft:"7px" ,color:"black", }} >Print</span> <span style={{marginLeft:"10rem" }} >Ctrl+P </span>  </p>
           
          </DialogContentText>
        </DialogContent>
      
      </Dialog>
    </div>
  );
}
