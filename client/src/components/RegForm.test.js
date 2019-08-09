import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import RegForm from "./RegForm";

describe("<RegForm />", () => {
  it("should render a form with four children", () => {
    const regform = render(<RegForm />);
    const form = regform.getByTestId("reg-form");
    const children = form.children.length;
    expect(children).toBe(6);
  });

  it("should reset form", () => {
    const regform = render(<RegForm />);
    const btn = regform.getByTestId("button");
    const username = regform.getByTestId("username");
    const email = regform.getByTestId("email");
    const password = regform.getByTestId("password");
    username.value = "BDesselle";
    email.value = "desselle.brandon@gmail.com";
    password.value = "Password123";
    expect(username.value).toBe("BDesselle");
    expect(email.value).toBe("desselle.brandon@gmail.com");
    expect(password.value).toBe("Password123");
    fireEvent.click(btn);
    expect(username.value).toBe("");
    expect(email.value).toBe("");
    expect(password.value).toBe("");
  });
});
