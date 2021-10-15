import React, { useState } from "react";
import Input from "../utils/Input";
import Label from "../utils/Label";
import { useForm, FormProvider } from "react-hook-form";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signin, signup } from "../../actions/auth";
import ErrorMessage from "../utils/ErrorMessage";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const formMethods = useForm();
  const { handleSubmit } = formMethods;
  const authData = useSelector((state) => state.auth.authData);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    if (isLogin) {
      dispatch(signin(data, history));
    } else {
      dispatch(signup(data, history));
    }
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
    <section className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-start-2 row-end-3 md:row-start-1 md:row-end-2 mx-3 sm:mx-0 md:my-auto">
      <div className=" w-full max-w-md bg-primaryOne px-6 py-8 rounded-md shadow-md mx-auto">
        <FormProvider {...formMethods}>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex justify-around mb-2">
              <button
                className={`${
                  isLogin
                    ? "bg-secondaryTwo"
                    : "transition bg-transparent hover:bg-secondaryTwo"
                } text-white text-xs font-bold px-6 py-4 rounded-full`}
                type="button"
                onClick={() => setIsLogin(true)}
              >
                LOG IN
              </button>
              <button
                className={`${
                  !isLogin
                    ? "bg-secondaryTwo"
                    : "transition bg-transparent hover:bg-secondaryTwo"
                } text-white text-xs font-bold px-6 py-4 rounded-full`}
                type="button"
                onClick={() => setIsLogin(false)}
              >
                SIGN UP
              </button>
            </div>
            <div>
              {!isLogin && (
                <div>
                  <Label labelName="Name" />
                  <Input inputName="name" type="text" bgColor="primaryTwo" />
                </div>
              )}
              <div>
                <Label labelName="Email" />
                <Input inputName="email" type="email" bgColor="primaryTwo" />
              </div>
              <div>
                <Label labelName="Password" />
                <Input
                  inputName="password"
                  type="password"
                  bgColor="primaryTwo"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-neutral font-extralight text-xs pt-6"
              >
                {!isLogin
                  ? "Already have an account? Log In"
                  : "Don't have an account? Sign Up"}
              </button>
              <ErrorMessage errorMessage={authData?.message} />
            </div>

            <button className="bg-secondaryTwo hover:bg-secondaryOne transition px-4 py-3 w-full rounded-md text-white font-bold mt-4 shadow-md">
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
                    className="bg-blue-600 hover:bg-blue-500 transition px-4 py-3 w-full rounded-md text-white font-bold mb-4 shadow-md"
                    type="button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <i className="fab fa-google mr-2"></i>Continue with Google
                  </button>
                )}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default Auth;
