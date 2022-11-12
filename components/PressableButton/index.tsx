import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type PressableIconProps = PressableProps & {
  iconName: keyof typeof Ionicons.glyphMap;
};

const PressableIcon = ({iconName, ...rest }: PressableIconProps) => {
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => pressed && styles.pressedEffect}
    >
      <Ionicons name={iconName} size={24} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressedEffect: {
    opacity: 0.7,
  },
});

export default PressableIcon;
