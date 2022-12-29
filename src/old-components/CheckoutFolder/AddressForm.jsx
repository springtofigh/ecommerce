import React,{useState , useEffect} from 'react';
import { InputLabel , Select , MenuItem , Button , Grid , Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

// API
import { commerce } from '../../lib/commerce';

// COMPONENTS
import FormInput from './Forminput';


const AddressForm = () => {
  return (
    <>
        <Typography variant='h6'>Shipping Address</Typography>
        <FormProvider>
        <form onSubmit=''>
          <Grid container spacing={3}>
                <FormInput required name='firstName' label='First name' />
                <FormInput required name='lastName'  label='Last name'/>
                <FormInput required name='address1' label='Address'/>
                <FormInput required name='email' label='Email'/>
                <FormInput required name='city' label='City'/>
                <FormInput required name='zip' label='Zip'/>
          </Grid>
        </form>
        </FormProvider>
    </>
  )
}

export default AddressForm