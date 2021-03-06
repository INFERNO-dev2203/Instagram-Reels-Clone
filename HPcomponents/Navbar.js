import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from "next/image";
import insta from "../pages/instalogo.jpg"
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import { AuthContext } from "../context/auth";
import {useRouter} from "next/router";

const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = ({userData}) => {

  const{logout} = React.useContext(AuthContext)
  const{toprofile} = React.useContext(AuthContext)
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async() => {
      await logout();
        router.push('/login')
  }
  const handleProfile = async() => {
    router.push('/profile')
}


  

  return (
  <AppBar position="static" className="navbar">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Image sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }} src={insta}/>
         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}/>
          <Box sx={{ flexGrow: 0 }} className="nav-icons-container">
           <HomeIcon fontSize="large" className="nav-icons" />
           <ExploreIcon fontSize="large" className="nav-icons"/>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft:"10px" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ><MenuItem onClick={() =>
              {
                  handleProfile()
                  handleCloseUserMenu()
              }}>
                  <Typography textAlign="center">
                  Profile
                  </Typography>
                </MenuItem>
              <MenuItem onClick={() =>
              {
                  handleLogout()
                  handleCloseUserMenu()
              }}>
                  <Typography textAlign="center">
                  Logout
                  </Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;