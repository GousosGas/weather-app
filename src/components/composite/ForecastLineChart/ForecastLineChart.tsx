import { Line, LineChart, ResponsiveContainer } from "recharts";
import { WeatherForecastDot } from "../../base";
import { lineWeatherData } from "../../common/mockData.ts";
import styles from "./ForecastLineChart.module.css";

/**
 * Component responsible to render the linechart
 * of forecast section
 * @constructor
 */
const ForecastLineChart = () => (
  <ResponsiveContainer className={styles.lineContainer}>
    <LineChart
      data={lineWeatherData}
      margin={{
        top: 15,
        right: 20,
        left: 20,
        bottom: 5,
      }}
    >
      <Line
        type="monotone"
        dataKey="degreeValue"
        stroke="rgba(255, 195, 85, 1)"
        strokeWidth={2}
        dot={<WeatherForecastDot />}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default ForecastLineChart;
