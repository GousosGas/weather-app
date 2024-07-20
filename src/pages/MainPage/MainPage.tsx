import { Container, Grid } from "@mantine/core";
import { MainGridLayout, TopLayout } from "../../components/layouts";
import styles from "./MainPage.module.css";

/**
 * The main page of the weather application
 * @constructor
 */
const MainPage = () => (
  <div>
    <div className={styles.background}></div>
    <div className={styles.contentContainer}>
      <Container fluid>
        <Container
          classNames={{
            root: styles.containerInner,
          }}
        >
          <Grid
            gutter={20}
            classNames={{
              inner: styles.innerGrid,
            }}
          >
            <TopLayout />
            <MainGridLayout />
          </Grid>
        </Container>
      </Container>
    </div>
  </div>
);

export default MainPage;
