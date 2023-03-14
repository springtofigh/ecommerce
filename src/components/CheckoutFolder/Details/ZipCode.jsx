import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext, Controller } from 'react-hook-form';

const ZipCode = () => {
    const { control } = useFormContext();
    const isError = false;

  return (
    <Grid item xs={12} sm={6}>
    <Controller
        name='zip'
        control={control}
        defaultValue=""
        error={isError}
        render={({ field }) => (
            <TextField {...field} label='کدپستی' variant="standard" />
        )}
    />
  </Grid>
  )
}

export default ZipCode;