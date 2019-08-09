import React from "react";
import { withFormik, Field, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

window.axios = axios;

function RegForm({ errors, touched, isSubmitting, setToken }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/data" />;
  }
  return (
    <Form data-testid="reg-form" className="login-form">
      <h2>Create User</h2>
      <div data-testid="form-container" className="form-container">
        {/* USERNAME */}
        <p className="error-text">{touched.username && errors.username}</p>
        <label htmlFor="username">Username</label>
        <Field
          autoComplete="off"
          type="text"
          id="username"
          name="username"
          className={errors.username ? "invalid" : ""}
          data-testid="username"
        />
      </div>
      <div data-testid="form-container" className="form-container">
        {/* EMAIL */}
        <p className="error-text">{touched.email && errors.email}</p>
        <label htmlFor="email">Email</label>
        <Field
          autoComplete="off"
          type="email"
          id="email"
          name="email"
          data-testid="email"
        />
      </div>
      <div data-testid="form-container" className="form-container">
        {/* PASSWORD */}
        <p className="error-text">{touched.password && errors.password}</p>
        <label htmlFor="password">Password</label>
        <Field
          autoComplete="off"
          type="text"
          id="password"
          name="password"
          data-testid="password"
        />
      </div>
      <div data-testid="form-container" className="form-container">
        {/* TERMS */}
        <p className="error-text">{errors.terms}</p>
        <label htmlFor="terms">I accept the terms of service</label>
        <Field
          className="field"
          autoComplete="off"
          type="checkbox"
          id="terms"
          name="terms"
          value="terms"
          data-testid="terms"
        />
      </div>
      {isSubmitting && <p>Loading...</p>}
      <button
        data-testid="button"
        className="submit-button"
        disabled={isSubmitting}
      >
        Register
      </button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      username: "",
      password: "",
      email: "",
      check: false
    };
  },

  handleSubmit: (values, formikBag) => {
    const { setToken } = formikBag.props;
    formikBag.resetForm();
    console.log("FORM SUCCESSFULLY SUBMITTED");
    const url = "http://localhost:5000/api/register";
    formikBag.setSubmitting(true);
    console.log(formikBag);
    axios.post(url, values).then(response => {
      console.log(response.data);
      setToken(response.data.token);
      formikBag.setSubmitting(false);
    });
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3, "Username should be at least 5 characters long")
      .max(15, "Username must be at most 15 characters long")
      .required("Username is required"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters long")
      .max(15, "Password must be at most 15 characters long")
      .required("Password is required"),
    email: Yup.string()
      .min(8, "Email must be at least 8 characters long")
      .max(30, "Email must be at most 30 characters long")
      .required("Email is required"),
    terms: Yup.boolean()
      .oneOf([true], "Must Accept Terms of Service")
      .required("Must Accept Terms of Service")
  })
})(RegForm);
