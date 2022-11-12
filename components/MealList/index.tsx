import { useNavigation, NavigationProp, NavigationContext,RouteConfig, RouteProp, Route, ScreenListeners, NavigatorScreenParams } from '@react-navigation/native';
import { View, FlatList, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../App';
import Meal from '../../models/Meal';
import MealItem from '../MealItem';

interface MealListProps {
  data: Meal[];
  toScreen: string;
}

const MealList = ({ data, toScreen }: MealListProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const selectMealItemHandler = (mealId: string) => {
    navigation.navigate(toScreen, {
      id: mealId,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onPress={selectMealItemHandler.bind(this, item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});

export default MealList;
