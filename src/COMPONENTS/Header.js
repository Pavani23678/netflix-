

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
