import { Platform, ViewStyle } from 'react-native';

export const capitalize = (text: string) => {
  text = text.toLowerCase();
  const splitText = text.split(' ');
  const capitalizedText = splitText.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capitalizedText.join(' ');
};

export const adaptiveOverflow: { overflow: ViewStyle['overflow'] } =
  Platform.OS === 'android' ? { overflow: 'hidden' } : { overflow: 'visible' };
