import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

// LOGO
import logo from '../../assets/store.png';
// STYLES
import useStyles from './styles';


// const Navbar = ({totalItems}) => {
//   const classes = useStyles();
//   const location = useLocation();

//   return (
//     <>
//     <AppBar position="fixed" className={classes.appBar} color="inherit">
//       <Toolbar>
//       <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
//             <img src={logo} alt="فروشگاه زنبور" height="25px" className={classes.image} />
//             بی شاپ
//         </Typography>
//         <div className={classes.grow}/>
//         {location.pathname === '/' && (
//           <div className={classes.button}>
//             <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
//               <Badge badgeContent={totalItems} overlap="rectangular" color="secondary">
//               <ShoppingCart/>
//               </Badge>
//             </IconButton>
//         </div>
//         )}
//       </Toolbar>
//     </AppBar>
//     </>
//   )
// }

// export default Navbar


const Navbar = ({totalItems}) => {
    const classes = useStyles();
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                <img src={logo} alt="فروشگاه زنبور" height="25px" className={classes.image} />
                    بی شاپ
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        {/* <Badge badgeContent={2} overlap="rectangular" color="secondary"> */}
                        <Badge badgeContent={totalItems} overlap="rectangular" color="secondary">
                        <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar;