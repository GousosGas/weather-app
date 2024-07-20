import { Grid, NavLink, Text } from "@mantine/core";
// eslint-disable-next-line import/no-unresolved
import citiesIcon from "/assets/icons/citiesIcon.svg";
// eslint-disable-next-line import/no-unresolved
import exploreIcon from "/assets/icons/exploreIcon.svg";
// eslint-disable-next-line import/no-unresolved
import weatherIcon from "/assets/icons/sunWithRainCloudIcon.svg";
// eslint-disable-next-line import/no-unresolved
import profileIcon from "/assets/icons/profileIcon.svg";
// eslint-disable-next-line import/no-unresolved
import settingsIcon from "/assets/icons/settingsIcon.svg";
import { MenuIcon } from "../../../types";
import styles from "./NavigationMenu.module.css";

/**
 * Create the menu icons on navigation section
 * @param menuIcon the icon to display
 * @param label the text to display
 * @param alt the alt tag
 * @constructor
 */
const NavigationMenuIcon = ({ menuIcon, label, alt }: MenuIcon) => (
  <div className={styles.iconContainer}>
    <img src={menuIcon} alt={alt} className={styles.imgIcon} />
    {label ? <Text className={styles.text}>{label}</Text> : null}
  </div>
);

/**
 * Component responsible to render
 * the left navigation menu of the app
 * @constructor
 */
const NavigationMenu = () => (
  <Grid.Col
    span={{ base: 12, xs: 12, sm: 1 }}
    order={{ base: 3, sm: 3 }}
    classNames={{ col: styles.colContainer }}
  >
    <NavLink
      className={styles.navLinkProfile}
      href="#profile"
      label={<NavigationMenuIcon menuIcon={profileIcon} alt="profile" />}
    />
    <div>
      <NavLink
        className={styles.navLink}
        href="#weather"
        label={
          <NavigationMenuIcon
            menuIcon={weatherIcon}
            alt="weather"
            label="weather"
          />
        }
      />
      <NavLink
        className={styles.navLink}
        href="#explore"
        label={
          <NavigationMenuIcon
            menuIcon={exploreIcon}
            alt="explore"
            label="explore"
          />
        }
      />
      <NavLink
        className={styles.navLink}
        href="#cities"
        label={
          <NavigationMenuIcon
            menuIcon={citiesIcon}
            alt="cities"
            label="cities"
          />
        }
      />
      <NavLink
        className={styles.navLink}
        href="#settings"
        label={
          <NavigationMenuIcon
            menuIcon={settingsIcon}
            alt="settings"
            label="settings"
          />
        }
      />
    </div>
  </Grid.Col>
);

export default NavigationMenu;
