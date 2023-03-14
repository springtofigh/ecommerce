import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext, Controller } from 'react-hook-form';

const Email = () => {
    const { control } = useFormContext();
    const isError = false;

  return (
    <Grid item xs={12} sm={6}>
            <Controller
                    name='email'
                    control={control}
                    defaultValue=""
                    error={isError}
                    render={({ field }) => (
                        <TextField {...field} label='ایمیل' variant="standard" />
                )}
            />
</Grid>
  )
}

export default Email;