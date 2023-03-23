import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  helperText: {
    textAlign: "right",
  }
}));

const Email = () => {
  const { register, formState: { errors } } = useFormContext();
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
        <TextField
        placeholder='example@gmail.com'
        variant="standard" 
        fullWidth 
        {...register("email", {required:"وارد کردن ایمیل اجباری است" , pattern :{
          value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "آدرس ایمیل غلط است", 
        },
      })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null}
        FormHelperTextProps={{
          className: classes.helperText
        }}
        />
</Grid>
  )
}

export default Email;