// import React, { useState } from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import TextField from '@mui/material/TextField';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { searchMovies } from '../redux/movieActions';

// // Styled components
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function Header({ handleDrawerToggle }) {
//   const [open, setOpen] = useState(false);
//   const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
//   const { register, handleSubmit, reset } = useForm();
//   const [searchQuery, setSearchQuery] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setForgotPasswordOpen(false);
//     reset();
//   };

//   const handleForgotPasswordClick = () => {
//     setForgotPasswordOpen(true);
//   };

//   const onSubmit = (data) => {
//     console.log('Login data:', data);
//     // Handle login logic here (e.g., send data to an API)
//     handleClose();
//   };

//   const onForgotPasswordSubmit = (data) => {
//     console.log('Forgot password data:', data);
//     // Handle forgot password logic here (e.g., send password reset email)
//     handleClose();
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       dispatch(searchMovies(searchQuery));
//       navigate('/search'); // Ensure this route exists and handles search results
//     }
//   };

//   return (
//     <>
//       <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
//         <Toolbar>
//           <IconButton
//             size='large'
//             edge='start'
//             color='inherit'
//             aria-label='open drawer'
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, position: 'absolute', top: 8, left: 8 }}
//           >
//             <MenuIcon sx={{ color: 'orange' }} />
//           </IconButton>

//           <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <Typography
//               variant="h3"
//               noWrap
//               component="div"
//               sx={{ color: 'orange', display: { xs: 'none', sm: 'block' } }}
//             >
//               NETFLIX
//             </Typography>
//           </Box>

//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//             <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
//               <Search>
//                 <SearchIconWrapper sx={{ color: 'orange' }}>
//                   <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                   placeholder="Search for a movie"
//                   sx={{ color: 'orange' }}
//                   inputProps={{ 'aria-label': 'search' }}
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </Search>
//             </form>
//             <Button
//               sx={{ color: 'orange', fontSize: '20px' }}
//               color="inherit"
//               onClick={handleClickOpen}
//             >
//               LOGIN
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Login Dialog */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Login</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//               autoFocus
//               margin="dense"
//               label="Email Address"
//               type="email"
//               fullWidth
//               variant="standard"
//               {...register('email', { required: true })}
//             />
//             <TextField
//               margin="dense"
//               label="Password"
//               type="password"
//               fullWidth
//               variant="standard"
//               {...register('password', { required: true })}
//             />
//             <Typography variant="body2" align="right">
//               <Button onClick={handleForgotPasswordClick} color="primary">
//                 Forgot Password?
//               </Button>
//             </Typography>
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleSubmit(onSubmit)}>Login</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Forgot Password Dialog */}
//       <Dialog open={forgotPasswordOpen} onClose={handleClose}>
//         <DialogTitle>Forgot Password</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit(onForgotPasswordSubmit)}>
//             <TextField
//               autoFocus
//               margin="dense"
//               label="Email Address"
//               type="email"
//               fullWidth
//               variant="standard"
//               {...register('email', { required: true })}
//             />
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleSubmit(onForgotPasswordSubmit)}>Submit</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { searchMovies } from "../redux/movieActions";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0, // Adjust this value to move the search left or right
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1), // Apply the same adjustment on larger screens
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(searchMovies(searchQuery));
      navigate("/search");
    }
  };

  const handleLogin = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
    setModalOpen(false); // Close the modal after login
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', height: 55 }}>
        <Toolbar >
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ flexGrow: 1, paddingLeft: 65, display: { xs: 'none', sm: 'block', color: 'red', fontWeight: 700, fontSize: '50px' } }}
          >
            NETFLIX
          </Typography>
          <Search sx={{border:'1px solid red'}}>
            <SearchIconWrapper sx={{ color: 'red' }}>
              <SearchIcon />
            </SearchIconWrapper >
            <form onSubmit={handleSearch}>
              <StyledInputBase
                placeholder="Search movie"
                sx={{ color: 'red' }}
                inputProps={{ "aria-label": "search " }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </Search>
          <Button
            sx={{ color: 'red', fontSize: '20px',paddingLeft:10 }}
            color="inherit"
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>

      {/* Login Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
