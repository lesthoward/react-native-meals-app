import { FlatList } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import { mealCategories } from '../data';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App';

interface CategoriesScreenProps extends NativeStackScreenProps<RootStackParamList, "MealCategories"> {}

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const pressHandler = (id: string | number) => {
    navigation.navigate("MealOverview", {
      id
    })
  };

  return (
    <FlatList
      keyExtractor={({ id }) => id}
      data={mealCategories}
      renderItem={({ item: { id, color, title } }) => (
        <CategoryItem color={color} onPress={pressHandler.bind(this, id)}>{title}</CategoryItem>
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
