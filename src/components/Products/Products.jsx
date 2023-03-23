import React from 'react';
import  {Grid}  from '@material-ui/core';

// COMPONENTS
import Product from './Product/Product';
import Loading from '../Loading/Loading';

// STYLES
import useStyles from './styles';

const Products = ({products , onAddToCart }) => {
    const classes = useStyles();


  return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        {
            !!products 
            ? <Loading/> :
            <Grid container justifyContent="center" spacing={4}>
            {
                products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))
            }
        </Grid>
        }
    </main>
  )
}

export default Products;
