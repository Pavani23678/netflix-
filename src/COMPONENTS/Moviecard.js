import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Rating,
} from "@mui/material";
import { TMDB_IMAGE_BASE_URL } from "../config/tmdb";

function MovieCard({ title, releaseDate, posterPath,rating }) {
  return (
    <Card sx={{ maxWidth: 250, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={`${TMDB_IMAGE_BASE_URL}${posterPath}`}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release Date: {releaseDate}
          </Typography>
          <Rating value={rating/2} precision={0.5} readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;