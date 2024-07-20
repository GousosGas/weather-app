// eslint-disable-next-line import/no-unresolved
import cloudMoonIcon from "/assets/icons/cloudMoonIcon.svg";
// eslint-disable-next-line import/no-unresolved
import cloudWithSunIcon from "/assets/icons/cloudWithSunIcon.svg";
// eslint-disable-next-line import/no-unresolved
import sunWithRainIcon from "/assets/icons/sunWithRainCloudIcon.svg";
// eslint-disable-next-line import/no-unresolved
import parkSummerImg from "/assets/images/parkSummer.png";
// eslint-disable-next-line import/no-unresolved
import parkAutumnImg from "/assets/images/parkAutumn.png";
// eslint-disable-next-line import/no-unresolved
import poolImg from "/assets/images/pool.png";
// eslint-disable-next-line import/no-unresolved
import beachImage from "/assets/images/beach.png";
import { ImageData } from "../../types";

export const cities = [
  { value: "chicago", label: "Chicago" },
  { value: "houston", label: "Houston" },
  { value: "miami", label: "Miami" },
  { value: "california", label: "California" },
];

export const lineWeatherData = [
  {
    degree: "26°",
    degreeValue: 26,
    air: "11.7km/h",
    time: "Now",
    icon: "nightCloud",
  },
  {
    degree: "26°",
    degreeValue: 26,
    air: "9.3km/h",
    time: "22:00",
    icon: "nightRain",
  },
  {
    degree: "22°",
    degreeValue: 22,
    air: "12km/h",
    time: "00:00",
    icon: "nightCloud",
  },
  {
    degree: "16°",
    degreeValue: 22,
    air: "15km/h",
    time: "2:00",
    icon: "nightRain",
  },
  {
    degree: "20°",
    degreeValue: 20,
    air: "15km/h",
    time: "4:00",
    icon: "thunder",
  },
  {
    degree: "22°",
    degreeValue: 22,
    air: "15km/h",
    time: "6:00",
    icon: "thunder",
  },
];

export const weatherSlideData = [
  {
    id: 1,
    imgSrc: cloudWithSunIcon,
    day: "Sat",
    time: "1:00PM GMT",
    realFeel: "30",
    wind: "0.8 km/hr",
    chanceOfRain: "2%",
    uiIndex: 4,
  },
  {
    id: 2,
    imgSrc: cloudMoonIcon,
    day: "Sat",
    time: "2:00PM GMT",
    realFeel: "50",
    wind: "8 km/hr",
    chanceOfRain: "2%",
    uiIndex: 4,
  },
  {
    id: 3,
    imgSrc: sunWithRainIcon,
    day: "Sat",
    time: "3:00PM GMT",
    realFeel: "27",
    wind: "1.8 km/hr",
    chanceOfRain: "12%",
    uiIndex: 4,
  },
  {
    id: 4,
    imgSrc: sunWithRainIcon,
    day: "Sat",
    time: "4:00PM GMT",
    realFeel: "10",
    wind: "8 km/hr",
    chanceOfRain: "0%",
    uiIndex: 4,
  },
  {
    id: 5,
    imgSrc: cloudWithSunIcon,
    day: "Sat",
    time: "5:00PM GMT",
    realFeel: "24",
    wind: "0.8 km/hr",
    chanceOfRain: "22%",
    uiIndex: 4,
  },
  {
    id: 6,
    imgSrc: cloudMoonIcon,
    day: "Sat",
    time: "6:00PM GMT",
    realFeel: "15",
    wind: "0.8 km/hr",
    chanceOfRain: "42%",
    uiIndex: 4,
  },
];

export const imageMockData: ImageData[] = [
  {
    src: parkSummerImg,
    text: "2km away",
  },
  {
    src: parkAutumnImg,
    text: "1.5km away",
  },
  {
    src: poolImg,
    text: "3km away",
  },
  {
    src: beachImage,
    text: "500m away",
  },
];
