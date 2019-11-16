/* ***colors*** */

export const colors = {
  lightPurple: "#5E239D",
  violet: "#3A0475",
  saturatedPurple: "#30124E",
  darkViolet: "#150433",

  lightEmerald: "#6DECAF",
  emerald: "#00F0B5",

  white: "#FCFCFC",
  lightGrey: "#F4F4ED",

  textHeaders: "#30233D",
  textMain: "#776C82",
  textGrey: "#9B94A3",

  primary: "#F61067",

  error: "#F0002B",
  success: "#10F65E",
  warning: "#F67110",
  info: "#00A8F0",
};

/* ***headers h1 h2 h3 h4 h5 h6*** */

const defaultStyles = {
  fontWeight: 500,
};

export const headers = {
  h1: {
    ...defaultStyles,
    margin: "0.3em 0",
    fontWeight: 900,
    fontSize: "99px",
    lineHeight: "118px",
  },
  h2: {
    ...defaultStyles,
    fontSize: "54px",
    lineHeight: "80px",
  },
  h3: {
    ...defaultStyles,
    margin: "0.3em 0",
    fontSize: "45px",
    lineHeight: "67px",
  },
  h4: {
    ...defaultStyles,
    fontSize: "36px",
    lineHeight: "53px",
  },
  h5: {
    ...defaultStyles,
    fontSize: "27px",
    lineHeight: "40px",
  },
  h6: {
    ...defaultStyles,
    fontSize: "18px",
    lineHeight: "27px",
  },
};

/* ***text*** */

export const text = {
  small: {
    fontWeight: "normal",
    fontSize: "16.2px",
    lineHeight: "26px",
  },
  smallBold: {
    fontWeight: "bold",
    fontSize: "16.2px",
    lineHeight: "26px",
  },
  regular: {
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "29px",
  },
  regularBold: {
    fontWeight: "800",
    fontSize: "18px",
    lineHeight: "29px",
  },
  medium: {
    fontWeight: "normal",
    fontSize: "19.8px",
    lineHeight: "32px",
  },
  mediumBold: {
    fontWeight: "800",
    fontSize: "19.8px",
    lineHeight: "32px",
  },
  large: {
    fontWeight: "normal",
    fontSize: "21.6px",
    lineHeight: "35px",
  },
  largeBold: {
    fontWeight: "bold",
    fontSize: "21.6px",
    lineHeight: "35px",
  },
};

/* ***text misc*** */

export const textMisc = {
  logo: {
    fontWeight: "900",
    fontSize: "24px",
    lineHeight: "43px",
    letterSpacing: "2px",
  },
  titleLarge: {
    fontWeight: 800,
    fontSize: "18px",
    lineHeight: "37px",
    letterSpacing: "4px",
    textTransform: "uppercase",
  },
  titleMedium: {
    fontWeight: 800,
    fontSize: "14.4px",
    lineHeight: "30px",
    letterSpacing: "4px",
    textTransform: "uppercase",
  },
  titleSmall: {
    fontWeight: 800,
    fontSize: "12.6px",
    lineHeight: "26px",
    letterSpacing: "6px",
    textTransform: "uppercase",
  },
  navHeader: {
    fontWeight: "normal",
    fontSize: "14.4px",
    lineHeight: "30px",
    letterSpacing: "2px",
  },
  navFooter: {
    fontWeight: "bold",
    fontSize: "12.6px",
    lineHeight: "28px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  button: {
    fontWeight: "500",
    fontSize: "13.5px",
    lineHeight: "20px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
};

/* ***quote*** */

export const quote = {
  large: {
    fontFamily: "Noticia Text",
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "36px",
    lineHeight: "64px",
  },
  small: {
    fontFamily: "Noticia Text",
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "22.5px",
    lineHeight: "40px",
  },
};
