import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { palette } from './assets/theme';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer, ParamListBase, StackNavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
} from '@expo-google-fonts/roboto';
import MealDetailsScreen from './screens/MealDetailScreen';
import DrawerNavigator from './components/DrawerNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';
export interface RootStackParamList extends ParamListBase {
  MealDrawer: {};
  MealOverview: {
    id: string | number;
  };
  MealDetail: {
    id: string | number;
  };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealDrawer"
            screenOptions={{
              headerStyle: {
                backgroundColor: palette.navbar.background,
              },
              headerTintColor: palette.navbar.color,
              contentStyle: {
                backgroundColor: palette.navbar.contentBackground,
              },
            }}
          >
            <Stack.Screen
              name="MealDrawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="MealOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.appBackground,
  },
});
