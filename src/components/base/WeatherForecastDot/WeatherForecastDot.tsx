import { WeatherForecastDotProps } from "../../../types";
import { forecastIconMap } from "../../common/constant.ts";

/**
 * Component responsible to render the custom images on LineChart
 * @param cx
 * @param cy
 * @param value
 * @param payload
 * @constructor
 */
const WeatherForecastDot: React.FC<WeatherForecastDotProps> = ({
  cx,
  cy,
  value,
  payload,
}) => {
  if (!cx || !cy || value === undefined || !payload) return null;

  return (
    <>
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize={14}
      >
        {payload.degree}
      </text>
      <image
        x={cx - 15}
        y={cy + 20}
        width={30}
        height={30}
        color="white"
        href={forecastIconMap[payload.icon]}
      />
      <text
        x={cx}
        y={cy + 60}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize={9}
      >
        {payload.air}
      </text>
      <text
        x={cx}
        y={cy + 75}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize={9}
      >
        {payload.time}
      </text>
    </>
  );
};

export default WeatherForecastDot;
