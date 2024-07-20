import { Button } from "@mantine/core";
import { ForecastButtonProps } from "@/types";
import styles from "./ForecastButton.module.css";

/**
 * Button used by the forecast section
 * @param label the label of the button
 * @constructor
 */
const ForecastButton: React.FC<ForecastButtonProps> = ({ label }) => (
  <div className={styles.forecastBtnContainer}>
    <Button className={styles.forecastBtn}>{label}</Button>
  </div>
);

export default ForecastButton;
