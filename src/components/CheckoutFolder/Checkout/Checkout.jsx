import React, {useState , useEffect} from 'react';
import { Paper , Stepper , Step , StepLabel , Typography , Divider , Button , CircularProgress , CssBaseline } from '@material-ui/core';
import { Link , useLocation } from 'react-router-dom';

// API
import { commerce } from '../../../lib/commerce';
// STYLES
import useStyles from './styles';
// COMPONENTS
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';


// CHECKOUT STEPS
const steps = ['آدرس ارسال' , 'اطلاعات پرداخت'];


const Checkout = ({ cart , error , refreshCart }) => {
    const [activeStep , setActiveStep] = useState(0);
    const [checkoutToken , setCheckoutToken] = useState(null);
    const [shippingData , setShippingData] = useState({});
    const [finished , setFinished] = useState(false);

    const classes = useStyles();
    const location = useLocation();

    //Generating Token
    useEffect(() => {
      if (cart.id) {
        const generateToken = async () => {
          try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          console.log(token);
          setCheckoutToken(token)
          } catch {
            if (activeStep !== steps.length) location.push('/');
          }
        };
        generateToken();
      }
    }, [cart , activeStep , location]);
    // useEffect(() => {
    //   const generateToken = async () => {
    //     try {
    //       const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
    //       console.log(token);
    //       setCheckoutToken(token)
    //     } catch (error) {
    //       console.log("An Error occured.");
    //     }
    //   }
    //   generateToken();
    // } , [cart]);

    // CHANGE STEP
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const payTimeout = () => {
      setTimeout(() => {
        setFinished(true)
      }, 3000)
    }

        // CONFIRMATION COMPONENT
  let Confirmation = () => finished ? (
    <>
    <div>
      <Typography variant="h5">بابت  خریدت  از  فروشگاه  زنبور  ممنونیم</Typography>
      <Divider className={classes.divider} />
    </div>
    <br />
    <Button component={Link} variant="outlined" type="button" to="/">بازگشت به خانه</Button>
  </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">{error}!خطا</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">بازگشت به خانه</Button>
      </>
    );
  }
        
            const Form = () => activeStep === 0 ? 
            <AddressForm checkoutToken={checkoutToken} next={next}/> :
            <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} payTimeout={payTimeout} refreshCart={refreshCart}/>
    
  return (
    <>
    <CssBaseline/>
    <div className={classes.toolbar} />
    <main className={classes.layout}>
    <Paper className={classes.paper}>
    <Typography variant="h4" align="center">پرداخت</Typography>
            <Stepper activeStep={activeStep}>
               {steps.map((step) => (
                   <Step key={step}>
                    <StepLabel StepIconProps={{ classes: { root: classes.icon } }}>
                            {step}
                    </StepLabel>
                   </Step>
                ))}
            </Stepper>
              {/* LAST STEP  */}
            {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>}
    </Paper>
    </main>
    </>
  )
}

export default Checkout;