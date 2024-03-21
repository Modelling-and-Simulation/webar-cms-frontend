import React from "react";
import '../../css/Staff.css'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	palette: {
	  primary: {
		main: "#3D2C8D" // Change primary color to desired color
	  },
	  secondary: {
		main: "#ff5722" // Change secondary color to desired color
	  }
	},
});


const StaffEdit = () => {

    return (
		<ThemeProvider theme={theme}>
        	<div className="staff-pg">
				<AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
					<Toolbar>
                        <img src="./img/logo.png" alt="logo" className="staff-logo"/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, justifyContent: 'center', alignContent:'center' }}>
                            {/* Web AR! */}
                        </Typography>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
				</AppBar>
        	    <div className="edit-preview-img-container">
                    <div className="edit-preview-img">
                        <img className="staff-img" src="./img/house.jpg" alt="" />
                    </div>
                    <div className="img-name">
                        <p>House</p>
                    </div>
                </div>
                <div className="staff-edit-content">
                    <div className="edit-details">
                        <div className="position">
                            <p>Position : </p>
                        </div>
                        <div className="detail-box">
                            <p>X : </p>
                            <input className="edit-input-box" type="number" name="" id="" />
                            <p>Y : </p>
                            <input className="edit-input-box" type="number" name="" id="" />
                            <p>Z : </p>
                            <input className="edit-input-box" type="number" name="" id="" />
                        </div><br />
                    </div>
                    <div className="edit-details">
                        <div className="position">
                            <p>Scale : </p>
                        </div>
                        <div className="detail-box">
                            <p>X : </p>
                            <input className="edit-input-box" type="number" name="" id="" />
                            <p>Y : </p>
                            <input className="edit-input-box" type="number" name="" id="" />
                            <p>Z : </p>
                            <input className="edit-input-box" type="number" name="" id="" />
                        </div><br />
                    </div>
                    <div className="edit-details">
                        <div className="position">
                            <p>Rotation : </p>
                        </div>
                        <div className="detail-box">
                            <p>X : </p>
                            <input className="edit-input-box" type="number" name="" id="" />
                            <p>Y : </p>
                            <input className="edit-input-box" type="number" name="" id="" />
                            <p>Z : </p>
                            <input className="edit-input-box" type="number" name="" id="" />
                        </div><br />
                    </div>
                </div>
                
            </div>
        	{/* </div> */}
		</ThemeProvider>
    );
};

export default StaffEdit;
