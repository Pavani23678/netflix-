
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TheatersIcon from "@mui/icons-material/Theaters";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FantasyIcon from "@mui/icons-material/Star"; // Fantasy icon
import HeartIcon from "@mui/icons-material/Favorite"; // Romance icon
import ThrillerIcon from "@mui/icons-material/Warning"; // Thriller icon
import ScienceIcon from "@mui/icons-material/Science"; // Science Fiction icon
import AnimationIcon from "@mui/icons-material/Animation"; // Animation icon
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary"; // Documentary icon

const drawerWidth = 220;
const categories = [
  {
    name: "Popular",
    icon: <WhatshotIcon />,
    path: "/",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#e0e0e0" }, color: "red" },
  },
  {
    name: "Action",
    icon: <MovieIcon />,
    path: "/action",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
  {
    name: "Adventure",
    icon: <LocalMoviesIcon />,
    path: "/adventure",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
  {
    name: "Comedy",
    icon: <TheatersIcon />,
    path: "/comedy",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
  {
    name: "Drama",
    icon: <LocalMoviesIcon />,
    path: "/drama",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
  {
    name: "Horror",
    icon: <LocalMoviesIcon />,
    path: "/horror",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
  {
    name: "Fantasy",
    icon: <FantasyIcon />,
    path: "/fantasy",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
  {
    name: "Romance",
    icon: <HeartIcon />,
    path: "/romance",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
  {
    name: "Thriller",
    icon: <ThrillerIcon />,
    path: "/thriller",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
  {
    name: "Science Fiction",
    icon: <ScienceIcon />,
    path: "/science-fiction",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
  {
    name: "Animation",
    icon: <AnimationIcon />,
    path: "/animation",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
  {
    name: "Documentary",
    icon: <VideoLibraryIcon />,
    path: "/documentary",
    sx: { backgroundColor: "white", "&:hover": { backgroundColor: "#f0f0f0" }, color: "red" },
  },
];

function ResponsiveDrawer() {
  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {categories.map((category) => (
          <ListItem
            key={category.name}
            disablePadding
            sx={category.sx}
          >
            <ListItemButton
              onClick={() => navigate(category.path)}
              sx={{
                color: category.sx.color,
              }}
            >
              <ListItemIcon
                sx={{
                  color: category.sx.color,
                }}
              >
                {category.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: category.sx.color,
                    }}
                  >
                    {category.name}
                  </Typography>
                }
              />
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
          backgroundColor: "white", // Background color for the sidebar
        },
      }}
      open
    >
      {drawer}
    </Drawer>
  );
}



export default ResponsiveDrawer;
