import { Grid, Text } from "@mantine/core";
import { IconHeartFilled } from "@tabler/icons-react";
import ActivitiesImageList from "../../composite/ActivitiesImageList/ActivitiesImageList.tsx";
import styles from "./ActivitiesSection.module.css";

/**
 * Component the render a custom icon
 * with text
 * @constructor
 */
const InlineIconText = () => (
  <div className={styles.inlineContainer}>
    <IconHeartFilled className={styles.icon} />
    <Text>Activities in your area</Text>
  </div>
);

/**
 * Component responsible to render the activities section
 * @constructor
 */
const ActivitiesSection = () => (
  <Grid.Col
    span={{ base: 12, xs: 12 }}
    classNames={{ col: styles.colContainer }}
  >
    <InlineIconText />
    <ActivitiesImageList />
  </Grid.Col>
);

export default ActivitiesSection;
