import { Text } from "@mantine/core";
import { Fragment } from "react";
import { WeatherSlideProps } from "../../../types";

/**
 * Component responsible to render a weather icon with the day
 * @param day the provided day
 * @param imgSrc the img path
 * @constructor
 */
const WeatherSlide = ({ day, imgSrc }: WeatherSlideProps) => (
  <Fragment>
    <Text size="sm">{day}</Text>
    <img src={imgSrc} alt={day} style={{ width: 25, height: 25 }} />
  </Fragment>
);

export default WeatherSlide;
