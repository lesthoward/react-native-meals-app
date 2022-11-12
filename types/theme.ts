import { TextStyle, ViewStyle } from 'react-native';
export interface Palette {
  appBackground: string;
  card: {
    background: string;
    onHover: {
      opacity: ViewStyle['opacity'];
    };
  };
  navbar: {
    background: string;
    color: string;
    contentBackground: string;
  };
  categoryTitle: string;
  categoryBox: string;
  generalAccentText: string;
  subtitle: string;
  border: string;
}
export interface Typography {
  fontFamily: string;
  generalBody: {
    fontSize: TextStyle['fontSize'];
  };
  mealCategoryTitle: {
    fontSize: TextStyle['fontSize'];
    fontFamily: TextStyle['fontFamily'];
  };
  headers: {
    fontFamily: TextStyle['fontFamily'];
    fontSize: TextStyle['fontSize'];
  };
  subtitle: {
    fontFamily: TextStyle['fontFamily'];
    fontSize: TextStyle['fontSize'];
  }
}
export interface Borders {}
export interface Shadows {
  card: {
    android: number;
    ios: {
      shadowColor: string;
      shadowOffset: {
        width: number;
        height: number;
      };
      shadowOpacity: number;
      shadowRadius: number;
    };
  };
}
