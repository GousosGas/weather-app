import { screen } from "@testing-library/react";
import { render } from "../../../test-utils/render.tsx";
import ForecastButton from "./ForecastButton.tsx";
import "@testing-library/jest-dom";

describe("ForecastButton", () => {
  test("renders with the correct label", () => {
    const label = "Test Label";
    render(<ForecastButton label={label} />);

    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });
});
