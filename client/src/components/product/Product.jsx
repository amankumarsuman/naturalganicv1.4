import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useStateValue } from "../stateProvider/StateProvider";
import "./product.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useStyles from "../vegetable/vegetableStyle";
import { styled } from "@mui/material/styles";
// import { useStateValue } from "./StateProvider";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Product({ id, title, image, price, avatar, productDetails, alt }) {
  const classes = useStyles();

  // const [{ basket }, dispatch] = useStateValue();

  // const addToBasket = () => {
  //   // dispatch the item into the data layer
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price,
  //       avatar: avatar,
  //       productDetails: productDetails,
  //     },
  //   });
  // };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [expanded, setExpanded] = React.useState(false);
  return (
    // <div className="product">
    //   <img src={image} alt="" />
    //   <div className="product__info">
    //     <p>{title}</p>
    //     <p className="product__price">
    //       <small>RS</small>
    //       <strong>{price}</strong>
    //     </p>
    //  <div className="product__rating">
    //   {Array(rating)
    //     .fill()
    //     .map((_, i) => (
    //       <p>🌟</p>
    //     ))}
    // </div>
    // </div>

    // <button onClick={addToBasket}>Add to Basket</button>
    // </div>

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "50px",
        "& > :not(style)": {
          m: 1,
          width: 300,
          //   height: 400,
        },
      }}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {avatar}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
        />
        <CardMedia component="img" height="194" image={image} alt={alt} />

        <Button
          // onClick={addToBasket}

          className={classes.addToCardBtn}
        >
          <span>Add to cart</span>
          <AddShoppingCartIcon />
        </Button>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            RS:{price}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to Cart">
            <FavoriteIcon />
            <FavoriteIcon />
            <FavoriteIcon />
            <FavoriteIcon />
            <FavoriteIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{productDetails}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

export default Product;
