import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext, Controller } from 'react-hook-form';

const City = () => {
    const { control } = useFormContext();
    const isError = false;

  return (
    <Grid item xs={12} sm={6}>
    <Controller
        name='city'
        control={control}
        defaultValue=""
        error={isError}
        render={({ field }) => (
            <TextField {...field} label='شهر' variant="standard" />
        )}
/>
  </Grid>
  )
}

export default City;