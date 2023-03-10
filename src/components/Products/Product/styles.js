import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth:'100%'
    },
    media: {
        height: 240,
        paddingTop: '57%',
    },
    cardHeight: {
        height: '100px',
    },
    cardContent: {
        display:'flex',
        justifyContent:'space-between',
    },
    cardActions: {
        display:'flex',
        justifyContent:'flex-end',
    },
}));