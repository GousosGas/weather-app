import { createTheme, MantineTheme, rem } from "@mantine/core";

/**
 * Helper for font weight calculation
 */
const textFontWeightCalculator = (params: { size: string }) => {
  const { size } = params;
  return size === "md" || size === "sm" ? 400 : 500;
};

/**
 * Helper for text color calculation
 */
const textColorCalculator = (params: { size: string }) => {
  const { size } = params;
  return size === "xsm" ? "rgba(43, 38, 29, 1)" : "var(--mantine-color-white)";
};

const themeConfig = createTheme({
  fontFamily: "Inter, sans-serif",
  fontSizes: {
    xsm: rem(12),
    sm: rem(14),
    md: rem(18),
    lg: rem(20),
    xl: rem(24),
    xxl: rem(48),
    xxxl: rem(64),
  },
  components: {
    Select: {
      styles: {
        input: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          textAlign: "center",
          color: "var(--mantine-color-white)",
        },
        dropdown: {
          backgroundColor: "var(--mantine-color-white)", // Set dropdown background color to white
          border: "none", // Remove borders from the dropdown
          color: "var(--mantine-color-white-9)",
        },
      },
    },
    Text: {
      styles: (_: MantineTheme, params: { size: string }) => ({
        root: {
          color: textColorCalculator(params),
          fontWeight: textFontWeightCalculator(params),
        },
      }),
    },
  },
});

export default themeConfig;
