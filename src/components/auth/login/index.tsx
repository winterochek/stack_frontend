import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

export const LoginPage: React.FC<IPropsLogin> = (
  props: IPropsLogin
): JSX.Element => {
  const { navigate, setEmail, setPassword } = props;
  return (
    <>
      <Typography
        variant='h2'
        marginBottom={1}
        textAlign='center'
        className='auth__heading'
      >
        Authorization
      </Typography>
      <Typography variant='body1' textAlign='center' className='auth__subtitle'>
        Your credentials
      </Typography>
      <TextField
        onChange={e => setEmail(e.target.value)}
        fullWidth={true}
        margin='normal'
        label='Email'
        variant='outlined'
        placeholder='Type your email'
      />
      <TextField
        onChange={e => setPassword(e.target.value)}
        type='password'
        fullWidth={true}
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Type your password'
      />
      <Button
        type='submit'
        sx={{ marginTop: 2, marginBottom: 2, width: '30%' }}
        variant='contained'
      >
        Sign in
      </Button>
      <Typography variant='body1' textAlign='center' className='auth__subtitle'>
        Haven`t registered yet?{' '}
        <span onClick={e => navigate('/register')} className='inciting__text'>
          Sign up
        </span>
      </Typography>
    </>
  );
};
