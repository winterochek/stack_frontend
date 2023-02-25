import * as yup from 'yup';

export const LoginScheme = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const RegisterScheme = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confPass: yup.string().min(8).required(),
  name: yup.string().required(),
  username: yup.string().required(),
});
