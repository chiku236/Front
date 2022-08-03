import React from "react";
import LoginBanner from "../../../assets/login-banner.svg";
import Logo from "../../../assets/logo.svg";
import { Button, Label, TextInput, TextPassword } from "../../../components";
import * as Yup from "yup";
import { Form, Formik } from "formik";

const Login = () => {
  const LoginSchema = Yup.object().shape({
    user_id: Yup.string().required("User ID is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="flex flex-row w-full">
      <img src={LoginBanner} className="h-screen" alt="login banner" />
      <div className="w-full flex justify-center items-center">
        <div className="w-1/2 h-1/2">
          <img src={Logo} className="mb-14" alt="login banner" />
          <Formik
            initialValues={{
              user_id: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex flex-col">
                  <div className="mb-6">
                    <Label text="User ID" isRequired={true} />
                    <TextInput
                      placeholder="Enter User ID"
                      name="user_id"
                      isError={errors.user_id && touched.user_id}
                    />
                    {errors.user_id && touched.user_id ? (
                      <span className="text-xs text-red-500">
                        {errors.user_id}
                      </span>
                    ) : null}
                  </div>
                  <div className="mb-12">
                    <Label text="Password" isRequired={true} />
                    <TextPassword
                      placeholder="**********"
                      name="password"
                      isError={errors.password && touched.password}
                    />
                    {errors.password && touched.password ? (
                      <span className="text-xs text-red-500">
                        {errors.password}
                      </span>
                    ) : null}
                  </div>
                  <div className="mb-6">
                    <Button text="Login" isEnabled="true" type="submit" />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
