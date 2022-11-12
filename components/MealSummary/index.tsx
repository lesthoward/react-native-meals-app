import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { capitalize } from '../../utils';

interface MealSummaryProps {
  duration: number;
  complexity: string;
  affordability: string;
  extendTextStyles?: StyleProp<TextStyle>;
}

const MealSummary = ({
  duration,
  complexity,
  affordability,
  extendTextStyles,
}: MealSummaryProps) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailText, extendTextStyles]}>
        {duration}
        {duration <= 60 ? 'min' : 'h'}
      </Text>
      <Text style={[styles.detailText, extendTextStyles]}>{capitalize(complexity)}</Text>
      <Text style={[styles.detailText, extendTextStyles]}>{capitalize(affordability)} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  detailText: {
    marginVertical: 4,
    marginHorizontal: 8,
  },
});

export default MealSummary;
