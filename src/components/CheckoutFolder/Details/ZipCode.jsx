import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  helperText: {
    textAlign: "right",
  }
}));

const ZipCode = () => {
  const { register, formState: { errors } } = useFormContext();
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
            <TextField
                        placeholder='کدپستی مانند ۱۲۳۴۵۶ '
                        variant="standard"
                        fullWidth 
                        {...register("zipCode", {required:"وارد کردن کدپستی اجباری است" , pattern :{
                          value:/^[0-9]{6}$/,
                          message: "کد پستی باید شش رقم باشد", 
        },
      })}
        error={!!errors?.zipCode}
        helperText={errors?.zipCode ? errors.zipCode.message : null}
        FormHelperTextProps={{
          className: classes.helperText
        }}
        />
  </Grid>
  )
}

export default ZipCode;