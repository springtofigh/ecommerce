import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';

const Firstname = () => {
  const { register, formState: { errors } } = useFormContext();
  
    return (
      <Grid item xs={12} sm={6}>
                <TextField
                        label='نام'
                        variant="standard"
                        fullWidth 
                        autoFocus
                        autoComplete="name"
                        {...register("name", {required:"وارد کردن نام اجباری است" , pattern :{
                          value:/[a-zA-Z\u0600-\u06FF\s]{2,}/,
                          message: "نام بیش از حد کوتاه است", 
        },
      })}
        error={!!errors?.name}
        helperText={errors?.name ? errors.name.message : null}
        />
      </Grid>
    )
}

export default Firstname;