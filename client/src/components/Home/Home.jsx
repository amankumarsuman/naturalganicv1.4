import { Box } from "@mui/material";
import React from "react";
import Product from "../product/Product";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://image.shutterstock.com/image-photo/superfoods-on-white-background-organic-260nw-794145988.jpg"
          alt=""
        />

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
          <Product
            id="110011"
            title="Natural Onion"
            image="https://www.bigbasket.com/media/uploads/p/l/40075537_5-fresho-onion.jpg"
            alt="onion"
            price={30.0}
            avatar="O"
            productDetails="This is pure and natural onion without any chemical fertilizer and
              pesticides. the test is Awesome."
          />
          <Product
            id="110012"
            title="Natural Potato"
            image="https://m.media-amazon.com/images/I/31gkST68YDL._SX425_.jpg"
            alt="potato"
            price={40.0}
            avatar="P"
            productDetails="This is pure and natural Potato without any chemical fertilizer and
              pesticides. the test is Awesome."
          />
          <Product
            id="110013"
            title="Natural Tomato"
            image="https://c.ndtvimg.com/2019-11/qtufl2f8_tomatoes_625x300_22_November_19.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
            alt="Tomato"
            price={40.0}
            avatar="T"
            productDetails="This is pure and natural Tomato without any chemical fertilizer and
              pesticides. the test is Awesome."
          />

          <Product
            id="110015"
            title="Natural Spices"
            image="http://www.logopeople.in/blog/wp-content/uploads/2016/09/inspiring-spices-packaging-design-india-1.jpeg"
            alt="spices"
            price={40.0}
            avatar=" S"
            productDetails="This is pure and Natural & Organic Spices Prepared without any chemical fertilizer and
              pesticides. the test is Awesome."
          />
          <Product
            id="110016"
            title="Natural Strawberry"
            image="https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg"
            alt="Straw berry"
            price={120.0}
            avatar="SB"
            productDetails="This is pure and Natural Straw Berry without any chemical fertilizer and
              pesticides. the test is Awesome."
          />
          <Product
            id="110017"
            title="Natural Orange"
            image="https://5.imimg.com/data5/XW/MO/MY-17779515/indian-orange-28santra-29-500x500.png"
            alt="orange"
            price={49.0}
            avatar="O"
            productDetails="This is pure and Natural Orange without any chemical fertilizer and
              pesticides. the test is Awesome."
          />

          {/* <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              CF
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Natural CauliFlower"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://post.healthline.com/wp-content/uploads/2020/09/cauliflower-thumb.jpg"
          alt="CauliFlower"
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
              This is pure and natural CauliFlower without any chemical
              fertilizer and pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card> */}
        </Box>

        {/* <div className="home__row">
          <Product
            id="12321341"
            title="This is pure and natural Karela without any chemical fertilizer
              and pesticides. the test is Awesome."
            price={11.96}
            // rating={5}
            image="http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-bitter-gourd-f1-chu-chu-415-vegetable-seeds-16969055961228.jpg?v=1634202959"
          />
          <Product
            id="49538094"
            title=" This is pure and natural Baingan without any chemical fertilizer
              and pesticides. the test is Awesome."
            price={239.0}
            // rating={4}
            image="https://e7.pngegg.com/pngimages/599/284/png-clipart-purple-eggplants-chutney-eggplant-bhaji-indian-cuisine-vegetable-brinjal-natural-foods-food.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="This is pure and natural orange without any chemical fertilizer
              and pesticides. the test is Awesome."
            price={199.99}
            // rating={3}
            image="https://5.imimg.com/data5/XW/MO/MY-17779515/indian-orange-28santra-29-500x500.png"
          />
          <Product
            id="23445930"
            title="This is pure and natural papaya without any chemical fertilizer
              and pesticides. the test is Awesome."
            price={98.99}
            // rating={5}
            image="https://vizagshop.com/wp-content/uploads/2020/08/Papaya-vizag.jpg"
          />
          <Product
            id="3254354345"
            title="This is pure and natural STRAWBERRY without any chemical fertilizer
              and pesticides. the test is Awesome."
            price={598.99}
            // rating={4}
            image="https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="This is pure and natural spices without any chemical fertilizer
              and pesticides. the test is Awesome."
            price={50.0}
            // rating={4}
            image="http://www.logopeople.in/blog/wp-content/uploads/2016/09/inspiring-spices-packaging-design-india-1.jpeg"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
