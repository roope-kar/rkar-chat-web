import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  color: rgba(255, 255, 255, 0.9);
`;

const Field = styled.div`
  margin-bottom: 20px;
`;

const EmailInput = styled.input.attrs({ type: 'email' })`
  display: block;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  padding: 0px 10px;
  border: none;
  line-height: 32px;
  &:focus {
    outline: none;
  }
`;

const PasswordInput = styled.input.attrs({ type: 'password' })`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  padding: 0px 10px;
  border: none;
  line-height: 32px;
  &:focus {
    outline: none;
  }
`;

const SigninForm: React.FunctionComponent = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleEmailChange = React.useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => setEmail(target.value),
    [],
  );
  const handlePasswordChange = React.useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => setPassword(target.value),
    [],
  );
  return (
    <Form>
      <Field>
        <EmailInput value={email} onChange={handleEmailChange} required />
      </Field>
      <Field>
        <PasswordInput value={password} onChange={handlePasswordChange} required />
      </Field>
      <button type={'submit'}>Sign In</button>
    </Form>
  );
};

export default SigninForm;
