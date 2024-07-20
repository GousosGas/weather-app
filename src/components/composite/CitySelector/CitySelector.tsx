import { Select } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ImageIcon } from "../../base";
import { cities } from "../../common/mockData.ts";
import styles from "./CitySelector.module.css";
// eslint-disable-next-line import/no-unresolved
import mapPinIcon from "/assets/icons/mapPinIcon.svg";
// eslint-disable-next-line import/no-unresolved
import arrowRighIcon from "/assets/icons/arrowRightIcon.svg";
// eslint-disable-next-line import/no-unresolved
import arrowDownIcon from "/assets/icons/arrowDownIcon.svg";

/**
 * Function responsible to resolve the arrow
 * on the mobile view
 * @param isMobile boolean that check
 * is the user is on mobile view
 */
const resolveArrow = (isMobile: boolean | undefined) =>
  isMobile ? (
    <ImageIcon
      path={arrowDownIcon}
      alt="arrow"
      className={styles.iconContainerDown}
    />
  ) : (
    <ImageIcon
      path={arrowRighIcon}
      alt="arrow"
      className={styles.iconContainerRight}
    />
  );

/**
 * Component responsible to render the dropdown
 * menu with the cities
 * @constructor
 */
const CitySelector = () => {
  const isMobile = useMediaQuery(`(max-width: 48em)`);
  return (
    <Select
      className={styles.selectInput}
      classNames={{ option: styles.option }}
      variant="unstyled"
      withCheckIcon={false}
      data={cities}
      defaultValue={cities[0].value}
      leftSection={
        <ImageIcon
          path={mapPinIcon}
          className={styles.iconContainerLeft}
          alt="map icon"
        />
      }
      rightSection={resolveArrow(isMobile)}
    />
  );
};

export default CitySelector;
