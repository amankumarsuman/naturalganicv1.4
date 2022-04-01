import { Box, Button, Paper } from "@mui/material";
import React from "react";
import useStyles from "../vegetable/vegetableStyle";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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

function Spices() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
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
              T
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Natural Turmeric"
        />
        <CardMedia
          component="img"
          height="350"
          image="/turmeric.PNG"
          alt="turmeric"
        />

        <Button className={classes.addToCardBtn}>
          <span>Add to cart</span>
          <AddShoppingCartIcon />
        </Button>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            RS:30.00
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
            <Typography paragraph>
              This is pure and natural Tumeric without any chemical fertilizer
              and pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              C
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Natural Coriander"
        />
        <CardMedia
          component="img"
          height="350"
          image="/coriander.PNG"
          alt="coriander"
        />

        <Button className={classes.addToCardBtn}>
          <span>Add to cart</span>
          <AddShoppingCartIcon />
        </Button>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            RS:40.00
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
            <Typography paragraph>
              This is pure and natural coriander without any chemical fertilizer
              and pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              Cu
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title=" Cumin Powder"
        />
        <CardMedia
          component="img"
          height="350"
          image="/cumin.PNG"
          alt="cumin"
        />

        <Button className={classes.addToCardBtn}>
          <span>Add to cart</span>
          <AddShoppingCartIcon />
        </Button>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            RS:40.00
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
            <Typography paragraph>
              This is pure and natural Cumin Powder without any chemical
              fertilizer and pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              CP
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Curry Powder"
        />
        <CardMedia
          component="img"
          height="350"
          image="/curry_powder.PNG"
          alt="curry_powder"
        />

        <Button className={classes.addToCardBtn}>
          <span>Add to cart</span>
          <AddShoppingCartIcon />
        </Button>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            RS:40.00
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
            <Typography paragraph>
              This is pure and natural Curry Powder without any chemical
              fertilizer and pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              GM
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Garam Masala Powder"
        />
        <CardMedia component="img" height="350" image="/garam_masala.PNG" />

        <Button className={classes.addToCardBtn}>
          <span>Add to cart</span>
          <AddShoppingCartIcon />
        </Button>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            RS:40.00
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
            <Typography paragraph>
              This is pure and natural Garam Masala Powder without any chemical
              fertilizer and pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              TC
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Tandoori Chicken Powder"
        />
        <CardMedia
          component="img"
          height="350"
          image="/tandoori_chicken.PNG"
          alt="tandoori_chicken"
        />

        <Button className={classes.addToCardBtn}>
          <span>Add to cart</span>
          <AddShoppingCartIcon />
        </Button>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            RS:40.00
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
            <Typography paragraph>
              This is pure and natural Tandoori Chicken Powder without any
              chemical fertilizer and pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

export { Spices };
