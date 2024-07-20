import { Flex, Image, Text } from "@mantine/core";
import { ImageData } from "../../../types";
import { imageMockData } from "../../common/mockData.ts";

/**
 * Helper function that renders the images for
 * {@link ActivitiesImageList}
 * @param images
 */
const renderImages = (images: ImageData[]) =>
  images &&
  images.map((imgItem, index) => (
    <div key={index}>
      <Image radius={10} src={imgItem.src} alt={imgItem.text} />
      <Text size="xsm">{imgItem.text}</Text>
    </div>
  ));

/**
 * Component responsible to render the list of images
 * with text for the activities
 * @constructor
 */
const ActivitiesImageList = () => (
  <Flex align="center" gap="18" justify="center">
    {renderImages(imageMockData)}
  </Flex>
);

export default ActivitiesImageList;
