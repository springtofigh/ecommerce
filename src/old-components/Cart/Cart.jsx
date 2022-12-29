import React from 'react';
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// COMPONENTS
import CartItem from './CartItem/CartItem';

// STYLES
import useStyles from './styles';

const Cart = ({ cart , handleUpdateCart , handleEmptyCart , handleRemoveFromCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography varient="subtitle1">You have no items in your shopping cart,
        <Link to="/" className={classes.link}>continue adding some?</Link>
        </Typography>
    )

    if (!cart.line_items) return 'Loading...';

    const FilledCart = () => (
        <>
    <Grid container spacing={3}>
        {cart.line_items.map((item) => (
        <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCart={handleUpdateCart} onRemoveFromCart={handleRemoveFromCart}/>
        </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
            Total price: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Go to pay</Button>
        </div>
      </div>
    </>
)

return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
    </Container>
)
}

export default Cart;