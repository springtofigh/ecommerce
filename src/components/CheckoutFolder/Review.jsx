import React from 'react';
import { Typography , List , ListItem , ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => {
  return (
    <>
    <Typography variant="h6" gutterBottom>خلاصه سفارش</Typography>
    <List disablePadding>
      {checkoutToken.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0', display:'flex', flexDirection:'column' , alignItems:'center'}} key={product.name}>
          <ListItemText primary={product.name} secondary={`تعداد محصول: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="جمع کل :" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.subtotal.formatted_with_symbol}
        </Typography>
      </ListItem>
    </List>
    </>
  )
}

export default Review