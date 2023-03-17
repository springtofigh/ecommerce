import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';

const Lastname = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
                      <TextField
                        label='نام خانوادگی'
                        variant="standard"
                        fullWidth 
                        autoFocus
                        autoComplete="lastName"
                        {...register("lastName", {required:"وارد کردن نام خانوادگی اجباری است" , pattern :{
                          value:/[a-zA-Z\u0600-\u06FF\s]{3,}/,
                          message: "نام خانوادگی بیش از حد کوتاه است", 
        },
      })}
        error={!!errors?.lastName}
        helperText={errors?.lastName ? errors.lastName.message : null}
        />
    </Grid>
  )
}

export default Lastname;