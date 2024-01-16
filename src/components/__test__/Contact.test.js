import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component Test case", () => {
  it("should load conat us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load the button inside coontact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  // test("should input box  inside coontact Component", () => {
  //   render(<Contact />);

  //   const inputNanme = screen.getByPlaceholderText("name Rushi");
  //   expect(inputNanme).toBeInTheDocument();
  // });

  // test("should input box  inside coontact Component", () => {
  //   render(<Contact />);

  //   const inputNanme = screen.getByPlaceholderText("name Rushi");
  //   expect(inputNanme).toBeInTheDocument();
  // });

  test("should  2 input box  inside coontact Component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // expect(inputBoxes).toBeInTheDocument();
    console.log(inputBoxes.length)
  });
});
