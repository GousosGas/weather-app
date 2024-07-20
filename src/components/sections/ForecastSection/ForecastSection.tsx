import { Grid } from "@mantine/core";
import {
  ForecastButton,
  ForecastImageIcon,
  ForecastLineChart,
} from "../../composite";
import styles from "./ForecastSection.module.css";
// eslint-disable-next-line import/no-unresolved
import TimeIcon from "/assets/icons/timeIcon.svg";

/**
 * Component responsible to render the forecast info
 * @constructor
 */
const ForecastSection: React.FC = () => (
  <Grid.Col
    span={{ base: 12, xs: 12 }}
    classNames={{
      col: styles.colContainer,
    }}
  >
    <ForecastImageIcon
      text="24-hour forecast"
      path={TimeIcon}
      alt="time icon"
    />
    <ForecastLineChart />
    <ForecastButton label="5-day forecast" />
  </Grid.Col>
);

export default ForecastSection;
