import { render, screen } from "@testing-library/react";
import RestauranrCart, { WithPromatedLable } from "../RestauranrCart";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../mock/resMockData.json";

test("should render reastauranr cart component with props data", () => {
  render(<RestauranrCart resData={MOCK_DATA} />);

  const name = screen.getByText("Candice's Gourmet Sandwiches & Wraps");

  expect(name).toBeInTheDocument();
});
// test("should render Restaurant card with promated label ", () => {
//   render(<WithPromatedLable />);
// });
