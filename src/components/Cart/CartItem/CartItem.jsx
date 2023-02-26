import React from 'react';
import { Typography , Button , Card , CardActions , CardMedia , CardContent} from '@material-ui/core';

// STYLES
import useStyles from './styles';

// const CartItem = ({item , handleUpdateCartQuantity , onRemoveFromCart}) => {
//   const classes = useStyles();
//   return (
    
//       <Card>
//         <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
//         <CardContent className={classes.CardContent}>
//                     <Typography variant="h4">{item.name}</Typography>
//                     <Typography variant="h4">{item.line_total.formatted_with_symbol}</Typography>
//         </CardContent>
//         <CardActions className={classes.cardActions}>
//                 <div className={classes.buttons}>
//             <Button type="button" size="small" onClick={() => handleUpdateCartQuantity (item.id, item.quantity - 1)}>-</Button>
//             <Typography>{item.quantity}</Typography>
//             <Button type="button" size="small" onClick={() => handleUpdateCartQuantity (item.id, item.quantity + 1)}>+</Button>
//                 </div>
//             <Button varient="contained" type="button" color="primary" onClick={() => onRemoveFromCart(item.id)}>حذف</Button>
//         </CardActions>
//       </Card>
    
//   )
// }

// export default CartItem


const CartItem = ({ item }) =>{
    const classes = useStyles();
  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
        <CardContent className={classes.CardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h4">{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
            <Button varient="contained" type="button" color="primary">حذف</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem;