import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';

const City = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <TextField
                        placeholder='شهر مانند تهران'
                        variant="standard"
                        fullWidth 
                        autoComplete="city"
                        {...register("city", {required:"وارد کردن نام شهر اجباری است" , pattern :{
                          value:/[a-zA-Z\u0600-\u06FF\s]{3,20}/,
                          message: "لطفا شهر را درست وارد کنید", 
        },
      })}
        error={!!errors?.city}
        helperText={errors?.city ? errors.city.message : null}
        />
  </Grid>
  )
}

export default City;