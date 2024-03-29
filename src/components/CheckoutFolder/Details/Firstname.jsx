import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  helperText: {
    textAlign: "right",
  }
}));

const Firstname = () => {
  const { register, formState: { errors } } = useFormContext();
  const classes = useStyles();

    return (
      <Grid item xs={12} sm={6}>
                <TextField
                        placeholder='نام مانند سارا'
                        variant="standard"
                        fullWidth 
                        autoFocus
                        {...register("name", {required:"وارد کردن نام اجباری است" , pattern :{
                          value:/[a-zA-Z\u0600-\u06FF\s]{2,}/,
                          message: "نام بیش از حد کوتاه است", 
        },
      })}
        error={!!errors?.name}
        helperText={errors?.name ? errors.name.message : null}
        FormHelperTextProps={{
          className: classes.helperText
        }}
        />
      </Grid>
    )
}

export default Firstname;