import { View, Text, StyleSheet } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { palette, typography } from '../assets/theme';
import MealList from '../components/MealList';
import { meals } from '../data';
import { useAppSelector } from '../redux/hooks';
const FavoriteScreen = () => {
  const {favorites} = useAppSelector(state => state.favorites)
  const favoriteMeals = meals.filter(meal => favorites.some(favorite => favorite === meal.id))

  if(!favoriteMeals.length) {
    return (
      <View style={styles.noDataView}>
        <Text style={styles.noDataText}>You have no favorite meals yet. Start adding some!</Text>
      </View>
    )
  }
  
  return <MealList data={favoriteMeals} toScreen="MealDetail"/>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: typography.fontFamily,
    color: palette.generalAccentText,
  },
  noDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontFamily: typography.fontFamily,
    color: palette.generalAccentText,
  },
});

export default FavoriteScreen;
