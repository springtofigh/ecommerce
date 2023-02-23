import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginRight: '20px',
    },
    [theme.breakpoints.up('xs')]: {
      marginBottom: '5px',
      marginLeft: '20px',
      marginRight: '10px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    marginBottom: '5px',
    marginLeft: '20px',
    marginRight: '10px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));