import React from "react";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import DollarIcon from "@material-ui/icons/AttachMoney";
import useStyles from "./styles";
import logo from "../../images/TravelExpertsLogoSmall.png"

import '../../assets/fonts.css';

const TripItem = ({ item, i, ...restProps }) => {
  const {
    packageId,
    pkgBasePrice,
    pkgDesc,
    pkgStartDate,
    pkgEndDate,
    pkgName,
  } = item;
  const classes = useStyles();
  const history = useHistory();
  const tripId = packageId;

  const linkToURL = (tripId) => {
    history.push(`/trip/${tripId}`);
  };

  return (
    <CardActionArea key={i} onClick={() => linkToURL(tripId)}>
      <Card key={i} className={classes.root}>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Travel Experts Logo"
        />
        <CardHeader
          title={pkgName}
          className={classes.header}
        />
        <CardContent>
          <Typography 
            variant="body2" 
            color="textSecondary" 
            component="p"
            className={classes.description}
          >
            {pkgDesc}
          </Typography>
        </CardContent>
        <CardActions 
          disableSpacing
          className={classes.icons}
        >
          <Typography
            className={classes.price}
            variant="body2"
            component="p"
          >
            {`$${pkgBasePrice}.00`}
          </Typography>
          <IconButton aria-label="add to favorites" className={classes.socialIcon}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" className={classes.socialIcon}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </CardActionArea>
  );
};

export default TripItem;
