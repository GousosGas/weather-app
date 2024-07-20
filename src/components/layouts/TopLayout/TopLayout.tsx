import TopSection from "../../sections/TopDropdownSection/TopDropDownSection.tsx";
import WeatherSection from "../../sections/WeatherSection/WeatherSection.tsx";

/**
 * Layout tha hold the upper section of the app
 * @constructor
 */
const TopLayout = () => (
  <>
    <TopSection />
    <WeatherSection />
  </>
);

export default TopLayout;
