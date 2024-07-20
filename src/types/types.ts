import { DotProps } from "recharts";

export interface ImageIconProps {
  path: string;
  alt: string;
  className?: string;
}

interface WeatherForecastDotPayload {
  degree: number;
  icon: string;
  air: string;
  time: string;
}

export interface WeatherForecastDotProps extends DotProps {
  cx?: number;
  cy?: number;
  value?: number;
  payload?: WeatherForecastDotPayload;
}

export type ForecastIconMap = {
  [key: string]: string;
};

export interface WeatherSlideProps {
  day: string;
  imgSrc: string;
}

export interface ImageData {
  src: string;
  text: string;
}

export interface MenuIcon {
  menuIcon: string;
  label?: string;
  alt: string;
}

export interface ForecastButtonProps {
  label: string;
}

export interface ForecastImageIconProps extends ImageIconProps{
  text: string;
}

export interface ImageTextProps extends MenuIcon {
  className?: string;
}

export interface WeatherItemProps {
  path: string;
  textLabel: string;
  textValue: string | number;
}
