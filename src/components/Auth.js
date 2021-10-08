import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import { useForm, FormProvider } from "react-hook-form";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const formMethods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccessful");
  };

  return (
    <section className="flex justify-center items-center">
      <div className="w-full max-w-md bg-primaryOne px-6 py-8 rounded-md shadow-md">
        <FormProvider {...formMethods}>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex justify-around mb-2">
              <button
                className={`${
                  isLogin ? "bg-secondaryTwo" : "bg-transparent"
                } text-white text-xs font-bold px-6 py-4 rounded-full`}
                type="button"
                onClick={() => setIsLogin(true)}
              >
                LOG IN
              </button>
              <button
                className={`${
                  !isLogin ? "bg-secondaryTwo" : "bg-transparent"
                } text-white text-xs font-bold px-6 py-4 rounded-full`}
                type="button"
                onClick={() => setIsLogin(false)}
              >
                SIGN UP
              </button>
            </div>
            <div>
              <Label labelName="Email" />
              <Input inputName="Email" type="email" />
            </div>
            <div>
              <Label labelName="Password" />
              <Input inputName="Password" type="password" />
            </div>
            {isLogin && (
              <a
                href="/"
                className="block text-neutral font-extralight text-xs pt-6 text-center"
              >
                Forgot Password?
              </a>
            )}
            <button className="bg-secondaryTwo px-4 py-3 w-full rounded-md text-white font-bold mt-4 shadow-md">
              {isLogin ? "Log In" : "Sign Up"}
            </button>
            <div className="flex items-center py-6">
              <div className="w-1/2 h-px bg-white bg-opacity-40"></div>
              <p className="text-white px-1 text-xs">OR</p>
              <div className="w-1/2 h-px bg-white bg-opacity-40"></div>
            </div>
            <div>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
                render={(renderProps) => (
                  <button
                    className="bg-blue-600 px-4 py-3 w-full rounded-md text-white font-bold mb-4 shadow-md"
                    type="button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <i className="fab fa-google mr-2"></i>Continue with Google
                  </button>
                )}
              />
              <button
                type="button"
                className="bg-black px-4 py-3 w-full rounded-md text-white font-bold shadow-md"
              >
                <i className="fab fa-github mr-2"></i>Continue with Github
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default Auth;
