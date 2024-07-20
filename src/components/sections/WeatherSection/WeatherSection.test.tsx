import { Grid } from "@mantine/core";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../../test-utils/render";
import WeatherSection from "./WeatherSection";
import SunCloudIcon from "/assets/icons/sunCloudIcon.svg";

describe("WeatherSection", () => {
  test("renders weather information correctly", () => {
    render(
      <Grid>
        <WeatherSection />
      </Grid>,
    );

    const weatherText = screen.getByText("Rainy");
    expect(weatherText).toBeInTheDocument();

    const weatherIcon = screen.getByAltText("Weather Icon");
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherIcon).toHaveAttribute("src", SunCloudIcon);

    const temperatureText = screen.getByText("14°C");
    expect(temperatureText).toBeInTheDocument();

    const dateText = screen.getByText("Sunday | 12 Dec 2023");
    expect(dateText).toBeInTheDocument();
  });
});
