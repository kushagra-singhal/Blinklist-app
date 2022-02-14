// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useState } from "react";
// import Logo from "../../molecules/Logo";
// import Icon from "../../atoms/Icon";
// import Typography from "../../atoms/Typography";
// import { Box, Menu, MenuItem, Container, Tooltip } from "@mui/material";
// import {
//   Search,
//   KeyboardArrowUp,
//   KeyboardArrowDown,
// } from "@mui/icons-material";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "../../atoms/Button";
// // import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import SearchBox from "../../molecules/Search";

// import AvatarComp from "../../atoms/Avatar";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// import { useAuth0 } from "@auth0/auth0-react";

// const HeaderComponent = (props: any) => {
//   // const { logout } = useAuth0();

//   const {loginWithRedirect,isAuthenticated,logout} = useAuth0();

//   // const settings = ["Logout"];
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);
//   // const [searchState, setSearchState] = useState(false);

//   // const { loginWithRedirect } = useAuth0();
//   // const { logout } = useAuth0();

//   // const handleOpenNavMenu = (event: any) => {
//   //   setAnchorElNav(event.currentTarget);
//   // };
//   const handleOpenUserMenu = (event: any) => {
//     setAnchorElUser(event.currentTarget);
//   };
//   // const handleCloseNavMenu = () => {
//   //   setAnchorElNav(null);
//   // };
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   return (
//     <AppBar
//       data-testid='box'
//       position='fixed'
//       sx={{
//         color: "black",
//         backgroundColor: "white",
//         boxShadow: "none",
//         display: "flex",
//         justifyContent: "start",
//       }}
//     >
//       <Container>
//         <Toolbar
//           sx={{
//             height: "86px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <NavLink to='/' style={{ textDecoration: "none" }}>
//             <Logo {...props} />
//           </NavLink>
//           {/* {searchState ? (
//             <SearchBox
//               books={props.books}
//               searchStateHandler={() => {
//                 setSearchState(false);
//                 props.setBlankStatus(false);
//               }}
//               data-testid='search-box'
//             />
//           ) : ( */}
//             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//               <Button size='large' key={0} startIcon={<Search fontSize='large' style={{textDecoration: 'none', fontSize: '30px'}}/>} sx={{color:'#03314B', margin: '0px 5px 0px 40px'}}/>

//                 Button
//                 data-testid='search-state-button'
//                 onClick={() => {
//                   setSearchState(true);
//                   props.setBlankStatus(true);
//                 }}
//                 size='large'
//                 key={0}
//                 startIcon={
//                   <Search
//                     fontSize='large'
//                     style={{ textDecoration: "none", fontSize: "30px" }}
//                   />
//                 }
//                 sx={{ color: "#03314B", margin: "0px 5px 0px 40px" }}
//               />

//               <Button
//                 data-testid='ehandle-explore'
//                 onClick={props.handleExploreMenu}
//                 size='medium'
//                 key={1}
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   color: "#03314B",
//                   margin: "5px 10px",
//                   fontSize: "16px",
//                   fontWeight: "500",
//                 }}
//                 children='Explore'
//                 endIcon={
//                   !props.exploreOption ? (
//                     <KeyboardArrowUpIcon />
//                   ) : (
//                     <KeyboardArrowDownIcon />
//                   )
//                 }
//               />

//               <NavLink to='/' style={{ textDecoration: "none" }}>
//                 <Button
//                   size='medium'
//                   key={2}
//                   children='My Library'
//                   sx={{
//                     color: "#03314B",
//                     margin: "5px 10px",
//                     fontSize: "16px",
//                     fontWeight: "500",
//                   }}
//                 />
//               </NavLink>
//             </Box>
//           )}
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title='Open Settings'>
//               <Button
//                 onClick={handleOpenUserMenu}
//                 size='medium'
//                 key={1}
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   color: "black",
//                   margin: "5px 10px",
//                 }}
//                 label='Account'
//                 endIcon={
//                   anchorElUser ? <KeyboardArrowUp /> : <KeyboardArrowDown />
//                 }
//               />
//             </Tooltip>
//             {/* <Menu
//                  sx={{ mt: '45px' }}
//                  id="menu-appbar"
//                  anchorEl={anchorElUser}
//                  anchorOrigin={{
//                      vertical: 'top',
//                      horizontal: 'right',
//                  }}
//                  keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >

//               </Menu> */}

//             {/* <div style={{ alignItems: "center", display: "flex" }}>
//               <Button onClick={handleOpenUserMenu}>
//                 <AvatarComp />
//               </Button>
//               <Icon icon={<KeyboardArrowDownIcon />} />
//             </div> */}

//             <Menu
//               sx={{ mt: "45px" }}
//               id='menu-appbar'
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               <MenuItem key={5} sx={{ display: { md: "none" } }}>
//                 <NavLink
//                   to='/library'
//                   style={{ textDecoration: "none", color: "black" }}
//                 >
//                   <Typography textAlign='center'>My Library</Typography>
//                 </NavLink>
//               </MenuItem>

//               {settings.map((setting) => (
//                 <MenuItem key={setting}>
//                   <Typography
//                     textAlign='center'
//                     onClick={() => logout({ returnTo: window.location.origin })}
//                   >
//                     {setting}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default HeaderComponent;
// // function setAnchorElUser(arg0: null) {
// //   throw new Error("Function not implemented.");
// // }

/* eslint-disable @typescript-eslint/no-unused-vars */

import Logo from "../../molecules/Logo";
import Icon from "../../atoms/Icon";
import { Box, Menu, MenuItem, Container } from "@mui/material";
import { Search } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "../../atoms/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import AvatarComp from "../../atoms/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useAuth0 } from "@auth0/auth0-react";

const HeaderComponent = (props: any) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      data-testid='box'
      position='fixed'
      sx={{
        color: "black",
        backgroundColor: "white",
        boxShadow: "none",
        display: "flex",
        justifyContent: "start",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            height: "86px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <NavLink to='/' style={{ textDecoration: "none" }}>
            <Logo {...props} />
          </NavLink>
          {
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                size='large'
                key={0}
                startIcon={
                  <Search
                    fontSize='large'
                    style={{ textDecoration: "none", fontSize: "30px" }}
                  />
                }
                sx={{ color: "#03314B", margin: "0px 5px 0px 40px" }}
              />

              <Button
                data-testid='handle-explore'
                onClick={props.handleExploreMenu}
                size='medium'
                key={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#03314B",
                  margin: "5px 10px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                children='Explore'
                endIcon={
                  !props.exploreOption ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )
                }
              />

              <NavLink to='/' style={{ textDecoration: "none" }}>
                <Button
                  size='medium'
                  key={2}
                  children='My Library'
                  sx={{
                    color: "#03314B",
                    margin: "5px 10px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                />
              </NavLink>
            </Box>
          }
          <Box sx={{ flexGrow: 0.5 }}>
            <div style={{ alignItems: "center", display: "flex" }}>
              <Button onClick={handleOpenUserMenu}>
                {!isAuthenticated ? <AvatarComp /> : <AvatarComp name ={"K"} />}
              </Button>
              <Icon icon={<KeyboardArrowDownIcon />} />
            </div>

            <Menu
              sx={{ mt: "45px" }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!isAuthenticated ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    sx={{ color: "black" }}
                    onClick={() => {
                      return loginWithRedirect();
                    }}
                  >
                    {" "}
                    Login
                  </Button>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    sx={{ color: "black" }}
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    {" "}
                    Log Out
                  </Button>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderComponent;
