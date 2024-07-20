import { Grid } from "@mantine/core";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../../test-utils/render.tsx";
import TopDropDownSection from "./TopDropDownSection";
import ProfileAvatar from "/assets/images/avatar.png";

describe("TopDropDownSection", () => {
  test("renders CitySelector and ImageIcon", () => {
    render(
      <Grid>
        <TopDropDownSection />
      </Grid>,
    );

    const profileImg = screen.getByAltText("profile");
    expect(profileImg).toBeInTheDocument();
    expect(profileImg).toHaveAttribute("src", ProfileAvatar);
  });
});
