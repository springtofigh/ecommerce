import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';

const ZipCode = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
            <TextField
                        label='کدپستی'
                        InputLabelProps={{
                          style: {direction: 'rtl'}
                        }}
                        variant="standard"
                        fullWidth 
                        autoFocus
                        autoComplete="zip"
                        {...register("zip", {required:"وارد کردن کدپستی اجباری است" , pattern :{
                          value:/[0-9]{6,}/,
                          message: "کد پستی باید شش رقم باشد", 
        },
      })}
        error={!!errors?.zip}
        helperText={errors?.zip ? errors.zip.message : null}
        />
  </Grid>
  )
}

export default ZipCode;