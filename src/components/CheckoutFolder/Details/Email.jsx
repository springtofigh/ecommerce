import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';

const Email = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
        <TextField
        variant="standard" 
        label="ایمیل" 
        fullWidth 
        autoFocus
        autoComplete="email"
        {...register("email", {required:"وارد کردن ایمیل اجباری است" , pattern :{
          value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "آدرس ایمیل غلط است", 
        },
      })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null}
        />
</Grid>
  )
}

export default Email;