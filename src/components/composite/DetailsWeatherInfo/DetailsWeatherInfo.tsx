import { Text } from "@mantine/core";
import { weatherSlideData } from "../../common/mockData.ts";
import WeatherItem from "../WeatherItem/WeatherItem.tsx";
import styles from "./DetailsWeatherInfo.module.css";
import dropIcon from "/assets/icons/dropIcon.svg";
import sunIcon from "/assets/icons/sunIcon.svg";
import thermoIcon from "/assets/icons/thermoIcon.svg";
import windyIcon from "/assets/icons/windyIcon.svg";

/**
 * Component responsible to render
 * the rows that describes the selected weather
 * @param props
 * @constructor
 */
const DetailsWeatherInfo = (props: { activeSlide: number }) => {
  const { activeSlide } = props;
  return (
    <div>
      <Text className={styles.weatherTitle}>AIR CONDITIONS </Text>
      <div>
        <WeatherItem
          path={thermoIcon}
          textLabel="Real Feel"
          textValue={weatherSlideData[activeSlide].realFeel}
        />
        <WeatherItem
          path={windyIcon}
          textLabel="Wind"
          textValue={weatherSlideData[activeSlide].wind}
        />
        <WeatherItem
          path={dropIcon}
          textLabel="Chance of Rain"
          textValue={weatherSlideData[activeSlide].chanceOfRain}
        />
        <WeatherItem
          path={sunIcon}
          textLabel="UV index"
          textValue={weatherSlideData[activeSlide].uiIndex}
        />
      </div>
    </div>
  );
};

export default DetailsWeatherInfo;
