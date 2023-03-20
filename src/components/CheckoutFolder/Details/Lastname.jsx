import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  helperText: {
    textAlign: "right",
  }
}));

const Lastname = () => {
  const { register, formState: { errors } } = useFormContext();
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
                      <TextField
                        placeholder='نام خانودگی مانند توانا'
                        variant="standard"
                        fullWidth 
                        autoComplete="lastName"
                        {...register("lastName", {required:"وارد کردن نام خانوادگی اجباری است" , pattern :{
                          value:/[a-zA-Z\u0600-\u06FF\s]{3,}/,
                          message: "نام خانوادگی بیش از حد کوتاه است", 
        },
      })}
        error={!!errors?.lastName}
        helperText={errors?.lastName ? errors.lastName.message : null}
        FormHelperTextProps={{
          className: classes.helperText
        }}
        />
    </Grid>
  )
}

export default Lastname;