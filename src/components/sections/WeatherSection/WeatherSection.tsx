import { Flex, Grid, Text } from "@mantine/core";
// eslint-disable-next-line import/no-unresolved
import SunCloudIcon from "/assets/icons/sunCloudIcon.svg";
import { ImageIcon } from "../../base";
import styles from "./WeatherSection.module.css";

/**
 * Component responsible to render the current weather
 * on the to p section
 * @constructor
 */
const WeatherSection = () => (
  <Grid.Col span={{ base: 12 }} order={{ base: 2, md: 2 }}>
    <Flex classNames={{ root: styles.container }}>
      <Text className={styles.weather}>Rainy</Text>
      <ImageIcon
        path={SunCloudIcon}
        alt="Weather Icon"
        className={styles.icon}
      />
      <Text size="xxxl">14°C</Text>
      <Text size="md">Sunday | 12 Dec 2023</Text>
    </Flex>
  </Grid.Col>
);

export default WeatherSection;
