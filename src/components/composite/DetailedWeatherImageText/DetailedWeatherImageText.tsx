import { Text } from "@mantine/core";
import { ImageIcon } from "../../../components/base";
import { ImageTextProps } from "../../../types";

/**
 * Component responsible to render an image icon
 * with text for the weather carousel
 * @param menuIcon the icon to be displayed
 * @param label the actual text
 * @param alt the alt tag text
 * @param className css classes
 * @constructor
 */
const DetailedWeatherImageText = ({
  menuIcon,
  label,
  alt,
  className,
}: ImageTextProps) => (
  <div className={className}>
    <ImageIcon path={menuIcon} alt={alt} />
    {label ? <Text size="sm">{label}</Text> : null}
  </div>
);

export default DetailedWeatherImageText;
