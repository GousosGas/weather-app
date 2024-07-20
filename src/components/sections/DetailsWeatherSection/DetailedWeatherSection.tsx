import { Carousel } from "@mantine/carousel";
import { Grid } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { WeatherSlide } from "../../base";
import { DetailedWeatherImageText, DetailsWeatherInfo } from "../../composite";
import { weatherSlideData } from "../../common/mockData.ts";
import styles from "./DetailedWeatherSection.module.css";
// eslint-disable-next-line import/no-unresolved
import timeIcon from "/assets/icons/timeIcon.svg";

/**
 * Component responsible to render the details section
 * @constructor
 */
const DetailedWeatherSection = () => {
  const initActiveSlide = Math.round(weatherSlideData.length / 2) - 1;
  const [activeSlide, setActiveSlide] = useState(initActiveSlide);

  return (
    <Grid.Col
      order={{ base: 3, xs: 3, sm: 4 }}
      span={{ base: 12, xs: 12, sm: 4 }}
      className={styles.container}
    >
      <Carousel
        slideSize="20%"
        slideGap="xs"
        controlsOffset="xs"
        align="center"
        initialSlide={initActiveSlide}
        onSlideChange={(index) => setActiveSlide(index)}
        previousControlIcon={<IconChevronLeft />}
        nextControlIcon={<IconChevronRight />}
        classNames={{
          root: styles.root,
          control: styles.carouselControl,
        }}
      >
        {weatherSlideData.map((slide, index) => (
          <Carousel.Slide
            key={index}
            className={`${styles.carouselSlide} ${index === activeSlide ? styles.carouselSlideActive : ""}`}
          >
            <WeatherSlide day={slide.day} imgSrc={slide.imgSrc} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <div className={styles.weatherTextContainer}>
        <DetailedWeatherImageText
          menuIcon={timeIcon}
          label={weatherSlideData[activeSlide].time}
          alt="time"
          className={styles.time}
        />
        <DetailsWeatherInfo activeSlide={activeSlide} />
      </div>
    </Grid.Col>
  );
};

export default DetailedWeatherSection;
