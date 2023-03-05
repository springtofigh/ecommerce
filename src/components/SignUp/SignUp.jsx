import React from "react";
import { Button, TextField , Box , Typography , Grid } from "@material-ui/core";
import {useForm} from "react-hook-form";

// LOGO
import Bee from '../../assets/signin-logo.png';

const SignUp = () => {
  const { register , handleSubmit , formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
      <Grid item>
        <Box mb={3}>
        <Typography>
        به فروشگاه زنبور خوش آمدید
      </Typography>
        </Box>
        <Box mb={3}>
          <img src={Bee} alt="Bee Shop" height="200px"/>
        </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
        <TextField
        variant="standard" 
        label="ایمیل" 
        fullWidth 
        autoFocus
        autoComplete="email"
        {...register("email", {required:"وارد کردن ایمیل اجباری است" , pattern :{
          value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "آدرس ایمیل غلط است", 
        },
      })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null}
        />
      </Box>
      <Box mb={2}>
        <TextField
        variant="standard" 
        label="پسورد"
        fullWidth 
        autoFocus
        autoComplete="password"
        error={!!errors.password}
        helperText={errors.password ? errors.password.message : null}
        />
      </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>ورود / ثبت نام</Button>
      </form>
      </Grid>
    </Grid>
    // <Container >
      
    // </Container>
  )
}

export default SignUp;