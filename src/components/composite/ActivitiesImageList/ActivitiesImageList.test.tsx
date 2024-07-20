import { screen } from "@testing-library/react";
import { render } from "../../../test-utils/render.tsx";
import { imageMockData } from "../../common/mockData.ts";
import ActivitiesImageList from "./ActivitiesImageList";
import "@testing-library/jest-dom";

describe("ActivitiesImageList", () => {
  test("renders all images with correct src and text", () => {
    render(<ActivitiesImageList />);

    imageMockData.forEach((imgItem) => {
      const imageElement = screen.getByAltText(imgItem.text);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", imgItem.src);

      const textElement = screen.getByText(imgItem.text);
      expect(textElement).toBeInTheDocument();
    });
  });
});
