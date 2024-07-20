import { Grid, Text } from "@mantine/core";
import { WeatherItemProps } from "../../../types";
import { ImageIcon } from "../../base";
import styles from "./WeatherItem.module.css";

/**
 * Component that renders a weather Item
 * @param path image path
 * @param textLabel field label
 * @param textValue field value
 * @constructor
 */
const WeatherItem: React.FC<WeatherItemProps> = ({
  path,
  textLabel,
  textValue,
}) => (
  <Grid className={styles.weatherItemContainer}>
    <Grid.Col span={2} className={styles.weatherItemTop}>
      <ImageIcon path={path} alt={textLabel} />
    </Grid.Col>
    <Grid.Col span={10}>
      <Text classNames={{ root: styles.weatherItemTextLabel }}>
        {textLabel}
      </Text>
    </Grid.Col>
    <Grid.Col
      span={10}
      offset={2}
      classNames={{ col: styles.weatherItemTextLabelCol }}
    >
      <Text className={styles.weatherItemTextValue}>{textValue}</Text>
    </Grid.Col>
  </Grid>
);

export default WeatherItem;
