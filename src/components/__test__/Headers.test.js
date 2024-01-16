import { fireEvent, render, screen } from "@testing-library/react";
import Headers from "../Headers";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("should render header component  with a login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});
it("should render header component  with a cart item  0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart(0 items)");
  expect(cartItem).toBeInTheDocument();
});
it("should render header component  with log out button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const logout = screen.getByRole("button", { name: "Login" });
  expect(logout).toBeInTheDocument();
});
it("should change login button clic logout button  header component  with a cart item  0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
