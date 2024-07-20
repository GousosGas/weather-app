import { Grid } from "@mantine/core";
import {
  ActivitiesSection,
  DetailedWeatherSection,
  ForecastSection,
  NavigationMenu,
} from "../../sections";

/**
 * Component responsible to render the main grid area of tha app
 * @constructor
 */
const MainGridLayout = () => (
  <>
    <NavigationMenu />
    <Grid.Col order={{ base: 4 }} span={{ base: 12, xs: 12, sm: 7 }}>
      <ActivitiesSection />
      <ForecastSection />
    </Grid.Col>
    <DetailedWeatherSection />
  </>
);

export default MainGridLayout;
