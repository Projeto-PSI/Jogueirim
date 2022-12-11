import * as React from "react";
import { styled } from "@mui/material/styles";
import { Card, Button, Grid } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface AdCardProps {
  name: string;
  category: string;
  description?: string;
  price?: number;
  image?: string;
}

export const AdCard: React.FC<AdCardProps> = ({
  name,
  category,
  description,
  price,
  image
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image!}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Typography variant="subtitle1" color="text.secondary">
            {category}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
