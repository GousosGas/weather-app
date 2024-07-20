import { Grid } from "@mantine/core";
import { Fragment } from "react";
import { ImageIcon } from "../../base";
import { CitySelector } from "../../composite";
// eslint-disable-next-line import/no-unresolved
import ProfileAvatar from "/assets/images/avatar.png";
import styles from "./TopDropDownSection.module.css";

/**
 * Component responsible to handle mainly the city selector
 * @constructor
 */
const TopDropDownSection = () => (
  <Fragment>
    <Grid.Col span={5} order={{ base: 1 }}>
      <CitySelector />
    </Grid.Col>
    <Grid.Col span={7} className={styles.avatarContainer} order={{ base: 1 }}>
      <ImageIcon path={ProfileAvatar} alt="profile" />
    </Grid.Col>
  </Fragment>
);

export default TopDropDownSection;
