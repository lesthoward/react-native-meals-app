import { Borders, Palette, Shadows, Typography } from '../../types/theme';

export const palette: Palette = {
  appBackground: '#222',
  card: {
    background: '#fff',
    onHover: {
      // rgba(204, 204, 204, 0.75)
      opacity: 0.6,
    },
  },
  navbar: {
    background: '#1b1714',
    color: '#fff',
    contentBackground: '#42342dff',
  },
  categoryTitle: "#262626",
  categoryBox: "",
  generalAccentText: "#fff",
  subtitle: "#bd7844",
  border: "rgba(255, 255, 255, 0.2)",
};
export const typography: Typography = {
  fontFamily: 'Roboto_400Regular',
  generalBody: {
    fontSize: 16,
  },
  mealCategoryTitle: {
    fontSize: 18,
    fontFamily: 'Roboto_700Bold_Italic',
  },
  headers: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
  },
  subtitle: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
  }
};
export const borders: Borders = {};
export const shadows: Shadows = {
  card: {
    android: 3,
    ios: {
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 4,
    },
  },
};
