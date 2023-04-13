import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';
import ExploreTwoToneIcon from '@mui/icons-material/ExploreTwoTone';
import { Link } from "react-router-dom";
import { ListItemIcon } from "@mui/material";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import './NavBar.css'

const drawerWidth = 240;
const navItems = [
	<Link to='/discover'><ExploreTwoToneIcon/><p>Discover</p></Link>,
	<Link to='/people'><PeopleAltTwoToneIcon/><p>People</p></Link>,
	<Link to='/learning'><ComputerTwoToneIcon/><p>Learn</p></Link>,
	<Link to='/job'><WorkTwoToneIcon/><p>Job</p></Link>,
	<Link to='/join'><Typography style={{
		fontWeight:'bold'
	}}variant="subtitle1">Join Now</Typography></Link>,
	// <Typography variant="subtitle1">Sign in</Typography>,
	<Link to='signin'><Button variant="contained">Sign In</Button></Link>
  ];
function NavBar() {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
		  <Typography variant="h6" sx={{ my: 2 }}>
			Logo
		  </Typography>
		  <Divider />
		  <List>
			{navItems.map((item, index) => (
			  <ListItem key={index} disablePadding>
				<ListItemButton component={Link} to={item.link} sx={{ textAlign: "center" }}>
				  {item.icon}
				  <Typography variant="subtitle1">{item.text}</Typography>
				</ListItemButton>
			  </ListItem>
			))}
		  </List>
		</Box>
	  );

	return (
		<Box sx={{ display: "flex"}}>
			<CssBaseline />
			<AppBar component="nav" sx={{ backgroundColor: "white",}}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						className="BrandName"
						variant="h6"
						component={Link}
                        to="/"
						sx={{
							flexGrow: 0,
							mr: "auto",
							display: { xs: "none", sm: "block" },
							color: "black",
							marginLeft:'.5em'
						}}
					>
						<LibraryMusicIcon/>
						JC Networks
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: "black" }}>
								{item}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Box component="main" sx={{ p: 3 }}>
				<Toolbar />
			</Box>
		</Box>
	);
}

export default NavBar;
