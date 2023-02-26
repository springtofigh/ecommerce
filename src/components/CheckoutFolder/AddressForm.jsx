import React,{useState , useEffect} from 'react';
import { InputLabel , TextField , Select , MenuItem , Button , Grid , Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

// API
import { commerce } from '../../lib/commerce';

// COMPONENTS
import FormInput from './Forminput';


// const AddressForm = ({ckeckoutToken , next}) => {
//     const [shippingCountries , setShippingCountries] = useState([]);
//     const [shippingCountry , setShippingCountry] = useState('');
//     const [shippingSubdevisions , setShippingSubdevisions] = useState([]);
//     const [shippingSubdevision , setShippingSubdevision] = useState('');
//     const [shippingOptions , setShippingOptions] = useState([]);
//     const [shippingOption , setShippingOption] = useState('');
//   const methods = useForm();

//   const countries = Object.entries(shippingCountries).map(([code , name]) => ({id: code , label: name}));
//   const subdivisions = Object.entries(shippingCountry).map(([code , name]) => ({id: code , label: name}));
//   const options = shippingOptions.map(shippingOption => ({id: shippingOption.id , label: `${shippingOption.description} - (${shippingOption.price.formatted_with_symbol})`}))
//   console.log(shippingOptions)

//   // FETCHING SHIPING COUNTRIES 
//   const fetchShippingCountries = async (checkoutTokenId) => {
//     const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
//     setShippingCountries(countries)
//     setShippingCountry(Object.keys(countries)[0])
// }

// const fetchSubdivision = async (countryCode) => {
//   const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
//   setShippingSubdevisions(subdivisions);
//   setShippingSubdevision(Object.keys(subdivisions)[0]);
// }

// const fetchShippingOptions = async (checkoutTokenId , country , region = null) => {
//   const options  = await commerce.checkout.getShippingOptions(checkoutTokenId , {country , region });
//   setShippingOptions(options);
//   setShippingOption(options[0].id);
// }

// useEffect(() => {
//   fetchShippingCountries(ckeckoutToken.id)
// } , []);

// useEffect(() => {
//   if(shippingCountry) fetchSubdivision(shippingCountry)
// } , [shippingCountry]);

// useEffect(() => {
//   if(shippingSubdevisions) fetchShippingOptions(ckeckoutToken.id , shippingCountry , shippingSubdevision)
// } , [shippingSubdevision]);

//   return (
//     <>
//     <Typography variant='h6'>آدرس ارسال</Typography>
//     <FormProvider {...methods}>
//     <form onSubmit={methods.handleSubmit((data) => next({...data , shippingCountry , shippingSubdevision , shippingOption}))}>
//       <Grid container spacing={3}>
//                 <FormInput required name='firstName' label='نام' />
//                 <FormInput required name='lastName'  label='نام خانوادگی'/>
//                 <FormInput required name='address1' label='Address'/>
//                 <FormInput required name='email' label='ایمیل'/>
//                 <FormInput required name='city' label='شهر'/>
//                 <FormInput required name='zip' label='کدپستی'/>
//                 <Grid item xs={12} sm={6}>
//                 <InputLabel>کشور</InputLabel>
//                 <Select value={shippingCountry} fullWidth onChange={e => setShippingCountry(e.target.value)}>
//                             {countries.map((country) => (
//                                 <MenuItem key={country.id} value={country.id}>
//                                 {country.label}
//                             </MenuItem>
//                             ))}
//                         </Select>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <InputLabel>شهرها</InputLabel>
//                 <Select value={shippingSubdevision} fullWidth onChange={e => setShippingSubdevision(e.target.value)}>
//                             {subdivisions.map((subdivision) => (
//                                 <MenuItem key={subdivision.id} value={subdivision.id}>
//                                 {subdivision.label}
//                             </MenuItem>
//                             ))}
//                         </Select>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <InputLabel>گزینه های ارسال</InputLabel>
//                         <Select value={shippingOption} fullWidth onChange={e => setShippingOption(e.target.value)}>
//                         {options.map((option) => (
//                                 <MenuItem key={option.id} value={option.id}>
//                                 {option.label}
//                             </MenuItem>
//                             ))}
//                         </Select>
//           </Grid>
//                 </Grid>
//           <br/>
//                 <div style={{display: 'flex' , justifyContent:'space-between'}}>
//                     <Button type="submit" color="primary" variant="contained">بعدی</Button>
//                     <Link to='/cart'>
//                     <Button variant="outlined">بازگشت به پروفایل</Button>
//                     </Link>
//                 </div>
//     </form>
          
        
//         </FormProvider>
//     </>
//   )
// }

// export default AddressForm