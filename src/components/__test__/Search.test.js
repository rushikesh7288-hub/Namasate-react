import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mock/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component witj search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cartBeforeSerach = screen.getAllByTestId("restCard");

  expect(cartBeforeSerach.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });

  //   console.log(searchButton);

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "KFC" } });

  fireEvent.click(searchButton);

  const CartAfterSearch = screen.getAllByTestId("restCard");

  expect(CartAfterSearch.length).toBe(1);

  expect(searchButton).toBeInTheDocument();
});

it("should filter top rated restaurant ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cartBeforeFilter = screen.getAllByTestId("restCard");

  expect(cartBeforeFilter.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Of Restaturant",
  });

  fireEvent.click(topRatedButton);

  const cardAfterFilter = screen.getAllByTestId("restCard");

  expect(cardAfterFilter.length).toBe(10);
});
