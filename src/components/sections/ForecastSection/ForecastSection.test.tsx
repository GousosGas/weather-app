import { Grid } from "@mantine/core";
import { screen } from "@testing-library/react";
import { render } from "../../../test-utils/render.tsx";
import ForecastSection from "./ForecastSection";

describe("ForecastSection", () => {
  test("renders ForecastImageIcon, ForecastLineChart, and ForecastButton components with correct props", () => {
    render(
      <Grid>
        <ForecastSection />
      </Grid>,
    );

    const imageIconElement = screen.getByAltText("time icon");
    expect(imageIconElement).toBeInTheDocument();
    expect(imageIconElement).toHaveAttribute(
      "src",
      "/assets/icons/timeIcon.svg",
    );

    const imageTextElement = screen.getByText("24-hour forecast");
    expect(imageTextElement).toBeInTheDocument();

    const buttonElement = screen.getByText("5-day forecast");
    expect(buttonElement).toBeInTheDocument();
  });
});
