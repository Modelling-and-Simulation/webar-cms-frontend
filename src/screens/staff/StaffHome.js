import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import '../../css/Staff.css'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";


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


const StaffHome = () => {
    const [value, setValue] = React.useState(0);

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
        	    <Paper >
        	        <Tabs
        	            value={value}
        	            textColor="primary"
        	            indicatorColor="primary"
        	            onChange={(event, newValue) => {
        	                setValue(newValue);
        	            }}
        	        >
        	            <Tab label="Requested" />
        	            <Tab label="Pending" />
        	            <Tab label="Done!" />
        	        </Tabs>
        	        {value === 0 && (
						<div className='outer-staff-container'>
        	            	<div className='preview-container'>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/bugatti.jpg" alt="" />
        	            	        </div>
        	            	        <p>bugatti</p>
        	            	    </div>
        	            	    <div className='link-img-container'>
        	            	        <img className='link-img' src="./img/link.png" alt="" />
        	            	    </div>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/livingroom.png" alt="" />
        	            	        </div>
        	            	        <p>living room</p>
        	            	    </div>
        	            	    <div className='staff-btn-section'>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/uploadcontent"> 
                    				    <button className='btn-2'>View</button> 
                    				</Link>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/staffedit"> 
                    				    <button className='btn-2'>Change</button> 
                    				</Link>
        	            	    </div>
								<div className="user-details">
									<p>Username : Johnny85</p>
									<p>TargetURL : hht ffekfbe</p>
									<p>Requested Date : 12/3/2024</p>
								</div>
        	            	</div>
							<div className='preview-container'>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/bugatti.jpg" alt="" />
        	            	        </div>
        	            	        <p>bugatti</p>
        	            	    </div>
        	            	    <div className='link-img-container'>
        	            	        <img className='link-img' src="./img/link.png" alt="" />
        	            	    </div>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/livingroom.png" alt="" />
        	            	        </div>
        	            	        <p>living room</p>
        	            	    </div>
        	            	    <div className='staff-btn-section'>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/uploadcontent"> 
                    				    <button className='btn-2'>View</button> 
                    				</Link>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/staffedit"> 
                    				    <button className='btn-2'>Change</button> 
                    				</Link>
        	            	    </div>
								<div className="user-details">
									<p>Username : Johnny85</p>
									<p>TargetURL : hht ffekfbe</p>
									<p>Requested Date : 12/3/2024</p>
								</div>
        	            	</div>
							<div className='preview-container'>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/bugatti.jpg" alt="" />
        	            	        </div>
        	            	        <p>bugatti</p>
        	            	    </div>
        	            	    <div className='link-img-container'>
        	            	        <img className='link-img' src="./img/link.png" alt="" />
        	            	    </div>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/livingroom.png" alt="" />
        	            	        </div>
        	            	        <p>living room</p>
        	            	    </div>
        	            	    <div className='staff-btn-section'>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/uploadcontent"> 
                    				    <button className='btn-2'>View</button> 
                    				</Link>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/staffedit"> 
                    				    <button className='btn-2'>Change</button> 
                    				</Link>
        	            	    </div>
								<div className="user-details">
									<p>Username : Johnny85</p>
									<p>TargetURL : hht ffekfbe</p>
									<p>Requested Date : 12/3/2024</p>
								</div>
        	            	</div>
						</div>
        	        )}
					{value === 1 && (
						<div className='outer-staff-container'>
        	            	<div className='preview-container'>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/bugatti.jpg" alt="" />
        	            	        </div>
        	            	        <p>bugatti</p>
        	            	    </div>
        	            	    <div className='link-img-container'>
        	            	        <img className='link-img' src="./img/link.png" alt="" />
        	            	    </div>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/livingroom.png" alt="" />
        	            	        </div>
        	            	        <p>living room</p>
        	            	    </div>
        	            	    <div className='staff-btn-section'>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/uploadcontent"> 
                    				    <button className='btn-2'>View</button> 
                    				</Link>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/staffedit"> 
                    				    <button className='btn-2'>Change</button> 
                    				</Link>
        	            	    </div>
								<div className="user-details">
									<p>Username : Johnny85</p>
									<p>TargetURL : hht ffekfbe</p>
									<p>Requested Date : 12/3/2024</p>
								</div>
        	            	</div>
							<div className='preview-container'>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/bugatti.jpg" alt="" />
        	            	        </div>
        	            	        <p>bugatti</p>
        	            	    </div>
        	            	    <div className='link-img-container'>
        	            	        <img className='link-img' src="./img/link.png" alt="" />
        	            	    </div>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/livingroom.png" alt="" />
        	            	        </div>
        	            	        <p>living room</p>
        	            	    </div>
        	            	    <div className='staff-btn-section'>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/uploadcontent"> 
                    				    <button className='btn-2'>View</button> 
                    				</Link>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/staffedit"> 
                    				    <button className='btn-2'>Change</button> 
                    				</Link>
        	            	    </div>
								<div className="user-details">
									<p>Username : Johnny85</p>
									<p>TargetURL : hht ffekfbe</p>
									<p>Requested Date : 12/3/2024</p>
								</div>
        	            	</div>
						</div>
        	        )}
					{value === 2 && (
						<div className='outer-staff-container'>
        	            	<div className='preview-container'>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/bugatti.jpg" alt="" />
        	            	        </div>
        	            	        <p>bugatti</p>
        	            	    </div>
        	            	    <div className='link-img-container'>
        	            	        <img className='link-img' src="./img/link.png" alt="" />
        	            	    </div>
        	            	    <div className='url-preview-img-outer'>
        	            	        <div className='url-preview-img-container'>
        	            	            <img className='url-preview-img' src="./img/livingroom.png" alt="" />
        	            	        </div>
        	            	        <p>living room</p>
        	            	    </div>
        	            	    <div className='staff-btn-section'>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/uploadcontent"> 
                    				    <button className='btn-2'>View</button> 
                    				</Link>
									<Link style={{textDecoration: 'none', color: 'white'}} to="/staffedit"> 
                    				    <button className='btn-2'>Change</button> 
                    				</Link>
        	            	    </div>
								<div className="user-details">
									<p>Username : Johnny85</p>
									<p>TargetURL : hht ffekfbe</p>
									<p>Requested Date : 12/3/2024</p>
								</div>
        	            	</div>
						</div>
        	        )}
        	    </Paper>
        	</div>
		</ThemeProvider>
    );
};

export default StaffHome;
