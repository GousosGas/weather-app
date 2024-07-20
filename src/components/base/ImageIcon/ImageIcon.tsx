import { ImageIconProps } from "../../../types";

/**
 * Component responsible ot render an image
 * with an image
 * @param path the url
 * @param alt the alt text
 * @param className ths css
 * @constructor
 */
const ImageIcon: React.FC<ImageIconProps> = ({ path, alt, className }) => (
  <img src={path} alt={alt} className={className} />
);

export default ImageIcon;
