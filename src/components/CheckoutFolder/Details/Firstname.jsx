import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext, Controller } from 'react-hook-form';

const Firstname = () => {
    const { control } = useFormContext();
    const isError = false;
  
    return (
      <Grid item xs={12} sm={6}>
                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue=""
                      error={isError}
                      render={({ field }) => (
                          <TextField {...field} label='نام' variant="standard" />
                    )}
                  />
      </Grid>
    )
}

export default Firstname;