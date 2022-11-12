import {
  Pressable,
  View,
  Text,
  PressableProps,
  StyleSheet,
  StyleProp,
  TextStyle,
  Platform,
} from 'react-native';
import { palette, shadows, typography } from '../../assets/theme';

interface PressableTitleProps extends PressableProps {
  children: React.ReactNode;
  color?: string;
  title?: string;
  extendTextStyles?: StyleProp<TextStyle>;
  extendPressableStyles?: StyleProp<TextStyle>;
}

const PressableTitle = ({
  children,
  title,
  color,
  extendTextStyles,
  extendPressableStyles,
  ...rest
}: PressableTitleProps) => {
  return (
    <View style={[styles.outerView]}>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.pressableOnPressed : null,
          extendPressableStyles,
        ]}
        {...rest}
      >
        <View style={[styles.innerView, { backgroundColor: color }]}>
          <Text style={[styles.title, extendTextStyles]}>
            {children ?? title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    elevation: shadows.card.android,
    borderRadius: 4,
    flex: 1,
    height: 150,
    margin: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    ...shadows.card.ios,
  },
  innerView: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    flex: 1,
  },

  pressableOnPressed: {
    ...palette.card.onHover,
  },

  title: {
    color: palette.categoryTitle,
    ...typography.mealCategoryTitle,
  },
});

export default PressableTitle;
