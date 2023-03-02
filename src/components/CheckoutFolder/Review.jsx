import React from 'react';
import { Typography , List , ListItem , ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => {
  return (
    <>
    <Typography variant="h6" gutterBottom>خلاصه سفارش</Typography>
    <List disablePadding>
      {checkoutToken.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
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

// const Review = ({checkoutToken}) => {
//   return (
//     <>
//         <Typography variant="h6" gutterBottom>خلاصه سفارش</Typography>
//         <List disablePadding>
//         <ListItem>
//         <ListItemText primary="ساعت sonto" secondary="تعداد: 2 عدد"/>
//         <Typography variant='body2'>
//             85$
//         </Typography>
//         </ListItem>
            {/* {checkoutToken.live.line_items.map((product) =>(
//         <ListItem style={{padding:'10px 0'}} key={product.name}>
//             <ListItemText primary={product.name} secondary={`تعداد: ${product.quantity}`} />
//             <Typography variant='body2'>
//                 {product.line_total.formatted_with_symbol}
//             </Typography>
//         </ListItem>
//     ))} */}
//        <ListItem style={{padding:'10px 0'}}>
//            <ListItemText primary="قیمت نهایی" />
//              <Typography variant='subtitle1' style={{fontWeight: 700}}>
//                {/* {checkoutToken.live.subtotal.formatted_with_symbol} */}
//                115$
//              </Typography>
//          </ListItem>
//         </List>
//     </>
//  )
// }

// export default Review