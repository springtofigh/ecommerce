import React,{useState , useEffect} from 'react';
import { InputLabel , FormControl , Select , MenuItem , Button , Grid , Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

// API
import { commerce } from '../../lib/commerce';

// COMPONENTS
import FirstName from './Details/Firstname';
import LastName from './Details/Lastname';
import Address from './Details/Address1';
import Email from './Details/Email';
import City from './Details/City';
import ZipCode from './Details/ZipCode';

const AddressForm = ({checkoutToken , next}) => {
    const [shippingCountries , setShippingCountries] = useState([]);
    const [shippingCountry , setShippingCountry] = useState('');
    const [shippingSubdevisions , setShippingSubdevisions] = useState([]);
    const [shippingSubdevision , setShippingSubdevision] = useState('');
    const [shippingOptions , setShippingOptions] = useState([]);
    const [shippingOption , setShippingOption] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code , name]) => ({id: code , label: name}));
    const subdivisions = Object.entries(shippingSubdevisions).map(([code , name]) => ({id: code , label: name}));
    const options = shippingOptions.map(shippingOption => ({id: shippingOption.id , label: `${shippingOption.description} - (${shippingOption.price.formatted_with_symbol})`}))
    //console.log(shippingOptions)
    // console.log(countries);

      // FETCHING SHIPING COUNTRIES 
    const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
    // console.log(countries);
}

const fetchSubdivision = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    setShippingSubdevisions(subdivisions);
    setShippingSubdevision(Object.keys(subdivisions)[0]);
}

const fetchShippingOptions = async (checkoutTokenId , country , region = null) => {
  const options  = await commerce.checkout.getShippingOptions(checkoutTokenId , {country , region });
  setShippingOptions(options);
  setShippingOption(options[0].id);
}

useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
} , [checkoutToken.id]);

useEffect(() => {
    if(shippingCountry) fetchSubdivision(shippingCountry)
} , [shippingCountry]);

useEffect(() => {
    if(shippingSubdevisions) fetchShippingOptions(checkoutToken.id , shippingCountry , shippingSubdevision)
} , [checkoutToken.id , shippingCountry , shippingSubdevisions, shippingSubdevision]);


  return (
    <>
        <Typography variant='h6' gutterBottom>آدرس ارسال</Typography>
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({...data , shippingCountry , shippingSubdevision , shippingOption}))}>
        <Grid container spacing={3}>
                <FirstName/>
                <LastName/>
                <Address/>
                <Email/>
                <City/>
                <ZipCode/>
                <Grid item xs={12} sm={6}>
                <InputLabel>کشور</InputLabel>    
                <FormControl fullWidth required>
                <Select value={shippingCountry} fullWidth onChange={e => setShippingCountry(e.target.value)}>
                    {countries.map((country) => (
                        <MenuItem key={country.id} value={country.id}>
                            {country.label}
                        </MenuItem>
                        ))}
                        
                </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <InputLabel>شهر</InputLabel>    
                <FormControl fullWidth required>
                <Select value={shippingSubdevision} fullWidth onChange={e => setShippingSubdevision(e.target.value)}>
                            {subdivisions.map((subdivision) => (
                                <MenuItem key={subdivision.id} value={subdivision.id}>
                                {subdivision.label}
                            </MenuItem>
                            ))}
                        </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <InputLabel>هزینه ارسال</InputLabel>
                        <Select value={shippingOption} fullWidth onChange={e => setShippingOption(e.target.value)}>
                        {options.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </Select>
                </Grid>
        </Grid>
            <br/>
                <div style={{display: 'flex' , justifyContent:'space-between'}}>
                    <Button type="submit" color="primary" variant="contained">بعدی</Button>
                    <Button component={Link} to='/cart' variant="outlined">بازگشت به پروفایل</Button>
                </div>
        </form>
        </FormProvider>
    </>
  )
}

export default AddressForm;