import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetailsWeatherInfo from "./DetailsWeatherInfo";
import { weatherSlideData } from "../../common/mockData.ts";
import thermoIcon from "/assets/icons/thermoIcon.svg";
import windyIcon from "/assets/icons/windyIcon.svg";
import dropIcon from "/assets/icons/dropIcon.svg";
import sunIcon from "/assets/icons/sunIcon.svg";
import {render} from "../../../test-utils/render.tsx";

describe("DetailsWeatherInfo", () => {
  test("renders weather information correctly", () => {
    const activeSlide = 0; // Choose an active slide index for testing

    render(<DetailsWeatherInfo activeSlide={activeSlide} />);

    // Check if the title is rendered
    const titleElement = screen.getByText("AIR CONDITIONS");
    expect(titleElement).toBeInTheDocument();

    // Check if WeatherItem components are rendered correctly
    expect(screen.getByText("Real Feel")).toBeInTheDocument();
    expect(
      screen.getByText(weatherSlideData[activeSlide].realFeel),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Real Feel")).toHaveAttribute("src", thermoIcon);

    expect(screen.getByText("Wind")).toBeInTheDocument();
    expect(
      screen.getByText(weatherSlideData[activeSlide].wind),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Wind")).toHaveAttribute("src", windyIcon);

    expect(screen.getByText("Chance of Rain")).toBeInTheDocument();
    expect(
      screen.getByText(weatherSlideData[activeSlide].chanceOfRain),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Chance of Rain")).toHaveAttribute(
      "src",
      dropIcon,
    );

    expect(screen.getByText("UV index")).toBeInTheDocument();
    expect(
      screen.getByText(weatherSlideData[activeSlide].uiIndex),
    ).toBeInTheDocument();
    expect(screen.getByAltText("UV index")).toHaveAttribute("src", sunIcon);
  });
});
