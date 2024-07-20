import { Grid } from "@mantine/core";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../../test-utils/render.tsx";
import { ActivitiesSection } from "../index.ts";
import styles from "./ActivitiesSection.module.css";

describe("ActivitiesSection", () => {
  it("renders InlineIconText with correct text and icon", () => {
    render(
      <Grid>
        <ActivitiesSection />
      </Grid>,
    );

    const textElement = screen.getByText("Activities in your area");
    expect(textElement).toBeInTheDocument();

    const iconElement = document.querySelector(`.${styles.icon}`);
    expect(iconElement).toBeInTheDocument();
  });

  it("applies correct styles to Grid.Col", () => {
    render(
      <Grid>
        <ActivitiesSection />
      </Grid>,
    );

    const gridColElement = document.querySelector(`.${styles.colContainer}`);
    expect(gridColElement).toBeInTheDocument();
  });
});
