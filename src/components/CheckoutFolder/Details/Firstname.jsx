import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext, Controller } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  firstName:yup.string().required('لطفا  وارد کنید')
})

const Firstname = () => {
  // const { control , handleSubmit , erros } = useFormContext({
  //   validationSchema: schema,
  // });
  
  const { control , erros } = useFormContext({
    validationSchema: schema,
  });
  
    return (
      <Grid item xs={12} sm={6}>
                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                          <TextField {...field} 
                          label='نام'
                          variant="standard"
                          error={!!erros.firstName}
                          helperText={erros.firstName?.message}
                          />
                    )}
                  />
      </Grid>
    )
}

export default Firstname;