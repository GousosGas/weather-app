import { render } from "../../../test-utils/render.tsx";
import WeatherSlide from "./WeatherSlide";

describe("WeatherSlide", () => {
  it("renders the day and image correctly", () => {
    const day = "Monday";
    const imgSrc = "path/to/image.png";

    const { getByText, getByAltText } = render(
      <WeatherSlide day={day} imgSrc={imgSrc} />,
    );

    expect(getByText(day)).toBeInTheDocument();

    const img = getByAltText(day);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", imgSrc);
    expect(img).toHaveAttribute("alt", day);
  });
});
