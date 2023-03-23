import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  helperText: {
    textAlign: "right",
  }
}));


const Address1 = () => {
  const { register, formState: { errors } } = useFormContext();
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
                        <TextField
                        placeholder='آدرس مانند تهران پارک وی'
                        variant="standard"
                        fullWidth 
                        {...register("address", {required:"وارد کردن آدرس اجباری است" , pattern :{
                          value:/[a-zA-Z\u0600-\u06FF\s]{12,}/,
                          message: "لطفا آدرس را دقیق تر وارد کنید", 
        },
      })}
        error={!!errors?.address}
        helperText={errors?.address ? errors.address.message : null}
        FormHelperTextProps={{
          className: classes.helperText
        }}
        />
    </Grid>
  )
}

export default Address1;