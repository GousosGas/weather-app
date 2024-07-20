import { screen } from "@testing-library/react";
import { render } from "../../../test-utils/render.tsx";
import { WeatherItemProps } from "../../../types";
import WeatherItem from "./WeatherItem";
import "@testing-library/jest-dom";

describe("WeatherItem", () => {
  const defaultProps: WeatherItemProps = {
    path: "/path/to/image.png",
    textLabel: "Test Label",
    textValue: "Test Value",
  };

  test("renders with correct image, label, and value", () => {
    render(<WeatherItem {...defaultProps} />);

    const imageElement = screen.getByAltText(defaultProps.textLabel);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", defaultProps.path);

    const labelElement = screen.getByText(defaultProps.textLabel);
    expect(labelElement).toBeInTheDocument();

    const valueElement = screen.getByText(defaultProps.textValue);
    expect(valueElement).toBeInTheDocument();
  });
});
