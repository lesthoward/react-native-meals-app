import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { RootStackParamList } from '../App';
import MealList from '../components/MealList';
import { mealCategories, meals } from '../data';
interface ScreenOverviewScreen
  extends NativeStackScreenProps<RootStackParamList, 'MealOverview'> {}

const ScreenOverviewScreen = ({ route, navigation }: ScreenOverviewScreen) => {
  const categoryId = route.params.id;

  const displayedMeals = meals.filter(
    ({ categoryIds }) => categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const category = mealCategories.find(({ id }) => id === categoryId);
    navigation.setOptions({
      title: category?.title,
    });
  }, [categoryId]);

  return (
    <MealList data={displayedMeals} toScreen="MealDetail"/>
  );
};



export default ScreenOverviewScreen;
