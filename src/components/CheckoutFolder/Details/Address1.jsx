import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext, Controller } from 'react-hook-form';


const Address1 = () => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
                    <Controller
                    name='address1'
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField {...field} label='آدرس' variant="standard" />
                )}
            />
    </Grid>
  )
}

export default Address1;