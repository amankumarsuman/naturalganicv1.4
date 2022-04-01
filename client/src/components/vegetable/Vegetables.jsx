import React from "react";
import { Box } from "@mui/material";

import Product from "../product/Product";
// import { useStateValue } from "../../stateProvider/StateProvider";

function Vegetables() {
  return (
    <Box
      sx={{
        marginTop: "50px",
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
        id="110014"
        title="Natural Baingan"
        image="https://e7.pngegg.com/pngimages/599/284/png-clipart-purple-eggplants-chutney-eggplant-bhaji-indian-cuisine-vegetable-brinjal-natural-foods-food.png"
        alt="Baingan"
        price={40.0}
        avatar="B"
        productDetails="This is pure and natural Baingan without any chemical fertilizer and
              pesticides. the test is Awesome."
      />
      <Product
        id="110015"
        title="Natural Bitter gourd(Karela)"
        image="http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-bitter-gourd-f1-chu-chu-415-vegetable-seeds-16969055961228.jpg?v=1634202959"
        alt="Karela"
        price={40.0}
        avatar=" BG/K"
        productDetails="This is pure and Natural Bitter gourd(Karela) without any chemical fertilizer and
              pesticides. the test is Awesome."
      />
      <Product
        id="110016"
        title="Natural Beans"
        image="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-bush-beans-desi-vegetable-seeds-16968668709004_300x@2x.jpg?v=1634203220"
        alt="beans"
        price={70.0}
        avatar="B"
        productDetails="This is pure and Natural Beans without any chemical fertilizer and
              pesticides. the test is Awesome."
      />
      <Product
        id="110016"
        title="Natural CauliFlower"
        image="https://post.healthline.com/wp-content/uploads/2020/09/cauliflower-thumb.jpg"
        alt="CauliFlower"
        price={49.0}
        avatar="CF"
        productDetails="This is pure and Natural CauliFlower without any chemical fertilizer and
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
  );
}

export { Vegetables };
