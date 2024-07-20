import { MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import { load } from "webfontloader";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/carousel/styles.css";
import { MainPage } from "./pages";
import themeConfig from "./theme.ts";
import "./index.css";

load({
  google: {
    families: ["Inter", "sans-serif"],
  },
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={themeConfig}>
    <MainPage />
  </MantineProvider>,
);
