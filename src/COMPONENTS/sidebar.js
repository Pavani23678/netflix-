// import React from 'react';
// import { Drawer, List, ListItem, Button} from '@mui/material';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const SidebarWithButton = ({mobileOpen,handleDrawerToggle}) => {
//   return (
//     <Drawer variant="temporary"
//     open={mobileOpen}
//     onClose={handleDrawerToggle}
//     ModalProps={{
//       keepMounted:true,
//     }}
//      sx={{  '& .MuiDrawer-paper': {
//         width: 190,
//         backgroundColor: 'black',color:'white',marginTop:8}}}>
//       <List>
//         <ListItem>
//           <Button variant="contained" sx={{background:'orange',color:'white',width:"95%",fontSize:'16px'}}>Categories</Button>
//         </ListItem>
//         <ListItem>
//         <i className="fas fa-clapperboard" style={{ fontSize: '13px' }}></i>


//           <Button sx={{color:'white'}} >Popular</Button>
//         </ListItem>
//         <ListItem>
//         <i class="fa-solid fa-star"style={{fontSize:'13px'}}></i>

//         <Button  sx={{color:'white'}} >Top Rated</Button>

//         </ListItem>
//         <ListItem>
//         <i className="fas fa-sun" style={{ fontSize: '13px'}}></i>
//         <Button  sx={{color:'white'}}>Upcoming</Button>
//         </ListItem>
//         <ListItem>
//           <Button variant="contained" sx={{background:'orange',width:"95%",fontSize:'16px'}}>Genres</Button>
//         </ListItem>
//         <ListItem>
//         <i className="fas fa-film" style={{ fontSize: '13px'}}></i>   
//                  <Button  sx={{color:'white'}}>Action</Button>
//         </ListItem>
//         <ListItem>
//         <i className="fas fa-film" style={{ fontSize: '13px'}}></i>   
//             <Button  sx={{color:'white'}}>Adventure</Button>
//         </ListItem>
//         <ListItem>
//         <i className="fas fa-bug" style={{ fontSize: '13px' }}></i>
//         <Button  sx={{color:'white'}}>Animation</Button>
//         </ListItem>
//         <ListItem>
//         <i className="fas fa-laugh" style={{ fontSize: '13px'}}></i>

//             <Button  sx={{color:'white'}}>Comedy</Button>
//         </ListItem>
//         </List>
//     </Drawer>
//   );
// };
// export default SidebarWithButton;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
// } from "@mui/material";
// import MovieIcon from "@mui/icons-material/Movie";
// import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
// import TheatersIcon from "@mui/icons-material/Theaters";
// import WhatshotIcon from "@mui/icons-material/Whatshot";

// const drawerWidth = 240;

// function ResponsiveDrawer() {
//   const navigate = useNavigate();

//   const categories = [
//     { name: "Popular", icon: <WhatshotIcon />, path: "/" },
//     { name: "Action", icon: <MovieIcon />, path: "/action" },
//     { name: "Adventure", icon: <LocalMoviesIcon />, path: "/adventure" },
//     { name: "Comedy", icon: <TheatersIcon />, path: "/comedy" },
//   ];

//   const drawer = (
//     <div>
//       <Toolbar />
//       <List>
//         {categories.map((category) => (
//           <ListItem key={category.name} disablePadding>
//             <ListItemButton onClick={() => navigate(category.path)}>
//               <ListItemIcon>{category.icon}</ListItemIcon>
//               <ListItemText primary={category.name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         display: { xs: "none", sm: "block" },
//         "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
//       }}
//       open
//     >
//       {drawer}
//     </Drawer>
//   );
// }

// export default ResponsiveDrawer;
// import React, { useState, useEffect } from 'react';
// import { Drawer, Button } from '@mui/material';

// const SidebarWithButton = ({ mobileOpen, handleDrawerToggle }) => {
//   useEffect(() => {
//     console.log('SidebarWithButton rendered, mobileOpen:', mobileOpen);
//   }, [mobileOpen]);

//   return (
//     <Drawer
//       variant="temporary"
//       open={mobileOpen}
//       onClose={handleDrawerToggle}
//       ModalProps={{
//         keepMounted: true, // Better open performance on mobile.
//       }}
//       sx={{
//         '& .MuiDrawer-paper': {
//           width: 220,
//           backgroundColor: 'black',
//           color: 'white',
//         },
//       }}
//     >
//       <Button>Test Button</Button>
//     </Drawer>
//   );
// };

// const App = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     console.log('Drawer toggle clicked');
//     setMobileOpen(prev => !prev);
//   };

//   useEffect(() => {
//     console.log('App rendered, mobileOpen:', mobileOpen);
//   }, [mobileOpen]);

//   return (
//     <div>
//       <Button onClick={handleDrawerToggle}>Toggle Sidebar</Button>
//       <SidebarWithButton
//         mobileOpen={mobileOpen}
//         handleDrawerToggle={handleDrawerToggle}
//       />
//     </div>
//   );
// };

// export default App;
// import React from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TheatersIcon from '@mui/icons-material/Theaters';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'; // Romance Icon
//import GhostIcon from '@mui/icons-material/Ghost'; // Horror Icon
import ScienceIcon from '@mui/icons-material/Science'; // Sci-Fi Icon
import TravelExploreIcon from '@mui/icons-material/TravelExplore'; // Fantasy Icon
import ShieldIcon from '@mui/icons-material/Shield'; // Thriller Icon

const drawerWidth = 240;

const categories = [
  {
    name: "Popular",
    icon: <WhatshotIcon />,
    path: "/",
    sx: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#e0e0e0",
      },
      color: "red",
    },
  },
  {
    name: "Action",
    icon: <MovieIcon />,
    path: "/action",
    sx: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "red",
    },
  },
  {
    name: "Adventure",
    icon: <LocalMoviesIcon />,
    path: "/adventure",
    sx: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "red",
    },
  },
  {
    name: "Comedy",
    icon: <TheatersIcon />,
    path: "/comedy",
    sx: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "red",
    },
  },
  {
    name: "Drama",
    icon: <TheaterComedyIcon />,
    path: "/drama",
    sx: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "red",
    },
  },

  {
    name: "Romance",
    icon: <HeartBrokenIcon />,
    path: "/romance",
    sx: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "red",
    },
  },
  {
    name: "Thriller",
    icon: <ShieldIcon />,
    path: "/thriller",
    sx: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "red",
    },
  },
  {
    name: "Science Fiction",
    icon: <ScienceIcon />,
    path: "/scifi",
    sx: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "red",
    },
  },
  {
    name: "Fantasy",
    icon: <TravelExploreIcon />,
    path: "/fantasy",
    sx: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "red",
    },
  },
];

function ResponsiveDrawer() {
  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {categories.map((category) => (
          <ListItem key={category.name} disablePadding sx={category.sx}>
            <ListItemButton onClick={() => navigate(category.path)} sx={{ color: category.sx.color }}>
              <ListItemIcon sx={{ color: category.sx.color }}>
                {category.icon}
              </ListItemIcon>
              <ListItemText primary={<Typography sx={{ color: category.sx.color }}>{category.name}</Typography>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor: "white",
        },
      }}
      open
    >
      {drawer}
    </Drawer>
  );
}

export default ResponsiveDrawer;
