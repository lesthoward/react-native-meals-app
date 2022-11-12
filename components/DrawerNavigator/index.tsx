import { ParamListBase } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../../screens/CategoriesScreen';
import { palette } from '../../assets/theme';
import FavoriteScreen from '../../screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';

interface DrawerStackParamList extends ParamListBase {
  MealsCategories: {};
  FavoritesMeals: {};
}

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MealCategories"
      screenOptions={{
        headerStyle: {
          backgroundColor: palette.navbar.background,
        },
        headerTintColor: palette.navbar.color,
        sceneContainerStyle: {
          backgroundColor: palette.navbar.contentBackground,
        },
        drawerContentStyle: {
          backgroundColor: palette.navbar.contentBackground,
        },
        drawerActiveTintColor: palette.navbar.color,
        drawerInactiveTintColor: palette.navbar.color,
      }}
    >
      <Drawer.Screen
        name="MealCategories"
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
          drawerIcon: () => (
            <Ionicons
              name="ios-restaurant"
              size={24}
              color={palette.navbar.color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="FavoritesMeals"
        component={FavoriteScreen}
        options={{
          title: 'Favorite Meals',
          drawerIcon: () => (
            <Ionicons name="ios-star" size={24} color={palette.navbar.color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
