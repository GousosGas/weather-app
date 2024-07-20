import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ForecastImageIconProps } from "src/types";
import { render } from "../../../test-utils/render.tsx";
import ForecastImageIcon from "./ForecastImageIcon";

describe("ForecastImageIcon", () => {
  const defaultProps: ForecastImageIconProps = {
    className: "test-class",
    path: "/path/to/image.png",
    alt: "Test Alt Text",
    text: "Test Text",
  };

  test("renders with the correct image and text", () => {
    render(<ForecastImageIcon {...defaultProps} />);

    const imgElement = screen.getByAltText(defaultProps.alt);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", defaultProps.path);

    const textElement = screen.getByText(defaultProps.text);
    expect(textElement).toBeInTheDocument();
  });
});
