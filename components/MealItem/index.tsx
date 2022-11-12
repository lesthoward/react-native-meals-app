import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  PressableProps,
} from 'react-native';
import { palette, shadows, typography } from '../../assets/theme';
import { ListRenderItemInfo } from 'react-native';
import { meals } from '../../data';
import { adaptiveOverflow, capitalize } from '../../utils';
import MealSummary from '../MealSummary';

interface MealItemProps extends PressableProps {
  item: ListRenderItemInfo<typeof meals[0]>['item'];
}

const MealItem = ({ item, ...rest }: MealItemProps) => {
  const { title, duration, complexity, affordability, imageUrl } = item;
  return (
    <View style={styles.card}>
      <Pressable
        style={({ pressed }) =>
          pressed ? styles.pressedCard : styles.pressable
        }
        {...rest}
      >
        <View style={styles.innerCard}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <MealSummary
            affordability={affordability}
            duration={duration}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textAlign: 'center',
    marginVertical: 4,
    ...typography.headers,
  },
  card: {
    backgroundColor: palette.card.background,
    borderRadius: 8,
    margin: 12,
    elevation: shadows.card.android,
    ...shadows.card.ios,
    ...adaptiveOverflow,
  },
  pressable: {
    // flex: 1,
  },
  innerCard: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  pressedCard: {
    ...palette.card.onHover,
  },
});

export default MealItem;
