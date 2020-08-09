const BASE = 3;

const borders = {
  sm: color => `1px solid ${color || "#00000029"}`,
  md: color => `3px solid ${color || "#00000029"}`
};

const colors = {
  bluePrimary: "#18ACC4",
  blueSecondary: "#007A8D",
  yellowPrimary: "#FDCB13",
  yellowSecondary: "#DE9E1F",
  green: "#0FA866",
  black: "#1F2D30",
  grey: "#FBFBFB",
  Overlay: "#1F2D30e0" // com 88% de opacidade.
};

const fonts = {
  Montserrat: "Montserrat"
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "22px",
  xxl: "26px",
  xxxl: "36px"
};

const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};

const iconSizes = {
  sm: "12px",
  md: "16px",
  lg: "26px"
};

const shadows = {
  sm: color => `0 1px 3px ${color || "#00000029"}`,
  md: color => `0 3px 4px ${color || "#00000029"}`,
  lg: color => `0 3px 6px ${color || "#00000029"}`
};

const space = {
  xs: `${BASE}px`,
  sm: `${BASE * 2}px`,
  md: `${BASE * 3}px`,
  lg: `${BASE * 4}px`,
  xl: `${BASE * 8}px`,
  xxl: `${BASE * 10}px`,
  xxxl: `${BASE * 12}px`
};

const DEFAULT_THEME = {
  borders,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  iconSizes,
  shadows,
  space
};

export default DEFAULT_THEME;
