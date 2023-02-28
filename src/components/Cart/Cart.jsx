import React from 'react';
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// COMPONENTS
import CartItem from './CartItem/CartItem';

// STYLES
import useStyles from './styles';


const Cart = ({ cart , handleEmptyCart , handleUpdateCartQuantity , handleRemoveFromCart}) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography varient="subtitle1">شما هیچ چیز به سبد خرید خود اضافه نکردید
        <Link to="/" className={classes.link}>خرید را ادامه دهید</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    < CartItem item={item} handleUpdateCartQuantity={handleUpdateCartQuantity} onRemoveFromCart={handleRemoveFromCart} />
                </Grid>
            ) )}
        </Grid>
        <div className={classes.cardDetails}>
        <Typography variant="h4">
            قیمت نهایی: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
            <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">پرداخت</Button>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>خالی کردن سبد</Button>
        </div>
        </div>
        </>
    );

    if (!cart.line_items) return 'Loading...';

  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>سبد خرید شما</Typography>
        { !cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
    </Container>
  )
}

export default Cart

// const Cart = () => {
//     const classes = useStyles();


// const Cart = ({ cart , handleEmptyCart , handleUpdateCartQuantity , handleRemoveFromCart}) => {
//     const classes = useStyles();

//     const EmptyCart = () => (
//         <Typography varient="subtitle1">شما هیچ چیز به سبد خرید خود اضافه نکردید
//         <Link to="/" className={classes.link}>خرید را ادامه دهید</Link>
//         </Typography>
//     );

//     const FilledCart = () => (
//         <>
//         <Grid container spacing={3}>
//             {cart.line_items.map((item) => (
//                 <Grid item xs={12} sm={4} key={item.id}>
//                     < CartItem item={item} handleUpdateCartQuantity={handleUpdateCartQuantity} onRemoveFromCart={handleRemoveFromCart} />
//                 </Grid>
//             ) )}
//         </Grid>
//         <div className={classes.cardDetails}>
//             <Typography variant="h4">
//                 قیمت نهایی: {cart.subtotal.formatted_with_symbol}
//             </Typography>
//         <div>
//             <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">پرداخت</Button>
//             <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>خالی کردن سبد</Button>
//         </div>
//         </div>
//         </>
//     )

//         if (!cart.line_items) return 'Loading...';

//   return (
//     <Container>
//         <div className={classes.toolbar} />
//         <Typography className={classes.title} variant="h3" gutterBottom>سبد خرید شما</Typography>
//         { !cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
//     </Container>
//   )
//     }

// export default Cart