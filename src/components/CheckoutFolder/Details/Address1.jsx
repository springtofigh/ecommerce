import React from 'react';
import { TextField , Grid } from "@material-ui/core";
import { useFormContext } from 'react-hook-form';


const Address1 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
                        <TextField
                        label='آدرس'
                        InputLabelProps={{
                          style: {direction: 'rtl'}
                        }}
                        variant="standard"
                        fullWidth 
                        autoFocus
                        autoComplete="address1"
                        {...register("address1", {required:"وارد کردن آدرس اجباری است" , pattern :{
                          value:/[a-zA-Z\u0600-\u06FF\s]{12,}/,
                          message: "لطفا آدرس را دقیق تر وارد کنید", 
        },
      })}
        error={!!errors?.address1}
        helperText={errors?.address1 ? errors.address1.message : null}
        />
    </Grid>
  )
}

export default Address1;