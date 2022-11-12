import { View, Text, StyleSheet } from 'react-native';
import { palette } from '../../assets/theme';

interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => {
  return (
    <>
      {items.map((item) => (
        <View key={item} style={styles.container}>
          {/* <View style={styles.circle} /> */}
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 2,
    padding: 4,
    width: '100%',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: palette.generalAccentText,
    marginRight: 8,
  },
  text: {
    textAlign: 'center',
    color: palette.generalAccentText,
  },
});

export default List;
