// src/components/MealCard.tsx
import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link as RouterLink } from "react-router-dom";
import type { MealProps } from "../types";
import {useTheme} from "@mui/material/styles"

type Props = { meal: MealProps };
const  MealCard = ({ meal }: Props) =>  {
    const muiTheme = useTheme();
    
  const [fav, setFav] = React.useState(false);

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        transition: "transform 120ms ease, box-shadow 120ms ease",
        "&:hover": { transform: "translateY(-2px)", boxShadow: 6 },
        width:'300px',
        paddingTop:2,
        backgroundColor:
          muiTheme.palette.mode === "light"
            ? muiTheme.palette.grey[100]
            : muiTheme.palette.grey[900],
      }}
    >
      <Box sx={{ position: "relative", width:'300px', height:"250px" }}>
        <CardMedia
          component="img"
          image={meal.strMealThumb}
          alt={meal.strMeal}
          loading="lazy"
          sx={{
            aspectRatio: "4 / 3", 
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" flexWrap={'wrap'} title={meal.strMeal}>
          {meal.strMeal}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          ID: {meal.idMeal}
        </Typography>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ pt: 0 }}>
        <Tooltip title={fav ? "Unfavorite" : "Mark favorite"}>
          <IconButton
            aria-label="toggle favorite"
            onClick={() => setFav((v) => !v)}
            color={fav ? "error" : "default"}
          >
            {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Tooltip>

        <Box sx={{ flexGrow: 1 }} />

        <Tooltip title="View details">
          <IconButton
            aria-label="view details"
            component={RouterLink}
            to={`/meals/${meal.idMeal}`}
            color="primary"
          >
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default MealCard