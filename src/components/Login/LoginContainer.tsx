import React from "react";
import FormLogin from "./index";
import { LOGIN } from "./operations/mutations"
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router'

const FormLoginContainer = () => {

  const [login] = useMutation(LOGIN);
  const router = useRouter()

  const onLogin = (
    email: string,
    password: string,
    setShowPreloader: Function,
    setMessage: Function
  ) => {

    login(
      {
        variables: { username: email, password },
        // @ts-ignore
        update: (cache, { data: { login } }) => {
          const { accessToken } = login;

          if (accessToken !== null) {
            localStorage.setItem("access_token", accessToken);
            router.push('/')
          } else {
            setShowPreloader(false);
            setMessage("Email or password invalid");
          }
        }
      });

  }

  return (<FormLogin onLogin={onLogin} />)
}

export default FormLoginContainer;
