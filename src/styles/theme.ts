export interface DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    highlightText: string;
    normalText: string;
    lightenText: string;
    lightenGrayishBlue: string;
    white: string;
    lightBoxBackground: string;
    navBorderBottom: string;
    black: string;
    controllerBackground: string;
  };
  fontFamily: string;
}

export const theme: DefaultTheme = {
  colors: {
    primary: "#ff7d1a",
    secondary: "#ffede0",
    highlightText: "#1d2025",
    normalText: "#68707d",
    lightenText: "#b6bcc8",
    lightenGrayishBlue: "#f7f8fd",
    black: "#000",
    white: "#ffffff",
    lightBoxBackground: "rgba(0, 0, 0, .5)",
    navBorderBottom: "#dee2e6",
    controllerBackground: "#f1f1f1",
  },
  fontFamily: "Kumbh Sans",
};
