import { Grid } from "@mantine/core";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../../test-utils/render.tsx";
import NavigationMenu from "./NavigationMenu";
import profileIcon from "/assets/icons/profileIcon.svg";
import weatherIcon from "/assets/icons/sunWithRainCloudIcon.svg";
import exploreIcon from "/assets/icons/exploreIcon.svg";
import citiesIcon from "/assets/icons/citiesIcon.svg";
import settingsIcon from "/assets/icons/settingsIcon.svg";

describe("NavigationMenu", () => {
  test("renders NavigationMenu with all icons and labels", () => {
    render(
      <Grid>
        <NavigationMenu />
      </Grid>,
    );

    const profileImg = screen.getByAltText("profile");
    expect(profileImg).toBeInTheDocument();
    expect(profileImg).toHaveAttribute("src", profileIcon);

    const weatherImg = screen.getByAltText("weather");
    expect(weatherImg).toBeInTheDocument();
    expect(weatherImg).toHaveAttribute("src", weatherIcon);
    expect(screen.getByText("weather")).toBeInTheDocument();

    const exploreImg = screen.getByAltText("explore");
    expect(exploreImg).toBeInTheDocument();
    expect(exploreImg).toHaveAttribute("src", exploreIcon);
    expect(screen.getByText("explore")).toBeInTheDocument();

    const citiesImg = screen.getByAltText("cities");
    expect(citiesImg).toBeInTheDocument();
    expect(citiesImg).toHaveAttribute("src", citiesIcon);
    expect(screen.getByText("cities")).toBeInTheDocument();

    const settingsImg = screen.getByAltText("settings");
    expect(settingsImg).toBeInTheDocument();
    expect(settingsImg).toHaveAttribute("src", settingsIcon);
    expect(screen.getByText("settings")).toBeInTheDocument();
  });
});
