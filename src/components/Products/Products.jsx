import React from 'react';
import  {Grid}  from '@material-ui/core';

// COMPONENTS
import Product from './Product/Product';

// STYLES
import useStyles from './styles';

// const products = [
//     {id:1 , name:'کفش' , description: 'مناسب برای دویدن' , price:'55$'},
//     {id:2 , name:'کیف' , description: 'جا دار ' , price:'76$'}
// ]

// const Products = ({products , onAddToCart }) => {
//     const classes = useStyles();
//     console.log(products);

//   return (
//     <main className={classes.content}>
//         <div className={classes.toolbar} />
//         <Grid container justifyContent="center" spacing={4}>
//             {
//                 products.map((product) => (
//                     <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
//                         <Product product={product} onAddToCart={onAddToCart}/>
//                     </Grid>
//                 ))
//             }
//         </Grid>
//     </main>
//   )
// }

// export default Products


const Products = ({products , onAddToCart }) => {
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={4}>
        {
                products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))
            }
        </Grid>
        </main>

    )
}
export default Products;