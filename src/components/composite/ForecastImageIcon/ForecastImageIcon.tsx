import { Text } from "@mantine/core";
import { ForecastImageIconProps } from "../../../types";
import { ImageIcon } from "../../base";
import styles from "./ForecastImageIcon.module.css";

/**
 * Responsible to render an icon and text for forecast
 * section
 * @param className css class
 * @param path the image path
 * @param alt the alt text
 * @param text the text to be displayed
 * @constructor
 */
const ForecastImageIcon: React.FC<ForecastImageIconProps> = ({
  className,
  path,
  alt,
  text,
}) => (
  <div className={className || styles.labelContainer}>
    <ImageIcon path={path} alt={alt} />
    <Text ml="6" size="sm">
      {text}
    </Text>
  </div>
);

export default ForecastImageIcon;
