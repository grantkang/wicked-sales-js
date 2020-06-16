import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  card: {
    height: '100%',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover $cardImage': {
      opacity: '.5'
    }
  },
  cardImage: {
    boxSizing: 'border-box',
    transition: 'opacity',
    transitionDuration: '.25s',
    transitionTimingFunction: 'linear',
    objectFit: 'scale-down',
    padding: theme.spacing(2)
  }
}));

export default function ProductListItem(props) {
  const history = useHistory();
  const classes = useStyles();
  const product = props.product;

  return (
    <Grid className={classes.root} item lg={4} sm={6} xs={12}>
      <Card className={classes.card} onClick={() => history.push(`/products/${product.productId}`)}>
        <CardActionArea>
          <CardMedia
            className={classes.cardImage}
            component="img"
            alt="Product Image"
            height="300"
            width="100%"
            image={product.imagePath}
          />

          <CardContent>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="h6">{`$${(product.price / 100).toFixed(2)}`}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

}
