// import React, { useState, useRef } from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
// import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
// import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
// import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import SettingsIcon from '@mui/icons-material/Settings';
// import excel from "../logo/icons8-excel-48.png";
// import { Button } from '@mui/material';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import DataTable from "../Table/DataTable"
// const LeftSide = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

// const Table = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginTop: '20px',
// };

// // Styles for each table item
// const tableItem = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   color: '#696865',
//   padding: '30px',
//   width: '100%',
//   textAlign: 'center',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s',
// };

// // Styles for upload section
// const uploadCv = {
//   fontFamily: 'sans-serif',
//   fontWeight: 'bold',
//   padding: '5px 0px 0px 40px',
//   fontSize: '25px',
// };

// // Styles for selected item
// const selectedStyle = {
//   backgroundColor: '#B8DFFF',
//   color: '#1182f2',
//   boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
// };

// // Styles for upload area
// const uploadAreaContainer = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh', // Adjust the height to your preference
// };

// const uploadArea = {
//   border: '2px dashed #ccc',
//   borderRadius: '8px',
//   padding: '20px',
//   textAlign: 'center',
//   cursor: 'pointer',
//   width: "50%",
// };

// const inputStyle = {
//   display: 'none',
// };

// const uploadButton = {
//   position:"relative",
//   bottom:"280px",
//   left:"23%",
//   width:"54%",
//   backgroundColor: '#1182f2',
//   color: '#fff',
//   padding: '10px 20px',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   marginTop: '10px',
// };

// const Page = () => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//   };

//   const fileInputRef = useRef(null);

//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     const newSelectedFile = e.target.files[0];
//     setSelectedFile(newSelectedFile);
//   };

//   const handleRemoveFile = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.value = null;
//     }
//     setSelectedFile(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container columns={16}>
//         <Grid item xs={2.5}>
//           <div style={LeftSide}>
//             <div>LOGO</div>
//             <div style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Base</div>
//           </div>
//           <div style={Table}>
//             <div
//               style={{ ...tableItem, ...(selectedItem === 'Dashboard' && selectedStyle) }}
//               onClick={() => handleItemClick('Dashboard')}
//             >
//               <span>
//                 <GridViewRoundedIcon />
//               </span>
//               Dashboard
//             </div>
//             <div
//               style={{ ...tableItem, ...(selectedItem === 'Upload' && selectedStyle) }}
//               onClick={() => handleItemClick('Upload')}
//             >
//               <span>
//                 <InsertChartRoundedIcon />
//               </span>
//               Upload
//             </div>
//             <div
//               style={{ ...tableItem, ...(selectedItem === 'Invoice' && selectedStyle) }}
//               onClick={() => handleItemClick('Invoice')}
//             >
//               <span>
//                 <TableChartRoundedIcon />
//               </span>
//               Invoice
//             </div>
//             <div
//               style={{ ...tableItem, ...(selectedItem === 'Schedule' && selectedStyle) }}
//               onClick={() => handleItemClick('Schedule')}
//             >
//               <span>
//                 <EqualizerRoundedIcon />
//               </span>
//               Schedule
//             </div>
//             <div
//               style={{ ...tableItem, ...(selectedItem === 'Calendar' && selectedStyle) }}
//               onClick={() => handleItemClick('Calendar')}
//             >
//               <span>
//                 <CalendarMonthIcon />
//               </span>
//               Calendar
//             </div>
//             <div
//               style={{ ...tableItem, ...(selectedItem === 'Notification' && selectedStyle) }}
//               onClick={() => handleItemClick('Notification')}
//             >
//               <span>
//                 <NotificationsIcon />
//               </span>
//               Notification
//             </div>
//             <div
//               style={{ ...tableItem, ...(selectedItem === 'Settings' && selectedStyle) }}
//               onClick={() => handleItemClick('Settings')}
//             >
//               <span>
//                 <SettingsIcon />
//               </span>
//               Settings
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={13.5} sx={{ backgroundColor: '#f5f7f6' }}>
//           <div style={uploadCv}>Upload CSV</div>
//           <div style={uploadAreaContainer}>
//             <div style={uploadArea} onClick={handleUploadClick}>
//               <input
//                 type="file"
//                 style={inputStyle}
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//               />
//               {selectedFile ? (
//                 <div>
//                   <p>{selectedFile.name}</p>
//                   <div onClick={handleRemoveFile} style={{ color: "#1182f2" }}>Remove</div>
//                 </div>
//               ) : (
//                 <>
//                   <p><img src={excel} alt="Excel Logo" /></p>
//                   <p>Drag & Drop your Excel file here or <span style={{ color: "#1182f2" }}>browse</span></p>
//                 </>
//               )}
//             </div>
//           </div>
//           <Button style={uploadButton} onClick={handleUploadClick}>
//             <FileUploadIcon />Upload
//           </Button>
//         </Grid>
//       </Grid>
//       {/* <DataTable /> */}
//       {selectedFile && selectedItem === 'Upload' && <DataTable />}
//     </Box>
//   );
// };

