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
import Product from "../product/Product";

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

function Fruits() {
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
      <Product
        id="200001"
        title="Natural Mango"
        image="https://live.staticflickr.com/4072/4524914943_47d4fcf964_b.jpg"
        alt="mango"
        price={49.0}
        avatar="M"
        productDetails="This is pure and natural Mango without any chemical fertilizer and
              pesticides. the test is Awesome."
      />
      <Product
        id="200002"
        title="Natural Apple"
        image="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/13/35552.jpeg"
        alt="apple"
        price={79.0}
        avatar="A"
        productDetails="This is pure and natural Apple without any chemical fertilizer and
              pesticides. the test is Awesome."
      />
      <Product
        id="200003"
        title="Natural Guava"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmqauPCkI8cYr8JlFva8K4n1ZauO0T5yLpQ&usqp=CAU"
        alt="guava"
        price={39.0}
        avatar="G"
        productDetails="This is pure and natural Guava without any chemical fertilizer and
              pesticides. the test is Awesome."
      />
      <Product
        id="200003"
        title="Natural Orange"
        image="https://5.imimg.com/data5/XW/MO/MY-17779515/indian-orange-28santra-29-500x500.png"
        alt="guava"
        price={39.0}
        avatar="G"
        productDetails="This is pure and natural Guava without any chemical fertilizer and
              pesticides. the test is Awesome."
      />

      {/* <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Natural Apple"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/13/35552.jpeg"
          alt="apple"
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
              This is pure and natural Apple without any chemical fertilizer and
              pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card> */}

      {/* <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              G
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Natural Guava"
        />
        <CardMedia
          component="img"
          height="194"
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYYGRgaHBweHBwaHRweHBwaHBwaGhweHBwcIS4lHCErHxoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs6NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABGEAACAAQEAwUFBQUGBAcBAAABAgADESEEEjFBBVFhBiJxgZETMqGx8EJSwdHhFGJykvEHFTNTgtOTosLSQ0R0srPD4yP/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAKhEAAgICAgIBBAIBBQAAAAAAAAECEQMhEjEEQVETIjJhgaFCBRUzUnH/2gAMAwEAAhEDEQA/AN8PNVxUA9VPvL+Y6w24FjBJcXJRrN0Oxp84rD4bJfOFYaEGrfD5QbhsVnsRRudKK3h909I8BxeOXJCd9Fh452cWWGnYdag3KDRa/aQbj93atrWFffiKSkqR3jFm4DxGh9lMFjYE19D067QH2k4PKLLnbIHJyTKDJU6JMI919aNo1L3qY7YyU48kZbA+Hzw6rMUnwg/i2PSXh3nA0bKQPEwLgeDPIXKTUfOvLnCDtu5b2OGFi7ivixA+AiiuqDjj91v0WP8As74Ygwmd1781i5rrl0X4CvnDDiXY5HBaX3G6aHyhphVCKirZVAXyAoIYriALjQxSWOMlUjN7s54ex2IH2VPWp/KAcZwLEoD3K+B/OOqTMTQVgeZNVhEH4cPkLkzkay6mjgoeZFoGx/DXQVpUdPwjpXFJMtwagVEVuayhGTbasSliUBGiho8eq4pEuJw3fNOcDNJZdrRk4sXR4DUGN1l1ERy9xBEoRpOgsnkSCozG3KC1xNTR1zDnvEeHJaiHSCgyIGUjUWO8QlLe+zRbQG+CqaowbodY0D5bU70eOSpBBpEiYqo761H3hDbr5GtMmkTHJu2URPNmMLo9+n6QBMwx94NmHxj2XP5CgikZAao6V2WmhpVd6X8Yq+OWk1x+8fjeIOznFPZTR3u41mHXnBvGmQzsyn3gITyXyghZWwPJziKYldoJcmlIgL06xwRbApceiCZIoKiAnUwcZxEeOquORisW12PqXXYvyRkE/sZ5x7FOSBxkNeG4IMaIhc/eIIX9YfJ2fmOO8pPTQDyikYrjEzRHZRzBIPwiOR2txkugSe5A2ajfMVjrh935IHIvLcNmy7MudPE5x4Glx0hxw6ajy2lOQ60vmFDS1A6ncWvvQRzmX22x+7IR+8n5GIh2knZxM7uccgQCORFbiNxUHcf5GUl7OgYnBTZJqgM6XnzBCaMldcjbgNXum1CIRTOGSsRP/aDMrMRwwluMhVUsECnU1GtbmLLwXjq4lAygCgoy1qUegqrW5EEHe3gDWxEtrOisa7qCfl8oo47tOiilXYvwHGJE0UV8p0ytY+hhhJY5SNabxy3tBh5KYl0kOzID/K/2lVvtAaV8RtWJMBxrESNHJH3TeFWVxdPYlpnTGnkjWFc/FMjXNjCrB9rUb/FTITuIZO8qcpyOG87wyzqX6NT9AWNx4BpWK/jJxYnntBeOwzjUHu784WT1IcdREck7QELZkyPEmc4YJgFckVoYnTgTG+YUiSWhGnZWMQCGqBaDMERW+kPpvBFy0DZjBHC+Aq5uNNYbmpfauyjhKrAMIArZqRDi2ztWLL/c/fygd2t4mx/ZM5M6NfkYhGMnJuugNNaKVMlHlEbJsdIYzJboSCLjWAlZa1PnDxbENJVrg0jYTFa7d08xEeJmrU5dI0SQ7Duox8AYol7YysNlLQjlsRGYjFUIKmuxgNBMqQqNTcUMFCWqL3hQm5rAkq72NKq0Npc7MoO8azIUSuIUNNoZ5wRURyzxuLJMhcRi6RKyWiICkFO0Y19qecZGtYyDQbZrxbhQlOwuyAmh5QAco2pF2wgV55zUIqTQxv2g7NSiC8o5W1I2PltHRiblFyfo1WURzXSpjRpeQZmudgNztB7SmBC0vWgFLk9ANTDnhnYnEzmDTFEpF0DXduZyDSuneIPSKY7l10NFb2KzxF8MuGlo3f706YL94zLBGpemQDwsRcQdxDjftSGQOj6ipApzAIJLV600FhpFmw/YyQJjzZrPNdr37qeAVbhQKChLWpFu4Rw+Si9xFX+FR+AtrFJPnLih3K3o4vimytQCmYA8tY0DKNwW8RHfQFNjffwiMsl6CnlSM8C9sVrdnBlbMdQTy1iVKoa5ip6GOy47CS5go8tH/iUH0NKiKnxbsZJaplEy26ksh8QSWXy9IjKNOhboq8ntC62cZl66xP8AtEmYPuN1gDH8OfDtkmJRj7p1Ujmrb/OBMpaJtDqT9jw4Vh3lIPhGxxTDbxhRIZl0Y1+EHpxBqUZQfCEtrQySYbgx36HeGuBzI1Rz0hPh8WhpqpHOD0xBJtTURPH9s7K740Wvh0vOCxFDWlPkfnDhJYy0hTwaeagMKZh8RpDabOCKWbQR6UYpPkvZH2c0/tClrIIYe89bdI0/s94arS3eagYubVG3nFa7VcUbF4kkGqKaKOm58/yjq3YzDqslByAjKMbpeyzSURTj+AyEBZZK18LQR2a4McoJApyh92gcKh62gzg6ZUEUjijdMW6WiEcHSnur5ART+03Y1WDOlm1ptHRC0QzFBFDFXijWiclZ85TZZUkEUINCORgzA4kixjp/H+x8qcxemVuY38aaxQ+LdnnkGxqPjHHljSpk2mTJNqI1cVEAYfMIMQneOGUeL0LRHGRJlEexrCMJbkGo1g1Zk2cVRQSTYDmeX6xBi8WpJAREA2GvmTrF47GcGyJ7eYO+47oOqIbgUOhbU+Q5w+DDKcuKevZoptk/A+ziyQGYBphF25furyHM6n4QzxTIqtXWlPCvjYRLiMUF2qeQ89fSE+P4mAtQAWvc3oelLf0j039PFCkUdIWYnGZXZR970FKX/LaJJPFigvn9LQhn4ljcbn5H69esRrNapGbxqT+EeT9WSlyRMuMnHhtxTWpFOdDXQ8rxA+PFRn7ta0NaC3TnppFbweMKGxNbgiwEEy8U1qlRqQSAVN7jlr9bx0Rz8lsNlu4diEdb3pWpua6DXeCHlyyNtNv00ip4biOVqURiT7p1Nd1Op1G/4mD5nFLUG+3LoQfrSOlZocaYbpGvFsDLnI0trrWx3U7Edf6RzfFYR5bmW9qG1PtA6EdDHRVxJKnuDeup8AP05eiHtPJJCOtQw7pprQ7GnWscc5J9ARWUl7AecTJI5a84lRKClvwgrDy8xyrSOWUn6KxS9gTYYbwRhuFzCuZVfLSoPPw5xbeE9n0qGfvnl9n03i4CUKAUFIvhwyyJ7C5/9TlcnG4mWpcGqrchtRSE/HO3jzkMsACtjSsWP+0WcA8uRLszk56bLb5xy7iOHRHYI1QPnvHbigum2NF3tjDgUqrMx2+cdT7F48ZcpNxFA4XhQkpTX37wzwGIeS4cE5iO6g3qLZj9nUGmtDsCCYub+q2vQ0mq2XzjWIDuktdSw+F4fSpioApIzU0qKnwEcqxHF5rMzhwrGxKVWn7quveY3OhNabC8J8U4Zi71NTQlu85poAWPePSwG9KxVZW5WiMpJ9Hap2MRfeYDxIHzhc/HMOP/AB5Xm6fnHKJThmyy5aINSQFZzQEEs7juUBPuhQK3rGs7FItAo9qyknMxbICae6NX01qo/iEdH1r6BZ1ccXlPZJstjyV0J9AYW8QwDTe7QjxjmRmu41FBc0VEQV50AUDXWDMHxmbJtLxDBa+5RynkrLQa6gRNtSf3GssnFOz3swpU66wHK4YWEAt2ieaRnem1gaGnhcQ8wGIIpyOh1B8CLGODyKUtKkBUL/7lflHsWP8Aa49iPKPyGkVrszgDiMSiEVRau/VFpbzYqPAmOq43FZBbXmdAANq6n9TtFO/s0w6hcROPNU8Aq52/949IdY+eSTWwWvXdbeJpSnU8o9GM/pYlXbBHUbMxOJCjWhNSa63AFWppbblCTFuAtK+Ot+Xj/SIcbiKMSSak1JNK1HLlSAJrjWml7kn5m5jinnsVmNSptpfw8/GvW0BlxqSaG/LX8I2mzwTRRStSdyb6/h5wHMnknw62iFWaiczqab7cz4xpL4iy8yevl5QI00iIg1wIpGIRt/eIaudb61KqQPxFeY5+p8niPdorsUaxVjWh+zWunK3KKu2KOlSRyv8ALSMGKIPdWlRcWv5af0iyjKhi2DEOvusSPqla0DDT0METpgeWymlGFiDWjA5hTzAit4DGhiVatbilTbS4vsa+m8GyMSQcupFwQevL19IR60xRDieIBloAwJpew09YfdiER3YHUUN+UTcN7E+2cu70lk5gqWNGNaFmHd5UAMWfC8Mw8kUlSlB0qAWYgbsSSx10+EXeJcdCttj6QUFgy15VFYKeeqqzE2UEnwArFbZhy/WJEpSyjzh8WThqgp0c1lmZiHxGISrvMziUrEAMK0bKTQHLUW6Qhn8FnpOKTZYBRFdwCGIVtK03qb8o67x+Uplh3WuVlNQoYoMwAKj7Otzy1tWIpvAUM5sQrOG9kEKspUAA1DAkd4ilCsXT+112WjIr/C5AEugRZssCvdpnXoya+YhJjJi5yy1y87k0vbpU0v8A0LviPAJ0lS6AMtSwdGvlpWhSxprcViu+0rU1AN/M/XzjhqUZbQZyi1R5MvY7ClAetbnbbqekQutbtaulNSOSrsOth4m0FIyN+6aWYCoHiv1SI5uGZbmhrfPW3Q1N+VqV6RVS9EnGutgcxzly6Dda2NDYnc066EWpGvswvva090G+xqx+wPieQF4kYHVa2vmNrc1G21zfwiJ5QBOckWrl1cm2tqLWpufQxVMDZE8xnoP5VAsLbDc9TU9YkMnL75VOhPe1+4tSPMDaPPatSi9wU+zYkfvMbnw06aRCibAa6D1sKa1tDAJ1moaUV2sAK5U18Ax1PxgzAz3S8sZdyubMp/iUi/iCDAyoqHvt3t0W7ef2U8Ca9I3/AG1q91VUWFSM7eZYU9FELJXqtfsI3/vl/wDKT+Z/yjIV/tcz73/Kn/bGRL6cPhGOl/2frkwbn785vgqr81iDik4l3Wup35KSL+fzi0zcGkiUElqFUVoOp38a7xS+INV2PM0+PytCeZcEo/A7WkgWaDlzH63/AChfMapBI+tYJm6UFtTWAnNhfQfP6EcEdk2aznCnx+qQFMmCpjfFXI5fVIFmk2pufwjohFUY9mzYilzAI9NKQM1AQYtGK6GRM7UGkQlqUI1Hpe35RjtGoikUEMVlqHFjuK60oCYMeaDYmlDSov8AHlaEqg0+ucGSnrrekLOJuJ0DA8YVJSh3CitBXevgb3+cGSpiUypMfMeeUkWp92luVIq/DccVlFQKknnrTYqBUjblA8zE96ihFNKFBXU320NxAU6ikB9UWt1cWDhv9JLV8ohTENXUG+h0rvqQRt6wkwuIZP8AEDVB0csBXXe9frxPmYmqFqqGGpGY+RNL2prpXWE5JiDR+IEI4bKABeuuXcVA6b9YbSMSQiXPWhsNBX65GKPjeJ5pZzI1CMoe9LkAVPnDzh+JlsDnb3Sb1H4EEC3wiuObWxlYxmTQWoxqaVFKCpUVNBptW14p3aXhmTNNQUFy6i1CT74HLnyPiYtiz0DKVJtSxoRUVFRuDfnQ35xHimVn0rY2sbE7iumgMGUr3ZmjnkkVzLe2pp6im2/6RiO4JKsfA6EU0poawz4rgBJNUpkZjpqpOxr8OkLJT67VAGmxAt4QvbYLa2jBPRq6I9u9QldNFJ9zUXHSA8RhynvDXQ6g8zmGvhr4RsFJrStQAa+CA+R1jeTMZc9GOW9VN1Nza/gYda6GbT7BZibu2UHpVm5ZVtUdTQVrfaInnkDuDIDqdXI6tsOgoPGDCqTGN8jk6NXKxFve1Gn9IhnYXJT2lq1oBQs1OVO6B4nyMVTM1RBh5JJyqtTTToNzyHU2ggzUQECjttQnID1IoX8qDqY0LM/cVaA/YWpJpux1c/AbARgRU1OZvuqe7/qca+C18RGaAZ+1zPuJ/In5RkZ+1H/Llf8AN/3xkbRjvnEJyupQMM2oFb2IPyrFGxjXPU18rn8PhCPA4l0mJNuxVqmpuQbML8wSPOLTxSUGGZdGFQdiD3hT0HqY4/IyLOuSW0FSsr85toCa9TSDDc/Cp9PrxgSYdo5ImaAnNKdTeBcTatDvBk1NtfrlAk4b7R1R7NRC5tApa8EHlELoagUt9Ui0Rkjw6RlecT+wJEaexPKCpIooniiCEWi3+t40VLjkN+ceYl9anSFe9GapBQ4g0srQ2y7WNTUm/hSD14iHor1DUsRRrGwJb9RT4RW8Dj2DsaA1sQQGtyow6CGZoaMFA5UIHlSDOHHRAOeeykZ2qaeJIHhrBEriGUdwEtsRXu03obDfasLpGJQWatevXpBS4pVsikH7TKzUYHahiPGghb4tGRlnIle6RqDmU5hpahIpSn4wOmOQswByNs16W2IG2vp5RDOysppSo01v05QNK7hqRnvU1t5A8oMXa2FFgw/G2RcrqKNowXusaDXZq+VInfEZ9aqwoQTTTx+BIP5wqwr5iMulalTQmvQHU66ekHtM00INQttNiDrSxpTx6RmwWEYkl0KPvUHfllZT43uBvFVdChIYd4WIPh05UH9IcSplXOeihV0v39CCh37t/PpC/iYGcEVoRfc+Nd7Ea9IaLp0zNKgAPsLVVa717q2ttERFNQDm/E1/GJHpagHui9hWw5D5xpWlLVNFNd/cUHx0MX9CkT++CRYlfQhSfnG+ExbrRDRksCrXGoHkRHk0G53Kj1oB8xEc5O838TfMmG1QboNCpMGRG9mTrLewc3+3vf7LW8IhmYbIf/6d07KKFz1F6AfvG3KsD4he83I3/mGb8YNGKYFlYB0DvRX2oT7raofCMG0wb2qf5b/8Rf8AbjIJ/aJP+W/84/KPI1/o1FwwHCXZGdu6i6kjU8gIY8LmBlMljQ0JTqNSviNQN7jYRZ+K4ICQqCwFKxR8ZLytTcH5aHpHJnxrA1/YU0jOIYbKSKWNwdj6b6/CFrJXyh2mPDrlemfSpoA4rrXRX16HpAmIwpqSAbe8CCKdfA9I5ml3Ey2JJppaB5i1PSJMfOCe8GBqdL1W4qQNq0uBQgg+EizUyihz1+7fXrYD1jo4SSToZRAXlACpNANzAOK4tJSykMel6fhA/HJ+ZmUqSoAykMPe/esA1iP5dYr4TM1FNL06fX5R34vGTVyY8VsuuCxazVzC2kEezH1+kV7s1h3IYUspWh2OYE2PlFoWXQbfOOTPBQm4pjLsDcUhXjqkZRW+vlekPjhWYMx7qgV0ua3HkQDeAMTLvmUUFdOQNxAxSp2TyS9IUypREMZcwqL0pXcRrkpUjeNak79aRSUuRJGzuGJIFOsSSzehMR5fLptHmY1gP4GCZ7Zct/SIzMYinWt9bGIZrioBj3MKQEqSMglcWAtKnMDY2t1+W8SNi3YZq0NL7A8j84WMm8Ey2prpSC4oyQwk4vMMpvTQHbwjSbMLUBuQfM9PGsDgXFI1nvSldzCJfdo0uiVwDTw66gknwsR8YhaVca6DTmO6d/4fhGy4oHU3prpXWlT8K8idNRM6WFRSlbVsa0Bp6Jfkx5RZEwdpemg7vW3efyjx0vzsOdzlA+Y+tIKYCgtTWmp/eGp6t5D1jmpYczUAmu17bEd/8o3IwJOTTqor5Ep/0xs70YnmAfNlUn4kx68ugGliw8dCPiT8Y8niwO4sfiy/9XoIa7CaZxzPxjI0y/vGMgUaz6H4glUPQRzzitC8dCw+KVxSorFJ7VYH2b5h7rfAxT/UIc4ckGW9iFxG8viDoACM6j7JNCP4W1XwuOkaExq6VjxIy4sWzadiMNNszmXetHQkA6VDLYWJFag3iNOHl1rmltQkEq4YE2NRQ3BBB+GohbjpVIBwvEGl6IjfxqT8QQY74VOOikZ12E4jhwMyhAXKb7FqUqR0vS/zBpM2CqCEQEkWFOdtdYik8cZSSsnDiv7ja87vGT+NT3BGcIDqEVU/5h3vjDvla3pDfUQRwDhqShkmOkpmc1W75RoK5fd315xe8HgcIGKIwmuqkm3droCALEg+NKxy2W+UxYOC8WEt1fUCoYDUqbGnXfxAgTnu2u/Yrysb4+T3U6pkPOqtSvlWkV2bJt0Ap+Y9axd8fKUqHU6EuCNwy1DeGp8AYrGNl5TprXN52002H0Y53cZAYjRK+lREUxKD63gxZVKDx+EDTUJA6RWMtgQIrilOUbS+e1Y3KbkRow1il2MROcxqI9Kxkldeselb00hrCkiOXrcbwRSIsp2gqStvrzMCXyNGJ6qxeOyfZGTPw5fEoWzsSlGZSqC1QVI1bMfACK3wjhxnTAhOVNXb7q2r/qOg6npHVFx6IoVKBVAAAqQqigHdFwKbxXBxtykaXwU7i/8AZqtC2GmkEfYmd5T0DgVXzDRRMZInYZjLnIyH7raHqjXDDqKjzju0niCty6X18oH4zgJOIllJqq62tuDsQRdWvYiOmUYSVxZNx+DikjFIQVrfQDfUczRj4egg6gYUrRqilRUnW/S1dLAbRB2r7NPg31LyWNEfcH7r0sG6ix6XARyp7roxHStvTSOeUPgX/wBH0yR3cxpe4ANaZa2PWmbnrEKmq5bUPPbShtyIv0B5wAnE2+1ruygVPKosD8ILlzVcVW/Om2mwuB5bQnGSRq+Dz9lf/L+P6xke+0T7p+H5x5G/gxdZ/EJhNQxB6QDMnzns7s45E29IlWDMNh6ox6H5R5sJzyS4N9gF2QxlY6nLwUsiuVdT9ldjTlHp4dL+6v8AKv8A2x6H+1N/5f0N9P8AZyHFoCIruJlUMdi43iUlOstUTNlzElFNri9rC0KpnEkAoUTW7ZEpXkCV+caPjLFpy/o3D9nLVaJQ8dQ/apZ0KL/ol18aFYn/AG2SZfdWWzAGrBEoSNKArrrXw6w/GD9hULOUZhGyuOcdFxHF5YaiohG/cSvl3LxLJ4gjGoVMpNqpLr5gLC8YPVheJ/JX+zHaALSTNPc0Unav2T0v8YYcTwvTMoWx5rp6gGnlF+w2Akuqt7NO8oPuLuP4YXdqiknDMxUUDIDRQaBnUGwpa8Uy+E+LaZlGuzm2JlUoRcNWnlb1/KBMhO3yi1DCJNXuOjrr3WBZT8x5gGAZvDMtyQo/ep+ceelKPaMo/BWnlVO4+ukatJPKDcZxHDymVXdgWrQhSVtrc05j1jVsdhjb9olqSPvfpY+POLqOSk+LobiLsOuZQ1DcfHeJPY0Ox9TSGeHwgC91lK7ZSDUbXFtNo39mBY0BOgtWnhqTCyn9zoeMRT7Ek/pWsEypRsN/Qf0iaYFX8oh/aLwOTaC2kW3hGISQmVAj5jV2bUtSgoLUGtPPnBM7ieb74YUIAFQOory5xTXnk6Vj1MUwpe1dKcx+MZSl0TastcmcDmIyrfvZiV/lpYG2h9YOwXFL0NSRvahB3a2/SKjh8aa1qNd7900qCTWvnBcjEGtBUDa5sDyPofowyyNAouuMSXiJbSpgqjijDlyIPMEAg8wI4zxnhj4aa8lyGK0IYaMp91gNq3tsQRHR+G4u+Tx6UboNL39PCAO3vD/aSFnAd6V7x3KNQGvRWo3gzR0Y8nLTJs5xzjFalCNQY9peMykWPOKWAN/vJ+npGQHSMhaQdnQ1htgvcb+EwnhnhZlJbfwmPJ8b/kQDo0pqjzI9DSNmcAVJoOZiucS4sylpaEjKSWYC9zWgr0OsKBiLZ794gnNUmtI+lllUdIuS9sHBbNKYF8tGpQmi3Wm32jXy5xzpsY+YgtSm2gi/4lFcVINVFQdNLVB9bfhFU/u8PjPYz0Rky50YErnrWiso0plYmhAsNM1I4cqWRtvQrE78Tcg5EeYRsis1D1y1pDbgvE2EijoUYu1jUVFgbG/SOhIsuXLUKgRF0CIQgHKwsPCKH2xlBwWltatVoaiu/lXaIyhCKr2/ZroBxWKNWJa9bAXtQcom4YxLA/18on7Ldip89BMxDmUhqQq0LsDcN3qhOgIJ5gRZZ3YlVymXPmAgj38jDzoqm9tCIeOFpj22XHhM5GlKFNcqhSNwQKGogHtjhvaYZk5tL+DqYrE/CPKQs7rVad5QQNAKm/drQ9OukM5HFTNw7Kxqysl9yC416imvUR3SyJxcX8CXrZV34CUIYVqNCLEeBFxBae2Ni+fbvhWPqwr8YsqAGB5+GoagR5GTE6uL0T5MQ9oew+HxMtXZ2Rwhply5c+oYqRU2UCgItFJm/wBnsyTnf2iOqgEBQ2ZwSCQVvloBzNax1rFf4aDoPiIXzW0I0p+JvFF5U4Lj6KKTECSpLAsjB0tlKMa7CjEchSxvpyhdirE5beZ+cNMdNqWpavLr+NhCrEPqPr4/Vo43LlK10a2LJoiJBErHnEYEXXQSYCNWjM0amAjHgeh1+qQVLxOxrSnOAWjxGhnG0YsmExVdAAwoRW2balvH61ixy5qTUykkiYpBHRlKlT6n6EUOXMIpf9d/wh5gMUQxynZiOpF6Eb7jzjRbixZIobJSx1Fj4jWMLR0HjXZBHBmS2ytQFl2J3I5E6xTMZwqYmq1HMR084tk0wCkZG3szyMZBtBL6TBKzKIw/dPygWJJg7j/wn5R4+KXGaYEGcaxJXETQB9s1OvI0p5wufiLLeikVvUflFq7UcDZqzkWtffFeR94eX1eKhNld41FB4fhHuZYST/R0Kg5ca7jKCSzEAVO5sAKfW8XXhvCkQIzKruo98itK0rkroLD0ildjkU4lhmDBELDmGZsgqNfdLCL+TWtyKfl8dfhFPHxW3KW/gySbCHmU5+I2hPxPgsmcVcoAwINrZqbON689YaK5yj7R+cRs1mMdOTHGUaaC0hZgeIAizVGx+fh4R7iOMKR3T3q0+q+UU3g+P7+IQn3Z0zL/AA52IHpSPceaVI9I8tynD7V6FtFlfiCGxZTWxqQda26iBMDgVT2xSmQ+zoK1ILOpoDy7tfMcoqYxLsbE1p+l4uXZ5GaUzHQmWPMP+Qr5xbC5Tu16Fk7Q/wAFgt2g8SFpoI3li0emOvHiio0hIrQn4zJAUU5Eba2/SK9Pfuim1hfamvxi3cSlhkPS/wCEU7EJRqEdPI2r6/Mx5Pmw4ZHXTGFLrQ35Qvmj4QyxQO+vTfx+toWYg9dPry3jigML3SkQONPrasGrLzAn0gZ02AJ3/COqLNZCzHaPWaPMv6x4DDBPMseoLx4W+ce15coJkrJE1vDDhpBIBrVqhaW98AXPS0Lpa1+ttBDbg8nNMVj7qXPj9keoJ8oBmqVsvMudUxFisEjg1AvAaYiJXxUaLVUzksA/uBPqkZBX7XHsNUTchGmsMTgnMtjSndPygTBJWYBF2TC5kKjcU9Yj4vjLI7ZRLY+RKrQ71+JipcX7GM5JlT2l1+yQrDyqKjyMMpnFcStaYZac/a//AJwOePYmtP2Zf+MP9qPebjVMtaEPAuwU7DTzPE/OWUqykUBBINqaEEDXqN4saTVNQag6EaG2xjVOM4o/+WX/AIo/2oHnyMRMbMZBVjqVnC/iDKIgqv8AEKddB7PyNLU5/W0JO0fHFkSmyDO+UlEF2Y6VpstTc/jaCX4diCKezfynJ/sRHgeCNLZmGFzO3vM88ux8SZcNt96QW2cvGPnB1mpKd7ETQB3rUo3U6jyh5J4xKcfaB+6ysrehF46IGnrphUH+tf8AajwNPJr+yS/51/2oWeOEnfsSio8K4W05hlUhTSpINKdAYuXGZAkYXKlQFZLnUkuKkxumLxS6YZfKYB/9UB8UmYidLZHkhAcpqHzXVg2mQcucCUVGDUTVoYcMxwddb7wwUxzvDYp0exoRqPzixYbj9hmU16RzYvKSVT0yadaZYyK2OkVPi2FysSDqCfP6p6xLi+0DEEItOpvC3DYpqsHJYManejcx02Ijm8zLDKko9m5qxViSSKb016/XyhdPQGv1rDriuGKio8edvy/PwhHMbfIa3BFulxz+G8eZGLuhyIClK7fP6MDTDf4fGJ1dmLAKaitzQHbx+vCNHllqH684tXF7DQI6XNNIiZYPTD20MbPgyRbWvwgqasZRbFoQnSNsoHWn1rtDJMF9Ur/WJGwh5EAQ3NFIxAZaW0v9Gn4esFScVkFB5+P1QRk5Qv8AFy5ePWB2ENHbIZpL8UOpWKqInM7reEspiIJEwwaSOcP9p1MZAHtIyMYteE4W4cGlKRa8HLotIlEmNqUj1cWFQ6LxiaYgCkV/E4jK0OsVMoIrGOOYmJ55V0MxvhsUOcNcNPB0ioYdyLQ9wCkaxHFnblQqkPUePXaIpYtEyrHop6HBplYgE8qbweyQuxsq2ohZWtiydbDlmAxpMAMJMNjSrZSajpf5Q0WbUQI5IyRlKxDxvg4JzprvCWWDofSLlPa0IOISVrUUrHLnxKW0ZqwES4LwsoV0iFIYYJbxywhsm4jB+HpMShtbWKzxHgLpemZee3rSoi5yDBQaOmfiQyq+n8lI9HLhhWBrkanhb1iLEOi+7LbMeTW846bOwMp/eRD1pQ+ogSZgZSe4iDwUfPWOWXguCu9FOSXo4fxfj02XMdBkQjYL0qB3q7UvE3ZTizTXcTXvQZBpU3r7o8NYsvbzssZsz28pc7v3XXu1BCkK6sxGUUUKRzoRqYUdmOzzSAz4gorVK5S6mhIBXMQxUNWhC1JoRpWLuOJY3Xf9m5JRuxy88ADvFj0UAep/KAMTinNh3R019fyAgqbLpA7jaPLTd7Od5ZMAVY9R7xNMSMlSwDF4pkyRRG6rE8oCmkSLLvDSVhB/ZxkG+x6RkDizUdXGkaTIyMj3WdIp4lFem6xkZHn5/YrMl6iLDgdo9jI5vH/MRdjiXpEwjIyPZRU8aFPFdDHsZC5PxYs+iq4T/Fi3S/dEZGRy4PZOJDidIrnE9RHsZFJ9FUeJoIYYOMjI5o/kIx1J2gqMjI7odBiemAcZtGRkLm/BhYjxmscg7S/48/8A9YP/AIzGRkcHjfnMC6LjitT4n5wDGRkee+yJE2sSpGRkdCAFy4kTWMjIz7Cg6MjIyKBP/9k="
          alt="guava"
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
              This is pure and natural Guava without any chemical fertilizer and
              pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card> */}

      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              O
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Orange"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://5.imimg.com/data5/XW/MO/MY-17779515/indian-orange-28santra-29-500x500.png"
          alt="orange"
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
              This is pure and natural orange without any chemical fertilizer
              and pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              SB
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Strawberry"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg"
          alt="strawberry"
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
              This is pure and natural strawberry without any chemical
              fertilizer and pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Natural Papaya"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://vizagshop.com/wp-content/uploads/2020/08/Papaya-vizag.jpg"
          alt="papaya"
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
              This is pure and natural papaya without any chemical fertilizer
              and pesticides. the test is Awesome.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

export { Fruits };
