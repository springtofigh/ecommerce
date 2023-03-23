import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  helperText: {
    textAlign: "right",
  }
}));

const City = () => {
  const { register, formState: { errors } } = useFormContext();
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <TextField
                        placeholder='شهر مانند تهران'
                        variant="standard"
                        fullWidth 
                        {...register("city", {required:"وارد کردن نام شهر اجباری است" , pattern :{
                          value:/[a-zA-Z\u0600-\u06FF\s]{3,20}/,
                          message: "لطفا شهر را درست وارد کنید", 
        },
      })}
        error={!!errors?.city}
        helperText={errors?.city ? errors.city.message : null}
        FormHelperTextProps={{
          className: classes.helperText
        }}
        />
  </Grid>
  )
}

export default City;