// export default Page;
import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import excel from "../logo/icons8-excel-48.png";
import { Button } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DataTable from "../Table/DataTable";

// Styles
const LeftSide = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Table = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
};

const tableItem = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#696865',
  padding: '30px',
  width: '100%',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const uploadCv = {
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  padding: '5px 0px 0px 40px',
  fontSize: '25px',
};

const selectedStyle = {
  backgroundColor: '#B8DFFF',
  color: '#1182f2',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
};

const uploadAreaContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const uploadArea = {
  border: '2px dashed #ccc',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  width: "50%",
};

const inputStyle = {
  display: 'none',
};

const uploadButton = {
  position: "relative",
  bottom: "280px",
  left: "23%",
  width: "54%",
  backgroundColor: '#1182f2',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const Page = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const newSelectedFile = e.target.files[0];
    setSelectedFile(newSelectedFile);
  };

  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    setSelectedFile(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={16}>
        {/* Left Side */}
        <Grid item xs={2.5}>
          <div style={LeftSide}>
            <div>LOGO</div>
            <div style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Base</div>
          </div>
          {/* Table */}
          <div style={Table}>
            <div
              style={{ ...tableItem, ...(selectedItem === 'Dashboard' && selectedStyle) }}
              onClick={() => handleItemClick('Dashboard')}
            >
              <span>
                <GridViewRoundedIcon />
              </span>
              Dashboard
            </div>
            <div
              style={{ ...tableItem, ...(selectedItem === 'Upload' && selectedStyle) }}
              onClick={() => handleItemClick('Upload')}
            >
              <span>
                <InsertChartRoundedIcon />
              </span>
              Upload
            </div>
            <div
              style={{ ...tableItem, ...(selectedItem === 'Invoice' && selectedStyle) }}
              onClick={() => handleItemClick('Invoice')}
            >
              <span>
                <TableChartRoundedIcon />
              </span>
              Invoice
            </div>
            <div
              style={{ ...tableItem, ...(selectedItem === 'Schedule' && selectedStyle) }}
              onClick={() => handleItemClick('Schedule')}
            >
              <span>
                <EqualizerRoundedIcon />
              </span>
              Schedule
            </div>
            <div
              style={{ ...tableItem, ...(selectedItem === 'Calendar' && selectedStyle) }}
              onClick={() => handleItemClick('Calendar')}
            >
              <span>
                <CalendarMonthIcon />
              </span>
              Calendar
            </div>
            <div
              style={{ ...tableItem, ...(selectedItem === 'Notification' && selectedStyle) }}
              onClick={() => handleItemClick('Notification')}
            >
              <span>
                <NotificationsIcon />
              </span>
              Notification
            </div>
            <div
              style={{ ...tableItem, ...(selectedItem === 'Settings' && selectedStyle) }}
              onClick={() => handleItemClick('Settings')}
            >
              <span>
                <SettingsIcon />
              </span>
              Settings
            </div>
          </div>
        </Grid>

        {/* Right Side */}
        <Grid item xs={13.5} sx={{ backgroundColor: '#f5f7f6' }}>
          {/* Upload CSV Section */}
          <div style={uploadCv}>Upload CSV</div>
          <div style={uploadAreaContainer}>
            <div style={uploadArea} onClick={handleUploadClick}>
              {/* File Input */}
              <input
                type="file"
                style={inputStyle}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              {/* Display File Details or Upload Area */}
              {selectedFile ? (
                <div>
                  <p>{selectedFile.name}</p>
                  <div onClick={handleRemoveFile} style={{ color: "#1182f2" }}>Remove</div>
                </div>
              ) : (
                <>
                  <p><img src={excel} alt="Excel Logo" /></p>
                  <p>Drag & Drop your Excel file here or <span style={{ color: "#1182f2" }}>browse</span></p>
                </>
              )}
            </div>
          </div>

          {/* Upload Button */}
          <Button style={uploadButton} onClick={handleUploadClick}>
            <FileUploadIcon />Upload
          </Button>

          {/* Conditionally render the DataTable component */}
          {selectedFile ? <DataTable /> : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
