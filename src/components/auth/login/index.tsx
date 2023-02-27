import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';
import { useStyles } from './../styles';
export const LoginPage: React.FC<IPropsLogin> = (
  props: IPropsLogin
): JSX.Element => {
  const { navigate, register, errors } = props;
  const classes = useStyles();
  return (
    <>
      <Typography
        variant='h2'
        marginBottom={1}
        textAlign='center'
        className={classes.auth__heading}
      >
        Authorization
      </Typography>
      <Typography variant='body1' textAlign='center'>
        Your credentials
      </Typography>
      <TextField
        error={!!errors.email}
        helperText={!!errors.email ? `${errors.email.message}` : ''}
        fullWidth={true}
        margin='normal'
        label='Email'
        variant='outlined'
        placeholder='Type your email'
        {...register('email')}
      />
      <TextField
        error={!!errors.password}
        helperText={!!errors.password ? `${errors.password.message}` : ''}
        {...register('password')}
        type='password'
        fullWidth={true}
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Type your password'
      />
      <Button type='submit' variant='contained' className={classes.button}>
        Sign in
      </Button>
      <Typography variant='body1' textAlign='center' className='auth__subtitle'>
        Haven`t registered yet?{' '}
        <span
          onClick={e => navigate('/register')}
          className={classes.inciting__text}
        >
          Sign up
        </span>
      </Typography>
    </>
  );
};
